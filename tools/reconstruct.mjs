/**
 * Anatomical reconstructions for structures that BodyParts3D v4.0 does not include as surfaces.
 *
 *  1. Lungs (5 lobes): BodyParts3D ships the full segmental bronchial tree but no lung surface.
 *     The lungs physically fill the pleural cavities, so we voxelise the space bounded by the real
 *     rib cage (per-slice convex hull, shrunk for rib thickness), above the real diaphragm dome
 *     (height map), and outside the real mediastinum (heart, great vessels, oesophagus, trachea,
 *     spine). A multi-source flood fill seeded from each lobe's segmental bronchial trees assigns
 *     every voxel to the lobe whose airways reach it first (geodesic Voronoi), so fissures fall
 *     between real bronchopulmonary territories. Each lobe is meshed with naive surface nets,
 *     Taubin-smoothed and simplified.
 *
 *  2. Spinal cord: centreline through the real vertebral canals (largest midline gap between the
 *     vertebral body and the posterior arch of each vertebra), swept with an elliptical
 *     cross-section using textbook segmental diameters (cervical and lumbar enlargements,
 *     conus medullaris at L1-L2, filum terminale below).
 *
 * All reconstructed parts are flagged `recon: true` in the manifest so the UI can disclose it.
 */

import { MeshoptSimplifier } from 'meshoptimizer';

// ----------------------------------------------------------------------------
// Small geometry utilities
// ----------------------------------------------------------------------------
function bboxOf(positions) {
  const min = [Infinity, Infinity, Infinity];
  const max = [-Infinity, -Infinity, -Infinity];
  for (let i = 0; i < positions.length; i += 3) {
    for (let k = 0; k < 3; k++) {
      if (positions[i + k] < min[k]) min[k] = positions[i + k];
      if (positions[i + k] > max[k]) max[k] = positions[i + k];
    }
  }
  return { min, max };
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

function signedVolume(positions, indices) {
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
  return vol;
}

function orientOutward(positions, indices) {
  if (signedVolume(positions, indices) < 0) {
    for (let i = 0; i < indices.length; i += 3) {
      const t = indices[i + 1];
      indices[i + 1] = indices[i + 2];
      indices[i + 2] = t;
    }
  }
}

function compact(positions, indices) {
  const remap = new Int32Array(positions.length / 3).fill(-1);
  const out = [];
  const idx = new Uint32Array(indices.length);
  let next = 0;
  for (let i = 0; i < indices.length; i++) {
    const v = indices[i];
    if (remap[v] === -1) {
      remap[v] = next++;
      out.push(positions[v * 3], positions[v * 3 + 1], positions[v * 3 + 2]);
    }
    idx[i] = remap[v];
  }
  return { positions: new Float32Array(out), indices: idx };
}

function simplifyTo(positions, indices, maxTris, errMeters) {
  if (indices.length / 3 <= maxTris) return { positions, indices };
  const [s] = MeshoptSimplifier.simplify(indices, positions, 3, maxTris * 3, errMeters, ['ErrorAbsolute']);
  return compact(positions, s.length >= 36 ? s : indices);
}

function taubinSmooth(positions, indices, iterations = 12, lambda = 0.5, mu = -0.53) {
  const n = positions.length / 3;
  const neighbors = Array.from({ length: n }, () => new Set());
  for (let i = 0; i < indices.length; i += 3) {
    const a = indices[i];
    const b = indices[i + 1];
    const c = indices[i + 2];
    neighbors[a].add(b).add(c);
    neighbors[b].add(a).add(c);
    neighbors[c].add(a).add(b);
  }
  const nb = neighbors.map((s) => [...s]);
  const tmp = new Float32Array(positions.length);
  const step = (factor) => {
    for (let v = 0; v < n; v++) {
      const list = nb[v];
      if (!list.length) {
        tmp[v * 3] = positions[v * 3];
        tmp[v * 3 + 1] = positions[v * 3 + 1];
        tmp[v * 3 + 2] = positions[v * 3 + 2];
        continue;
      }
      let sx = 0;
      let sy = 0;
      let sz = 0;
      for (const u of list) {
        sx += positions[u * 3];
        sy += positions[u * 3 + 1];
        sz += positions[u * 3 + 2];
      }
      const k = 1 / list.length;
      tmp[v * 3] = positions[v * 3] + factor * (sx * k - positions[v * 3]);
      tmp[v * 3 + 1] = positions[v * 3 + 1] + factor * (sy * k - positions[v * 3 + 1]);
      tmp[v * 3 + 2] = positions[v * 3 + 2] + factor * (sz * k - positions[v * 3 + 2]);
    }
    positions.set(tmp);
  };
  for (let it = 0; it < iterations; it++) {
    step(lambda);
    step(mu);
  }
}

// Andrew's monotone chain convex hull (2D, points as [x, z]).
function convexHull(points) {
  const pts = points.slice().sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  if (pts.length < 3) return pts;
  const cross = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
  const lower = [];
  for (const p of pts) {
    while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], p) <= 0) lower.pop();
    lower.push(p);
  }
  const upper = [];
  for (let i = pts.length - 1; i >= 0; i--) {
    const p = pts[i];
    while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], p) <= 0) upper.pop();
    upper.push(p);
  }
  upper.pop();
  lower.pop();
  return lower.concat(upper);
}

