/**
 * Build-time tendon mask for BodyParts3D muscle meshes.
 *
 * BodyParts3D fuses most tendons into their muscle meshes (e.g. flexor digitorum profundus runs
 * from the forearm to the distal phalanges as one surface). This module estimates, per vertex, how
 * "tendinous" the surface is, using only the mesh shape:
 *
 *   1. Local thickness by a shape-diameter function (SDF): from each vertex a small cone of rays is
 *      cast inward (opposite the normal) and the median distance to the opposite wall is taken.
 *      A triangle BVH keeps this fast in plain JS.
 *   2. Thresholds are RELATIVE to each muscle: a vertex is tendon-like where its thickness is below
 *      `relThreshold` x the muscle's (area-weighted) 75th-percentile thickness, and below an
 *      absolute cap (`absCapM`, ~9 mm). A soft band around the threshold avoids hard seams.
 *   3. The mask is smoothed over mesh adjacency, small islands are removed, and only regions that
 *      REACH AWAY from the fleshy belly (geodesic distance from the thick "core") are kept. That is
 *      what distinguishes real tendons/aponeuroses at the attachment ends (cords to the fingers, a
 *      flat aponeurosis) from thin patches inside or along the rim of a belly. Every connected thin
 *      region is judged on its own, so multi-tendon fans (FDS/FDP splitting into four tendons across
 *      the palm) need no single muscle axis.
 *
 * Output values are in [0, 1]; the build stores them as the `_TENDON` vertex attribute.
 * Positions are in metres (the build converts BodyParts3D millimetres to metres before this runs).
 */

export const TENDON_DEFAULTS = Object.freeze({
  coneDeg: 30, // half-angle of the inward ray cone
  coneRays: 6, // rays on the cone (plus the central ray) -> 7 rays per vertex
  relThreshold: 0.35, // tendon if thickness < relThreshold x P75(thickness) ...
  absCapM: 0.009, // ... and thickness < 9 mm
  relSize: 0.35, // ... or cross-section breadth < relSize x P75(breadth) (narrow cords of flat-bellied muscles)
  relWeak: 0.7, // hysteresis: kept tendons extend through vertices with breadth < relWeak x P75(breadth)
  growMinDistM: 0.012, // ... but never closer than 12 mm (geodesic) to the belly core
  softness: 0.2, // soft band of +-20% around the threshold
  thicknessSmoothIters: 2,
  sizeSmoothIters: 2,
  axisRadiusRel: 1.5, // local-axis neighbourhood radius = 1.5 x thickness, clamped:
  axisRadiusMinM: 0.003,
  axisRadiusMaxM: 0.012,
  axisMaxVerts: 96, // neighbourhood size cap (full-resolution meshes are ~1 mm apart)
  maskSmoothIters: 2,
  coreRel: 0.7, // belly core = thickness >= coreRel x P75
  minIslandFrac: 0.004, // drop thin islands smaller than 0.4% of the muscle surface ...
  minIslandAreaM2: 12e-6, // ... or 12 mm^2
  reachFrac: 0.18, // a thin region must reach >= reachFrac x muscle size away from the core ...
  reachMinM: 0.004, // ... clamped to [4 mm, 40 mm]
  reachMaxM: 0.04,
  maxRayM: 0.25
});

// ----------------------------------------------------------------------------
// Mesh helpers
// ----------------------------------------------------------------------------
export function buildAdjacency(vertexCount, indices) {
  const deg = new Uint32Array(vertexCount);
  for (let i = 0; i < indices.length; i += 3) {
    const a = indices[i], b = indices[i + 1], c = indices[i + 2];
    deg[a] += 2; deg[b] += 2; deg[c] += 2;
  }
  const offsets = new Uint32Array(vertexCount + 1);
  for (let v = 0; v < vertexCount; v++) offsets[v + 1] = offsets[v] + deg[v];
  const fill = offsets.slice(0, vertexCount);
  const raw = new Uint32Array(offsets[vertexCount]);
  for (let i = 0; i < indices.length; i += 3) {
    const a = indices[i], b = indices[i + 1], c = indices[i + 2];
    raw[fill[a]++] = b; raw[fill[a]++] = c;
    raw[fill[b]++] = a; raw[fill[b]++] = c;
    raw[fill[c]++] = a; raw[fill[c]++] = b;
  }
  // Deduplicate each vertex's neighbour list.
  const outOffsets = new Uint32Array(vertexCount + 1);
  const out = [];
  for (let v = 0; v < vertexCount; v++) {
    const seen = new Set();
    for (let k = offsets[v]; k < offsets[v + 1]; k++) {
      const n = raw[k];
      if (n !== v && !seen.has(n)) {
        seen.add(n);
        out.push(n);
      }
    }
    outOffsets[v + 1] = out.length;
  }
  return { offsets: outOffsets, neighbors: Uint32Array.from(out) };
}

