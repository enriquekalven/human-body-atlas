/**
 * Human Body 3D Atlas — Model Build Pipeline
 *
 * Converts the BodyParts3D (DBCLS) anatomical OBJ meshes into compact, web-ready GLB layers:
 *   1. Indexes every element mesh (FJxxxx.obj) from the IS-A and PART-OF archives.
 *   2. Names each mesh from its FMA concept header and classifies it into a render layer
 *      (skin, muscles, skeleton, vessels, organs, nerves) and a tissue material
 *      using the FMA IS-A / PART-OF hierarchies.
 *   3. Simplifies each mesh with meshoptimizer (topology-preserving quadric simplification).
 *   4. Writes one GLB per layer (KHR_mesh_quantization: uint16 positions + int8 normals)
 *      and a manifest.json used for naming, search, and camera framing.
 *
 * Data source: BodyParts3D, (c) The Database Center for Life Science, licensed under
 * CC Attribution 4.0 International (https://dbarchive.biosciencedbc.jp/en/bodyparts3d/lic.html).
 *
 * Usage: node tools/build-models.mjs
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { MeshoptSimplifier } from 'meshoptimizer';
import { reconstructLungs, reconstructSpinalCord } from './reconstruct.mjs';
import { computeTendonMask, quantizeUnorm8 } from './tendon-mask.mjs';
import {
  loadFemaleOrgans,
  buildFemaleSkin,
  buildFemaleEyebrow,
  buildFemaleHair,
  buildFemaleLip
} from './female-anatomy.mjs';

const tendonStats = { parts: 0, fullVertices: 0, ms: 0 };

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const RAW = path.join(ROOT, 'tools', 'raw');
const OUT = path.join(ROOT, 'models');

const MESH_DIRS = [
  path.join(RAW, 'isa', 'isa_BP3D_4.0_obj_99'),
  path.join(RAW, 'partof', 'partof_BP3D_4.0_obj_99')
];

// ----------------------------------------------------------------------------
// Simplification budget per tissue category.
// keep: max fraction of triangles kept; err: max deviation in millimetres (quality guard);
// cap: max triangles for any single part in the category.
// ----------------------------------------------------------------------------
const SIMPLIFY = {
  skin: { keep: 0.6, err: 0.6, cap: 90000 },
  hair: { keep: 0.25, err: 1.2, cap: 9000 },
  bone: { keep: 0.22, err: 0.35, cap: 9000 },
  tooth: { keep: 0.3, err: 0.25, cap: 1200 },
  cartilage: { keep: 0.25, err: 0.35, cap: 4000 },
  muscle: { keep: 0.14, err: 0.5, cap: 7000 },
  tendon: { keep: 0.2, err: 0.45, cap: 3000 },
  artery: { keep: 0.2, err: 0.3, cap: 5000 },
  vein: { keep: 0.2, err: 0.3, cap: 5000 },
  nerve: { keep: 0.25, err: 0.3, cap: 4000 },
  brain: { keep: 0.35, err: 0.3, cap: 14000 },
  organ: { keep: 0.22, err: 0.4, cap: 12000 }
};

const LAYERS = ['skin', 'muscles', 'skeleton', 'vessels', 'organs', 'nerves'];

// ----------------------------------------------------------------------------
// Metadata loading
// ----------------------------------------------------------------------------
function readTsv(file) {
  const text = fs.readFileSync(path.join(RAW, file), 'utf8');
  const rows = [];
  const lines = text.split(/\r?\n/);
  for (let i = 1; i < lines.length; i++) {
    if (!lines[i].trim()) continue;
    rows.push(lines[i].split('\t'));
  }
  return rows;
}

const names = new Map();
function loadElements(file) {
  const map = new Map();
  for (const [concept, name, fj] of readTsv(file)) {
    if (!concept || !fj) continue;
    if (!map.has(concept)) map.set(concept, new Set());
    map.get(concept).add(fj.trim());
    if (name && !names.has(concept)) names.set(concept, name.trim());
  }
  return map;
}

function loadTree(file) {
  const parents = new Map();
  const children = new Map();
  for (const [pid, pname, cid, cname] of readTsv(file)) {
    if (!pid || !cid) continue;
    if (!parents.has(cid)) parents.set(cid, []);
    parents.get(cid).push(pid);
    if (!children.has(pid)) children.set(pid, []);
    children.get(pid).push(cid);
    if (pname) names.set(pid, pname.trim());
    if (cname) names.set(cid, cname.trim());
  }
  return { parents, children };
}

for (const [concept, , name] of readTsv('isa_parts_list_e.txt')) names.set(concept, name.trim());
for (const [concept, , name] of readTsv('partof_parts_list_e.txt')) names.set(concept, name.trim());

const isaElems = loadElements('isa_element_parts.txt');
const partofElems = loadElements('partof_element_parts.txt');
const isaTree = loadTree('isa_inclusion_relation_list.txt');
const partofTree = loadTree('partof_inclusion_relation_list.txt');

function setOf(map, ...concepts) {
  const s = new Set();
  for (const c of concepts) for (const fj of map.get(c) || []) s.add(fj);
  return s;
}

// IS-A categories
const CAT = {
  artery: setOf(isaElems, 'FMA86187'),
  vein: setOf(isaElems, 'FMA86188'),
  muscle: setOf(isaElems, 'FMA5022', 'FMA85453', 'FMA10474', 'FMA32558'),
  bone: setOf(isaElems, 'FMA5018'),
  cartilage: setOf(isaElems, 'FMA55107'),
  tooth: setOf(isaElems, 'FMA12516'),
  nerve: setOf(isaElems, 'FMA65132', 'FMA11195'),
  neuraxis: setOf(isaElems, 'FMA256237', 'FMA83143'),
  airway: setOf(isaElems, 'FMA12224'),
  immaterial: setOf(isaElems, 'FMA67112')
};

// PART-OF organs & systems
const ORG = {
  skin: setOf(partofElems, 'FMA7163', 'FMA74657', 'FMA72979'),
  heart: setOf(partofElems, 'FMA7088'),
  brain: setOf(partofElems, 'FMA50801'),
  lung: setOf(partofElems, 'FMA7309', 'FMA7310'),
  liver: setOf(partofElems, 'FMA7197'),
  stomach: setOf(partofElems, 'FMA7148'),
  smallIntestine: setOf(partofElems, 'FMA7200'),
  largeIntestine: setOf(partofElems, 'FMA7201'),
  pancreas: setOf(partofElems, 'FMA7198'),
  esophagus: setOf(partofElems, 'FMA7131'),
  trachea: setOf(partofElems, 'FMA7394'),
  bladder: setOf(partofElems, 'FMA15900'),
  respiratory: setOf(partofElems, 'FMA7158'),
  alimentary: setOf(partofElems, 'FMA7152'),
  urinary: setOf(partofElems, 'FMA7159'),
  endocrine: setOf(partofElems, 'FMA9668'),
  genital: setOf(partofElems, 'FMA7160'),
  nervous: setOf(partofElems, 'FMA7157'),
  skeletal: setOf(partofElems, 'FMA23881'),
  cardiovascular: setOf(partofElems, 'FMA7161', 'FMA228642')
};

// ----------------------------------------------------------------------------
// Mesh file index
// ----------------------------------------------------------------------------
const meshFiles = new Map();
for (const dir of MESH_DIRS) {
  if (!fs.existsSync(dir)) continue;
  for (const f of fs.readdirSync(dir)) {
    if (!f.endsWith('.obj')) continue;
    const fj = f.slice(0, -4);
    if (!meshFiles.has(fj)) meshFiles.set(fj, path.join(dir, f));
  }
}
console.log(`Indexed ${meshFiles.size} element meshes`);

// ----------------------------------------------------------------------------
// Classification
// ----------------------------------------------------------------------------
function classify(fj, name) {
  const n = name.toLowerCase();
  if (CAT.immaterial.has(fj)) return null;
  if (/fascia|pubic hair/.test(n)) return null; // fascia sheets would hide the musculature

  if (/^lip$|^lips$/.test(n)) return { layer: 'skin', cat: 'skin', mat: 'lip' };
  // Seen through the pupil the lens reads as black (the eye's interior is dark).
  if (/\blens\b/.test(n)) return { layer: 'organs', cat: 'organ', mat: 'pupil' };
  if (ORG.skin.has(fj) || n === 'skin') return { layer: 'skin', cat: 'skin', mat: 'skin' };
  if (/hair of head|eyebrow|eyelash/.test(n)) return { layer: 'skin', cat: 'hair', mat: 'hair' };
  if (/external ear|auricle/.test(n)) return { layer: 'skin', cat: 'skin', mat: 'skin' };

  if (CAT.artery.has(fj) || /\b(artery|arteries|aorta|arterial)\b|palmar arch|plantar arch|set of arteries/.test(n)) {
    const pulmonary = /pulmonary/.test(n);
    return { layer: 'vessels', cat: 'artery', mat: pulmonary ? 'arteryDeoxy' : 'artery', flow: 1 };
  }
  if (CAT.vein.has(fj) || /\b(vein|veins|vena|venous|sinus of dura|coronary sinus)\b/.test(n)) {
    const pulmonary = /pulmonary/.test(n);
    return { layer: 'vessels', cat: 'vein', mat: pulmonary ? 'veinOxy' : 'vein', flow: -1 };
  }
  if (ORG.heart.has(fj) || (/ventricle|atrium|myocardium|papillary|chordae/.test(n) && !/lateral|third|fourth|brain|cerebr/.test(n))) {
    return { layer: 'organs', cat: 'organ', mat: 'heart', group: 'heart' };
  }

  if (/tendon|tendinous|linea alba|iliotibial tract|aponeurosis/.test(n)) {
    return { layer: 'muscles', cat: 'tendon', mat: 'tendon' };
  }
  if (CAT.muscle.has(fj) || /\bmuscle\b|\bdiaphragm\b|trapezius/.test(n)) {
    return { layer: 'muscles', cat: 'muscle', mat: 'muscle', group: /diaphragm/.test(n) ? 'diaphragm' : '' };
  }
  if (CAT.tooth.has(fj) || /\btooth\b|incisor|molar|canine|premolar/.test(n)) {
    return { layer: 'skeleton', cat: 'tooth', mat: 'tooth' };
  }
  if (/choroid plexus/.test(n)) return { layer: 'nerves', cat: 'brain', mat: 'brain', group: 'brain' };
  if (/chamber of .*eyeball|\bretina\b|vitreous|corona ciliaris|\bchoroid\b|ciliary body/.test(n)) return null; // hidden inside the sclera
  if (/\biris\b/.test(n)) return { layer: 'organs', cat: 'organ', mat: 'iris' };
  if (/cornea/.test(n)) return { layer: 'organs', cat: 'organ', mat: 'cornea' };
  if (/eyeball|\blens\b|\bsclera\b/.test(n)) return { layer: 'organs', cat: 'organ', mat: 'eye' };
  if (/lacrimal gland/.test(n)) return { layer: 'organs', cat: 'organ', mat: 'gland' };
  if (/retinaculum/.test(n)) return { layer: 'skeleton', cat: 'cartilage', mat: 'ligament' };
  if (/(lateral|third|fourth) ventricle|cerebral aqueduct|central canal of spinal cord/.test(n)) {
    return { layer: 'nerves', cat: 'brain', mat: 'csf', group: 'brain' };
  }
  if (/mesentery|mesoappendix|omentum|mesocolon/.test(n)) return { layer: 'organs', cat: 'organ', mat: 'mesentery' };
  if (/gingiva/.test(n)) return { layer: 'organs', cat: 'organ', mat: 'tongue' };
  if (/epiglottis|conus elasticus|thyrohyoid membrane|glottis|vocal/.test(n)) return { layer: 'organs', cat: 'organ', mat: 'airway' };
  if (CAT.cartilage.has(fj) || /cartilage|meniscus|intervertebral disc|symphysis/.test(n)) {
    if (ORG.trachea.has(fj) || ORG.respiratory.has(fj)) return { layer: 'organs', cat: 'organ', mat: 'airway' };
    return { layer: 'skeleton', cat: 'cartilage', mat: 'cartilage' };
  }
  if (CAT.bone.has(fj) || ORG.skeletal.has(fj)) return { layer: 'skeleton', cat: 'bone', mat: 'bone' };
  if (/ligament|interosseous membrane/.test(n)) return { layer: 'skeleton', cat: 'cartilage', mat: 'ligament' };

  if (CAT.nerve.has(fj) || /\bnerve\b|plexus|ganglion/.test(n)) return { layer: 'nerves', cat: 'nerve', mat: 'nerve' };
  if (/spinal cord|cauda equina|medulla spinalis/.test(n)) return { layer: 'nerves', cat: 'nerve', mat: 'cord' };
  if (/tentorium|falx|dura mater|arachnoid/.test(n)) return { layer: 'nerves', cat: 'brain', mat: 'dura', group: 'brain' };
  if (ORG.brain.has(fj) || CAT.neuraxis.has(fj) || ORG.nervous.has(fj) || /thalamus|cerebr|cerebell|hippocamp|amygdala|putamen|caudate nucleus|globus pallidus|corpus callosum|\bpons\b|midbrain|medulla oblongata/.test(n)) {
    return { layer: 'nerves', cat: 'brain', mat: 'brain', group: 'brain' };
  }
  if (/corona ciliaris/.test(n)) return { layer: 'organs', cat: 'organ', mat: 'eye' };
  if (/lacrimal|nasolacrimal|tarsal plate|trochlea of/.test(n)) return { layer: 'organs', cat: 'organ', mat: 'gland' };
  if (/penis|deferent duct|epididymis|seminal vesicle|testis|scrotum|prostate|uterus|ovary/.test(n)) {
    return { layer: 'organs', cat: 'organ', mat: 'reproductive', group: 'reproductive' };
  }
  if (/hepat|caudate lobe of liver/.test(n) && !/artery|vein/.test(n)) {
    return { layer: 'organs', cat: 'organ', mat: /duct/.test(n) ? 'gallbladder' : 'liver' };
  }

  if (ORG.lung.has(fj) && !CAT.airway.has(fj)) return { layer: 'organs', cat: 'organ', mat: 'lung', group: 'lungs' };
  if (CAT.airway.has(fj) || ORG.trachea.has(fj) || /bronch|trachea|larynx/.test(n)) {
    return { layer: 'organs', cat: 'organ', mat: 'airway' };
  }
  if (/gallbladder|gall bladder|bile duct|cystic duct/.test(n)) return { layer: 'organs', cat: 'organ', mat: 'gallbladder' };
  if (ORG.liver.has(fj)) return { layer: 'organs', cat: 'organ', mat: 'liver' };
  if (ORG.stomach.has(fj)) return { layer: 'organs', cat: 'organ', mat: 'stomach' };
  if (ORG.esophagus.has(fj)) return { layer: 'organs', cat: 'organ', mat: 'stomach' };
  if (ORG.largeIntestine.has(fj) || /colon|cecum|caecum|rectum|appendix/.test(n)) {
    return { layer: 'organs', cat: 'organ', mat: 'colon' };
  }
  if (ORG.smallIntestine.has(fj) || /duodenum|jejunum|ileum/.test(n)) return { layer: 'organs', cat: 'organ', mat: 'intestine' };
  if (ORG.pancreas.has(fj)) return { layer: 'organs', cat: 'organ', mat: 'pancreas' };
  if (/kidney|renal (pelvis|cortex|medulla)|ureter/.test(n)) return { layer: 'organs', cat: 'organ', mat: 'kidney' };
  if (ORG.bladder.has(fj) || /urinary bladder|urethra/.test(n)) return { layer: 'organs', cat: 'organ', mat: 'bladder' };
  if (/spleen/.test(n)) return { layer: 'organs', cat: 'organ', mat: 'spleen' };
  if (/eyeball|\beye\b|\blens\b|cornea|\bretina\b|sclera/.test(n)) return { layer: 'organs', cat: 'organ', mat: 'eye' };
  if (ORG.endocrine.has(fj) || ORG.genital.has(fj) || /gland|thyroid|thymus|prostate|testis|ovary/.test(n)) {
    return { layer: 'organs', cat: 'organ', mat: 'gland' };
  }
  if (/tongue/.test(n)) return { layer: 'organs', cat: 'organ', mat: 'tongue' };
  if (ORG.alimentary.has(fj) || ORG.urinary.has(fj) || ORG.respiratory.has(fj)) {
    return { layer: 'organs', cat: 'organ', mat: 'organ' };
  }
  if (ORG.cardiovascular.has(fj)) return { layer: 'vessels', cat: 'vein', mat: 'vein', flow: -1 };
  return { layer: 'organs', cat: 'organ', mat: 'organ', unclassified: true };
}

// ----------------------------------------------------------------------------
// OBJ parsing
// ----------------------------------------------------------------------------
function parseObj(file) {
  const text = fs.readFileSync(file, 'utf8');
  const meta = {};
  const pos = [];
  const idx = [];
  let start = 0;
  const len = text.length;
  while (start < len) {
    let end = text.indexOf('\n', start);
    if (end === -1) end = len;
    const line = text.slice(start, end).trim();
    start = end + 1;
    if (!line) continue;
    const c0 = line.charCodeAt(0);
    if (c0 === 35 /* # */) {
      const m = line.match(/^#\s*(Concept ID|English name|File ID)\s*:\s*(.+)$/);
      if (m) meta[m[1]] = m[2].trim();
      continue;
    }
    if (line.startsWith('v ')) {
      const p = line.split(/\s+/);
      pos.push(+p[1], +p[2], +p[3]);
    } else if (line.startsWith('f ')) {
      const p = line.split(/\s+/).slice(1);
      const vids = p.map((tok) => parseInt(tok, 10)).filter((v) => !Number.isNaN(v));
      for (let k = 1; k + 1 < vids.length; k++) {
        const a = vids[0];
        const b = vids[k];
        const cc = vids[k + 1];
        idx.push(a < 0 ? pos.length / 3 + a : a - 1, b < 0 ? pos.length / 3 + b : b - 1, cc < 0 ? pos.length / 3 + cc : cc - 1);
      }
    }
  }
  return { meta, positions: new Float32Array(pos), indices: new Uint32Array(idx) };
}

