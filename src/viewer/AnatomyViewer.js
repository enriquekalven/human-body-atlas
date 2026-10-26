/**
 * AnatomyViewer — WebGL renderer for the BodyParts3D anatomical model.
 *
 * Responsibilities:
 *   - Studio lighting (image-based RoomEnvironment + key/rim/fill lights + soft shadows),
 *     filmic tone mapping and ground-truth ambient occlusion (GTAO) for realistic depth.
 *   - Progressive loading of the per-layer GLB files with byte-level progress.
 *   - Layer opacity / x-ray ghosting, view presets, skin tone.
 *   - Physiology: beating heart (incl. coronary vessels), breathing lungs + diaphragm,
 *     travelling blood-flow pulses synchronised to heart rate.
 *   - Picking (hover/click), highlight, isolation, and animated camera framing.
 */

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { GTAOPass } from 'three/addons/postprocessing/GTAOPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { TissueMaterialLibrary, SKIN_TONES } from './materials.js';

export const LAYER_IDS = ['skin', 'muscles', 'skeleton', 'vessels', 'organs', 'nerves'];

export const VIEW_PRESETS = {
  skin: { label: 'Skin', layers: { skin: 1, muscles: 0, skeleton: 0, vessels: 0, organs: 0, nerves: 0 } },
  muscles: { label: 'Muscles', layers: { skin: 0, muscles: 1, skeleton: 1, vessels: 0, organs: 0, nerves: 0 } },
  skeleton: { label: 'Skeleton', layers: { skin: 0.06, muscles: 0, skeleton: 1, vessels: 0, organs: 0, nerves: 0 } },
  circulation: { label: 'Veins & blood flow', layers: { skin: 0.06, muscles: 0, skeleton: 0.14, vessels: 1, organs: 0, nerves: 0 } },
  organs: { label: 'Organs', layers: { skin: 0.06, muscles: 0, skeleton: 0.2, vessels: 0, organs: 1, nerves: 0 } },
  nervous: { label: 'Brain & nerves', layers: { skin: 0.06, muscles: 0, skeleton: 0.2, vessels: 0, organs: 0, nerves: 1 } },
  xray: { label: 'X-ray (all systems)', layers: { skin: 0.14, muscles: 0, skeleton: 1, vessels: 1, organs: 1, nerves: 1 } }
};

// Layer load order: what the default (muscles) view needs first.
const LOAD_ORDER = ['muscles', 'skeleton', 'organs', 'skin', 'vessels', 'nerves'];

const QUALITY = {
  high: { dpr: 2, shadows: true, ao: true, detail: true },
  balanced: { dpr: 1.5, shadows: true, ao: false, detail: true },
  fast: { dpr: 1, shadows: false, ao: false, detail: false }
};

class AnatomyGTAOPass extends GTAOPass {
  // Ghosted (transparent) layers must not contribute to ambient occlusion.
  _overrideVisibility() {
    super._overrideVisibility();
    const cache = this._visibilityCache;
    this.scene.traverse((o) => {
      if (o.isMesh && o.visible && o.material && o.material.transparent && o.material.opacity < 0.7) {
        o.visible = false;
        cache.push(o);
      }
    });
  }
}

const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