export function vertexAreas(positions, indices) {
  const area = new Float64Array(positions.length / 3);
  for (let i = 0; i < indices.length; i += 3) {
    const a = indices[i] * 3, b = indices[i + 1] * 3, c = indices[i + 2] * 3;
    const abx = positions[b] - positions[a], aby = positions[b + 1] - positions[a + 1], abz = positions[b + 2] - positions[a + 2];
    const acx = positions[c] - positions[a], acy = positions[c + 1] - positions[a + 1], acz = positions[c + 2] - positions[a + 2];
    const cx = aby * acz - abz * acy, cy = abz * acx - abx * acz, cz = abx * acy - aby * acx;
    const third = Math.hypot(cx, cy, cz) / 6;
    area[indices[i]] += third;
    area[indices[i + 1]] += third;
    area[indices[i + 2]] += third;
  }
  return area;
}

export function weightedPercentile(values, weights, p) {
  const idx = [];
  let total = 0;
  for (let i = 0; i < values.length; i++) {
    if (Number.isFinite(values[i]) && weights[i] > 0) {
      idx.push(i);
      total += weights[i];
    }
  }
  if (!idx.length || total <= 0) return NaN;
  idx.sort((a, b) => values[a] - values[b]);
  const target = total * p;
  let acc = 0;
  for (const i of idx) {
    acc += weights[i];
    if (acc >= target) return values[i];
  }
  return values[idx[idx.length - 1]];
}

// ----------------------------------------------------------------------------
// Triangle BVH (median split on centroids) with closest-hit ray queries.
// ----------------------------------------------------------------------------
export class TriangleBVH {
  constructor(positions, indices, leafSize = 6) {
    this.positions = positions;
    this.indices = indices;
    const triCount = indices.length / 3;
    this.order = new Uint32Array(triCount);
    for (let i = 0; i < triCount; i++) this.order[i] = i;
    const cent = new Float32Array(triCount * 3);
    for (let t = 0; t < triCount; t++) {
      for (let k = 0; k < 3; k++) {
        cent[t * 3 + k] = (positions[indices[t * 3] * 3 + k] + positions[indices[t * 3 + 1] * 3 + k] + positions[indices[t * 3 + 2] * 3 + k]) / 3;
      }
    }
    const maxNodes = Math.max(1, 2 * Math.ceil(triCount / Math.max(1, leafSize / 2)) + 1);
    this.bounds = new Float32Array(maxNodes * 6);
    this.left = new Int32Array(maxNodes); // child index, or -1 for leaves
    this.start = new Uint32Array(maxNodes);
    this.count = new Uint32Array(maxNodes);
    this.nodeCount = 0;
    const stack = [[0, triCount, this._alloc()]];
    while (stack.length) {
      const [s, e, node] = stack.pop();
      this._fitBounds(node, s, e);
      if (e - s <= leafSize) {
        this.left[node] = -1;
        this.start[node] = s;
        this.count[node] = e - s;
        continue;
      }
      // Split along the longest axis of the centroid bounds at the median.
      let mn = [Infinity, Infinity, Infinity], mx = [-Infinity, -Infinity, -Infinity];
      for (let i = s; i < e; i++) {
        const t = this.order[i];
        for (let k = 0; k < 3; k++) {
          const v = cent[t * 3 + k];
          if (v < mn[k]) mn[k] = v;
          if (v > mx[k]) mx[k] = v;
        }
      }
      const ext = [mx[0] - mn[0], mx[1] - mn[1], mx[2] - mn[2]];
      const axis = ext[0] > ext[1] ? (ext[0] > ext[2] ? 0 : 2) : ext[1] > ext[2] ? 1 : 2;
      const sub = Array.from(this.order.subarray(s, e)).sort((a, b) => cent[a * 3 + axis] - cent[b * 3 + axis]);
      this.order.set(sub, s);
      const mid = (s + e) >> 1;
      const l = this._alloc();
      const r = this._alloc();
      this.left[node] = l;
      if (r !== l + 1) throw new Error('BVH allocation order');
      stack.push([s, mid, l], [mid, e, r]);
    }
  }