// Signed distance-like test: inside a CCW convex hull with at least `margin` clearance.
function insideHull(hull, x, z, margin) {
  if (hull.length < 3) return false;
  for (let i = 0; i < hull.length; i++) {
    const a = hull[i];
    const b = hull[(i + 1) % hull.length];
    const ex = b[0] - a[0];
    const ez = b[1] - a[1];
    const len = Math.hypot(ex, ez) || 1;
    // Left-of-edge distance for CCW hull (positive = inside).
    const d = (ex * (z - a[1]) - ez * (x - a[0])) / len;
    if (d < margin) return false;
  }
  return true;
}

class PointHash {
  constructor(cell) {
    this.cell = cell;
    this.map = new Map();
  }

  key(ix, iy, iz) {
    return `${ix},${iy},${iz}`;
  }

  add(x, y, z, payload) {
    const k = this.key(Math.floor(x / this.cell), Math.floor(y / this.cell), Math.floor(z / this.cell));
    if (!this.map.has(k)) this.map.set(k, []);
    this.map.get(k).push(x, y, z, payload ?? 0);
  }

  anyWithin(x, y, z, r) {
    const ix = Math.floor(x / this.cell);
    const iy = Math.floor(y / this.cell);
    const iz = Math.floor(z / this.cell);
    const r2 = r * r;
    for (let dx = -1; dx <= 1; dx++) {
      for (let dy = -1; dy <= 1; dy++) {
        for (let dz = -1; dz <= 1; dz++) {
          const list = this.map.get(this.key(ix + dx, iy + dy, iz + dz));
          if (!list) continue;
          for (let i = 0; i < list.length; i += 4) {
            const ddx = list[i] - x;
            const ddy = list[i + 1] - y;
            const ddz = list[i + 2] - z;
            if (ddx * ddx + ddy * ddy + ddz * ddz <= r2) return true;
          }
        }
      }
    }
    return false;
  }
}

// Naive surface nets on a scalar grid (inside = value > iso).
function surfaceNets(field, nx, ny, nz, iso, origin, h) {
  const at = (x, y, z) => field[x + nx * (y + ny * z)];
  const cellIndex = new Int32Array((nx - 1) * (ny - 1) * (nz - 1)).fill(-1);
  const cid = (x, y, z) => x + (nx - 1) * (y + (ny - 1) * z);
  const positions = [];
  const corner = [
    [0, 0, 0], [1, 0, 0], [0, 1, 0], [1, 1, 0],
    [0, 0, 1], [1, 0, 1], [0, 1, 1], [1, 1, 1]
  ];
  const edges = [[0, 1], [2, 3], [4, 5], [6, 7], [0, 2], [1, 3], [4, 6], [5, 7], [0, 4], [1, 5], [2, 6], [3, 7]];
  const vals = new Float32Array(8);
  for (let z = 0; z < nz - 1; z++) {
    for (let y = 0; y < ny - 1; y++) {
      for (let x = 0; x < nx - 1; x++) {
        let mask = 0;
        for (let c = 0; c < 8; c++) {
          const v = at(x + corner[c][0], y + corner[c][1], z + corner[c][2]) - iso;
          vals[c] = v;
          if (v > 0) mask |= 1 << c;
        }
        if (mask === 0 || mask === 255) continue;
        let sx = 0;
        let sy = 0;
        let sz = 0;
        let cnt = 0;
        for (const [a, b] of edges) {
          const ia = (mask >> a) & 1;
          const ib = (mask >> b) & 1;
          if (ia === ib) continue;
          const t = vals[a] / (vals[a] - vals[b]);
          sx += corner[a][0] + t * (corner[b][0] - corner[a][0]);
          sy += corner[a][1] + t * (corner[b][1] - corner[a][1]);
          sz += corner[a][2] + t * (corner[b][2] - corner[a][2]);
          cnt++;
        }
        cellIndex[cid(x, y, z)] = positions.length / 3;
        positions.push(origin[0] + h * (x + sx / cnt), origin[1] + h * (y + sy / cnt), origin[2] + h * (z + sz / cnt));
      }
    }
  }
  const indices = [];
  const quad = (a, b, c, d, flip) => {
    if (a < 0 || b < 0 || c < 0 || d < 0) return;
    if (flip) indices.push(a, c, b, a, d, c);
    else indices.push(a, b, c, a, c, d);
  };
  for (let z = 1; z < nz - 1; z++) {
    for (let y = 1; y < ny - 1; y++) {
      for (let x = 1; x < nx - 1; x++) {
        const inside = at(x, y, z) > iso;
        if ((at(x + 1, y, z) > iso) !== inside) {
          quad(cellIndex[cid(x, y - 1, z - 1)], cellIndex[cid(x, y, z - 1)], cellIndex[cid(x, y, z)], cellIndex[cid(x, y - 1, z)], inside);
        }
        if ((at(x, y + 1, z) > iso) !== inside) {
          quad(cellIndex[cid(x - 1, y, z - 1)], cellIndex[cid(x - 1, y, z)], cellIndex[cid(x, y, z)], cellIndex[cid(x, y, z - 1)], inside);
        }
        if ((at(x, y, z + 1) > iso) !== inside) {
          quad(cellIndex[cid(x - 1, y - 1, z)], cellIndex[cid(x, y - 1, z)], cellIndex[cid(x, y, z)], cellIndex[cid(x - 1, y, z)], inside);
        }
      }
    }
  }
  return { positions: new Float32Array(positions), indices: new Uint32Array(indices) };
}