// ----------------------------------------------------------------------------
// Geometry helpers
// ----------------------------------------------------------------------------
function compact(positions, indices) {
  const remap = new Int32Array(positions.length / 3).fill(-1);
  const outPos = [];
  const orig = [];
  const outIdx = new Uint32Array(indices.length);
  let next = 0;
  for (let i = 0; i < indices.length; i++) {
    const v = indices[i];
    if (remap[v] === -1) {
      remap[v] = next++;
      outPos.push(positions[v * 3], positions[v * 3 + 1], positions[v * 3 + 2]);
      orig.push(v);
    }
    outIdx[i] = remap[v];
  }
  return { positions: new Float32Array(outPos), indices: outIdx, origIndex: Uint32Array.from(orig) };
}

// Merge vertices with identical positions. Duplicates along seams otherwise act as mesh borders,
// which the simplifier must preserve (bloating vertex counts) and which cause visible shading seams.
function weld(positions, indices) {
  const map = new Map();
  const remap = new Uint32Array(positions.length / 3);
  const out = [];
  for (let v = 0; v < remap.length; v++) {
    const key = `${positions[v * 3]},${positions[v * 3 + 1]},${positions[v * 3 + 2]}`;
    let id = map.get(key);
    if (id === undefined) {
      id = out.length / 3;
      map.set(key, id);
      out.push(positions[v * 3], positions[v * 3 + 1], positions[v * 3 + 2]);
    }
    remap[v] = id;
  }
  const idx = [];
  for (let i = 0; i < indices.length; i += 3) {
    const a = remap[indices[i]];
    const b = remap[indices[i + 1]];
    const c = remap[indices[i + 2]];
    if (a !== b && b !== c && a !== c) idx.push(a, b, c); // drop degenerate triangles
  }
  return { positions: new Float32Array(out), indices: new Uint32Array(idx) };
}