  _alloc() {
    return this.nodeCount++;
  }

  _fitBounds(node, s, e) {
    const b = this.bounds;
    const o = node * 6;
    b[o] = b[o + 1] = b[o + 2] = Infinity;
    b[o + 3] = b[o + 4] = b[o + 5] = -Infinity;
    const P = this.positions, I = this.indices;
    for (let i = s; i < e; i++) {
      const t = this.order[i];
      for (let j = 0; j < 3; j++) {
        const v = I[t * 3 + j] * 3;
        for (let k = 0; k < 3; k++) {
          const x = P[v + k];
          if (x < b[o + k]) b[o + k] = x;
          if (x > b[o + 3 + k]) b[o + 3 + k] = x;
        }
      }
    }
  }

  // Closest hit with t in (tMin, tMax]. Returns { t, tri } or null. `skipVertex` ignores triangles
  // incident to the ray's origin vertex (avoids self-hits at t ~ 0).
  // `label` (with `this.triLabel`) restricts hits to one connected shell: BodyParts3D muscles are often
  // several closed shells that overlap, and a ray must measure its own shell, not a neighbour.
  intersect(ox, oy, oz, dx, dy, dz, tMin, tMax, skipVertex = -1, label = -1) {
    const b = this.bounds, P = this.positions, I = this.indices;
    const ix = 1 / dx, iy = 1 / dy, iz = 1 / dz;
    let best = tMax;
    let bestTri = -1;
    const stack = this._stack || (this._stack = new Int32Array(128));
    let sp = 0;
    stack[sp++] = 0;
    while (sp > 0) {
      const node = stack[--sp];
      const o = node * 6;
      let t0 = ((ix >= 0 ? b[o] : b[o + 3]) - ox) * ix;
      let t1 = ((ix >= 0 ? b[o + 3] : b[o]) - ox) * ix;
      const ty0 = ((iy >= 0 ? b[o + 1] : b[o + 4]) - oy) * iy;
      const ty1 = ((iy >= 0 ? b[o + 4] : b[o + 1]) - oy) * iy;
      if (ty0 > t0) t0 = ty0;
      if (ty1 < t1) t1 = ty1;
      const tz0 = ((iz >= 0 ? b[o + 2] : b[o + 5]) - oz) * iz;
      const tz1 = ((iz >= 0 ? b[o + 5] : b[o + 2]) - oz) * iz;
      if (tz0 > t0) t0 = tz0;
      if (tz1 < t1) t1 = tz1;
      if (t0 > t1 || t1 < tMin || t0 > best) continue;
      const l = this.left[node];
      if (l >= 0) {
        if (sp + 2 > stack.length) {
          const bigger = new Int32Array(stack.length * 2);
          bigger.set(stack);
          this._stack = bigger;
          return this.intersect(ox, oy, oz, dx, dy, dz, tMin, tMax, skipVertex, label);
        }
        stack[sp++] = l;
        stack[sp++] = l + 1;
        continue;
      }
      for (let i = this.start[node], e = i + this.count[node]; i < e; i++) {
        const tri = this.order[i];
        if (label >= 0 && this.triLabel && this.triLabel[tri] !== label) continue;
        const ia = I[tri * 3], ib = I[tri * 3 + 1], ic = I[tri * 3 + 2];
        if (ia === skipVertex || ib === skipVertex || ic === skipVertex) continue;
        const a = ia * 3, bb = ib * 3, c = ic * 3;
        const e1x = P[bb] - P[a], e1y = P[bb + 1] - P[a + 1], e1z = P[bb + 2] - P[a + 2];
        const e2x = P[c] - P[a], e2y = P[c + 1] - P[a + 1], e2z = P[c + 2] - P[a + 2];
        const px = dy * e2z - dz * e2y, py = dz * e2x - dx * e2z, pz = dx * e2y - dy * e2x;
        const det = e1x * px + e1y * py + e1z * pz;
        if (det > -1e-14 && det < 1e-14) continue;
        const inv = 1 / det;
        const sx = ox - P[a], sy = oy - P[a + 1], sz = oz - P[a + 2];
        const u = (sx * px + sy * py + sz * pz) * inv;
        if (u < 0 || u > 1) continue;
        const qx = sy * e1z - sz * e1y, qy = sz * e1x - sx * e1z, qz = sx * e1y - sy * e1x;
        const v = (dx * qx + dy * qy + dz * qz) * inv;
        if (v < 0 || u + v > 1) continue;
        const t = (e2x * qx + e2y * qy + e2z * qz) * inv;
        if (t > tMin && t < best) {
          best = t;
          bestTri = tri;
        }
      }
    }
    return bestTri >= 0 ? { t: best, tri: bestTri } : null;
  }