function blur3(field, nx, ny, nz) {
  const k = [1 / 16, 4 / 16, 6 / 16, 4 / 16, 1 / 16];
  let src = field;
  for (const axis of [0, 1, 2]) {
    const dst = new Float32Array(src.length);
    const stride = axis === 0 ? 1 : axis === 1 ? nx : nx * ny;
    const dims = [nx, ny, nz];
    for (let z = 0; z < nz; z++) {
      for (let y = 0; y < ny; y++) {
        for (let x = 0; x < nx; x++) {
          const c = [x, y, z][axis];
          const i = x + nx * (y + ny * z);
          let s = 0;
          for (let o = -2; o <= 2; o++) {
            const cc = c + o;
            if (cc < 0 || cc >= dims[axis]) continue;
            s += src[i + o * stride] * k[o + 2];
          }
          dst[i] = s;
        }
      }
    }
    src = dst;
  }
  return src;
}

// Separable box dilation of a binary mask (radius r voxels).
function dilate(mask, nx, ny, nz, r) {
  let src = mask;
  for (const axis of [0, 1, 2]) {
    const dst = new Uint8Array(src.length);
    const stride = axis === 0 ? 1 : axis === 1 ? nx : nx * ny;
    const dim = [nx, ny, nz][axis];
    for (let z = 0; z < nz; z++) {
      for (let y = 0; y < ny; y++) {
        for (let x = 0; x < nx; x++) {
          const i = x + nx * (y + ny * z);
          if (!src[i]) continue;
          const c = [x, y, z][axis];
          for (let o = -r; o <= r; o++) {
            const cc = c + o;
            if (cc >= 0 && cc < dim) dst[i + o * stride] = 1;
          }
        }
      }
    }
    src = dst;
  }
  return src;
}

function erode(mask, nx, ny, nz, r) {
  const inv = new Uint8Array(mask.length);
  for (let i = 0; i < mask.length; i++) inv[i] = mask[i] ? 0 : 1;
  const d = dilate(inv, nx, ny, nz, r);
  const out = new Uint8Array(mask.length);
  for (let i = 0; i < mask.length; i++) out[i] = d[i] ? 0 : 1;
  return out;
}

// Fill cavities: background voxels not connected to the grid boundary become foreground.
function fillCavities(mask, nx, ny, nz) {
  const outside = new Uint8Array(mask.length);
  const queue = new Int32Array(mask.length);
  let qh = 0;
  let qt = 0;
  const push = (i) => {
    if (!mask[i] && !outside[i]) {
      outside[i] = 1;
      queue[qt++] = i;
    }
  };
  for (let z = 0; z < nz; z++) for (let y = 0; y < ny; y++) for (let x = 0; x < nx; x++) {
    if (x === 0 || y === 0 || z === 0 || x === nx - 1 || y === ny - 1 || z === nz - 1) push(x + nx * (y + ny * z));
  }
  while (qh < qt) {
    const i = queue[qh++];
    const x = i % nx;
    const y = Math.floor(i / nx) % ny;
    const z = Math.floor(i / (nx * ny));
    if (x > 0) push(i - 1);
    if (x < nx - 1) push(i + 1);
    if (y > 0) push(i - nx);
    if (y < ny - 1) push(i + nx);
    if (z > 0) push(i - nx * ny);
    if (z < nz - 1) push(i + nx * ny);
  }
  const out = new Uint8Array(mask.length);
  for (let i = 0; i < mask.length; i++) out[i] = mask[i] || !outside[i] ? 1 : 0;
  return out;
}