// Mirrored meshes (FJxxxxM) can be inside-out. A closed, outward-facing mesh has positive signed volume.
function fixWinding(positions, indices) {
  let vol = 0;
  for (let i = 0; i < indices.length; i += 3) {
    const a = indices[i] * 3;
    const b = indices[i + 1] * 3;
    const c = indices[i + 2] * 3;
    vol +=
      positions[a] * (positions[b + 1] * positions[c + 2] - positions[b + 2] * positions[c + 1]) -
      positions[a + 1] * (positions[b] * positions[c + 2] - positions[b + 2] * positions[c]) +
      positions[a + 2] * (positions[b] * positions[c + 1] - positions[b + 1] * positions[c]);
  }
  if (vol < 0) {
    for (let i = 0; i < indices.length; i += 3) {
      const t = indices[i + 1];
      indices[i + 1] = indices[i + 2];
      indices[i + 2] = t;
    }
    return true;
  }
  return false;
}

function computeNormals(positions, indices) {
  const n = new Float32Array(positions.length);
  for (let i = 0; i < indices.length; i += 3) {
    const a = indices[i] * 3;
    const b = indices[i + 1] * 3;
    const c = indices[i + 2] * 3;
    const abx = positions[b] - positions[a];
    const aby = positions[b + 1] - positions[a + 1];
    const abz = positions[b + 2] - positions[a + 2];
    const acx = positions[c] - positions[a];
    const acy = positions[c + 1] - positions[a + 1];
    const acz = positions[c + 2] - positions[a + 2];
    const nx = aby * acz - abz * acy;
    const ny = abz * acx - abx * acz;
    const nz = abx * acy - aby * acx;
    for (const v of [a, b, c]) {
      n[v] += nx;
      n[v + 1] += ny;
      n[v + 2] += nz;
    }
  }
  for (let i = 0; i < n.length; i += 3) {
    const l = Math.hypot(n[i], n[i + 1], n[i + 2]) || 1;
    n[i] /= l;
    n[i + 1] /= l;
    n[i + 2] /= l;
  }
  return n;
}