  triangleNormal(tri) {
    const P = this.positions, I = this.indices;
    const a = I[tri * 3] * 3, b = I[tri * 3 + 1] * 3, c = I[tri * 3 + 2] * 3;
    const e1x = P[b] - P[a], e1y = P[b + 1] - P[a + 1], e1z = P[b + 2] - P[a + 2];
    const e2x = P[c] - P[a], e2y = P[c + 1] - P[a + 1], e2z = P[c + 2] - P[a + 2];
    return [e1y * e2z - e1z * e2y, e1z * e2x - e1x * e2z, e1x * e2y - e1y * e2x];
  }
}

// ----------------------------------------------------------------------------
// Shape-diameter function
// ----------------------------------------------------------------------------
export function shapeDiameter(positions, indices, normals, options = {}) {
  const opt = { ...TENDON_DEFAULTS, ...options };
  const bvh = options.bvh || new TriangleBVH(positions, indices);
  const n = positions.length / 3;
  const out = new Float32Array(n).fill(NaN);
  const ca = Math.cos((opt.coneDeg * Math.PI) / 180);
  const sa = Math.sin((opt.coneDeg * Math.PI) / 180);
  const dists = new Float64Array(opt.coneRays + 1);
  const vlabel = options.vertexLabel || null;
  for (let v = 0; v < n; v++) {
    let nx = normals[v * 3], ny = normals[v * 3 + 1], nz = normals[v * 3 + 2];
    const nl = Math.hypot(nx, ny, nz);
    if (!(nl > 1e-12)) continue;
    // Inward direction and an orthonormal basis around it.
    const dx0 = -nx / nl, dy0 = -ny / nl, dz0 = -nz / nl;
    let ux, uy, uz;
    if (Math.abs(dx0) < 0.9) { ux = 0; uy = dz0; uz = -dy0; } else { ux = -dz0; uy = 0; uz = dx0; }
    const ul = Math.hypot(ux, uy, uz);
    ux /= ul; uy /= ul; uz /= ul;
    const wx = dy0 * uz - dz0 * uy, wy = dz0 * ux - dx0 * uz, wz = dx0 * uy - dy0 * ux;
    const ox = positions[v * 3], oy = positions[v * 3 + 1], oz = positions[v * 3 + 2];
    let count = 0;
    for (let r = 0; r <= opt.coneRays; r++) {
      let dx = dx0, dy = dy0, dz = dz0;
      if (r > 0) {
        const phi = ((r - 1) / opt.coneRays) * Math.PI * 2;
        const cp = Math.cos(phi) * sa, sp = Math.sin(phi) * sa;
        dx = dx0 * ca + ux * cp + wx * sp;
        dy = dy0 * ca + uy * cp + wy * sp;
        dz = dz0 * ca + uz * cp + wz * sp;
      }
      const hit = bvh.intersect(ox, oy, oz, dx, dy, dz, 1e-6, opt.maxRayM, v, vlabel ? vlabel[v] : -1);
      if (!hit) continue;
      // Valid only when we exit through the far wall (its outward normal points along the ray);
      // hitting a wall from outside means overlapping shells or an opening, not thickness.
      const tn = bvh.triangleNormal(hit.tri);
      if (tn[0] * dx + tn[1] * dy + tn[2] * dz <= 0) continue;
      dists[count++] = hit.t;
    }
    if (count === 0) continue;
    const arr = Array.from(dists.subarray(0, count)).sort((a, b) => a - b);
    out[v] = count % 2 ? arr[(count - 1) >> 1] : 0.5 * (arr[count / 2 - 1] + arr[count / 2]);
  }
  return out;
}

// Neighbour-averaging; NaN entries are filled from finite neighbours and ignored as sources.
export function smoothScalar(values, adj, iterations, selfWeight = 0.5) {
  let cur = Float32Array.from(values);
  for (let it = 0; it < iterations; it++) {
    const next = new Float32Array(cur.length);
    for (let v = 0; v < cur.length; v++) {
      let sum = 0, cnt = 0;
      for (let k = adj.offsets[v]; k < adj.offsets[v + 1]; k++) {
        const x = cur[adj.neighbors[k]];
        if (Number.isFinite(x)) { sum += x; cnt++; }
      }
      const self = cur[v];
      if (!Number.isFinite(self)) next[v] = cnt ? sum / cnt : NaN;
      else next[v] = cnt ? selfWeight * self + (1 - selfWeight) * (sum / cnt) : self;
    }
    cur = next;
  }
  return cur;
}