// Anterior-most surface (max z) of a set of meshes over the (x, y) voxel columns, by triangle
// rasterisation (vertex splatting leaves gaps on decimated meshes).
function rasterFrontZ(parts, origin, H, nx, ny) {
  const front = new Float32Array(nx * ny).fill(-Infinity);
  const splat = (px, py, pz) => {
    const ix = Math.round(px);
    const iy = Math.round(py);
    if (ix < 0 || iy < 0 || ix >= nx || iy >= ny) return;
    const k = ix + nx * iy;
    if (pz > front[k]) front[k] = pz;
  };
  for (const p of parts) {
    const P = p.positions;
    const I = p.indices;
    for (let t = 0; t < I.length; t += 3) {
      const a = I[t] * 3;
      const b = I[t + 1] * 3;
      const c = I[t + 2] * 3;
      const ax = (P[a] - origin[0]) / H, ay = (P[a + 1] - origin[1]) / H, az = P[a + 2];
      const bx = (P[b] - origin[0]) / H, by = (P[b + 1] - origin[1]) / H, bz = P[b + 2];
      const cx = (P[c] - origin[0]) / H, cy = (P[c + 1] - origin[1]) / H, cz = P[c + 2];
      splat(ax, ay, az);
      splat(bx, by, bz);
      splat(cx, cy, cz);
      const d = (by - cy) * (ax - cx) + (cx - bx) * (ay - cy);
      if (Math.abs(d) < 1e-9) continue;
      const x0 = Math.max(0, Math.ceil(Math.min(ax, bx, cx)));
      const x1 = Math.min(nx - 1, Math.floor(Math.max(ax, bx, cx)));
      const y0 = Math.max(0, Math.ceil(Math.min(ay, by, cy)));
      const y1 = Math.min(ny - 1, Math.floor(Math.max(ay, by, cy)));
      for (let y = y0; y <= y1; y++) {
        for (let x = x0; x <= x1; x++) {
          const l1 = ((by - cy) * (x - cx) + (cx - bx) * (y - cy)) / d;
          const l2 = ((cy - ay) * (x - cx) + (ax - cx) * (y - cy)) / d;
          const l3 = 1 - l1 - l2;
          if (l1 < -1e-6 || l2 < -1e-6 || l3 < -1e-6) continue;
          const z = l1 * az + l2 * bz + l3 * cz;
          const k = x + nx * y;
          if (z > front[k]) front[k] = z;
        }
      }
    }
  }
  return front;
}

// Keep only the largest 6-connected component of a binary mask (in place); returns voxels removed.
function keepLargestComponent(mask, nx, ny, nz) {
  const comp = new Int32Array(mask.length).fill(-1);
  const queue = new Int32Array(mask.length);
  const sizes = [];
  for (let s = 0; s < mask.length; s++) {
    if (!mask[s] || comp[s] !== -1) continue;
    const id = sizes.length;
    let qh = 0;
    let qt = 0;
    comp[s] = id;
    queue[qt++] = s;
    while (qh < qt) {
      const i = queue[qh++];
      const x = i % nx;
      const y = Math.floor(i / nx) % ny;
      const z = Math.floor(i / (nx * ny));
      const nb = [x > 0 ? i - 1 : -1, x < nx - 1 ? i + 1 : -1, y > 0 ? i - nx : -1, y < ny - 1 ? i + nx : -1, z > 0 ? i - nx * ny : -1, z < nz - 1 ? i + nx * ny : -1];
      for (const j of nb) {
        if (j < 0 || !mask[j] || comp[j] !== -1) continue;
        comp[j] = id;
        queue[qt++] = j;
      }
    }
    sizes.push(qt);
  }
  if (sizes.length <= 1) return 0;
  const best = sizes.indexOf(Math.max(...sizes));
  let removed = 0;
  for (let i = 0; i < mask.length; i++) {
    if (mask[i] && comp[i] !== best) {
      mask[i] = 0;
      removed++;
    }
  }
  return removed;
}

function makePart(name, positions, indices, extras) {
  orientOutward(positions, indices);
  const normals = computeNormals(positions, indices);
  return { name, positions, normals, indices, bb: bboxOf(positions), extras: { ...extras, recon: 1 } };
}

// ----------------------------------------------------------------------------
// Lungs
// ----------------------------------------------------------------------------
const LOBES = [
  { id: 'RUL', name: 'Superior lobe of right lung', side: 'right', match: /right (apical|posterior|anterior) segmental bronchial tree/i },
  { id: 'RML', name: 'Middle lobe of right lung', side: 'right', match: /^(lateral|medial) segmental bronchial tree/i },
  { id: 'RLL', name: 'Inferior lobe of right lung', side: 'right', match: /right (superior|medial basal|anterior basal|lateral basal|posterior basal) segmental bronchial tree/i },
  { id: 'LUL', name: 'Superior lobe of left lung', side: 'left', match: /left (apical|posterior|anterior) segmental bronchial tree|lingular bronchial tree/i },
  { id: 'LLL', name: 'Inferior lobe of left lung', side: 'left', match: /left (superior|medial basal|anterior basal|lateral basal|posterior basal) segmental bronchial tree/i }
];