// BodyParts3D uses millimetres with Z up. Output is metres, Y up, body facing +Z,
// anatomical left on +X (so the figure faces the default camera in anatomical position).
// AXIS.flip selects between two proper rotations (never a mirror, so triangle winding is preserved):
//   flip=false: X =  x, Y = z, Z = -y   (dataset: left = +x, anterior = -y)
//   flip=true : X = -x, Y = z, Z =  y   (dataset: left = -x, anterior = +y)
let AXIS = null;
function toWorld(src) {
  const out = new Float32Array(src.length);
  const s = AXIS.flip ? -1 : 1;
  for (let i = 0; i < src.length; i += 3) {
    out[i] = s * src[i] * 0.001;
    out[i + 1] = src[i + 2] * 0.001;
    out[i + 2] = -s * src[i + 1] * 0.001;
  }
  return out;
}

function bbox(positions) {
  const min = [Infinity, Infinity, Infinity];
  const max = [-Infinity, -Infinity, -Infinity];
  for (let i = 0; i < positions.length; i += 3) {
    for (let k = 0; k < 3; k++) {
      const v = positions[i + k];
      if (v < min[k]) min[k] = v;
      if (v > max[k]) max[k] = v;
    }
  }
  return { min, max };
}

// ----------------------------------------------------------------------------
// GLB writer (KHR_mesh_quantization: uint16 positions with uniform node scale, int8 normals)
// ----------------------------------------------------------------------------
class GlbBuilder {
  constructor() {
    this.chunks = [];
    this.byteLength = 0;
    this.json = {
      asset: { version: '2.0', generator: 'human-body-3d-atlas build-models.mjs', copyright: 'BodyParts3D, (c) The Database Center for Life Science, CC BY 4.0' },
      extensionsUsed: ['KHR_mesh_quantization'],
      extensionsRequired: ['KHR_mesh_quantization'],
      scene: 0,
      scenes: [{ nodes: [] }],
      nodes: [],
      meshes: [],
      materials: [],
      accessors: [],
      bufferViews: [],
      buffers: [{ byteLength: 0 }]
    };
    this.materialIndex = new Map();
  }

  addView(typed, target, byteStride) {
    const pad = (4 - (this.byteLength % 4)) % 4;
    if (pad) {
      this.chunks.push(new Uint8Array(pad));
      this.byteLength += pad;
    }
    const bytes = new Uint8Array(typed.buffer, typed.byteOffset, typed.byteLength);
    const view = { buffer: 0, byteOffset: this.byteLength, byteLength: bytes.byteLength, target };
    if (byteStride) view.byteStride = byteStride;
    this.chunks.push(bytes);
    this.byteLength += bytes.byteLength;
    this.json.bufferViews.push(view);
    return this.json.bufferViews.length - 1;
  }

  material(name, color) {
    if (this.materialIndex.has(name)) return this.materialIndex.get(name);
    this.json.materials.push({ name, pbrMetallicRoughness: { baseColorFactor: [...color, 1], metallicFactor: 0, roughnessFactor: 0.5 } });
    this.materialIndex.set(name, this.json.materials.length - 1);
    return this.json.materials.length - 1;
  }

  addPart(part, materialIdx) {
    const { positions, normals, indices } = part;
    const { min, max } = bbox(positions);
    const extent = Math.max(max[0] - min[0], max[1] - min[1], max[2] - min[2], 1e-6);
    const scale = extent / 65535;
    const vcount = positions.length / 3;

    const qpos = new Uint16Array(vcount * 4);
    const qmin = [65535, 65535, 65535];
    const qmax = [0, 0, 0];
    for (let i = 0; i < vcount; i++) {
      for (let k = 0; k < 3; k++) {
        const q = Math.max(0, Math.min(65535, Math.round((positions[i * 3 + k] - min[k]) / scale)));
        qpos[i * 4 + k] = q;
        if (q < qmin[k]) qmin[k] = q;
        if (q > qmax[k]) qmax[k] = q;
      }
    }
    const qnrm = new Int8Array(vcount * 4);
    for (let i = 0; i < vcount; i++) {
      for (let k = 0; k < 3; k++) qnrm[i * 4 + k] = Math.round(Math.max(-1, Math.min(1, normals[i * 3 + k])) * 127);
    }
    const idx = vcount < 65536 ? Uint16Array.from(indices) : indices;

    const posView = this.addView(qpos, 34962, 8);
    const nrmView = this.addView(qnrm, 34962, 4);
    const idxView = this.addView(idx, 34963);

    const acc = this.json.accessors;
    acc.push({ bufferView: posView, componentType: 5123, count: vcount, type: 'VEC3', min: qmin, max: qmax });
    const posAcc = acc.length - 1;
    acc.push({ bufferView: nrmView, componentType: 5120, normalized: true, count: vcount, type: 'VEC3' });
    const nrmAcc = acc.length - 1;
    acc.push({ bufferView: idxView, componentType: vcount < 65536 ? 5123 : 5125, count: indices.length, type: 'SCALAR' });
    const idxAcc = acc.length - 1;
    const attributes = { POSITION: posAcc, NORMAL: nrmAcc };
    if (part.tendon) {
      // Custom attribute (three.js GLTFLoader exposes it as geometry.attributes._tendon).
      // glTF requires every vertex-attribute element to start on a 4-byte boundary, so the
      // 1-byte values use a byteStride of 4.
      const packed = new Uint8Array(vcount * 4);
      for (let i = 0; i < vcount; i++) packed[i * 4] = part.tendon[i];
      const tView = this.addView(packed, 34962, 4);
      acc.push({ bufferView: tView, componentType: 5121, normalized: true, count: vcount, type: 'SCALAR' });
      attributes._TENDON = acc.length - 1;
    }

    this.json.meshes.push({
      name: part.name,
      primitives: [{ attributes, indices: idxAcc, material: materialIdx, mode: 4 }]
    });
    this.json.nodes.push({
      name: part.name,
      mesh: this.json.meshes.length - 1,
      translation: min,
      scale: [scale, scale, scale],
      extras: part.extras
    });
    this.json.scenes[0].nodes.push(this.json.nodes.length - 1);
  }