function makeBackdropTexture() {
  const c = document.createElement('canvas');
  c.width = 1024;
  c.height = 1024;
  const g = c.getContext('2d');
  const grad = g.createRadialGradient(512, 430, 40, 512, 560, 760);
  grad.addColorStop(0, '#2b3442');
  grad.addColorStop(0.45, '#161c26');
  grad.addColorStop(1, '#07090d');
  g.fillStyle = grad;
  g.fillRect(0, 0, 1024, 1024);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function makeFloorTexture() {
  const c = document.createElement('canvas');
  c.width = 512;
  c.height = 512;
  const g = c.getContext('2d');
  const grad = g.createRadialGradient(256, 256, 0, 256, 256, 256);
  grad.addColorStop(0, 'rgba(120,140,170,0.22)');
  grad.addColorStop(0.55, 'rgba(70,90,120,0.10)');
  grad.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, 512, 512);
  g.strokeStyle = 'rgba(120,170,220,0.18)';
  g.lineWidth = 2;
  for (const r of [118, 178, 236]) {
    g.beginPath();
    g.arc(256, 256, r, 0, Math.PI * 2);
    g.stroke();
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

async function fetchWithProgress(url, onBytes) {
  const res = await fetch(url, { credentials: 'same-origin' });
  if (!res.ok) throw new Error(`Failed to load ${url} (${res.status})`);
  if (!res.body || !res.body.getReader) {
    const buf = await res.arrayBuffer();
    onBytes(buf.byteLength);
    return buf;
  }
  const reader = res.body.getReader();
  const chunks = [];
  let received = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    chunks.push(value);
    received += value.byteLength;
    onBytes(value.byteLength);
  }
  const out = new Uint8Array(received);
  let offset = 0;
  for (const c of chunks) {
    out.set(c, offset);
    offset += c.byteLength;
  }
  return out.buffer;
}

export function isMobileDevice() {
  if (typeof window === 'undefined') return false;
  return (
    window.matchMedia('(max-width: 860px), (pointer: coarse)').matches ||
    /iPhone|iPad|iPod|Android/i.test(navigator.userAgent || '')
  );
}

export class AnatomyViewer extends EventTarget {
  constructor(canvas, options = {}) {
    super();
    this.canvas = canvas;
    this.isMobile = isMobileDevice();
    this.baseUrl = options.baseUrl || './models/';
    const defaultQuality = this.isMobile ? 'balanced' : 'high';
    this.qualityName = options.quality && QUALITY[options.quality] ? options.quality : defaultQuality;

    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    const TONE = { agx: THREE.AgXToneMapping, neutral: THREE.NeutralToneMapping, aces: THREE.ACESFilmicToneMapping };
    this.renderer.toneMapping = TONE[options.toneMapping] ?? THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = options.exposure ?? 0.95;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFShadowMap;

    this.scene = new THREE.Scene();
    this.scene.background = makeBackdropTexture();

    this.camera = new THREE.PerspectiveCamera(30, 1, 0.005, 60);
    this.camera.position.set(0.0, 1.0, 3.95);

    this.controls = new OrbitControls(this.camera, canvas);
    this.controls.target.set(0, 0.88, 0);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.085;
    this.controls.zoomToCursor = true;
    this.controls.screenSpacePanning = true;
    this.controls.minDistance = 0.05;
    this.controls.maxDistance = 9;
    this.controls.rotateSpeed = 0.75;
    this.controls.update();

    this.materials = new TissueMaterialLibrary();
    this.raycaster = new THREE.Raycaster();
    this.pointer = new THREE.Vector2();
    this.lastFrameTime = performance.now();

    this.manifest = null;
    this.meshByPart = new Map();
    this.pickables = [];
    this.loadedLayers = new Set();
    this.layerOpacity = { skin: 0, muscles: 1, skeleton: 1, vessels: 0, organs: 0, nerves: 0 };
    this.currentView = 'muscles';
    this.hovered = null;
    this.selection = new Set();
    this.isolated = false;
    this.heartRate = 72;
    this.flowEnabled = true;
    this.beatPhase = 0;
    this.dancing = false;
    this.danceMix = 0;
    this.dancePhase = 0;
    this.time = 0;
    this.tween = null;
    this.frameCount = 0;
    this.fpsSamples = [];
    this.autoQuality = options.autoQuality !== false;
    this.diaphragmRestY = 0;
    this.hiddenTissues = new Set();
    this.sex = options.sex === 'female' ? 'female' : 'male';
    this.garments = {};

    this._buildStage();
    this._buildGroups();
    this._buildComposer();
    this.setQuality(this.qualityName);
    this._bindEvents();
    this.resize();
    this._applyLayerOpacity();
  }

  // --------------------------------------------------------------------------
  // Scene setup
  // --------------------------------------------------------------------------
  _buildStage() {
    const pmrem = new THREE.PMREMGenerator(this.renderer);
    this.scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    this.scene.environmentIntensity = 0.42;
    pmrem.dispose();

    const key = new THREE.DirectionalLight(0xfff1e2, 3.1);
    key.position.set(1.7, 3.3, 2.6);
    key.target.position.set(0, 0.9, 0);
    key.castShadow = true;
    const shadowRes = this.isMobile ? 1024 : 2048;
    key.shadow.mapSize.set(shadowRes, shadowRes);
    Object.assign(key.shadow.camera, { left: -0.85, right: 0.85, top: 1.15, bottom: -1.15, near: 0.5, far: 9 });
    key.shadow.bias = -0.00025;
    key.shadow.normalBias = 0.01;
    key.shadow.radius = 3;
    this.keyLight = key;

    const rim = new THREE.DirectionalLight(0xc2d9ff, 2.2);
    rim.position.set(-2.4, 2.6, -2.8);
    rim.target.position.set(0, 0.9, 0);
    this.rimLight = rim;

    const kicker = new THREE.DirectionalLight(0xffd9c4, 0.55);
    kicker.position.set(-2.2, 0.9, 2.4);
    kicker.target.position.set(0, 0.9, 0);
    this.kickerLight = kicker;

    const hemi = new THREE.HemisphereLight(0xe6eefa, 0x2a1d16, 0.22);

    this.scene.add(key, key.target, rim, rim.target, kicker, kicker.target, hemi);

    const floor = new THREE.Mesh(
      new THREE.CircleGeometry(1.25, 96),
      new THREE.MeshBasicMaterial({ map: makeFloorTexture(), transparent: true, depthWrite: false })
    );
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = 0.0005;
    floor.renderOrder = -1;
    const shadowCatcher = new THREE.Mesh(new THREE.CircleGeometry(1.25, 96), new THREE.ShadowMaterial({ opacity: 0.38 }));
    shadowCatcher.rotation.x = -Math.PI / 2;
    shadowCatcher.position.y = 0.001;
    shadowCatcher.receiveShadow = true;
    this.shadowCatcher = shadowCatcher;
    this.scene.add(floor, shadowCatcher);
  }

  _buildGroups() {
    this.root = new THREE.Group();
    this.scene.add(this.root);
    this.groups = {};
    for (const id of [...LAYER_IDS, 'heart', 'eyes']) {
      const g = new THREE.Group();
      g.name = `layer:${id}`;
      this.groups[id] = g;
      this.root.add(g);
    }
    // Pivots for physiological motion; positioned once the manifest is known.
    this.pivots = {
      heart: new THREE.Group(),
      coronary: new THREE.Group(),
      lungs: new THREE.Group(),
      diaphragm: new THREE.Group()
    };
    this.groups.heart.add(this.pivots.heart);
    this.groups.vessels.add(this.pivots.coronary);
    this.groups.organs.add(this.pivots.lungs);
    this.groups.muscles.add(this.pivots.diaphragm);
  }

  _buildComposer() {
    const rt = new THREE.WebGLRenderTarget(4, 4, {
      type: THREE.HalfFloatType,
      samples: this.isMobile ? 0 : 4
    });
    this.composer = new EffectComposer(this.renderer, rt);
    this.composer.addPass(new RenderPass(this.scene, this.camera));
    this.gtaoPass = new AnatomyGTAOPass(this.scene, this.camera, 4, 4);
    this.gtaoPass.normalMaterial.side = THREE.DoubleSide;
    this.gtaoPass.blendIntensity = 1.0;
    this.gtaoPass.updateGtaoMaterial({ radius: 0.06, distanceExponent: 1.0, thickness: 2.0, scale: 1.9, samples: 16 });
    this.gtaoPass.updatePdMaterial({ lumaPhi: 10, depthPhi: 2, normalPhi: 3, radius: 6, rings: 2, samples: 16 });
    this.composer.addPass(this.gtaoPass);
    this.composer.addPass(new OutputPass());
  }

  // --------------------------------------------------------------------------
  // Loading
  // --------------------------------------------------------------------------
  async load({ onProgress, onInitialReady } = {}) {
    const res = await fetch(`${this.baseUrl}manifest.json`, { credentials: 'same-origin' });
    if (!res.ok) throw new Error(`Failed to load manifest (${res.status})`);
    this.manifest = await res.json();
    this.partIndexByFj = new Map(this.manifest.parts.map((p, i) => [p.fj, i]));
    this._positionPivots();
    this.dispatchEvent(new CustomEvent('manifest', { detail: this.manifest }));

    const totalBytes = this.manifest.layers.reduce((s, l) => s + l.bytes, 0);
    let loadedBytes = 0;
    const loader = new GLTFLoader();
    const order = [...LOAD_ORDER].sort((a, b) => this._layerPriority(a) - this._layerPriority(b));
    const visibleLayers = order.filter((id) => (this.layerOpacity[id] ?? 0) > 0.01);
    const initialTargetCount = Math.max(1, Math.min(2, visibleLayers.length || 2));
    let initialReadyFired = false;

    for (const layerId of order) {
      const info = this.manifest.layers.find((l) => l.id === layerId);
      if (!info) continue;
      const buf = await fetchWithProgress(`${this.baseUrl}${info.file}`, (n) => {
        loadedBytes += n;
        if (onProgress) onProgress({ loadedBytes, totalBytes, layer: layerId });
      });
      const gltf = await loader.parseAsync(buf, this.baseUrl);
      this._ingestLayer(layerId, gltf.scene);
      this.loadedLayers.add(layerId);
      this._applyLayerOpacity();
      this.dispatchEvent(new CustomEvent('layerloaded', { detail: { layer: layerId, loaded: [...this.loadedLayers] } }));

      if (!initialReadyFired && this.loadedLayers.size >= initialTargetCount) {
        initialReadyFired = true;
        if (onInitialReady) onInitialReady(this.manifest);
        this.dispatchEvent(new CustomEvent('initialready', { detail: this.manifest }));
      }
      // Yield to browser event loop between layers so WebGL renders smoothly and UI stays responsive
      await new Promise((r) => setTimeout(r, 16));
    }
    if (!initialReadyFired) {
      initialReadyFired = true;
      if (onInitialReady) onInitialReady(this.manifest);
      this.dispatchEvent(new CustomEvent('initialready', { detail: this.manifest }));
    }
    if (!this.isMobile) {
      try {
        await this.renderer.compileAsync(this.scene, this.camera);
      } catch {
        // compileAsync is an optimisation only; rendering compiles lazily otherwise.
      }
    }
    this.dispatchEvent(new CustomEvent('ready'));
  }

  _layerPriority(layer) {
    // Load visible layers first, keeping the default order otherwise.
    const visible = (this.layerOpacity[layer] ?? 0) > 0.01 ? 0 : 10;
    return visible + LOAD_ORDER.indexOf(layer);
  }

  _groupMembers(name) {
    const g = this.manifest.groups.find((x) => x.name.toLowerCase() === name.toLowerCase());
    return g ? g.members : [];
  }

  _sphereOfParts(indices) {
    const box = new THREE.Box3();
    const tmp = new THREE.Vector3();
    for (const i of indices) {
      const p = this.manifest.parts[i];
      if (!p) continue;
      tmp.set(p.c[0], p.c[1], p.c[2]);
      box.expandByPoint(tmp.clone().addScalar(p.r * 0.6));
      box.expandByPoint(tmp.clone().addScalar(-p.r * 0.6));
    }
    const sphere = new THREE.Sphere();
    if (box.isEmpty()) return null;
    box.getBoundingSphere(sphere);
    return sphere;
  }

  _positionPivots() {
    const heart = this._sphereOfParts(this._groupMembers('heart'));
    if (heart) {
      this.materials.shared.uHeartPos.value.copy(heart.center);
      this.pivots.heart.position.copy(heart.center);
      this.pivots.coronary.position.copy(heart.center);
    }
    const lungs = this._sphereOfParts([...this._groupMembers('right lung'), ...this._groupMembers('left lung')]);
    if (lungs) this.pivots.lungs.position.copy(lungs.center);
    const diaphragm = this._sphereOfParts(this.manifest.parts.map((p, i) => (/^diaphragm/i.test(p.name) ? i : -1)).filter((i) => i >= 0));
    if (diaphragm) this.pivots.diaphragm.position.copy(diaphragm.center);
    this.diaphragmRestY = this.pivots.diaphragm.position.y;
    this.heartMembers = new Set(this._groupMembers('heart'));
    this.lungMembers = new Set([...this._groupMembers('right lung'), ...this._groupMembers('left lung')]);
  }

  _ingestLayer(layerId, gltfScene) {
    gltfScene.updateMatrixWorld(true);
    const meshes = [];
    gltfScene.traverse((o) => {
      if (o.isMesh) meshes.push(o);
    });
    for (const mesh of meshes) {
      const ud = mesh.userData || {};
      const partIndex = this.partIndexByFj.get(ud.fj);
      if (partIndex === undefined) continue;
      const tissue = ud.mat || 'organ';
      let layerKey = layerId;
      if (ud.group === 'heart' && layerId === 'organs') layerKey = 'heart';
      if (tissue === 'eye' || tissue === 'iris' || tissue === 'cornea' || tissue === 'pupil') layerKey = 'eyes';
      const entry = this.materials.get(layerKey, tissue);
      mesh.material = entry.base;
      mesh.userData.entry = entry;
      mesh.userData.partIndex = partIndex;
      mesh.userData.layerKey = layerKey;
      mesh.castShadow = layerId !== 'vessels' && layerId !== 'nerves' && tissue !== 'lip';
      mesh.receiveShadow = tissue !== 'lip';
      if (entry.def.fiber && !this.isMobile && this.quality?.detail) this._addFiberAttribute(mesh);

      let parent = this.groups[layerKey];
      if (layerKey === 'heart') parent = this.pivots.heart;
      else if (layerId === 'vessels' && this.heartMembers.has(partIndex)) parent = this.pivots.coronary;
      else if (layerId === 'organs' && this.lungMembers.has(partIndex)) parent = this.pivots.lungs;
      else if (layerId === 'muscles' && /^diaphragm/i.test(this.manifest.parts[partIndex].name)) parent = this.pivots.diaphragm;
      parent.attach(mesh);
      this.meshByPart.set(partIndex, mesh);
      this.pickables.push(mesh);
    }
    if (layerId === 'skin') {
      this._buildModestyGarment('male');
      this._buildModestyGarment('female');
      this._computeFaceLandmarks();
    }
    this._applyIsolation();
  }

  _skinMesh(sex = this.sex) {
    const targetFj = sex === 'female' ? 'FJ2810F' : 'FJ2810';
    return (
      this.pickables.find((m) => this.manifest.parts[m.userData.partIndex]?.fj === targetFj) ||
      this.pickables.find((m) => m.userData.layerKey === 'skin' && m.userData.entry.tissue === 'skin' && /^skin$/i.test(m.name || this.manifest.parts[m.userData.partIndex].name))
    );
  }

  // Locate nose tip, cheeks, ears and lip center on the real skin surface for vascular flush and lip shading.
  _computeFaceLandmarks() {
    const skin = this._skinMesh(this.sex) || this._skinMesh('male') || this._skinMesh('female');
    const parts = this.manifest.parts;
    const eyes = parts.filter((p) => /sclera/i.test(p.name));
    const lipFj = this.sex === 'female' ? 'FJ2814F' : 'FJ2814';
    const lip = parts.find((p) => p.fj === lipFj) || parts.find((p) => /^lips?$/i.test(p.name));
    if (lip) {
      this.materials.shared.uLipPos.value.set(lip.c[0], lip.c[1], lip.c[2], this.sex === 'female' ? 2.0 : 1.0);
    }
    if (!skin || eyes.length < 2 || !lip) return;
    const eyeY = (eyes[0].c[1] + eyes[1].c[1]) / 2;
    const eyeZ = (eyes[0].c[2] + eyes[1].c[2]) / 2;
    const eyeX = Math.abs(eyes[0].c[0] - eyes[1].c[0]) / 2;
    const pos = skin.geometry.attributes.position;
    const v = new THREE.Vector3();
    let nose = null;
    let cheekL = null;
    let cheekR = null;
    let earL = null;
    let earR = null;
    skin.updateMatrixWorld(true);
    for (let i = 0; i < pos.count; i++) {
      v.fromBufferAttribute(pos, i).applyMatrix4(skin.matrixWorld);
      if (v.y > eyeY + 0.06 || v.y < lip.c[1] - 0.03) continue;
      if (Math.abs(v.x) < 0.012 && v.y < eyeY - 0.01 && v.y > lip.c[1] + 0.012 && (!nose || v.z > nose.z)) nose = v.clone();
      if (Math.abs(v.y - (eyeY - 0.032)) < 0.006) {
        if (Math.abs(v.x - eyeX * 1.15) < 0.006 && (!cheekL || v.z > cheekL.z)) cheekL = v.clone();
        if (Math.abs(v.x + eyeX * 1.15) < 0.006 && (!cheekR || v.z > cheekR.z)) cheekR = v.clone();
      }
      if (Math.abs(v.y - (eyeY - 0.012)) < 0.02 && v.z < eyeZ - 0.05 && v.z > eyeZ - 0.14) {
        if (v.x > 0 && (!earL || v.x > earL.x)) earL = v.clone();
        if (v.x < 0 && (!earR || v.x < earR.x)) earR = v.clone();
      }
    }
    const spots = [[nose, 0.013], [cheekL, 0.024], [cheekR, 0.024], [earL, 0.02], [earR, 0.02]];
    const uniform = this.materials.shared.uFlushPts.value;
    spots.forEach(([p, radius], k) => {
      if (p) uniform[k].set(p.x, p.y, p.z, radius);
    });
    this.materials.shared.uFlush.value = 0.6;
  }

  // Kids-mode modesty garments generated from the real skin surface (shown only while the skin layer
  // is opaque): athletic boxer shorts for both male & female, plus a matching athletic crop-top /
  // sports bra for the female body.
  _buildModestyGarment(sex = 'male') {
    const skin = this._skinMesh(sex);
    if (!skin) return;
    skin.updateMatrixWorld(true);
    const pos = skin.geometry.attributes.position;
    if (!pos) return;
    const H = this.manifest.bodyHeight || 1.73;
    const yTop = H * 0.572; // waistband, just below the iliac crests
    const yLeg = H * 0.405; // hem, upper-mid thigh
    const yBraTop = H * 0.756; // upper chest band (below axillary fold)
    const yBraBot = H * 0.694; // underbust band
    const v = new THREE.Vector3();
    const band = [];
    const chestBand = [];
    let yGen = Infinity;
    for (let i = 0; i < pos.count; i++) {
      v.fromBufferAttribute(pos, i).applyMatrix4(skin.matrixWorld);
      if (v.y >= yLeg - 0.025 && v.y <= yTop + 0.025 && Math.abs(v.x) <= 0.32) {
        band.push([v.x, v.y, v.z]);
        if (Math.abs(v.x) < 0.02 && v.y < H * 0.5 && v.y < yGen) yGen = v.y;
      }
      if (sex === 'female' && v.y >= yBraBot - 0.02 && v.y <= yBraTop + 0.02 && Math.abs(v.x) <= 0.144) {
        chestBand.push([v.x, v.y, v.z]);
      }
    }
    if (band.length < 400) return;
    const yJoin = Number.isFinite(yGen) ? Math.max(yLeg + 0.04, yGen - 0.012) : H * 0.455;
    const M = 72;

    // Drop forearm/hand clusters that hang beside the hips (1-D gaps in x).
    const dropHands = (pts, maxAbsX = 0.175) => {
      const xs = pts.map((p) => p[0]).sort((a, b) => a - b);
      const clusters = [];
      let start = xs[0];
      for (let k = 1; k <= xs.length; k++) {
        if (k === xs.length || xs[k] - xs[k - 1] > 0.018) {
          clusters.push([start, xs[k - 1]]);
          start = xs[k];
        }
      }
      const keep = clusters.filter(([a, b]) => (a <= 0 && b >= 0 ? 0 : Math.min(Math.abs(a), Math.abs(b))) < maxAbsX);
      return pts.filter((p) => keep.some(([a, b]) => p[0] >= a && p[0] <= b));
    };
    const hull2 = (pts) => {
      const P = pts.map((p) => [p[0], p[2]]).sort((a, b) => a[0] - b[0] || a[1] - b[1]);
      const cross = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
      const lower = [];
      const upper = [];
      for (const p of P) {
        while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], p) <= 0) lower.pop();
        lower.push(p);
      }
      for (let i = P.length - 1; i >= 0; i--) {
        const p = P[i];
        while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], p) <= 0) upper.pop();
        upper.push(p);
      }
      upper.pop();
      lower.pop();
      return lower.concat(upper);
    };
    const radial = (hull, c) => {
      const r = new Float32Array(M);
      for (let j = 0; j < M; j++) {
        const th = (j / M) * Math.PI * 2;
        const dx = Math.cos(th);
        const dz = Math.sin(th);
        let best = 0;
        for (let k = 0; k < hull.length; k++) {
          const p = hull[k];
          const q = hull[(k + 1) % hull.length];
          const ex = q[0] - p[0];
          const ez = q[1] - p[1];
          const den = dx * ez - dz * ex;
          if (Math.abs(den) < 1e-12) continue;
          const wx = p[0] - c[0];
          const wz = p[1] - c[1];
          const t = (wx * ez - wz * ex) / den;
          const u = (wx * dz - wz * dx) / den;
          if (t > 0 && u >= -1e-6 && u <= 1 + 1e-6) best = Math.max(best, t);
        }
        r[j] = best;
      }
      return r;
    };
    const sliceRings = (srcPts, y0, y1, filter, maxAbsX = 0.175) => {
      const rings = [];
      const dy = 0.008;
      const win = dy * 1.75;
      for (let y = y0; y >= y1 - 1e-6; y -= dy) {
        let pts = srcPts.filter((p) => Math.abs(p[1] - y) <= win && filter(p));
        if (pts.length < 12) continue;
        pts = dropHands(pts, maxAbsX);
        if (pts.length < 12) continue;
        const hull = hull2(pts);
        if (hull.length < 3) continue;
        const c = hull.reduce((s, p) => [s[0] + p[0] / hull.length, s[1] + p[1] / hull.length], [0, 0]);
        rings.push({ y, c, r: radial(hull, c) });
      }
      return rings;
    };
    const smoothRings = (rings, offset) => {
      // 1. Dilate angularly and vertically BEFORE smoothing so convex hip corners never shrink inside skin.
      for (const ring of rings) {
        const r = ring.r.slice();
        for (let j = 0; j < M; j++) {
          ring.r[j] = Math.max(r[(j + M - 1) % M], r[j], r[(j + 1) % M]);
        }
      }
      const dilV = rings.map((g) => g.r.slice());
      for (let s = 0; s < rings.length; s++) {
        const s0 = Math.max(0, s - 1);
        const s1 = Math.min(rings.length - 1, s + 1);
        for (let j = 0; j < M; j++) {
          rings[s].r[j] = Math.max(dilV[s0][j], dilV[s][j], dilV[s1][j]);
        }
      }
      // 2. Smooth angularly and vertically so the fabric surface is completely free of horizontal steps.
      for (let pass = 0; pass < 4; pass++) {
        for (const ring of rings) {
          const r = ring.r.slice();
          for (let j = 0; j < M; j++) ring.r[j] = (r[(j + M - 1) % M] + 2 * r[j] + r[(j + 1) % M]) / 4;
        }
      }
      for (let pass = 0; pass < 4; pass++) {
        const rs = rings.map((g) => g.r.slice());
        const cs = rings.map((g) => g.c.slice());
        for (let s = 1; s < rings.length - 1; s++) {
          for (let j = 0; j < M; j++) rings[s].r[j] = (rs[s - 1][j] + 2 * rs[s][j] + rs[s + 1][j]) / 4;
          rings[s].c = [(cs[s - 1][0] + 2 * cs[s][0] + cs[s + 1][0]) / 4, (cs[s - 1][1] + 2 * cs[s][1] + cs[s + 1][1]) / 4];
        }
      }
      for (const ring of rings) {
        for (let j = 0; j < M; j++) ring.r[j] += offset;
      }
    };
    const positions = [];
    const indices = [];
    const addTube = (rings, capBottom, capTop = false) => {
      if (rings.length < 2) return;
      const base = positions.length / 3;
      for (const ring of rings) {
        for (let j = 0; j < M; j++) {
          const th = (j / M) * Math.PI * 2;
          positions.push(ring.c[0] + ring.r[j] * Math.cos(th), ring.y, ring.c[1] + ring.r[j] * Math.sin(th));
        }
      }
      for (let s = 0; s < rings.length - 1; s++) {
        for (let j = 0; j < M; j++) {
          const a = base + s * M + j;
          const b = base + s * M + ((j + 1) % M);
          const c = base + (s + 1) * M + ((j + 1) % M);
          const d = base + (s + 1) * M + j;
          indices.push(a, b, d, b, c, d);
        }
      }
      if (capBottom) {
        const last = rings[rings.length - 1];
        const capBase = positions.length / 3;
        for (let j = 0; j < M; j++) {
          const th = (j / M) * Math.PI * 2;
          positions.push(last.c[0] + last.r[j] * Math.cos(th), last.y, last.c[1] + last.r[j] * Math.sin(th));
        }
        const centre = positions.length / 3;
        positions.push(last.c[0], last.y, last.c[1]);
        for (let j = 0; j < M; j++) indices.push(capBase + j, capBase + ((j + 1) % M), centre);
      }
      if (capTop) {
        const first = rings[0];
        const capBase = positions.length / 3;
        for (let j = 0; j < M; j++) {
          const th = (j / M) * Math.PI * 2;
          positions.push(first.c[0] + first.r[j] * Math.cos(th), first.y, first.c[1] + first.r[j] * Math.sin(th));
        }
        const centre = positions.length / 3;
        positions.push(first.c[0], first.y, first.c[1]);
        for (let j = 0; j < M; j++) indices.push(capBase + ((j + 1) % M), capBase + j, centre);
      }
    };

    const pelvis = sliceRings(band, yTop, yJoin, () => true);
    smoothRings(pelvis, 0.0085);
    addTube(pelvis, true);
    for (const side of [-1, 1]) {
      const leg = sliceRings(band, yJoin + 0.036, yLeg, (p) => p[0] * side > 0.004);
      smoothRings(leg, 0.008);
      addTube(leg, false);
    }
    if (sex === 'female' && chestBand.length > 200) {
      const bra = sliceRings(chestBand, yBraTop, yBraBot, (p) => Math.abs(p[0]) <= 0.142, 0.142);
      smoothRings(bra, 0.0065);
      addTube(bra, true, true);
    }
    if (indices.length < 300) return;
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    g.setIndex(indices);
    g.computeVertexNormals();
    const mat = new THREE.MeshPhysicalMaterial({
      color: 0x1f3a60,
      roughness: 0.86,
      sheen: 1.0,
      sheenColor: new THREE.Color(0x5b7fb8),
      sheenRoughness: 0.5,
      side: THREE.DoubleSide
    });
    this.materials.applyDanceToMaterial(mat);
    const mesh = new THREE.Mesh(g, mat);
    mesh.name = `modesty-garment-${sex}`;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    this.garments[sex] = { mesh, skin };
    this.groups.skin.add(mesh);
    this._applyGarmentVisibility();
  }

  setModesty(enabled) {
    this.modesty = !!enabled;
    this._applyGarmentVisibility();
  }

  setSex(sex) {
    const next = sex === 'female' ? 'female' : 'male';
    if (this.sex === next) return;
    this.sex = next;
    this._computeFaceLandmarks();
    this._applyIsolation();
    this.dispatchEvent(new CustomEvent('sexchange', { detail: this.sex }));
  }

  // Garments only make sense on an opaque, visible skin of the active sex.
  _applyGarmentVisibility() {
    for (const [sex, entry] of Object.entries(this.garments || {})) {
      if (!entry || !entry.mesh) continue;
      const skinShown = !entry.skin || entry.skin.visible;
      entry.mesh.visible = !!this.modesty && sex === this.sex && skinShown && (this.layerOpacity.skin ?? 0) >= 0.98;
    }
  }

  // Principal axis of the vertex cloud approximates the muscle-fibre / fascicle direction.
  _addFiberAttribute(mesh) {
    const pos = mesh.geometry.attributes.position;
    const n = pos.count;
    let mx = 0;
    let my = 0;
    let mz = 0;
    for (let i = 0; i < n; i++) {
      mx += pos.getX(i);
      my += pos.getY(i);
      mz += pos.getZ(i);
    }
    mx /= n;
    my /= n;
    mz /= n;
    let xx = 0, xy = 0, xz = 0, yy = 0, yz = 0, zz = 0;
    for (let i = 0; i < n; i++) {
      const x = pos.getX(i) - mx;
      const y = pos.getY(i) - my;
      const z = pos.getZ(i) - mz;
      xx += x * x; xy += x * y; xz += x * z; yy += y * y; yz += y * z; zz += z * z;
    }
    let v = [0.3, 1, 0.2];
    for (let it = 0; it < 24; it++) {
      const nx = xx * v[0] + xy * v[1] + xz * v[2];
      const ny = xy * v[0] + yy * v[1] + yz * v[2];
      const nz = xz * v[0] + yz * v[1] + zz * v[2];
      const l = Math.hypot(nx, ny, nz) || 1;
      v = [nx / l, ny / l, nz / l];
    }
    const arr = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      arr[i * 3] = v[0];
      arr[i * 3 + 1] = v[1];
      arr[i * 3 + 2] = v[2];
    }
    mesh.geometry.setAttribute('fiberDir', new THREE.BufferAttribute(arr, 3));
  }

  // --------------------------------------------------------------------------
  // Layers & views
  // --------------------------------------------------------------------------
  setView(viewId) {
    const preset = VIEW_PRESETS[viewId];
    if (!preset) return;
    this.currentView = viewId;
    Object.assign(this.layerOpacity, preset.layers);
    this._applyLayerOpacity();
    this.dispatchEvent(new CustomEvent('layerschange', { detail: { ...this.layerOpacity } }));
  }

  setLayerOpacity(layer, value) {
    if (!(layer in this.layerOpacity)) return;
    this.layerOpacity[layer] = Math.max(0, Math.min(1, value));
    this.currentView = 'custom';
    this._applyLayerOpacity();
    this.dispatchEvent(new CustomEvent('layerschange', { detail: { ...this.layerOpacity } }));
  }

  ensureLayerVisible(layer) {
    const covering = {
      muscles: ['skin'],
      skeleton: ['skin', 'muscles'],
      vessels: ['skin', 'muscles', 'skeleton'],
      organs: ['skin', 'muscles', 'skeleton'],
      nerves: ['skin', 'muscles', 'skeleton']
    };
    let changed = false;
    if ((this.layerOpacity[layer] ?? 0) < 0.6) {
      this.layerOpacity[layer] = 1;
      changed = true;
    }
    for (const c of covering[layer] || []) {
      const cap = c === 'skin' ? 0.08 : c === 'skeleton' ? 0.2 : 0;
      if ((this.layerOpacity[c] ?? 0) > cap + 0.05) {
        this.layerOpacity[c] = cap;
        changed = true;
      }
    }
    if (changed) {
      this.currentView = 'custom';
      this._applyLayerOpacity();
      this.dispatchEvent(new CustomEvent('layerschange', { detail: { ...this.layerOpacity } }));
    }
  }

  _applyLayerOpacity() {
    const op = this.layerOpacity;
    const derived = {
      ...op,
      heart: Math.max(op.organs, op.vessels),
      eyes: Math.max(op.organs, op.muscles, op.skin > 0.99 ? 1 : 0)
    };
    for (const [layer, value] of Object.entries(derived)) {
      this.materials.setLayerOpacity(layer, value);
      const g = this.groups[layer];
      if (g) g.visible = value > 0.005;
    }
    // Draw ghosted outer layers last so inner anatomy shows through correctly.
    const order = { skin: 10, muscles: 6, skeleton: 4, organs: 3, heart: 3, vessels: 2, nerves: 2, eyes: 1 };
    for (const [layer, g] of Object.entries(this.groups)) {
      const transparent = (derived[layer] ?? 1) < 0.995;
      g.traverse((o) => {
        if (o.isMesh) o.renderOrder = transparent ? order[layer] || 0 : 0;
      });
    }
    this._applyGarmentVisibility();
  }

  setAODebug(enabled) {
    this.gtaoPass.output = enabled ? GTAOPass.OUTPUT.Denoise : GTAOPass.OUTPUT.Default;
  }

  setSkinTone(name) {
    if (SKIN_TONES[name]) this.materials.setSkinTone(SKIN_TONES[name]);
  }

  // --------------------------------------------------------------------------
  // Quality
  // --------------------------------------------------------------------------
  setQuality(name) {
    const q = QUALITY[name];
    if (!q) return;
    this.qualityName = name;
    this.quality = q;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, q.dpr));
    if (this.renderer.shadowMap.enabled !== q.shadows) {
      this.renderer.shadowMap.enabled = q.shadows;
      for (const m of this.materials.allMaterials()) m.needsUpdate = true;
    }
    this.keyLight.castShadow = q.shadows;
    this.gtaoPass.enabled = q.ao;
    this.materials.setDetail(q.detail);
    this.resize();
    this.dispatchEvent(new CustomEvent('qualitychange', { detail: name }));
  }

  // --------------------------------------------------------------------------
  // Physiology
  // --------------------------------------------------------------------------
  setHeartRate(bpm) {
    this.heartRate = Math.max(30, Math.min(200, Number(bpm) || 72));
  }

  setBloodFlow(enabled) {
    this.flowEnabled = !!enabled;
    this.materials.shared.uFlowIntensity.value = this.flowEnabled ? 1 : 0;
  }

  setDancing(enabled) {
    const next = !!enabled;
    if (this.dancing === next) return;
    this.dancing = next;
    this.dispatchEvent(new CustomEvent('dancechange', { detail: this.dancing }));
  }

  _updatePhysiology(dt) {
    const targetDance = this.dancing ? 1 : 0;
    if (this.danceMix !== targetDance) {
      const step = dt * 3.2;
      if (this.danceMix < targetDance) {
        this.danceMix = Math.min(1, this.danceMix + step);
      } else {
        this.danceMix = Math.max(0, this.danceMix - step);
      }
      this.materials.shared.uDanceMix.value = this.danceMix;
      if (this.shadowCatcher) {
        this.shadowCatcher.material.opacity = 0.38 * (1 - this.danceMix);
      }
      if (this.keyLight?.shadow?.camera) {
        const wantNear = this.danceMix > 0.05 ? 90 : 0.5;
        if (this.keyLight.shadow.camera.near !== wantNear) {
          this.keyLight.shadow.camera.near = wantNear;
          this.keyLight.shadow.camera.updateProjectionMatrix();
        }
      }
    }

    if (this.danceMix > 0.0001) {
      const danceBpm = Math.max(114, this.heartRate);
      this.dancePhase = (this.dancePhase + dt * (danceBpm / 60) * Math.PI * 2) % (Math.PI * 64);
      this.materials.shared.uDancePhase.value = this.dancePhase;
      if (this.rimLight && this.kickerLight) {
        const hueA = (this.dancePhase / (Math.PI * 8)) % 1;
        const hueB = (hueA + 0.42) % 1;
        const discoRim = new THREE.Color().setHSL(hueA, 0.92, 0.62);
        const discoKick = new THREE.Color().setHSL(hueB, 0.95, 0.58);
        const baseRim = new THREE.Color(0xc2d9ff);
        const baseKick = new THREE.Color(0xffd9c4);
        this.rimLight.color.copy(baseRim).lerp(discoRim, this.danceMix * 0.85);
        this.kickerLight.color.copy(baseKick).lerp(discoKick, this.danceMix * 0.9);
        const beatPulse = 0.5 + 0.5 * Math.sin(this.dancePhase);
        this.rimLight.intensity = 2.2 + this.danceMix * (0.6 + 0.8 * beatPulse);
        this.kickerLight.intensity = 0.55 + this.danceMix * (0.85 + 0.75 * (1 - beatPulse));
      }
    } else if (this.rimLight && this.kickerLight && this.rimLight.intensity !== 2.2) {
      this.rimLight.color.setHex(0xc2d9ff);
      this.rimLight.intensity = 2.2;
      this.kickerLight.color.setHex(0xffd9c4);
      this.kickerLight.intensity = 0.55;
    }

    const physScale = 1 - this.danceMix;
    const bps = this.heartRate / 60;
    this.beatPhase = (this.beatPhase + dt * bps) % 1;
    const p = this.beatPhase;
    // Ventricular systole: contraction between S1 ("lub") and S2 ("dub").
    const smooth = (a, b, x) => {
      const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
      return t * t * (3 - 2 * t);
    };
    const systole = smooth(0.02, 0.14, p) * (1 - smooth(0.3, 0.46, p));
    this.materials.shared.uBeat.value = systole;
    if (this.flowEnabled) this.materials.shared.uFlowTime.value += dt * bps * 1.6;
    const hs = 1 - 0.05 * systole * physScale;
    this.pivots.heart.scale.setScalar(hs);
    this.pivots.coronary.scale.setScalar(hs);

    const breath = Math.sin((this.time * Math.PI * 2) / 4.4) * physScale;
    this.pivots.lungs.scale.set(1 + 0.018 * breath, 1 + 0.012 * breath, 1 + 0.024 * breath);
    this.pivots.diaphragm.position.y = this.diaphragmRestY - 0.007 * breath;
  }

  // --------------------------------------------------------------------------
  // Picking, hover, selection
  // --------------------------------------------------------------------------
  _layerOpacityOf(mesh) {
    const key = mesh.userData.layerKey;
    const op = this.layerOpacity;
    if (key === 'heart') return Math.max(op.organs, op.vessels);
    if (key === 'eyes') return Math.max(op.organs, op.muscles, op.skin > 0.99 ? 1 : 0);
    return op[key] ?? 0;
  }

  pickAt(clientX, clientY) {
    const rect = this.canvas.getBoundingClientRect();
    this.pointer.set(((clientX - rect.left) / rect.width) * 2 - 1, -((clientY - rect.top) / rect.height) * 2 + 1);
    this.raycaster.setFromCamera(this.pointer, this.camera);
    const candidates = this.pickables.filter((m) => m.visible && this._layerOpacityOf(m) > 0.3 && (!this.isolated || this.selection.has(m.userData.partIndex)));
    const hits = this.raycaster.intersectObjects(candidates, false);
    return hits.length ? hits[0] : null;
  }

  setHovered(partIndex) {
    if (this.hovered === partIndex) return;
    const prev = this.hovered;
    this.hovered = partIndex;
    if (prev !== null && prev !== undefined) this._refreshMaterial(prev);
    if (partIndex !== null && partIndex !== undefined) this._refreshMaterial(partIndex);
  }

  setSelection(indices) {
    this.selection = new Set(indices);
    this.selectedDeepLayers = new Set();
    this.selectedPelvicRepro = false;
    for (const i of this.selection) {
      const p = this.manifest?.parts?.[i];
      if (!p) continue;
      if ((p.layer === 'organs' || p.layer === 'nerves') && p.c[2] < 0.065) {
        this.selectedDeepLayers.add(p.layer);
      }
      if (p.mat === 'reproductive' && p.c[1] < 1.05) {
        this.selectedPelvicRepro = true;
      }
    }
    for (const mesh of this.pickables) {
      this._refreshMaterial(mesh.userData.partIndex);
    }
    this._applyIsolation();
  }

  _refreshMaterial(partIndex) {
    const mesh = this.meshByPart.get(partIndex);
    if (!mesh) return;
    const entry = mesh.userData.entry;
    const part = this.manifest?.parts?.[partIndex];
    if (this.selection.has(partIndex)) {
      mesh.material = entry.variants.selected;
    } else if (this.hovered === partIndex) {
      mesh.material = entry.variants.hover;
    } else if (
      this.selectedDeepLayers?.has(mesh.userData.layerKey) &&
      !(this.selectedPelvicRepro && entry.tissue === 'reproductive' && part && part.c[1] < 1.05)
    ) {
      mesh.material = entry.variants.ghost;
    } else {
      mesh.material = entry.base;
    }
  }

  setIsolation(enabled) {
    this.isolated = !!enabled;
    this._applyIsolation();
  }

  setTissueHidden(tissue, hidden) {
    if (!this.hiddenTissues) this.hiddenTissues = new Set();
    if (hidden) this.hiddenTissues.add(tissue);
    else this.hiddenTissues.delete(tissue);
    this._applyIsolation();
  }

  _applyIsolation() {
    const isolate = this.isolated && this.selection.size > 0;
    const hidden = this.hiddenTissues || new Set();
    for (const mesh of this.pickables) {
      const part = this.manifest?.parts?.[mesh.userData.partIndex];
      const partSex = part?.sex || (part?.fj === 'FJ3148' ? 'male' : '');
      const sexMismatch = !!(partSex && partSex !== this.sex);
      const tissueHidden = hidden.has(mesh.userData.entry.tissue) && !this.selection.has(mesh.userData.partIndex);
      mesh.visible = !sexMismatch && !tissueHidden && (!isolate || this.selection.has(mesh.userData.partIndex));
    }
    this._applyGarmentVisibility();
  }

  orbit(dTheta, dPhi) {
    this.tween = null;
    const offset = this.camera.position.clone().sub(this.controls.target);
    const sph = new THREE.Spherical().setFromVector3(offset);
    sph.theta += dTheta;
    sph.phi = THREE.MathUtils.clamp(sph.phi + dPhi, 0.08, Math.PI - 0.08);
    offset.setFromSpherical(sph);
    this.camera.position.copy(this.controls.target).add(offset);
  }

  // --------------------------------------------------------------------------
  // Camera
  // --------------------------------------------------------------------------
  frameParts(indices, { duration = 1.15, padding = 1.25 } = {}) {
    const sphere = this._sphereOfParts(indices);
    if (!sphere) return;
    const fov = THREE.MathUtils.degToRad(this.camera.fov);
    const aspect = Math.max(0.6, Math.min(1.6, this.camera.aspect));
    const effectiveRadius = Math.max(sphere.radius, 0.068);
    const dist = Math.max(0.18, (effectiveRadius * padding) / Math.sin(fov / 2) / Math.min(1, aspect));

    // View from the side of the body the structure lies on (anterior, posterior, left, right).
    const c = sphere.center;
    const allVisceral = indices.every((i) => this.manifest.parts[i]?.layer === 'organs');
    const posterior = !allVisceral && c.z < -0.042;
    const lateral = Math.abs(c.x) > 0.13 ? Math.sign(c.x) * 0.55 : c.x * 2.2;
    const anatomical = new THREE.Vector3(lateral, 0.18, posterior ? -1 : 1).normalize();
    const current = this.camera.position.clone().sub(this.controls.target).normalize();
    const dir = current.dot(anatomical) > 0.55 ? current.lerp(anatomical, 0.35).normalize() : anatomical;

    this._tweenTo(c.clone(), c.clone().addScaledVector(dir, dist), duration);
  }

  resetCamera(duration = 1.1) {
    this._tweenTo(new THREE.Vector3(0, 0.88, 0), new THREE.Vector3(0, 1.0, 3.95), duration);
  }

  zoomBy(factor) {
    const offset = this.camera.position.clone().sub(this.controls.target);
    const len = THREE.MathUtils.clamp(offset.length() * factor, this.controls.minDistance, this.controls.maxDistance);
    this._tweenTo(this.controls.target.clone(), this.controls.target.clone().add(offset.setLength(len)), 0.45);
  }

  getZoomLevel() {
    const d = this.camera.position.distanceTo(this.controls.target);
    return THREE.MathUtils.clamp(Math.log(4.6 / d) / Math.log(4.6 / 0.12), 0, 1);
  }

  setZoomLevel(level) {
    const d = 4.6 / Math.pow(4.6 / 0.12, THREE.MathUtils.clamp(level, 0, 1));
    const offset = this.camera.position.clone().sub(this.controls.target).setLength(d);
    this.camera.position.copy(this.controls.target).add(offset);
  }

  _tweenTo(target, position, duration) {
    this.tween = {
      fromTarget: this.controls.target.clone(),
      fromPos: this.camera.position.clone(),
      toTarget: target,
      toPos: position,
      t: 0,
      duration
    };
  }

  _updateTween(dt) {
    if (!this.tween) return;
    const tw = this.tween;
    tw.t = Math.min(1, tw.t + dt / tw.duration);
    const k = easeInOutCubic(tw.t);
    this.controls.target.lerpVectors(tw.fromTarget, tw.toTarget, k);
    this.camera.position.lerpVectors(tw.fromPos, tw.toPos, k);
    if (tw.t >= 1) this.tween = null;
  }

  projectToScreen(vec3) {
    const v = vec3.clone().project(this.camera);
    const rect = this.canvas.getBoundingClientRect();
    return { x: (v.x * 0.5 + 0.5) * rect.width, y: (-v.y * 0.5 + 0.5) * rect.height, visible: v.z > -1 && v.z < 1 };
  }

  partCenter(partIndex) {
    const p = this.manifest.parts[partIndex];
    return new THREE.Vector3(p.c[0], p.c[1], p.c[2]);
  }

  // Is the part's centre the first visible surface along the camera ray?
  isPartFrontmost(partIndex) {
    const center = this.partCenter(partIndex);
    const dir = center.clone().sub(this.camera.position);
    const dist = dir.length();
    this.raycaster.set(this.camera.position, dir.normalize());
    this.raycaster.far = dist + this.manifest.parts[partIndex].r;
    const candidates = this.pickables.filter((m) => m.visible && this._layerOpacityOf(m) > 0.3);
    const hits = this.raycaster.intersectObjects(candidates, false);
    this.raycaster.far = Infinity;
    return hits.length > 0 && hits[0].object.userData.partIndex === partIndex;
  }

  // --------------------------------------------------------------------------
  // Loop
  // --------------------------------------------------------------------------
  _bindEvents() {
    window.addEventListener('resize', () => this.resize());
    this.controls.addEventListener('start', () => {
      this.tween = null;
    });
    this.canvas.addEventListener('webglcontextlost', (e) => {
      e.preventDefault();
    });
  }

  resize() {
    const w = this.canvas.clientWidth || window.innerWidth;
    const h = this.canvas.clientHeight || window.innerHeight;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h, false);
    if (this.quality && this.quality.ao) {
      this.composer.setPixelRatio(this.renderer.getPixelRatio());
      this.composer.setSize(w, h);
    } else {
      this.composer.setSize(4, 4);
    }
  }

  start() {
    const loop = () => {
      this._raf = requestAnimationFrame(loop);
      const nowMs = performance.now();
      const dt = Math.min(0.05, (nowMs - this.lastFrameTime) / 1000);
      this.lastFrameTime = nowMs;
      this.time += dt;
      this._updateTween(dt);
      this.controls.update();
      this._updatePhysiology(dt);
      if (this.quality.ao && this.danceMix < 0.01) {
        const dist = this.camera.position.distanceTo(this.controls.target);
        this.gtaoPass.updateGtaoMaterial({ radius: THREE.MathUtils.clamp(dist * 0.045, 0.006, 0.09) });
        this.composer.render(dt);
      } else {
        this.renderer.render(this.scene, this.camera);
      }
      this._monitorPerformance(dt);
      this.dispatchEvent(new CustomEvent('frame'));
    };
    loop();
  }

  _monitorPerformance(dt) {
    if (!this.autoQuality || this.loadedLayers.size === 0) return;
    this.frameCount++;
    if (this.frameCount < 30) return;
    this.fpsSamples.push(dt);
    if (this.fpsSamples.length >= 90) {
      const avg = this.fpsSamples.reduce((a, b) => a + b, 0) / this.fpsSamples.length;
      this.fpsSamples.length = 0;
      const fps = 1 / avg;
      if (fps < 28 && this.qualityName === 'high') this.setQuality('balanced');
      else if (fps < 22 && this.qualityName === 'balanced') this.setQuality('fast');
      else if (fps >= 28) this.autoQuality = false; // stable; stop monitoring
    }
  }
}