// Multi-source Dijkstra over mesh edges (binary heap).
export function geodesicFromSeeds(positions, adj, seeds) {
  const n = positions.length / 3;
  const dist = new Float64Array(n).fill(Infinity);
  const heapV = [];
  const heapD = [];
  const push = (v, d) => {
    heapV.push(v); heapD.push(d);
    let i = heapV.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (heapD[p] <= heapD[i]) break;
      [heapV[p], heapV[i]] = [heapV[i], heapV[p]];
      [heapD[p], heapD[i]] = [heapD[i], heapD[p]];
      i = p;
    }
  };
  const pop = () => {
    const v = heapV[0], d = heapD[0];
    const lv = heapV.pop(), ld = heapD.pop();
    if (heapV.length) {
      heapV[0] = lv; heapD[0] = ld;
      let i = 0;
      for (;;) {
        const l = 2 * i + 1, r = l + 1;
        let m = i;
        if (l < heapV.length && heapD[l] < heapD[m]) m = l;
        if (r < heapV.length && heapD[r] < heapD[m]) m = r;
        if (m === i) break;
        [heapV[m], heapV[i]] = [heapV[i], heapV[m]];
        [heapD[m], heapD[i]] = [heapD[i], heapD[m]];
        i = m;
      }
    }
    return [v, d];
  };
  for (let v = 0; v < n; v++) if (seeds[v]) { dist[v] = 0; push(v, 0); }
  while (heapV.length) {
    const [v, d] = pop();
    if (d > dist[v]) continue;
    const vx = positions[v * 3], vy = positions[v * 3 + 1], vz = positions[v * 3 + 2];
    for (let k = adj.offsets[v]; k < adj.offsets[v + 1]; k++) {
      const u = adj.neighbors[k];
      const nd = d + Math.hypot(positions[u * 3] - vx, positions[u * 3 + 1] - vy, positions[u * 3 + 2] - vz);
      if (nd < dist[u]) { dist[u] = nd; push(u, nd); }
    }
  }
  return dist;
}

export function connectedComponents(mask, adj) {
  const n = mask.length;
  const label = new Int32Array(n).fill(-1);
  let next = 0;
  const stack = [];
  for (let s = 0; s < n; s++) {
    if (!mask[s] || label[s] >= 0) continue;
    label[s] = next;
    stack.push(s);
    while (stack.length) {
      const v = stack.pop();
      for (let k = adj.offsets[v]; k < adj.offsets[v + 1]; k++) {
        const u = adj.neighbors[k];
        if (mask[u] && label[u] < 0) { label[u] = next; stack.push(u); }
      }
    }
    next++;
  }
  return { label, count: next };
}

const smoothstep = (e0, e1, x) => {
  const t = Math.min(1, Math.max(0, (x - e0) / (e1 - e0)));
  return t * t * (3 - 2 * t);
};

/**
 * Width of the cross-section through each vertex, measured across the local long axis.
 * The axis is the principal direction of the vertices within a small surface neighbourhood
 * (a cord's neighbourhood is elongated along the cord). From the medial point (half the SDF
 * thickness inside) two rays are cast along +-(axis x normal); their summed length is the width.
 * On a flat sheet any in-plane axis gives a large width, so sheets never look like cords.
 */