  toBuffer() {
    this.json.buffers[0].byteLength = this.byteLength;
    const jsonBytes = Buffer.from(JSON.stringify(this.json), 'utf8');
    const jsonPad = (4 - (jsonBytes.length % 4)) % 4;
    const binPad = (4 - (this.byteLength % 4)) % 4;
    const jsonChunkLen = jsonBytes.length + jsonPad;
    const binChunkLen = this.byteLength + binPad;
    const total = 12 + 8 + jsonChunkLen + 8 + binChunkLen;
    const out = Buffer.alloc(total);
    let o = 0;
    out.writeUInt32LE(0x46546c67, o); o += 4; // 'glTF'
    out.writeUInt32LE(2, o); o += 4;
    out.writeUInt32LE(total, o); o += 4;
    out.writeUInt32LE(jsonChunkLen, o); o += 4;
    out.writeUInt32LE(0x4e4f534a, o); o += 4; // 'JSON'
    jsonBytes.copy(out, o); o += jsonBytes.length;
    out.fill(0x20, o, o + jsonPad); o += jsonPad;
    out.writeUInt32LE(binChunkLen, o); o += 4;
    out.writeUInt32LE(0x004e4942, o); o += 4; // 'BIN\0'
    for (const c of this.chunks) {
      Buffer.from(c.buffer, c.byteOffset, c.byteLength).copy(out, o);
      o += c.byteLength;
    }
    return out;
  }
}

const MATERIAL_PREVIEW_COLORS = {
  skin: [0.85, 0.64, 0.52], muscle: [0.62, 0.12, 0.1], tendon: [0.9, 0.86, 0.78], bone: [0.89, 0.84, 0.74],
  tooth: [0.95, 0.93, 0.86], cartilage: [0.75, 0.82, 0.85], ligament: [0.85, 0.82, 0.74], artery: [0.72, 0.06, 0.07],
  arteryDeoxy: [0.25, 0.24, 0.6], vein: [0.14, 0.24, 0.58], veinOxy: [0.75, 0.12, 0.12], nerve: [0.93, 0.8, 0.38],
  cord: [0.94, 0.9, 0.8], brain: [0.86, 0.68, 0.64], heart: [0.55, 0.1, 0.1], lung: [0.82, 0.55, 0.52],
  airway: [0.85, 0.82, 0.8], liver: [0.42, 0.1, 0.08], gallbladder: [0.3, 0.45, 0.2], stomach: [0.8, 0.5, 0.45],
  intestine: [0.85, 0.6, 0.52], colon: [0.75, 0.52, 0.42], pancreas: [0.88, 0.72, 0.5], kidney: [0.48, 0.14, 0.1],
  bladder: [0.85, 0.7, 0.55], spleen: [0.38, 0.1, 0.15], eye: [0.95, 0.95, 0.95], gland: [0.82, 0.55, 0.4],
  csf: [0.55, 0.75, 0.95], mesentery: [0.9, 0.78, 0.55],
  tongue: [0.8, 0.4, 0.4], organ: [0.75, 0.45, 0.4], hair: [0.12, 0.08, 0.06], dura: [0.85, 0.82, 0.78],
  reproductive: [0.8, 0.55, 0.5], iris: [0.36, 0.23, 0.13], cornea: [1, 1, 1], lip: [0.66, 0.36, 0.33], pupil: [0.03, 0.02, 0.02]
};

// ----------------------------------------------------------------------------
// Main
// ----------------------------------------------------------------------------
await MeshoptSimplifier.ready;
fs.mkdirSync(OUT, { recursive: true });

// Pass 1: parse + classify
const fjConcepts = new Map();
for (const map of [isaElems, partofElems]) {
  for (const [concept, fjs] of map) {
    for (const fj of fjs) {
      if (!fjConcepts.has(fj)) fjConcepts.set(fj, new Set());
      fjConcepts.get(fj).add(concept);
    }
  }
}
const NAMING_GENERIC = /^(anatomical (entity|structure|set|cluster)|physical anatomical entity|material anatomical entity|organ component|cardinal organ part|organ (region|segment|zone|part))$/i;
function specificConceptName(fj) {
  let best = null;
  let bestSize = Infinity;
  for (const c of fjConcepts.get(fj) || []) {
    const nm = names.get(c);
    if (!nm || NAMING_GENERIC.test(nm)) continue;
    const size = Math.min(isaElems.get(c)?.size ?? Infinity, partofElems.get(c)?.size ?? Infinity);
    if (size < bestSize) {
      bestSize = size;
      best = { concept: c, name: nm };
    }
  }
  return best;
}
const capitalize = (s) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : s);

const parsed = [];
let rawTris = 0;
const unclassified = [];
for (const [fj, file] of meshFiles) {
  const obj = parseObj(file);
  let name = obj.meta['English name'] || names.get(obj.meta['Concept ID']) || '';
  let fma = obj.meta['Concept ID'] || '';
  if (!name) {
    const fallback = specificConceptName(fj);
    name = fallback ? fallback.name : fj;
    fma = fma || (fallback ? fallback.concept : '');
  }
  name = capitalize(name);
  const cls = classify(fj, name);
  if (!cls) continue;
  if (cls.unclassified) unclassified.push(name);
  rawTris += obj.indices.length / 3;
  parsed.push({ fj, fma, name, cls, obj });
}
console.log(`Parsed ${parsed.length} meshes, ${rawTris.toLocaleString()} raw triangles`);

// Detect orientation from landmarks: anterior (sternum) vs posterior (vertebrae), left vs right femur.
function centroidOf(pred) {
  let sx = 0, sy = 0, sz = 0, n = 0;
  for (const p of parsed) {
    if (!pred(p.name.toLowerCase())) continue;
    const pos = p.obj.positions;
    for (let i = 0; i < pos.length; i += 3) { sx += pos[i]; sy += pos[i + 1]; sz += pos[i + 2]; n++; }
  }
  return n ? [sx / n, sy / n, sz / n] : null;
}
const sternum = centroidOf((n) => /sternum|manubrium/.test(n));
const vertebra = centroidOf((n) => /thoracic vertebra/.test(n));
const leftLimb = centroidOf((n) => /^left (femur|humerus|tibia)/.test(n));
const rightLimb = centroidOf((n) => /^right (femur|humerus|tibia)/.test(n));
if (!sternum || !vertebra || !leftLimb || !rightLimb) throw new Error('Orientation landmarks not found');
const anteriorIsNegY = sternum[1] < vertebra[1];
const leftIsPosX = leftLimb[0] > rightLimb[0];
// We need: left -> +X, anterior -> +Z, up -> +Y, as a proper rotation (no mirroring).
// Case A (left=+x, anterior=-y): X=x, Y=z, Z=-y  (rotation about X)
// Case B (left=-x, anterior=+y): X=-x, Y=z, Z=y  (rotation about X then 180 about Y)
if (leftIsPosX === anteriorIsNegY) {
  AXIS = { flip: !leftIsPosX, frontSign: 1 };
} else {
  throw new Error(`Unexpected handedness: leftIsPosX=${leftIsPosX} anteriorIsNegY=${anteriorIsNegY}`);
}
console.log(`Orientation: anteriorIsNegY=${anteriorIsNegY} leftIsPosX=${leftIsPosX}`);