export function reconstructLungs(allParts, log = console.log) {
  const H = 0.004; // voxel size (m)
  const byName = (re) => allParts.filter((p) => re.test(p.name));
  const ribs = byName(/\brib\b|costal cartilage|sternum|manubrium|xiphoid/i);
  const vertebrae = byName(/thoracic vertebra|intervertebral dis[ck] of .*thoracic/i);
  const diaphragm = byName(/^diaphragm$/i);
  const mediastinum = allParts.filter(
    (p) =>
      p.extras.group === 'heart' ||
      /aorta|vena cava|pulmonary trunk|^(left|right) pulmonary artery$|brachiocephalic|azygos|esophagus|trachea|thymus|^(left|right) main bronchus|thoracic duct/i.test(p.name)
  );
  if (!ribs.length || !diaphragm.length) {
    log('  [lungs] skipped: rib cage or diaphragm not found');
    return [];
  }

  // Grid bounds from the rib cage.
  const wallPts = [];
  for (const p of [...ribs, ...vertebrae]) for (let i = 0; i < p.positions.length; i += 3) wallPts.push([p.positions[i], p.positions[i + 1], p.positions[i + 2]]);
  const rb = bboxOf(new Float32Array(ribs.flatMap((p) => Array.from(p.positions))));
  const db = bboxOf(diaphragm[0].positions);
  const origin = [rb.min[0] - 2 * H, db.min[1] - 2 * H, rb.min[2] - 2 * H];
  const top = rb.max[1] + 0.03;
  const nx = Math.ceil((rb.max[0] - origin[0]) / H) + 3;
  const ny = Math.ceil((top - origin[1]) / H) + 3;
  const nz = Math.ceil((rb.max[2] - origin[2]) / H) + 3;
  const N = nx * ny * nz;
  const vid = (x, y, z) => x + nx * (y + ny * z);
  const center = (x, y, z) => [origin[0] + x * H, origin[1] + y * H, origin[2] + z * H];

  // Per-slice rib-cage hulls.
  const hulls = new Array(ny);
  const slab = 0.012;
  const ptsByY = wallPts.slice().sort((a, b) => a[1] - b[1]);
  for (let y = 0; y < ny; y++) {
    const yc = origin[1] + y * H;
    const pts = [];
    for (const p of ptsByY) {
      if (p[1] < yc - slab) continue;
      if (p[1] > yc + slab) break;
      pts.push([p[0], p[2]]);
    }
    hulls[y] = pts.length >= 24 ? convexHull(pts) : [];
  }

  // Diaphragm height map (top surface), hole-filled.
  const HC = 0.008;
  const hmx = Math.ceil((rb.max[0] - origin[0]) / HC) + 2;
  const hmz = Math.ceil((rb.max[2] - origin[2]) / HC) + 2;
  const hm = new Float32Array(hmx * hmz).fill(NaN);
  const dp = diaphragm[0].positions;
  for (let i = 0; i < dp.length; i += 3) {
    const ix = Math.floor((dp[i] - origin[0]) / HC);
    const iz = Math.floor((dp[i + 2] - origin[2]) / HC);
    if (ix < 0 || iz < 0 || ix >= hmx || iz >= hmz) continue;
    const k = ix + hmx * iz;
    if (Number.isNaN(hm[k]) || dp[i + 1] > hm[k]) hm[k] = dp[i + 1];
  }
  for (let pass = 0; pass < 40; pass++) {
    let filled = 0;
    const copy = hm.slice();
    for (let iz = 0; iz < hmz; iz++) {
      for (let ix = 0; ix < hmx; ix++) {
        const k = ix + hmx * iz;
        if (!Number.isNaN(copy[k])) continue;
        let s = 0;
        let c = 0;
        for (const [dx, dz] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
          const jx = ix + dx;
          const jz = iz + dz;
          if (jx < 0 || jz < 0 || jx >= hmx || jz >= hmz) continue;
          const v = copy[jx + hmx * jz];
          if (!Number.isNaN(v)) {
            s += v;
            c++;
          }
        }
        if (c) {
          hm[k] = s / c;
          filled++;
        }
      }
    }
    if (!filled) break;
  }
  for (let pass = 0; pass < 3; pass++) {
    const copy = hm.slice();
    for (let iz = 1; iz < hmz - 1; iz++) {
      for (let ix = 1; ix < hmx - 1; ix++) {
        let sum = 0;
        let c = 0;
        for (let dz = -1; dz <= 1; dz++) for (let dx = -1; dx <= 1; dx++) {
          const v = copy[ix + dx + hmx * (iz + dz)];
          if (!Number.isNaN(v)) {
            sum += v;
            c++;
          }
        }
        if (c) hm[ix + hmx * iz] = sum / c;
      }
    }
  }
  const domeAt = (x, z) => {
    const ix = Math.min(hmx - 1, Math.max(0, Math.floor((x - origin[0]) / HC)));
    const iz = Math.min(hmz - 1, Math.max(0, Math.floor((z - origin[2]) / HC)));
    const v = hm[ix + hmx * iz];
    return Number.isNaN(v) ? db.min[1] : v;
  };

  // Exclusion shell: mediastinum + spine.
  const excl = new PointHash(0.01);
  for (const p of [...mediastinum, ...vertebrae]) for (let i = 0; i < p.positions.length; i += 3) excl.add(p.positions[i], p.positions[i + 1], p.positions[i + 2]);

  const allowed = new Uint8Array(N);
  const hard = new Uint8Array(N); // rib cage + diaphragm limits only (no mediastinum)
  let allowedCount = 0;
  for (let z = 0; z < nz; z++) {
    for (let y = 0; y < ny; y++) {
      const hull = hulls[y];
      if (!hull.length) continue;
      for (let x = 0; x < nx; x++) {
        const [cx, cy, cz] = center(x, y, z);
        if (!insideHull(hull, cx, cz, 0.009)) continue;
        if (cy < domeAt(cx, cz) + 0.006) continue;
        hard[vid(x, y, z)] = 1;
        if (excl.anyWithin(cx, cy, cz, 0.0065)) continue;
        allowed[vid(x, y, z)] = 1;
        allowedCount++;
      }
    }
  }

  // Multi-source flood fill from each lobe's segmental bronchial trees.
  const label = new Int8Array(N).fill(-1);
  const queue = new Int32Array(N);
  let qh = 0;
  let qt = 0;
  const seedCounts = LOBES.map(() => 0);
  LOBES.forEach((lobe, li) => {
    for (const p of allParts) {
      if (p.extras.mat !== 'airway' || !lobe.match.test(p.name)) continue;
      for (let i = 0; i < p.positions.length; i += 3) {
        const x = p.positions[i];
        if ((lobe.side === 'right') !== (x < 0)) continue;
        const ix = Math.round((x - origin[0]) / H);
        const iy = Math.round((p.positions[i + 1] - origin[1]) / H);
        const iz = Math.round((p.positions[i + 2] - origin[2]) / H);
        if (ix < 0 || iy < 0 || iz < 0 || ix >= nx || iy >= ny || iz >= nz) continue;
        const v = vid(ix, iy, iz);
        if (!allowed[v] || label[v] !== -1) continue;
        label[v] = li;
        queue[qt++] = v;
        seedCounts[li]++;
      }
    }
  });
  while (qh < qt) {
    const v = queue[qh++];
    const x = v % nx;
    const y = Math.floor(v / nx) % ny;
    const z = Math.floor(v / (nx * ny));
    const l = label[v];
    const side = LOBES[l].side;
    for (const [dx, dy, dz] of [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]]) {
      const xx = x + dx;
      const yy = y + dy;
      const zz = z + dz;
      if (xx < 0 || yy < 0 || zz < 0 || xx >= nx || yy >= ny || zz >= nz) continue;
      const u = vid(xx, yy, zz);
      if (!allowed[u] || label[u] !== -1) continue;
      // Keep each lung on its own side of the midline.
      const ux = origin[0] + xx * H;
      if ((side === 'right' && ux > 0.012) || (side === 'left' && ux < -0.012)) continue;
      label[u] = l;
      queue[qt++] = u;
    }
  }

  // Morphological closing per lung (fills surface craters from the exclusion shell), limited by
  // the hard cavity mask, then cavity filling; new voxels inherit the nearest lobe label.
  for (const side of ['right', 'left']) {
    const lobesOfSide = LOBES.map((l, i) => (l.side === side ? i : -1)).filter((i) => i >= 0);
    const mask = new Uint8Array(N);
    for (let v = 0; v < N; v++) if (label[v] >= 0 && lobesOfSide.includes(label[v])) mask[v] = 1;
    let closed = erode(dilate(mask, nx, ny, nz, 3), nx, ny, nz, 3);
    for (let v = 0; v < N; v++) if (!hard[v]) closed[v] = 0;
    closed = fillCavities(closed, nx, ny, nz);
    for (let v = 0; v < N; v++) if (!hard[v]) closed[v] = 0;
    qh = 0;
    qt = 0;
    for (let v = 0; v < N; v++) if (mask[v]) queue[qt++] = v;
    while (qh < qt) {
      const v = queue[qh++];
      const x = v % nx;
      const y = Math.floor(v / nx) % ny;
      const z = Math.floor(v / (nx * ny));
      for (const [dx, dy, dz] of [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]]) {
        const xx = x + dx;
        const yy = y + dy;
        const zz = z + dz;
        if (xx < 0 || yy < 0 || zz < 0 || xx >= nx || yy >= ny || zz >= nz) continue;
        const u = vid(xx, yy, zz);
        if (!closed[u] || label[u] !== -1) continue;
        label[u] = label[v];
        queue[qt++] = u;
      }
    }
  }

  // Bare area / cardiac notch. Where the heart and great vessels nearly touch the chest wall only a
  // 1-2 voxel sheet of lung is left in front of them; the smoothing below would tear that sheet into
  // ragged holes. Real lungs are absent there (the pericardium meets the sternum and the left lung's
  // anterior border swings laterally), so remove sheets thinner than ~16 mm in front of the
  // mediastinum, then open by one voxel and keep each lobe's largest piece.
  {
    const front = rasterFrontZ(mediastinum, origin, H, nx, ny);
    const sideIdx = LOBES.map((l) => (l.side === 'right' ? 0 : 1));
    const cols = nx * ny;
    const thick = [new Float32Array(cols), new Float32Array(cols)];
    for (let z = 0; z < nz; z++) {
      const cz = origin[2] + z * H;
      for (let k = 0; k < cols; k++) {
        if (!(cz > front[k] + 0.002)) continue;
        const l = label[k + cols * z];
        if (l >= 0) thick[sideIdx[l]][k]++;
      }
    }
    let carved = 0;
    for (let s = 0; s < 2; s++) {
      // Smooth the thickness map so the notch edge follows the anatomy, not voxel noise.
      let t = thick[s];
      for (let pass = 0; pass < 2; pass++) {
        const out = new Float32Array(cols);
        for (let y = 0; y < ny; y++) {
          for (let x = 0; x < nx; x++) {
            const k = x + nx * y;
            if (front[k] === -Infinity) {
              out[k] = 99;
              continue;
            }
            let sum = 0;
            let c = 0;
            for (let dy = -1; dy <= 1; dy++) {
              for (let dx = -1; dx <= 1; dx++) {
                const xx = x + dx;
                const yy = y + dy;
                if (xx < 0 || yy < 0 || xx >= nx || yy >= ny) continue;
                const kk = xx + nx * yy;
                if (front[kk] === -Infinity) continue;
                sum += t[kk];
                c++;
              }
            }
            out[k] = sum / c;
          }
        }
        t = out;
      }
      for (let k = 0; k < cols; k++) {
        if (front[k] === -Infinity || t[k] >= 4) continue;
        for (let z = 0; z < nz; z++) {
          const v = k + cols * z;
          const l = label[v];
          if (l < 0 || sideIdx[l] !== s) continue;
          if (!(origin[2] + z * H > front[k] + 0.002)) continue;
          label[v] = -1;
          carved++;
        }
      }
    }
    // One-voxel opening per side removes any remaining sheets the smoothing would perforate.
    let opened = 0;
    let islands = 0;
    for (const side of ['right', 'left']) {
      const mask = new Uint8Array(N);
      for (let v = 0; v < N; v++) if (label[v] >= 0 && LOBES[label[v]].side === side) mask[v] = 1;
      const keep = dilate(erode(mask, nx, ny, nz, 1), nx, ny, nz, 1);
      for (let v = 0; v < N; v++) {
        if (mask[v] && !keep[v]) {
          label[v] = -1;
          opened++;
        }
      }
    }
    LOBES.forEach((_, li) => {
      const mask = new Uint8Array(N);
      for (let v = 0; v < N; v++) if (label[v] === li) mask[v] = 1;
      islands += keepLargestComponent(mask, nx, ny, nz);
      for (let v = 0; v < N; v++) if (label[v] === li && !mask[v]) label[v] = -1;
    });
    log(`  [lungs] bare-area carve ${carved} voxels, opening ${opened}, islands ${islands}`);
  }

  const parts = [];
  LOBES.forEach((lobe, li) => {
    let count = 0;
    const field = new Float32Array(N);
    for (let v = 0; v < N; v++) {
      if (label[v] === li) {
        field[v] = 1;
        count++;
      }
    }
    if (count < 200) {
      log(`  [lungs] ${lobe.id}: too few voxels (${count}), skipped`);
      return;
    }
    const smooth = blur3(blur3(field, nx, ny, nz), nx, ny, nz);
    let mesh = surfaceNets(smooth, nx, ny, nz, 0.56, origin, H);
    mesh = compact(mesh.positions, mesh.indices);
    taubinSmooth(mesh.positions, mesh.indices, 24);
    mesh = simplifyTo(mesh.positions, mesh.indices, 9000, 0.0006);
    const volumeL = (count * H * H * H * 1000).toFixed(2);
    log(`  [lungs] ${lobe.name}: ${count} voxels (~${volumeL} L), seeds ${seedCounts[li]}, ${mesh.indices.length / 3} tris`);
    parts.push(
      makePart(lobe.name, mesh.positions, mesh.indices, {
        fj: `RECON-LUNG-${lobe.id}`,
        fma: '',
        cat: 'organ',
        mat: 'lung',
        layer: 'organs',
        flow: 0,
        group: 'lungs',
        side: lobe.side
      })
    );
  });
  log(`  [lungs] thoracic cavity voxels: ${allowedCount}`);
  return parts;
}

