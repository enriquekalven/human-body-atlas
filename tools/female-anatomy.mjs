/**
 * Female Anatomy Integration & Remodeling Module
 *
 * 1. Loads real 3D female reference organ meshes from the NIH HuBMAP Human Reference Atlas
 *    (Visible Human Female, CC BY 4.0) — uterus (fundus, body, cervix, vaginal canal),
 *    left/right ovaries, left/right fallopian tubes (infundibulum, fimbriae, ampulla, isthmus),
 *    and left/right mammary gland lobes and lactiferous ducts — and registers them into the
 *    BodyParts3D pelvic cavity and anterior thoracic wall.
 * 2. Remodels the FJ2810 skin mesh into a female external surface (FJ2810F) by relaxing the
 *    male external genitalia into a smooth female mons pubis and perineal floor (Laplacian
 *    membrane over the inguinal/gluteal ring) and sculpting bilateral mammary and waist-hip contours.
 */

import fs from 'node:fs';
import path from 'node:path';

function parseGlbMeshes(filePath) {
  if (!fs.existsSync(filePath)) return [];
  const buf = fs.readFileSync(filePath);
  const jsonLen = buf.readUInt32LE(12);
  const json = JSON.parse(buf.subarray(20, 20 + jsonLen).toString('utf8'));
  const bin = buf.subarray(20 + jsonLen + 8);
  const out = [];
  for (const n of json.nodes || []) {
    if (n.mesh === undefined) continue;
    for (const p of json.meshes[n.mesh].primitives) {
      const posAcc = json.accessors[p.attributes.POSITION];
      const posBv = json.bufferViews[posAcc.bufferView];
      const posOff = (posBv.byteOffset || 0) + (posAcc.byteOffset || 0);
      const pos = new Float32Array(bin.buffer, bin.byteOffset + posOff, posAcc.count * 3);
      const idxAcc = json.accessors[p.indices];
      const idxBv = json.bufferViews[idxAcc.bufferView];
      const idxOff = (idxBv.byteOffset || 0) + (idxAcc.byteOffset || 0);
      const idx =
        idxAcc.componentType === 5123
          ? new Uint32Array(new Uint16Array(bin.buffer, bin.byteOffset + idxOff, idxAcc.count))
          : new Uint32Array(bin.buffer, bin.byteOffset + idxOff, idxAcc.count);
      out.push({ nodeName: n.name, positions: new Float32Array(pos), indices: idx });
    }
  }
  return out;
}

function mergeNodeMeshes(meshes, tx) {
  let totalPos = 0;
  let totalIdx = 0;
  for (const m of meshes) {
    totalPos += m.positions.length;
    totalIdx += m.indices.length;
  }
  const positions = new Float32Array(totalPos);
  const indices = new Uint32Array(totalIdx);
  let pOff = 0;
  let iOff = 0;
  for (const m of meshes) {
    const vBase = pOff / 3;
    const src = m.positions;
    for (let i = 0; i < src.length; i += 3) {
      const [x, y, z] = tx(src[i], src[i + 1], src[i + 2]);
      positions[pOff++] = x;
      positions[pOff++] = y;
      positions[pOff++] = z;
    }
    const idx = m.indices;
    for (let i = 0; i < idx.length; i++) {
      indices[iOff++] = idx[i] + vBase;
    }
  }
  return { positions, indices };
}

/**
 * Loads NIH HuBMAP Visible Human Female reproductive & mammary organs and registers them
 * to the BodyParts3D world space (post-shift, feet on y = 0).
 */