// Centroid-centered signed volume check so organs displaced from the origin are not misclassified.
function fixWindingCentered(positions, indices) {
  let cx = 0, cy = 0, cz = 0;
  const n = positions.length / 3 || 1;
  for (let i = 0; i < positions.length; i += 3) {
    cx += positions[i];
    cy += positions[i + 1];
    cz += positions[i + 2];
  }
  cx /= n; cy /= n; cz /= n;
  let vol = 0;
  for (let i = 0; i < indices.length; i += 3) {
    const a = indices[i] * 3;
    const b = indices[i + 1] * 3;
    const c = indices[i + 2] * 3;
    const ax = positions[a] - cx, ay = positions[a + 1] - cy, az = positions[a + 2] - cz;
    const bx = positions[b] - cx, by = positions[b + 1] - cy, bz = positions[b + 2] - cz;
    const ccx = positions[c] - cx, ccy = positions[c + 1] - cy, ccz = positions[c + 2] - cz;
    vol +=
      ax * (by * ccz - bz * ccy) -
      ay * (bx * ccz - bz * ccx) +
      az * (bx * ccy - by * ccx);
  }
  if (vol < 0) {
    for (let i = 0; i < indices.length; i += 3) {
      const t = indices[i + 1];
      indices[i + 1] = indices[i + 2];
      indices[i + 2] = t;
    }
    return true;
  }
  return false;
}

const MALE_ONLY_RE = /\b(penis|testis|testicular|epididymis|deferent duct|seminal vesicle|prostate)\b|^urethra$/i;

const MALE_REPLACED_FJS = new Set(['FJ2810', 'FJ2812', 'FJ2813', 'FJ2814']);

// Pass 2: transform, orient, simplify, normals, group by layer
const layers = new Map(LAYERS.map((l) => [l, []]));
let outTris = 0;
let floorY = Infinity;
let flipped = 0;
let rawMaleSkin = null;
let rawMaleBrow = null;
let rawMaleHair = null;
let rawMaleLip = null;
for (const p of parsed) {
  const welded = weld(toWorld(p.obj.positions), p.obj.indices);
  const world = welded.positions;
  const source = welded.indices;
  p.obj = null; // release raw buffers
  const budget = SIMPLIFY[p.cls.cat] || SIMPLIFY.organ;
  if (fixWinding(world, source)) flipped++;
  if (p.fj === 'FJ2810') {
    rawMaleSkin = { positions: new Float32Array(world), indices: new Uint32Array(source), fma: p.fma };
  } else if (p.fj === 'FJ2812') {
    rawMaleBrow = { positions: new Float32Array(world), indices: new Uint32Array(source), fma: p.fma, name: p.name };
  } else if (p.fj === 'FJ2813') {
    rawMaleHair = { positions: new Float32Array(world), indices: new Uint32Array(source), fma: p.fma, name: p.name };
  } else if (p.fj === 'FJ2814') {
    rawMaleLip = { positions: new Float32Array(world), indices: new Uint32Array(source), fma: p.fma, name: p.name };
  }
  let indices = source;
  const triCount = source.length / 3;
  // Skin surfaces keep their open borders exactly (mouth, eyelids) so they still meet the separate
  // lip and eye meshes; the small lip mesh stays at full resolution.
  const flags = p.cls.cat === 'skin' ? ['ErrorAbsolute', 'LockBorder'] : ['ErrorAbsolute'];
  if (triCount > 64 && p.cls.mat !== 'lip') {
    const goalTris = Math.max(12, Math.floor(Math.min(triCount * budget.keep, budget.cap || Infinity)));
    let err = budget.err;
    for (let attempt = 0; attempt < 4; attempt++) {
      const [simplified] = MeshoptSimplifier.simplify(source, world, 3, Math.min(goalTris * 3, source.length), err * 0.001, flags);
      if (simplified.length >= 36) indices = simplified;
      if (indices.length / 3 <= goalTris * 1.15) break;
      err *= 2;
    }
  }
  const c = compact(world, indices);
  const normals = computeNormals(c.positions, c.indices);
  const bb = bbox(c.positions);
  floorY = Math.min(floorY, bb.min[1]);
  outTris += c.indices.length / 3;
  // Tendon mask: computed on the full-resolution mesh (thin tendons keep their real cross-section
  // there), then sampled at the simplified vertices, which meshoptimizer keeps from the originals.
  let tendon = null;
  if (p.cls.layer === 'muscles' && p.cls.mat === 'muscle') {
    const t0 = performance.now();
    const full = computeTendonMask(world, source, computeNormals(world, source));
    const sampled = new Float32Array(c.origIndex.length);
    for (let i = 0; i < sampled.length; i++) sampled[i] = full.tendon[c.origIndex[i]];
    tendon = quantizeUnorm8(sampled);
    tendonStats.ms += performance.now() - t0;
    tendonStats.parts++;
    tendonStats.fullVertices += world.length / 3;
  }
  const side = /^left\b|\bleft\b/.test(p.name.toLowerCase()) ? 'left' : /^right\b|\bright\b/.test(p.name.toLowerCase()) ? 'right' : '';
  const sex = MALE_REPLACED_FJS.has(p.fj) || MALE_ONLY_RE.test(p.name) ? 'male' : '';
  layers.get(p.cls.layer).push({
    name: p.name,
    positions: c.positions,
    normals,
    indices: c.indices,
    bb,
    ...(tendon ? { tendon } : {}),
    extras: { fj: p.fj, fma: p.fma, cat: p.cls.cat, mat: p.cls.mat, layer: p.cls.layer, flow: p.cls.flow || 0, group: p.cls.group || '', side, ...(sex ? { sex } : {}) }
  });
}
console.log(`Simplified to ${outTris.toLocaleString()} triangles (${((outTris / rawTris) * 100).toFixed(1)}%), re-oriented ${flipped} inside-out meshes`);
console.log(`Tendon mask: ${tendonStats.parts} muscle meshes, ${tendonStats.fullVertices.toLocaleString()} full-resolution vertices, ${(tendonStats.ms / 1000).toFixed(1)} s`);

// Shift so feet rest on y = 0 and the body is centred on x/z.
const allBox = { min: [Infinity, Infinity, Infinity], max: [-Infinity, -Infinity, -Infinity] };
for (const parts of layers.values()) for (const part of parts) for (let k = 0; k < 3; k++) {
  allBox.min[k] = Math.min(allBox.min[k], part.bb.min[k]);
  allBox.max[k] = Math.max(allBox.max[k], part.bb.max[k]);
}
const shift = [-(allBox.min[0] + allBox.max[0]) / 2, -allBox.min[1], -(allBox.min[2] + allBox.max[2]) / 2];
for (const parts of layers.values()) for (const part of parts) {
  for (let i = 0; i < part.positions.length; i += 3) {
    part.positions[i] += shift[0];
    part.positions[i + 1] += shift[1];
    part.positions[i + 2] += shift[2];
  }
  for (let k = 0; k < 3; k++) { part.bb.min[k] += shift[k]; part.bb.max[k] += shift[k]; }
}