// ----------------------------------------------------------------------------
// Spinal cord
// ----------------------------------------------------------------------------
const LEVELS = (() => {
  const ord = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth'];
  const map = new Map([['atlas', 1], ['axis', 2]]);
  ord.slice(0, 7).forEach((o, i) => map.set(`${o} cervical vertebra`, i + 1));
  ord.forEach((o, i) => map.set(`${o} thoracic vertebra`, 8 + i));
  ord.slice(0, 5).forEach((o, i) => map.set(`${o} lumbar vertebra`, 20 + i));
  return map;
})();

// Transverse / anteroposterior cord radii (mm) by vertebral level (1 = C1 ... 20 = L1).
function cordRadii(level) {
  const table = [
    [0, 6.2, 5.0],
    [1, 5.6, 4.4],
    [3, 5.8, 4.2],
    [5, 6.8, 4.3],
    [7, 6.4, 4.1],
    [9, 4.7, 3.9],
    [16, 4.5, 3.8],
    [18, 5.2, 4.2],
    [19.4, 4.6, 3.9],
    [20.3, 2.2, 2.0],
    [21, 0.7, 0.7],
    [25, 0.5, 0.5]
  ];
  for (let i = 0; i < table.length - 1; i++) {
    const [l0, a0, b0] = table[i];
    const [l1, a1, b1] = table[i + 1];
    if (level <= l1) {
      const t = Math.max(0, Math.min(1, (level - l0) / (l1 - l0)));
      return [(a0 + t * (a1 - a0)) / 1000, (b0 + t * (b1 - b0)) / 1000];
    }
  }
  return [0.0005, 0.0005];
}