export function loadFemaleOrgans(rawDir) {
  // Pelvic registration: aligns VHF pelvic cavity (between bladder and rectum) into BP3D pelvis
  const txPelvis = (vx, vy, vz) => [
    (vx + 0.0135) * 0.78,
    vy + 0.858,
    vz + 0.018
  ];
  // Thoracic registration: aligns VHF mammary glands onto BP3D pectoralis major fascia
  const txBreast = (vx, vy, vz) => [
    (vx + 0.0057) * 0.90,
    vy + 0.852,
    vz + 0.060
  ];

  const specs = [];

  // 1. Uterus, Cervix, and Vagina (from 3d-vh-f-uterus.glb)
  const uterusNodes = parseGlbMeshes(path.join(rawDir, '3d-vh-f-uterus.glb'));
  const byName = (re) => uterusNodes.filter((n) => re.test(n.nodeName));

  const uterusBody = byName(/body_of_uterus|fundus_of_uterus|anterior_wall|posterior_wall|cornua|lower_uterine_segment|abdominal_ostium/);
  if (uterusBody.length) {
    specs.push({
      fj: 'VHF-UTERUS',
      fma: 'FMA17558',
      name: 'Uterus',
      layer: 'organs',
      cat: 'organ',
      mat: 'reproductive',
      group: 'reproductive',
      side: '',
      sex: 'female',
      cap: 2800,
      ...mergeNodeMeshes(uterusBody, txPelvis)
    });
  }

  const cervix = byName(/cervix|cervical_os/);
  if (cervix.length) {
    specs.push({
      fj: 'VHF-CERVIX',
      fma: 'FMA17740',
      name: 'Uterine cervix',
      layer: 'organs',
      cat: 'organ',
      mat: 'reproductive',
      group: 'reproductive',
      side: '',
      sex: 'female',
      cap: 1200,
      ...mergeNodeMeshes(cervix, txPelvis)
    });
  }

  const vagina = byName(/cervicovaginal_junction/);
  if (vagina.length) {
    specs.push({
      fj: 'VHF-VAGINA',
      fma: 'FMA19949',
      name: 'Vagina',
      layer: 'organs',
      cat: 'organ',
      mat: 'reproductive',
      group: 'reproductive',
      side: '',
      sex: 'female',
      cap: 1200,
      ...mergeNodeMeshes(vagina, txPelvis)
    });
  }

  // 2. Ovaries (from 3d-vh-f-ovary-l.glb & 3d-vh-f-ovary-r.glb)
  const ovaryL = parseGlbMeshes(path.join(rawDir, '3d-vh-f-ovary-l.glb'));
  if (ovaryL.length) {
    specs.push({
      fj: 'VHF-OVARY-L',
      fma: 'FMA7214',
      name: 'Left ovary',
      layer: 'organs',
      cat: 'organ',
      mat: 'reproductive',
      group: 'reproductive',
      side: 'left',
      sex: 'female',
      cap: 500,
      ...mergeNodeMeshes(ovaryL, txPelvis)
    });
  }
  const ovaryR = parseGlbMeshes(path.join(rawDir, '3d-vh-f-ovary-r.glb'));
  if (ovaryR.length) {
    specs.push({
      fj: 'VHF-OVARY-R',
      fma: 'FMA7213',
      name: 'Right ovary',
      layer: 'organs',
      cat: 'organ',
      mat: 'reproductive',
      group: 'reproductive',
      side: 'right',
      sex: 'female',
      cap: 500,
      ...mergeNodeMeshes(ovaryR, txPelvis)
    });
  }

  // 3. Fallopian / Uterine Tubes (from 3d-vh-f-fallopian-tube-l/r.glb)
  const tubeL = parseGlbMeshes(path.join(rawDir, '3d-vh-f-fallopian-tube-l.glb'));
  if (tubeL.length) {
    specs.push({
      fj: 'VHF-TUBE-L',
      fma: 'FMA18484',
      name: 'Left fallopian tube',
      layer: 'organs',
      cat: 'organ',
      mat: 'reproductive',
      group: 'reproductive',
      side: 'left',
      sex: 'female',
      cap: 1800,
      ...mergeNodeMeshes(tubeL, txPelvis)
    });
  }
  const tubeR = parseGlbMeshes(path.join(rawDir, '3d-vh-f-fallopian-tube-r.glb'));
  if (tubeR.length) {
    specs.push({
      fj: 'VHF-TUBE-R',
      fma: 'FMA18483',
      name: 'Right fallopian tube',
      layer: 'organs',
      cat: 'organ',
      mat: 'reproductive',
      group: 'reproductive',
      side: 'right',
      sex: 'female',
      cap: 1800,
      ...mergeNodeMeshes(tubeR, txPelvis)
    });
  }

  // 4. Mammary glands & lactiferous ducts (from 3d-vh-f-mammary-gland-l/r.glb)
  const mamL = parseGlbMeshes(path.join(rawDir, '3d-vh-f-mammary-gland-l.glb'));
  const lobesL = mamL.filter((n) => /mammary_lobes/.test(n.nodeName));
  if (lobesL.length) {
    specs.push({
      fj: 'VHF-MAMMARY-L',
      fma: 'FMA57991',
      name: 'Left mammary gland',
      layer: 'organs',
      cat: 'organ',
      mat: 'gland',
      group: 'reproductive',
      side: 'left',
      sex: 'female',
      cap: 2800,
      ...mergeNodeMeshes(lobesL, txBreast)
    });
  }
  const ductsL = mamL.filter((n) => /lactiferous/.test(n.nodeName));
  if (ductsL.length) {
    specs.push({
      fj: 'VHF-LACT-L',
      fma: 'FMA58000',
      name: 'Left lactiferous ducts',
      layer: 'organs',
      cat: 'organ',
      mat: 'airway',
      group: 'reproductive',
      side: 'left',
      sex: 'female',
      cap: 1600,
      ...mergeNodeMeshes(ductsL, txBreast)
    });
  }

  const mamR = parseGlbMeshes(path.join(rawDir, '3d-vh-f-mammary-gland-r.glb'));
  const lobesR = mamR.filter((n) => /mammary_lobes/.test(n.nodeName));
  if (lobesR.length) {
    specs.push({
      fj: 'VHF-MAMMARY-R',
      fma: 'FMA57987',
      name: 'Right mammary gland',
      layer: 'organs',
      cat: 'organ',
      mat: 'gland',
      group: 'reproductive',
      side: 'right',
      sex: 'female',
      cap: 2800,
      ...mergeNodeMeshes(lobesR, txBreast)
    });
  }
  const ductsR = mamR.filter((n) => /lactiferous/.test(n.nodeName));
  if (ductsR.length) {
    specs.push({
      fj: 'VHF-LACT-R',
      fma: 'FMA57999',
      name: 'Right lactiferous ducts',
      layer: 'organs',
      cat: 'organ',
      mat: 'airway',
      group: 'reproductive',
      side: 'right',
      sex: 'female',
      cap: 1600,
      ...mergeNodeMeshes(ductsR, txBreast)
    });
  }

  return specs;
}