export function crossWidth(positions, normals, thickness, adj, bvh, options = {}) {
  const opt = { ...TENDON_DEFAULTS, ...options };
  const n = positions.length / 3;
  const width = new Float32Array(n).fill(NaN);
  const mark = new Int32Array(n).fill(-1);
  const queue = new Int32Array(Math.max(n, 1));
  for (let v = 0; v < n; v++) {
    const h = thickness[v];
    if (!Number.isFinite(h)) continue;
    const px = positions[v * 3], py = positions[v * 3 + 1], pz = positions[v * 3 + 2];
    const R = Math.min(opt.axisRadiusMaxM, Math.max(opt.axisRadiusMinM, opt.axisRadiusRel * h));
    const R2 = R * R;
    // Connected neighbourhood within a Euclidean ball (BFS over mesh edges).
    let head = 0;
    let tail = 0;
    queue[tail++] = v;
    mark[v] = v;
    let sx = 0, sy = 0, sz = 0;
    while (head < tail && tail < opt.axisMaxVerts) {
      const u = queue[head++];
      sx += positions[u * 3]; sy += positions[u * 3 + 1]; sz += positions[u * 3 + 2];
      for (let k = adj.offsets[u]; k < adj.offsets[u + 1]; k++) {
        const w = adj.neighbors[k];
        if (mark[w] === v) continue;
        const dx = positions[w * 3] - px, dy = positions[w * 3 + 1] - py, dz = positions[w * 3 + 2] - pz;
        if (dx * dx + dy * dy + dz * dz > R2) continue;
        mark[w] = v;
        if (tail < queue.length) queue[tail++] = w;
      }
    }
    const cnt = head;
    if (cnt < 4) continue;
    const mx = sx / cnt, my = sy / cnt, mz = sz / cnt;
    let xx = 0, xy = 0, xz = 0, yy = 0, yz = 0, zz = 0;
    for (let i = 0; i < cnt; i++) {
      const u = queue[i];
      const x = positions[u * 3] - mx, y = positions[u * 3 + 1] - my, z = positions[u * 3 + 2] - mz;
      xx += x * x; xy += x * y; xz += x * z; yy += y * y; yz += y * z; zz += z * z;
    }
    const nx = normals[v * 3], ny = normals[v * 3 + 1], nz = normals[v * 3 + 2];
    // Power iteration for the principal axis, started orthogonal to the normal.
    let ax, ay, az;
    if (Math.abs(nx) < 0.9) { ax = 1 - nx * nx; ay = -nx * ny; az = -nx * nz; } else { ax = -ny * nx; ay = 1 - ny * ny; az = -ny * nz; }
    for (let it = 0; it < 12; it++) {
      const qx = xx * ax + xy * ay + xz * az, qy = xy * ax + yy * ay + yz * az, qz = xz * ax + yz * ay + zz * az;
      const l = Math.hypot(qx, qy, qz);
      if (!(l > 0)) break;
      ax = qx / l; ay = qy / l; az = qz / l;
    }
    // Width direction: perpendicular to both the axis and the normal.
    let bx = ay * nz - az * ny, by = az * nx - ax * nz, bz = ax * ny - ay * nx;
    const bl = Math.hypot(bx, by, bz);
    if (!(bl > 1e-6)) continue;
    bx /= bl; by /= bl; bz /= bl;
    const ox = px - nx * h * 0.5, oy = py - ny * h * 0.5, oz = pz - nz * h * 0.5;
    const lab = options.vertexLabel ? options.vertexLabel[v] : -1;
    const h1 = bvh.intersect(ox, oy, oz, bx, by, bz, 1e-6, opt.maxRayM, -1, lab);
    const h2 = bvh.intersect(ox, oy, oz, -bx, -by, -bz, 1e-6, opt.maxRayM, -1, lab);
    if (h1 && h2) width[v] = h1.t + h2.t;
    else if (h1 || h2) width[v] = 2 * (h1 || h2).t;
  }
  return width;
}

/**
 * Per-vertex tendon value in [0, 1] for one muscle mesh.
 * @param {Float32Array} positions metres, xyz per vertex
 * @param {Uint32Array|Uint16Array} indices triangle list
 * @param {Float32Array} normals outward unit normals per vertex
 * @returns {{ tendon: Float32Array, thickness: Float32Array, stats: object }}
 */