function canalCenter(part) {
  const p = part.positions;
  const bb = part.bb;
  const ymid = (bb.min[1] + bb.max[1]) / 2;
  const zs = [];
  for (let i = 0; i < p.length; i += 3) {
    if (Math.abs(p[i]) < 0.005 && Math.abs(p[i + 1] - ymid) < 0.009) zs.push(p[i + 2]);
  }
  if (zs.length < 6) return null;
  zs.sort((a, b) => a - b);
  let best = 0;
  let at = -1;
  for (let i = 0; i + 1 < zs.length; i++) {
    const gap = zs[i + 1] - zs[i];
    if (gap > best) {
      best = gap;
      at = i;
    }
  }
  if (best < 0.007) return null;
  return [0, ymid, (zs[at] + zs[at + 1]) / 2];
}

function catmull(p0, p1, p2, p3, t) {
  const t2 = t * t;
  const t3 = t2 * t;
  return p1.map((_, k) => 0.5 * (2 * p1[k] + (-p0[k] + p2[k]) * t + (2 * p0[k] - 5 * p1[k] + 4 * p2[k] - p3[k]) * t2 + (-p0[k] + 3 * p1[k] - 3 * p2[k] + p3[k]) * t3));
}

export function reconstructSpinalCord(allParts, log = console.log) {
  const pts = [];
  for (const part of allParts) {
    const level = LEVELS.get(part.name.toLowerCase());
    if (!level || level > 22) continue;
    const c = canalCenter(part);
    if (c) pts.push({ level, c });
  }
  if (pts.length < 8) {
    log(`  [cord] skipped: only ${pts.length} vertebral canals found`);
    return [];
  }
  pts.sort((a, b) => a.level - b.level);
  // Extend upward through the foramen magnum to the medulla, and down to L2 (filum).
  const first = pts[0];
  const second = pts[1];
  const up = first.c.map((v, k) => v + (first.c[k] - second.c[k]) * 0.9);
  const ctrl = [{ level: 0, c: up }, ...pts];
  const lastP = ctrl[ctrl.length - 1];
  const prevP = ctrl[ctrl.length - 2];
  ctrl.push({ level: lastP.level + 1, c: lastP.c.map((v, k) => v + (lastP.c[k] - prevP.c[k])) });

  const samples = [];
  for (let i = 0; i < ctrl.length - 1; i++) {
    const p0 = ctrl[Math.max(0, i - 1)].c;
    const p1 = ctrl[i].c;
    const p2 = ctrl[i + 1].c;
    const p3 = ctrl[Math.min(ctrl.length - 1, i + 2)].c;
    const steps = 10;
    for (let s = 0; s < steps; s++) {
      const t = s / steps;
      samples.push({ p: catmull(p0, p1, p2, p3, t), level: ctrl[i].level + t * (ctrl[i + 1].level - ctrl[i].level) });
    }
  }
  samples.push({ p: ctrl[ctrl.length - 1].c, level: ctrl[ctrl.length - 1].level });

  const SEG = 20;
  const positions = [];
  const indices = [];
  for (let i = 0; i < samples.length; i++) {
    const a = samples[Math.max(0, i - 1)].p;
    const b = samples[Math.min(samples.length - 1, i + 1)].p;
    let t = [b[0] - a[0], b[1] - a[1], b[2] - a[2]];
    const tl = Math.hypot(...t) || 1;
    t = t.map((v) => v / tl);
    // Frame: x stays transverse (left-right), second axis completes the basis.
    let ax = [1, 0, 0];
    const d = ax[0] * t[0] + ax[1] * t[1] + ax[2] * t[2];
    ax = ax.map((v, k) => v - d * t[k]);
    const al = Math.hypot(...ax) || 1;
    ax = ax.map((v) => v / al);
    const az = [t[1] * ax[2] - t[2] * ax[1], t[2] * ax[0] - t[0] * ax[2], t[0] * ax[1] - t[1] * ax[0]];
    const [rx, rz] = cordRadii(samples[i].level);
    for (let s = 0; s < SEG; s++) {
      const ang = (s / SEG) * Math.PI * 2;
      const cx = Math.cos(ang) * rx;
      const cz = Math.sin(ang) * rz;
      positions.push(samples[i].p[0] + ax[0] * cx + az[0] * cz, samples[i].p[1] + ax[1] * cx + az[1] * cz, samples[i].p[2] + ax[2] * cx + az[2] * cz);
    }
  }
  const rings = samples.length;
  for (let i = 0; i < rings - 1; i++) {
    for (let s = 0; s < SEG; s++) {
      const a = i * SEG + s;
      const b = i * SEG + ((s + 1) % SEG);
      const c = (i + 1) * SEG + s;
      const dd = (i + 1) * SEG + ((s + 1) % SEG);
      indices.push(a, c, b, b, c, dd);
    }
  }
  // Caps.
  const topC = positions.length / 3;
  positions.push(...samples[0].p);
  const botC = positions.length / 3;
  positions.push(...samples[rings - 1].p);
  for (let s = 0; s < SEG; s++) {
    indices.push(topC, s, (s + 1) % SEG);
    indices.push(botC, (rings - 1) * SEG + ((s + 1) % SEG), (rings - 1) * SEG + s);
  }
  log(`  [cord] centreline through ${pts.length} vertebral canals, ${indices.length / 3} tris`);
  return [
    makePart('Spinal cord', new Float32Array(positions), new Uint32Array(indices), {
      fj: 'RECON-SPINAL-CORD',
      fma: '',
      cat: 'nerve',
      mat: 'cord',
      layer: 'nerves',
      flow: 0,
      group: '',
      side: ''
    })
  ];
}