function sstep(a, b, v) {
  const t = Math.max(0, Math.min(1, (v - a) / (b - a)));
  return t * t * (3 - 2 * t);
}

/**
 * Continuous 3D craniofacial, cervical, and shoulder deformation shared across FJ2810F (Skin),
 * FJ2814F (Lip), FJ2812F (Eyebrow), and FJ2813F (Hair) so mating surfaces stay seamlessly aligned
 * while eyelids and external ear attachments remain pinned to the eyeballs and auricles.
 */
export function deformFemaleHeadNeck(xIn, yIn, zIn) {
  if (yIn < 1.30) return [xIn, yIn, zIn];
  let x = xIn;
  let y = yIn;
  let z = zIn;
  const ax = Math.abs(x);
  const sx = x >= 0 ? 1 : -1;

  // 1. Orbital & External Ear protection weights (0 inside eye/ear sockets, 1 outside)
  const rEye = Math.hypot((ax - 0.0298) / 0.0185, (y - 1.5962) / 0.0145, (z - 0.0555) / 0.0195);
  const wEye = sstep(0.98, 1.38, rEye);
  // External ear only touches z in [-0.035, 0.002] at |x| > 0.068; keep rEar tight in z so it never blocks the cheek
  const rEar = Math.hypot((ax - 0.0760) / 0.015, (y - 1.5863) / 0.031, (z + 0.0180) / 0.016);
  const wEar = sstep(0.95, 1.35, rEar);
  const wProtect = wEye * wEar;

  // 2. Lower & Mid Face: Monotonic oval jaw-to-cheek taper + rounded oval chin (lifting lateral mental tubercles)
  if (y > 1.468 && y < 1.586 && z > -0.055) {
    const wJawY = sstep(1.472, 1.495, y) * (1 - sstep(1.552, 1.584, y));
    const wJawZ = sstep(-0.048, 0.002, z);
    const wLat = sstep(0.008, 0.032, ax);
    // Stronger narrowing toward the lower jaw/chin, tapering smoothly up to the cheekbone
    const lowerBias = 1 - 0.42 * sstep(1.495, 1.565, y);
    x *= 1 - 0.235 * lowerBias * wJawY * wJawZ * wLat * wProtect;

    // Extra V-oval taper across the anterior chin & mental tubercles
    const wChinY = sstep(1.472, 1.488, y) * (1 - sstep(1.518, 1.545, y));
    const wChinZ = sstep(0.015, 0.055, z);
    x *= 1 - 0.145 * wChinY * wChinZ * wProtect;

    // Curve the flat square male chin bottom into a soft oval by lifting the lateral mental corners more than the midline
    const wUnderChin =
      Math.exp(-Math.pow((y - 1.492) / 0.018, 2)) *
      sstep(0.008, 0.055, z) *
      (1 - sstep(0.038, 0.060, ax));
    const cornerArch = 0.0024 + 0.0058 * sstep(0.006, 0.026, ax);
    y += cornerArch * wUnderChin * wProtect;

    // Soften protruding square anterior chin bossing
    const wChinTip =
      Math.exp(-Math.pow((y - 1.500) / 0.015, 2)) *
      sstep(0.060, 0.078, z) *
      (1 - sstep(0.018, 0.036, ax));
    z -= 0.0032 * wChinTip * wProtect;
  }

  // 3. Midface: Higher, fuller malar/zygomatic cheekbones
  if (y > 1.535 && y < 1.590 && z > 0.010) {
    const wMalarX = Math.exp(-Math.pow((ax - 0.041) / 0.016, 2));
    const wMalarY = Math.exp(-Math.pow((y - 1.568) / 0.014, 2));
    const wMalarZ = sstep(0.022, 0.052, z) * (1 - sstep(0.074, 0.090, z));
    const wMalar = wMalarX * wMalarY * wMalarZ * wProtect;
    z += 0.0038 * wMalar;
    y += 0.0014 * wMalar;
  }

  // 4. Nose: Narrower nasal bridge & alar base, softer dorsal profile, subtle supratip lift
  if (y > 1.546 && y < 1.610 && ax < 0.026 && z > 0.064) {
    const wNoseY = sstep(1.548, 1.558, y) * (1 - sstep(1.594, 1.608, y));
    const wNoseX = 1 - sstep(0.014, 0.025, ax);
    const wNoseZ = sstep(0.066, 0.078, z);
    const wNose = wNoseY * wNoseX * wNoseZ * wProtect;
    x *= 1 - 0.195 * wNose;

    // Soften dorsal hump
    const wDorsum =
      Math.exp(-Math.pow((y - 1.582) / 0.012, 2)) *
      (1 - sstep(0.008, 0.018, ax)) *
      sstep(0.076, 0.092, z) *
      wProtect;
    z -= 0.0026 * wDorsum;

    // Subtle nasal tip refinement and upward tip rotation
    const wTip =
      Math.exp(-Math.pow((y - 1.560) / 0.009, 2)) *
      (1 - sstep(0.009, 0.017, ax)) *
      sstep(0.088, 0.098, z) *
      wProtect;
    y += 0.0020 * wTip;
    z -= 0.0012 * wTip;
  }

  // 5. Lips & Philtrum: Slightly narrower commissures + fuller upper & lower vermilion cushion
  if (y > 1.520 && y < 1.549 && ax < 0.030 && z > 0.068) {
    const wMouthY = Math.exp(-Math.pow((y - 1.535) / 0.010, 2));
    const wMouthX = 1 - sstep(0.018, 0.029, ax);
    const wMouthZ = sstep(0.070, 0.080, z);
    const wMouth = wMouthY * wMouthX * wMouthZ * wProtect;
    x *= 1 - 0.072 * wMouth;

    const wVermilion =
      Math.exp(-Math.pow((y - 1.535) / 0.0075, 2)) *
      (1 - sstep(0.014, 0.023, ax)) *
      sstep(0.074, 0.084, z) *
      wProtect;
    z += 0.0032 * wVermilion;
  }

  // 6. Supraorbital Brow Ridge, Glabella & Forehead: Soften heavy male brow bossing + lateral arch lift
  if (y > 1.606 && y < 1.685 && z > 0.035 && ax < 0.068) {
    const wBrowY = Math.exp(-Math.pow((y - 1.620) / 0.010, 2));
    const wBrowX = 1 - sstep(0.044, 0.060, ax);
    const wBrowZ = sstep(0.052, 0.068, z);
    const wBrow = wBrowY * wBrowX * wBrowZ * wProtect;
    // Recess male supraorbital ridge & glabella
    z -= 0.0036 * wBrow;

    // Feminine lateral supraorbital arch lift (peaking around |x| = 0.037)
    const wArchX = Math.exp(-Math.pow((ax - 0.037) / 0.015, 2)) * sstep(0.016, 0.026, ax);
    const wArchY = Math.exp(-Math.pow((y - 1.619) / 0.009, 2));
    y += 0.0026 * wArchX * wArchY * wBrowZ * wProtect;

    // Gentle upper forehead rounding
    const wForehead =
      Math.exp(-Math.pow((y - 1.655) / 0.018, 2)) *
      (1 - sstep(0.032, 0.055, ax)) *
      sstep(0.048, 0.068, z);
    z += 0.0018 * wForehead;
  }

  // 7. Slender Female Neck, Smooth Larynx (Adam's apple) & Graceful Trapezius/Shoulder Slope
  if (y > 1.31 && y < 1.505) {
    // Cylindrical neck narrowing (y in [1.39, 1.49])
    const wNeckY = sstep(1.385, 1.415, y) * (1 - sstep(1.472, 1.502, y));
    const wNeckX = 1 - sstep(0.065, 0.105, ax);
    const wNeck = wNeckY * wNeckX;
    x *= 1 - 0.115 * wNeck;
    if (z > -0.095 && z < 0.065) {
      z *= 1 - 0.072 * wNeck;
    }

    // Smooth anterior laryngeal prominence (Adam's apple)
    if (z > 0.010 && ax < 0.026 && y > 1.420 && y < 1.478) {
      const wLarynx =
        Math.exp(-Math.pow((y - 1.450) / 0.016, 2)) *
        (1 - sstep(0.012, 0.024, ax)) *
        sstep(0.014, 0.028, z);
      z -= 0.0038 * wLarynx;
    }

    // Lower bulky superior trapezius slope & slightly narrow deltoid/acromial shoulder breadth
    const wTrap =
      Math.exp(-Math.pow((y - 1.420) / 0.028, 2)) *
      sstep(0.048, 0.075, ax) *
      (1 - sstep(0.135, 0.175, ax));
    y -= 0.0048 * wTrap;

    const wShoulder = sstep(1.315, 1.360, y) * (1 - sstep(1.435, 1.475, y)) * sstep(0.070, 0.125, ax);
    x *= 1 - 0.055 * wShoulder;
  }

  return [x, y, z];
}