export function computeTendonMask(positions, indices, normals, options = {}) {
  const opt = { ...TENDON_DEFAULTS, ...options };
  const n = positions.length / 3;
  const tendon = new Float32Array(n);
  const stats = { vertices: n, p75: NaN, threshold: NaN, kept: 0, dropped: 0, fraction: 0 };
  if (n < 8 || indices.length < 12) return { tendon, thickness: new Float32Array(n).fill(NaN), stats };

  const adj = buildAdjacency(n, indices);
  const area = vertexAreas(positions, indices);
  const bvh = new TriangleBVH(positions, indices);
  // Connected shells: rays only measure the shell they start on.
  const shells = connectedComponents(new Uint8Array(n).fill(1), adj);
  const triLabel = new Int32Array(indices.length / 3);
  for (let t = 0; t < triLabel.length; t++) triLabel[t] = shells.label[indices[t * 3]];
  bvh.triLabel = triLabel;
  const rawThickness = shapeDiameter(positions, indices, normals, { ...opt, bvh, vertexLabel: shells.label });
  const thickness = smoothScalar(rawThickness, adj, opt.thicknessSmoothIters);
  // Any vertex still unknown (no valid inward hit in its whole neighbourhood) counts as belly.
  const p75 = weightedPercentile(thickness, area, 0.75);
  stats.p75 = p75;
  if (!Number.isFinite(p75) || p75 <= 0) return { tendon, thickness, stats };
  const threshold = Math.min(opt.relThreshold * p75, opt.absCapM);
  stats.threshold = threshold;

  // Cross-section breadth = max(thickness, width across the local axis). A tendon of a flat-bellied
  // muscle (BodyParts3D flattens several: flexor pollicis longus, fibularis brevis, extensor hallucis
  // longus) can be as thick as its belly, but it is a narrow cord where the belly is a broad strap.
  const width = crossWidth(positions, normals, thickness, adj, bvh, { ...opt, vertexLabel: shells.label });
  let size = new Float32Array(n).fill(NaN);
  for (let v = 0; v < n; v++) {
    if (Number.isFinite(thickness[v]) && Number.isFinite(width[v])) size[v] = Math.max(width[v], thickness[v]);
  }
  size = smoothScalar(size, adj, opt.sizeSmoothIters);
  const sizeP75 = weightedPercentile(size, area, 0.75);
  const sizeThreshold = Number.isFinite(sizeP75) ? opt.relSize * sizeP75 : 0;
  stats.sizeP75 = sizeP75;
  stats.sizeThreshold = sizeThreshold;

  // Soft classification (either criterion), capped by absolute thickness, then smoothed.
  const lo = threshold * (1 - opt.softness);
  const hi = threshold * (1 + opt.softness);
  const capLo = opt.absCapM * (1 - opt.softness);
  const capHi = opt.absCapM * (1 + opt.softness);
  const slo = sizeThreshold * (1 - opt.softness);
  const shi = sizeThreshold * (1 + opt.softness);
  let t = new Float32Array(n);
  for (let v = 0; v < n; v++) {
    const th = thickness[v];
    if (!Number.isFinite(th)) continue;
    const byThickness = 1 - smoothstep(lo, hi, th);
    const bySize = sizeThreshold > 0 && Number.isFinite(size[v]) ? 1 - smoothstep(slo, shi, size[v]) : 0;
    t[v] = Math.max(byThickness, bySize) * (1 - smoothstep(capLo, capHi, th));
  }
  t = smoothScalar(t, adj, opt.maskSmoothIters);

  // Geodesic reach of each thin region away from the fleshy core. The core is surface that is both
  // thick and broad (true belly); a tendon of a slender muscle can be thick-ish or broad-ish, not both.
  const coreLimit = opt.coreRel * p75;
  const coreBreadth = Number.isFinite(sizeP75) ? opt.coreRel * sizeP75 : 0;
  const core = new Uint8Array(n);
  let coreCount = 0;
  for (let v = 0; v < n; v++) {
    const th = thickness[v];
    const br = Number.isFinite(size[v]) ? size[v] : Infinity;
    if (!Number.isFinite(th) || (th >= coreLimit && br >= coreBreadth)) { core[v] = 1; coreCount++; }
  }
  if (coreCount === 0) return { tendon, thickness, stats };
  const dist = geodesicFromSeeds(positions, adj, core);
  // Shells without any core (e.g. a separate tendon shell): reach = straight-line distance to the
  // nearest core vertex (core subsampled to bound the cost).
  const coreIdx = [];
  for (let v = 0; v < n; v++) if (core[v]) coreIdx.push(v);
  const stride = Math.max(1, Math.floor(coreIdx.length / 4000));
  for (let v = 0; v < n; v++) {
    if (Number.isFinite(dist[v])) continue;
    let best = Infinity;
    const x = positions[v * 3], y = positions[v * 3 + 1], z = positions[v * 3 + 2];
    for (let k = 0; k < coreIdx.length; k += stride) {
      const c = coreIdx[k] * 3;
      const d = (positions[c] - x) ** 2 + (positions[c + 1] - y) ** 2 + (positions[c + 2] - z) ** 2;
      if (d < best) best = d;
    }
    dist[v] = Math.sqrt(best);
  }

  let minX = Infinity, minY = Infinity, minZ = Infinity, maxX = -Infinity, maxY = -Infinity, maxZ = -Infinity;
  let totalArea = 0;
  for (let v = 0; v < n; v++) {
    const x = positions[v * 3], y = positions[v * 3 + 1], z = positions[v * 3 + 2];
    if (x < minX) minX = x; if (x > maxX) maxX = x;
    if (y < minY) minY = y; if (y > maxY) maxY = y;
    if (z < minZ) minZ = z; if (z > maxZ) maxZ = z;
    totalArea += area[v];
  }
  const extent = Math.hypot(maxX - minX, maxY - minY, maxZ - minZ);
  const minReach = Math.min(opt.reachMaxM, Math.max(opt.reachMinM, opt.reachFrac * extent));
  const minArea = Math.max(opt.minIslandAreaM2, opt.minIslandFrac * totalArea);

  const thin = new Uint8Array(n);
  for (let v = 0; v < n; v++) thin[v] = t[v] > 0.5 ? 1 : 0;
  const { label, count } = connectedComponents(thin, adj);
  const compArea = new Float64Array(count);
  const compReach = new Float64Array(count);
  for (let v = 0; v < n; v++) {
    const c = label[v];
    if (c < 0) continue;
    compArea[c] += area[v];
    if (dist[v] > compReach[c] && Number.isFinite(dist[v])) compReach[c] = dist[v];
  }
  const keepComp = new Uint8Array(count);
  for (let c = 0; c < count; c++) {
    keepComp[c] = compArea[c] >= minArea && compReach[c] >= minReach ? 1 : 0;
    if (keepComp[c]) stats.kept++;
    else stats.dropped++;
  }

  // Keep kept regions plus a 2-ring soft fringe around them; everything else returns to muscle.
  const allow = new Uint8Array(n);
  for (let v = 0; v < n; v++) if (label[v] >= 0 && keepComp[label[v]]) allow[v] = 2;

  // Hysteresis: a kept tendon is followed along its cord through "weak" vertices (breadth below
  // relWeak x P75 breadth). Weak vertices never start a tendon on their own, so a slender belly
  // stays muscle, but a tendon only moderately narrower than such a belly is traced to its end.
  if (sizeThreshold > 0 && opt.relWeak > opt.relSize) {
    const wThr = opt.relWeak * sizeP75;
    const wlo = wThr * (1 - opt.softness);
    const whi = wThr * (1 + opt.softness);
    const weak = new Float32Array(n);
    for (let v = 0; v < n; v++) {
      const th = thickness[v];
      if (!Number.isFinite(th) || !Number.isFinite(size[v])) continue;
      weak[v] = (1 - smoothstep(wlo, whi, size[v])) * (1 - smoothstep(capLo, capHi, th));
    }
    const queue = [];
    for (let v = 0; v < n; v++) if (allow[v] === 2) queue.push(v);
    for (let qi = 0; qi < queue.length; qi++) {
      const v = queue[qi];
      for (let k = adj.offsets[v]; k < adj.offsets[v + 1]; k++) {
        const u = adj.neighbors[k];
        if (allow[u] === 2 || weak[u] < 0.5 || dist[u] < opt.growMinDistM) continue;
        allow[u] = 2;
        t[u] = Math.max(t[u], weak[u]);
        queue.push(u);
      }
    }
  }
  for (let ring = 0; ring < 2; ring++) {
    const add = [];
    for (let v = 0; v < n; v++) {
      if (allow[v]) continue;
      for (let k = adj.offsets[v]; k < adj.offsets[v + 1]; k++) if (allow[adj.neighbors[k]]) { add.push(v); break; }
    }
    for (const v of add) allow[v] = 1;
  }
  for (let v = 0; v < n; v++) tendon[v] = allow[v] === 2 ? t[v] : allow[v] === 1 ? Math.min(t[v], 0.5) : 0;
  const finalMask = smoothScalar(tendon, adj, 1, 0.6);
  let tendonArea = 0;
  for (let v = 0; v < n; v++) {
    const x = Math.min(1, Math.max(0, finalMask[v]));
    tendon[v] = x;
    if (x >= 0.5) tendonArea += area[v];
  }
  stats.fraction = totalArea > 0 ? tendonArea / totalArea : 0;
  stats.minReach = minReach;
  return { tendon, thickness, breadth: size, reach: dist, stats };
}

export function quantizeUnorm8(values) {
  const out = new Uint8Array(values.length);
  for (let i = 0; i < values.length; i++) {
    const v = values[i];
    out[i] = Number.isFinite(v) ? Math.round(Math.min(1, Math.max(0, v)) * 255) : 0;
  }
  return out;
}