function shiftPositions(buf) {
  for (let i = 0; i < buf.length; i += 3) {
    buf[i] += shift[0];
    buf[i + 1] += shift[1];
    buf[i + 2] += shift[2];
  }
}

// Build Female Skin (FJ2810F) from the welded, shifted full-resolution skin mesh
if (rawMaleSkin) {
  shiftPositions(rawMaleSkin.positions);
  const femPos = buildFemaleSkin(rawMaleSkin.positions, rawMaleSkin.indices);
  const budget = SIMPLIFY.skin;
  const triCount = rawMaleSkin.indices.length / 3;
  const goalTris = Math.max(12, Math.floor(Math.min(triCount * budget.keep, budget.cap || Infinity)));
  let indices = rawMaleSkin.indices;
  let err = budget.err;
  for (let attempt = 0; attempt < 4; attempt++) {
    const [simplified] = MeshoptSimplifier.simplify(
      rawMaleSkin.indices,
      femPos,
      3,
      Math.min(goalTris * 3, rawMaleSkin.indices.length),
      err * 0.001,
      ['ErrorAbsolute', 'LockBorder']
    );
    if (simplified.length >= 36) indices = simplified;
    if (indices.length / 3 <= goalTris * 1.15) break;
    err *= 2;
  }
  const c = compact(femPos, indices);
  const normals = computeNormals(c.positions, c.indices);
  const bb = bbox(c.positions);
  layers.get('skin').push({
    name: 'Skin',
    positions: c.positions,
    normals,
    indices: c.indices,
    bb,
    extras: { fj: 'FJ2810F', fma: rawMaleSkin.fma || 'FMA7163', cat: 'skin', mat: 'skin', layer: 'skin', flow: 0, group: '', side: '', sex: 'female' }
  });
  console.log(`Built female skin (FJ2810F): ${(c.indices.length / 3).toLocaleString()} triangles`);
}

// Build Female Eyebrow (FJ2812F), Female Hair (FJ2813F), and Female Lip (FJ2814F)
if (rawMaleBrow) {
  shiftPositions(rawMaleBrow.positions);
  const femPos = buildFemaleEyebrow(rawMaleBrow.positions, rawMaleBrow.indices);
  const budget = SIMPLIFY.hair;
  const triCount = rawMaleBrow.indices.length / 3;
  const goalTris = Math.max(12, Math.floor(Math.min(triCount * budget.keep, budget.cap || Infinity)));
  let indices = rawMaleBrow.indices;
  let err = budget.err;
  for (let attempt = 0; attempt < 4; attempt++) {
    const [simplified] = MeshoptSimplifier.simplify(rawMaleBrow.indices, femPos, 3, Math.min(goalTris * 3, rawMaleBrow.indices.length), err * 0.001, ['ErrorAbsolute']);
    if (simplified.length >= 36) indices = simplified;
    if (indices.length / 3 <= goalTris * 1.15) break;
    err *= 2;
  }
  const c = compact(femPos, indices);
  layers.get('skin').push({
    name: rawMaleBrow.name || 'Eyebrow',
    positions: c.positions,
    normals: computeNormals(c.positions, c.indices),
    indices: c.indices,
    bb: bbox(c.positions),
    extras: { fj: 'FJ2812F', fma: rawMaleBrow.fma || 'FMA71098', cat: 'hair', mat: 'hair', layer: 'skin', flow: 0, group: '', side: '', sex: 'female' }
  });
}

if (rawMaleHair) {
  shiftPositions(rawMaleHair.positions);
  const femPos = buildFemaleHair(rawMaleHair.positions, rawMaleHair.indices);
  const budget = SIMPLIFY.hair;
  const triCount = rawMaleHair.indices.length / 3;
  const goalTris = Math.max(12, Math.floor(Math.min(triCount * 0.35, budget.cap || Infinity)));
  let indices = rawMaleHair.indices;
  let err = 0.8;
  for (let attempt = 0; attempt < 4; attempt++) {
    const [simplified] = MeshoptSimplifier.simplify(rawMaleHair.indices, femPos, 3, Math.min(goalTris * 3, rawMaleHair.indices.length), err * 0.001, ['ErrorAbsolute']);
    if (simplified.length >= 36) indices = simplified;
    if (indices.length / 3 <= goalTris * 1.15) break;
    err *= 2;
  }
  const c = compact(femPos, indices);
  layers.get('skin').push({
    name: rawMaleHair.name || 'Hair of head',
    positions: c.positions,
    normals: computeNormals(c.positions, c.indices),
    indices: c.indices,
    bb: bbox(c.positions),
    extras: { fj: 'FJ2813F', fma: rawMaleHair.fma || 'FMA53667', cat: 'hair', mat: 'hair', layer: 'skin', flow: 0, group: '', side: '', sex: 'female' }
  });
  console.log(`Built female hair (FJ2813F): ${(c.indices.length / 3).toLocaleString()} triangles`);
}

if (rawMaleLip) {
  shiftPositions(rawMaleLip.positions);
  const femPos = buildFemaleLip(rawMaleLip.positions);
  const c = compact(femPos, rawMaleLip.indices);
  layers.get('skin').push({
    name: rawMaleLip.name || 'Lip',
    positions: c.positions,
    normals: computeNormals(c.positions, c.indices),
    indices: c.indices,
    bb: bbox(c.positions),
    extras: { fj: 'FJ2814F', fma: rawMaleLip.fma || 'FMA59816', cat: 'skin', mat: 'lip', layer: 'skin', flow: 0, group: '', side: '', sex: 'female' }
  });
}

// Load NIH HuBMAP Visible Human Female 3D reference organs
{
  const femOrgans = loadFemaleOrgans(RAW);
  let femTris = 0;
  for (const spec of femOrgans) {
    const welded = weld(spec.positions, spec.indices);
    fixWindingCentered(welded.positions, welded.indices);
    const triCount = welded.indices.length / 3;
    const goalTris = Math.min(triCount, spec.cap || 2500);
    let indices = welded.indices;
    if (triCount > goalTris) {
      let err = 0.0005;
      for (let attempt = 0; attempt < 4; attempt++) {
        const [simplified] = MeshoptSimplifier.simplify(
          welded.indices,
          welded.positions,
          3,
          goalTris * 3,
          err,
          ['ErrorAbsolute']
        );
        if (simplified.length >= 36) indices = simplified;
        if (indices.length / 3 <= goalTris * 1.15) break;
        err *= 2.5;
      }
    }
    const c = compact(welded.positions, indices);
    const normals = computeNormals(c.positions, c.indices);
    const bb = bbox(c.positions);
    femTris += c.indices.length / 3;
    layers.get(spec.layer).push({
      name: spec.name,
      positions: c.positions,
      normals,
      indices: c.indices,
      bb,
      extras: {
        fj: spec.fj,
        fma: spec.fma,
        cat: spec.cat,
        mat: spec.mat,
        layer: spec.layer,
        flow: 0,
        group: spec.group,
        side: spec.side,
        sex: 'female',
        vhf: 1
      }
    });
  }
  console.log(`Added ${femOrgans.length} NIH HuBMAP female reference organs (${femTris.toLocaleString()} triangles)`);
}