/**
 * Remodels the welded, shifted BodyParts3D skin mesh (FJ2810) into a female external skin
 * surface (FJ2810F):
 *   1. Relaxes the external male genital vertices into a smooth female mons pubis and perineal
 *      floor via bounded envelope projection + 120-iteration Laplacian membrane smoothing.
 *   2. Smooths the male supraorbital eyebrow voxel recess so the female arched eyebrow sits on
 *      a clean, continuous brow ridge.
 *   3. Sculpts bilateral mammary contours (matched to the HuBMAP mammary gland lobes/ducts),
 *      female waist/hip proportions, and female craniofacial/cervical/shoulder contours,
 *      followed by jawline/chin Laplacian smoothing for an organic oval facial contour.
 */
export function buildFemaleSkin(maleSkinPositions, maleSkinIndices) {
  const nVerts = maleSkinPositions.length / 3;
  const pos = new Float32Array(maleSkinPositions);
  const adj = Array.from({ length: nVerts }, () => []);
  for (let i = 0; i < maleSkinIndices.length; i += 3) {
    const a = maleSkinIndices[i];
    const b = maleSkinIndices[i + 1];
    const c = maleSkinIndices[i + 2];
    adj[a].push(b, c);
    adj[b].push(a, c);
    adj[c].push(a, b);
  }

  // 1. Groin / mons pubis / perineal remodeling + supraorbital brow-socket smoothing
  const freeList = [];
  const browSmoothList = [];
  const jawChinSmoothList = [];
  for (let i = 0; i < nVerts; i++) {
    const x = pos[i * 3];
    const y = pos[i * 3 + 1];
    const z = pos[i * 3 + 2];
    if (Math.abs(x) < 0.042 && y > 0.750 && y < 0.880 && z > -0.030) {
      const isGen =
        (z > 0.052 && Math.abs(x) < 0.040) ||
        (y > 0.768 && z > -0.025 && Math.abs(x) < 0.025) ||
        (z > 0.020 && y < 0.855 && Math.abs(x) < 0.033);
      if (isGen) {
        freeList.push(i);
        const tY = Math.max(0, Math.min(1, (y - 0.795) / (0.875 - 0.795)));
        const zCap = 0.040 + 0.034 * tY;
        if (pos[i * 3 + 2] > zCap) pos[i * 3 + 2] = zCap;
        const yFloor =
          0.796 +
          0.015 * Math.max(0, (z + 0.01) / 0.08) * (1 - Math.min(1, Math.pow(x / 0.025, 2)));
        if (Math.abs(x) < 0.022 && pos[i * 3 + 1] < yFloor) pos[i * 3 + 1] = yFloor;
      }
    } else if (Math.abs(x) > 0.008 && Math.abs(x) < 0.058 && y > 1.6105 && y < 1.6275 && z > 0.052) {
      browSmoothList.push(i);
    } else if (
      y > 1.472 &&
      y < 1.568 &&
      z > -0.018 &&
      Math.abs(x) < 0.066 &&
      !(Math.abs(x) < 0.029 && y > 1.520 && y < 1.552 && z > 0.066)
    ) {
      jawChinSmoothList.push(i);
    }
  }
  for (let iter = 0; iter < 120; iter++) {
    for (const i of freeList) {
      const nb = adj[i];
      let sx = 0, sy = 0, sz = 0;
      for (let k = 0; k < nb.length; k++) {
        const j = nb[k] * 3;
        sx += pos[j]; sy += pos[j + 1]; sz += pos[j + 2];
      }
      const n = nb.length || 1;
      pos[i * 3] = sx / n; pos[i * 3 + 1] = sy / n; pos[i * 3 + 2] = sz / n;
    }
  }
  for (let iter = 0; iter < 20; iter++) {
    for (const i of browSmoothList) {
      const nb = adj[i];
      let sx = 0, sy = 0, sz = 0;
      for (let k = 0; k < nb.length; k++) {
        const j = nb[k] * 3;
        sx += pos[j]; sy += pos[j + 1]; sz += pos[j + 2];
      }
      const n = nb.length || 1;
      pos[i * 3] = sx / n; pos[i * 3 + 1] = sy / n; pos[i * 3 + 2] = sz / n;
    }
  }

  // 2. Bilateral breast contour + female waist/hip contour + craniofacial/cervical remodeling
  for (let i = 0; i < nVerts; i++) {
    let x = pos[i * 3];
    let y = pos[i * 3 + 1];
    let z = pos[i * 3 + 2];

    if (z > 0.01 && y > 1.15 && y < 1.38 && Math.abs(x) < 0.165) {
      let dz = 0;
      let dy = 0;
      for (const s of [-1, 1]) {
        const xc = s * 0.091;
        const yc = 1.246;
        const dx = (x - xc) / 0.068;
        const dym = (y - yc) / (y >= yc ? 0.088 : 0.056);
        const r2 = dx * dx + dym * dym;
        if (r2 < 1.0) {
          const w = Math.pow(1 - r2, 2);
          dz += 0.036 * w;
          dy -= 0.005 * w * (1 - Math.max(0, dym));
        }
        const ndx = (x - s * 0.097) / 0.011;
        const ndy = (y - 1.242) / 0.011;
        const nr2 = ndx * ndx + ndy * ndy;
        if (nr2 < 1.0) dz += 0.0045 * Math.pow(1 - nr2, 1.5);
      }
      const sternal = sstep(0.014, 0.042, Math.abs(x));
      const lat = 1 - sstep(0.138, 0.162, Math.abs(x));
      z += dz * sternal * lat;
      y += dy * sternal * lat;
    }

    if (Math.abs(x) < 0.19 && y > 0.78 && y < 1.20) {
      const waist = Math.exp(-Math.pow((y - 1.07) / 0.075, 2));
      const hip = Math.exp(-Math.pow((y - 0.90) / 0.085, 2));
      x *= 1 - 0.045 * waist + 0.042 * hip;
      if (z < 0) z *= 1 + 0.038 * hip;
    }

    if (y >= 1.30) {
      [x, y, z] = deformFemaleHeadNeck(x, y, z);
    }

    pos[i * 3] = x;
    pos[i * 3 + 1] = y;
    pos[i * 3 + 2] = z;
  }

  // 3. Smooth the lower/mid jaw & chin contour so the mental tubercles melt into a soft feminine oval
  for (let iter = 0; iter < 22; iter++) {
    for (const i of jawChinSmoothList) {
      const nb = adj[i];
      let sx = 0, sy = 0, sz = 0;
      for (let k = 0; k < nb.length; k++) {
        const j = nb[k] * 3;
        sx += pos[j]; sy += pos[j + 1]; sz += pos[j + 2];
      }
      const n = nb.length || 1;
      pos[i * 3] = pos[i * 3] * 0.35 + (sx / n) * 0.65;
      pos[i * 3 + 1] = pos[i * 3 + 1] * 0.35 + (sy / n) * 0.65;
      pos[i * 3 + 2] = pos[i * 3 + 2] * 0.35 + (sz / n) * 0.65;
    }
  }

  return pos;
}