// Reconstruct structures the dataset lacks as surfaces (lungs, spinal cord) from real boundaries.
{
  const allParts = [...layers.values()].flat();
  for (const p of reconstructLungs(allParts)) layers.get('organs').push(p);
  for (const p of reconstructSpinalCord(allParts)) layers.get('nerves').push(p);
}

// Write GLBs + manifest
const manifest = {
  version: 2,
  source: 'BodyParts3D (DBCLS, CC BY 4.0) + NIH HuBMAP Human Reference Atlas Visible Human Female (CC BY 4.0)',
  sourceUrl: 'https://dbarchive.biosciencedbc.jp/en/bodyparts3d/',
  units: 'metres',
  bodyHeight: +(allBox.max[1] - allBox.min[1]).toFixed(4),
  layers: [],
  parts: [],
  groups: []
};
const partIndexByFj = new Map();
for (const layer of LAYERS) {
  const parts = layers.get(layer);
  parts.sort((a, b) => a.name.localeCompare(b.name) || a.extras.fj.localeCompare(b.extras.fj));
  const glb = new GlbBuilder();
  let tris = 0;
  for (const part of parts) {
    const matIdx = glb.material(part.extras.mat, MATERIAL_PREVIEW_COLORS[part.extras.mat] || [0.7, 0.5, 0.45]);
    glb.addPart(part, matIdx);
    tris += part.indices.length / 3;
    const center = part.bb.min.map((v, k) => +(((v + part.bb.max[k]) / 2).toFixed(4)));
    const radius = +(Math.hypot(...part.bb.max.map((v, k) => v - part.bb.min[k])) / 2).toFixed(4);
    partIndexByFj.set(part.extras.fj, manifest.parts.length);
    manifest.parts.push({
      fj: part.extras.fj,
      fma: part.extras.fma,
      name: part.name,
      layer,
      mat: part.extras.mat,
      side: part.extras.side,
      c: center,
      r: radius,
      ...(part.extras.sex ? { sex: part.extras.sex } : {}),
      ...(part.extras.recon ? { recon: 1 } : {}),
      ...(part.extras.vhf ? { vhf: 1 } : {})
    });
  }
  const file = `${layer}.glb`;
  const buf = glb.toBuffer();
  fs.writeFileSync(path.join(OUT, file), buf);
  manifest.layers.push({ id: layer, file, parts: parts.length, triangles: tris, bytes: buf.length });
  console.log(`  ${file.padEnd(14)} ${String(parts.length).padStart(5)} parts ${tris.toLocaleString().padStart(10)} tris ${(buf.length / 1048576).toFixed(2).padStart(7)} MB`);
}

// Searchable concept groups (organs, systems, regions, and IS-A classes like "femur" or "rib").
const GENERIC = /^(anatomical|physical|material|immaterial|organ (region|segment|zone|component|part)|cardinal organ part|region of|segment of|zone of|set of|cell part cluster|nonparenchymatous|parenchymatous|solid organ|cavitated organ|organ with|anatomical cluster)/i;
const seen = new Set();
for (const [map, tree] of [[partofElems, partofTree], [isaElems, isaTree]]) {
  for (const [concept, fjs] of map) {
    const name = names.get(concept);
    if (!name || GENERIC.test(name)) continue;
    const members = [...fjs].map((fj) => partIndexByFj.get(fj)).filter((v) => v !== undefined);
    if (members.length < 1 || members.length > 900) continue;
    const key = name.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    const parentNames = (tree.parents.get(concept) || []).map((pid) => names.get(pid)).filter(Boolean).slice(0, 3);
    manifest.groups.push({ fma: concept, name, parents: parentNames, members: members.sort((a, b) => a - b) });
  }
}
// Attach reconstructed and female HuBMAP parts to their anatomical groups.
const reconIdx = (prefix) => manifest.parts.map((p, i) => (p.fj.startsWith(prefix) ? i : -1)).filter((i) => i >= 0);
const addToGroup = (name, members, fma = '', parents = []) => {
  if (!members.length) return;
  let g = manifest.groups.find((x) => x.name.toLowerCase() === name.toLowerCase());
  if (!g) {
    g = { fma, name, parents, members: [] };
    manifest.groups.push(g);
  }
  g.members = [...new Set([...g.members, ...members])].sort((a, b) => a - b);
};
addToGroup('right lung', reconIdx('RECON-LUNG-R'));
addToGroup('left lung', reconIdx('RECON-LUNG-L'));
addToGroup('lung', reconIdx('RECON-LUNG-'));
addToGroup('spinal cord', reconIdx('RECON-SPINAL-CORD'));
addToGroup('Skin', reconIdx('FJ2810'), 'FMA7163', ['Integumentary system']);
addToGroup('Eyebrow', reconIdx('FJ2812'), 'FMA71098', ['Hair', 'Integumentary system']);
addToGroup('Hair of head', reconIdx('FJ2813'), 'FMA53667', ['Hair', 'Integumentary system']);
addToGroup('Lip', reconIdx('FJ2814'), 'FMA59816', ['Mouth', 'Face']);
addToGroup('Uterus', [...reconIdx('VHF-UTERUS'), ...reconIdx('VHF-CERVIX')], 'FMA17558', ['Female genital system', 'Reproductive system']);
addToGroup('Ovary', reconIdx('VHF-OVARY-'), 'FMA7209', ['Female genital system', 'Endocrine system']);
addToGroup('Fallopian tube', reconIdx('VHF-TUBE-'), 'FMA18245', ['Female genital system', 'Uterine tube']);
addToGroup('Mammary gland', [...reconIdx('VHF-MAMMARY-'), ...reconIdx('VHF-LACT-')], 'FMA57986', ['Breast', 'Integumentary system']);
addToGroup('Breast', [...reconIdx('VHF-MAMMARY-'), ...reconIdx('VHF-LACT-')], 'FMA9601', ['Thorax', 'Integumentary system']);
addToGroup('Female genital system', [...reconIdx('VHF-UTERUS'), ...reconIdx('VHF-CERVIX'), ...reconIdx('VHF-VAGINA'), ...reconIdx('VHF-OVARY-'), ...reconIdx('VHF-TUBE-')], 'FMA45663', ['Reproductive system']);
manifest.groups.sort((a, b) => a.members.length - b.members.length || a.name.localeCompare(b.name));
fs.writeFileSync(path.join(OUT, 'manifest.json'), JSON.stringify(manifest));
console.log(`Manifest: ${manifest.parts.length} parts, ${manifest.groups.length} searchable groups, body height ${manifest.bodyHeight} m`);
if (unclassified.length) {
  console.log(`Unclassified (defaulted to organs) [${unclassified.length}]: ${[...new Set(unclassified)].slice(0, 60).join(' | ')}`);
}

// Classification report (helps verify that tissues landed in the right layer/material).
const byMat = new Map();
for (const part of manifest.parts) {
  if (!byMat.has(part.mat)) byMat.set(part.mat, []);
  byMat.get(part.mat).push(part.name);
}
for (const [mat, list] of [...byMat].sort((a, b) => b[1].length - a[1].length)) {
  console.log(`  [${mat}] ${list.length}: ${list.slice(0, 6).join(' | ')}`);
}