/**
 * Remodels FJ2814 (Lip) using the shared female craniofacial field so the lip pick-proxy
 * stays seamlessly aligned with FJ2810F.
 */
export function buildFemaleLip(maleLipPositions) {
  const pos = new Float32Array(maleLipPositions);
  for (let i = 0; i < pos.length; i += 3) {
    const [x, y, z] = deformFemaleHeadNeck(pos[i], pos[i + 1], pos[i + 2]);
    pos[i] = x;
    pos[i + 1] = y;
    pos[i + 2] = z;
  }
  return pos;
}

/**
 * Remodels FJ2812 (Eyebrow) into a sculpted female eyebrow (FJ2812F):
 *   - Keeps the medial brow head level and gently ascending toward a soft lateral arch at |x| = 0.038.
 *   - Thins the vertical cross-section into a natural ~4.2 mm medial-to-central body tapering to
 *     a clean lateral tail, with light Laplacian smoothing for crisp, organic edges.
 */
export function buildFemaleEyebrow(maleBrowPositions, maleBrowIndices) {
  const nVerts = maleBrowPositions.length / 3;
  const pos = new Float32Array(maleBrowPositions);
  for (let i = 0; i < nVerts; i++) {
    let x = pos[i * 3];
    let y = pos[i * 3 + 1];
    let z = pos[i * 3 + 2];
    const ax = Math.abs(x);

    // Original male vertical centerline is ~1.6192 across |x| in [0.015, 0.052]
    const yMidMale = 1.6192 - 0.0008 * sstep(0.042, 0.055, ax);
    // Keep 58% thickness medially (~3.8 mm), tapering smoothly to 32% at the lateral tail
    const keepThickness = 0.58 - 0.26 * sstep(0.026, 0.053, ax);
    const dyThick = (y - yMidMale) * keepThickness;

    // Gently ascending feminine arch from medial (|x|=0.012) to peak (|x|=0.038), then soft lateral tail
    const yTargetCenter =
      1.6184 +
      0.0022 * sstep(0.012, 0.038, ax) -
      0.0014 * sstep(0.039, 0.055, ax);
    y = yTargetCenter + dyThick;

    // Apply shared female craniofacial field and sit cleanly proud (+1.2 mm) of the smoothed brow skin
    [x, y, z] = deformFemaleHeadNeck(x, y, z);
    z += 0.0012;

    pos[i * 3] = x;
    pos[i * 3 + 1] = y;
    pos[i * 3 + 2] = z;
  }

  if (maleBrowIndices) {
    const adj = Array.from({ length: nVerts }, () => []);
    for (let i = 0; i < maleBrowIndices.length; i += 3) {
      const a = maleBrowIndices[i], b = maleBrowIndices[i + 1], c = maleBrowIndices[i + 2];
      adj[a].push(b, c); adj[b].push(a, c); adj[c].push(a, b);
    }
    for (let iter = 0; iter < 5; iter++) {
      for (let i = 0; i < nVerts; i++) {
        const nb = adj[i];
        if (!nb.length) continue;
        let sx = 0, sy = 0, sz = 0;
        for (let k = 0; k < nb.length; k++) {
          const j = nb[k] * 3;
          sx += pos[j]; sy += pos[j + 1]; sz += pos[j + 2];
        }
        const n = nb.length;
        pos[i * 3] = pos[i * 3] * 0.5 + (sx / n) * 0.5;
        pos[i * 3 + 1] = pos[i * 3 + 1] * 0.5 + (sy / n) * 0.5;
        pos[i * 3 + 2] = pos[i * 3 + 2] * 0.5 + (sz / n) * 0.5;
      }
    }
  }
  return pos;
}

/**
 * Remodels FJ2813 (Hair of head) into a feminine shoulder-skimming bob/lob hairstyle (FJ2813F):
 *   1. Keeps inner scalp-contact vertices locked to the female head above the ears.
 *   2. Lowers the anterior forehead hairline slightly and adds fuller crown and temple framing.
 *   3. Extends and flares the posterior & behind-the-ear hair curtain smoothly down to the
 *      upper shoulders (y ≈ 1.425 m) in a continuous A-line silhouette, followed by Laplacian
 *      smoothing for a sleek salon-smooth finish.
 */
export function buildFemaleHair(maleHairPositions, maleHairIndices) {
  const nVerts = maleHairPositions.length / 3;
  const pos = new Float32Array(maleHairPositions);

  // First apply the shared female head/neck deformation
  for (let i = 0; i < nVerts; i++) {
    const [x, y, z] = deformFemaleHeadNeck(pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2]);
    pos[i * 3] = x;
    pos[i * 3 + 1] = y;
    pos[i * 3 + 2] = z;
  }

  // Compute adjacency & outwardness relative to skull center (0, 1.610, -0.025)
  const adj = Array.from({ length: nVerts }, () => []);
  const nrm = new Float32Array(pos.length);
  for (let i = 0; i < maleHairIndices.length; i += 3) {
    const a = maleHairIndices[i];
    const b = maleHairIndices[i + 1];
    const c = maleHairIndices[i + 2];
    adj[a].push(b, c);
    adj[b].push(a, c);
    adj[c].push(a, b);
    const ax = pos[a * 3], ay = pos[a * 3 + 1], az = pos[a * 3 + 2];
    const abx = pos[b * 3] - ax, aby = pos[b * 3 + 1] - ay, abz = pos[b * 3 + 2] - az;
    const acx = pos[c * 3] - ax, acy = pos[c * 3 + 1] - ay, acz = pos[c * 3 + 2] - az;
    const nx = aby * acz - abz * acy;
    const ny = abz * acx - abx * acz;
    const nz = abx * acy - aby * acx;
    for (const v of [a, b, c]) {
      nrm[v * 3] += nx;
      nrm[v * 3 + 1] += ny;
      nrm[v * 3 + 2] += nz;
    }
  }

  let wOut = new Float32Array(nVerts);
  for (let i = 0; i < nVerts; i++) {
    const nx = nrm[i * 3], ny = nrm[i * 3 + 1], nz = nrm[i * 3 + 2];
    const nl = Math.hypot(nx, ny, nz) || 1;
    const rx = pos[i * 3], ry = pos[i * 3 + 1] - 1.610, rz = pos[i * 3 + 2] + 0.025;
    const rl = Math.hypot(rx, ry, rz) || 1;
    const dot = (nx * rx + ny * ry + nz * rz) / (nl * rl);
    wOut[i] = sstep(-0.10, 0.35, dot);
  }
  for (let iter = 0; iter < 5; iter++) {
    const next = new Float32Array(nVerts);
    for (let i = 0; i < nVerts; i++) {
      const nb = adj[i];
      let s = wOut[i];
      for (let k = 0; k < nb.length; k++) s += wOut[nb[k]];
      next[i] = s / (nb.length + 1);
    }
    wOut = next;
  }

  const bobSmoothList = [];
  for (let i = 0; i < nVerts; i++) {
    let x = pos[i * 3];
    let y = pos[i * 3 + 1];
    let z = pos[i * 3 + 2];
    const ax = Math.abs(x);
    const sx = x >= 0 ? 1 : -1;
    const out = wOut[i];

    // 1. Fuller feminine crown, side volume & softer, slightly lower rounded forehead/temple hairline
    if (y > 1.580) {
      const wCrown = sstep(1.585, 1.635, y) * out;
      x += sx * 0.0085 * wCrown * sstep(0.015, 0.055, ax);
      if (y > 1.620) {
        y += 0.0070 * wCrown * sstep(1.625, 1.690, y);
      }
      if (z < -0.010) {
        z -= 0.0075 * wCrown * sstep(-0.010, -0.075, z);
      }
      // Softly lower the anterior forehead & temple hairline into a rounded feminine frame
      if (z > 0.010 && y > 1.620 && y < 1.705) {
        const wFront =
          Math.exp(-Math.pow((y - 1.668) / 0.024, 2)) *
          sstep(0.010, 0.045, z);
        y -= 0.0095 * wFront * (0.4 + 0.6 * out);
        z += 0.0042 * wFront * (0.3 + 0.7 * out);
        x += sx * 0.0040 * wFront * sstep(0.020, 0.058, ax) * out;
      }
    }

    // 2. Continuous A-line shoulder-skimming bob/lob behind the ears & alongside the neck
    if (y < 1.635 && z < -0.018) {
      bobSmoothList.push(i);
      const wBackZ = sstep(-0.018, -0.042, z);
      const tDown = Math.max(0, Math.min(1, (1.630 - y) / (1.630 - 1.5243)));
      // Smoothly drape down to y ≈ 1.425 m
      const drop = 0.098 * Math.pow(tDown, 1.15) * wBackZ;
      y -= drop;

      // Single continuous cosine bell flare from temple to neck with a soft inward bevel at the hem
      const bobBell = Math.sin(Math.min(1, Math.pow(tDown, 0.85) * 0.96) * Math.PI);
      const sideBias = sstep(0.008, 0.036, ax);
      x += sx * (0.027 + 0.012 * out) * bobBell * wBackZ * sideBias;

      // Smoothly bring the side locks slightly forward as they descend past the earlobe
      const forwardSweep = sstep(0.25, 0.78, tDown) * (1 - 0.35 * sstep(0.85, 1.0, tDown)) * sstep(0.038, 0.065, ax);
      z += 0.018 * forwardSweep * wBackZ;

      // Drape the posterior hair curtain smoothly over the nape / upper trapezius
      const wNape = sstep(0.18, 0.85, tDown) * wBackZ;
      z -= (0.008 + 0.010 * out) * wNape;

      // Guarantee radial clearance outside the female posterior/lateral neck & upper trapezius
      if (y < 1.555) {
        const neckClearZ = y < 1.465 ? -0.118 - (1.465 - y) * 0.32 : -0.092;
        if (ax < 0.062 && z > neckClearZ) {
          z = neckClearZ - 0.004 * out;
        }
      }
    }

    pos[i * 3] = x;
    pos[i * 3 + 1] = y;
    pos[i * 3 + 2] = z;
  }

  // Smooth the draped bob curtain so the lateral silhouette is salon-smooth
  for (let iter = 0; iter < 12; iter++) {
    for (const i of bobSmoothList) {
      const nb = adj[i];
      if (!nb.length) continue;
      let sx = 0, sy = 0, sz = 0;
      for (let k = 0; k < nb.length; k++) {
        const j = nb[k] * 3;
        sx += pos[j]; sy += pos[j + 1]; sz += pos[j + 2];
      }
      const n = nb.length;
      pos[i * 3] = pos[i * 3] * 0.45 + (sx / n) * 0.55;
      pos[i * 3 + 1] = pos[i * 3 + 1] * 0.45 + (sy / n) * 0.55;
      pos[i * 3 + 2] = pos[i * 3 + 2] * 0.45 + (sz / n) * 0.55;
    }
  }

  return pos;
}


