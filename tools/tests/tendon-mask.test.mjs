/**
 * Unit tests (small, synthetic meshes) for tools/tendon-mask.mjs.
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import { TriangleBVH, shapeDiameter, computeTendonMask, quantizeUnorm8, weightedPercentile } from '../tendon-mask.mjs';

// Closed tube along +Z: rings of radius r(z) with `seg` segments, capped at both ends. Outward winding.
function makeTube(profile, seg = 24) {
  const pos = [];
  const idx = [];
  for (const [z, r] of profile) {
    for (let s = 0; s < seg; s++) {
      const a = (s / seg) * Math.PI * 2;
      pos.push(Math.cos(a) * r, Math.sin(a) * r, z);
    }
  }
  const rings = profile.length;
  for (let i = 0; i < rings - 1; i++) {
    for (let s = 0; s < seg; s++) {
      const a = i * seg + s, b = i * seg + ((s + 1) % seg), c = (i + 1) * seg + s, d = (i + 1) * seg + ((s + 1) % seg);
      idx.push(a, b, d, a, d, c);
    }
  }
  const bottom = pos.length / 3;
  pos.push(0, 0, profile[0][0]);
  const top = pos.length / 3;
  pos.push(0, 0, profile[rings - 1][0]);
  for (let s = 0; s < seg; s++) {
    idx.push(bottom, (s + 1) % seg, s);
    idx.push(top, (rings - 1) * seg + s, (rings - 1) * seg + ((s + 1) % seg));
  }
  return { positions: new Float32Array(pos), indices: new Uint32Array(idx) };
}

function normalsOf(positions, indices) {
  const n = new Float32Array(positions.length);
  for (let i = 0; i < indices.length; i += 3) {
    const a = indices[i] * 3, b = indices[i + 1] * 3, c = indices[i + 2] * 3;
    const e1 = [positions[b] - positions[a], positions[b + 1] - positions[a + 1], positions[b + 2] - positions[a + 2]];
    const e2 = [positions[c] - positions[a], positions[c + 1] - positions[a + 1], positions[c + 2] - positions[a + 2]];
    const f = [e1[1] * e2[2] - e1[2] * e2[1], e1[2] * e2[0] - e1[0] * e2[2], e1[0] * e2[1] - e1[1] * e2[0]];
    for (const v of [a, b, c]) for (let k = 0; k < 3; k++) n[v + k] += f[k];
  }
  for (let i = 0; i < n.length; i += 3) {
    const l = Math.hypot(n[i], n[i + 1], n[i + 2]) || 1;
    n[i] /= l; n[i + 1] /= l; n[i + 2] /= l;
  }
  return n;
}

// A spindle "muscle" (metres): 160 mm thick belly (r = 16 mm) with 70 mm thin cords (r = 2.5 mm) at both ends.
function spindle() {
  const profile = [];
  for (let z = 0; z <= 0.07; z += 0.005) profile.push([z, 0.0025]);
  for (let z = 0.075; z <= 0.235; z += 0.005) {
    const u = (z - 0.075) / 0.16;
    profile.push([z, 0.0025 + 0.0135 * Math.sin(Math.PI * Math.min(1, Math.max(0, u)))]);
  }
  for (let z = 0.24; z <= 0.3101; z += 0.005) profile.push([z, 0.0025]);
  return makeTube(profile);
}

function fractionWhere(mesh, tendon, pred) {
  let n = 0, t = 0;
  for (let v = 0; v < tendon.length; v++) {
    if (!pred(mesh.positions[v * 3 + 2])) continue;
    n++;
    if (tendon[v] >= 0.5) t++;
  }
  return n ? t / n : NaN;
}

test('BVH ray query finds the far wall of a tube (diameter)', () => {
  const mesh = makeTube([[0, 0.01], [0.05, 0.01], [0.1, 0.01]]);
  const bvh = new TriangleBVH(mesh.positions, mesh.indices);
  const hit = bvh.intersect(0.01, 0, 0.05, -1, 0, 0, 1e-6, 1);
  assert.ok(hit, 'hit expected');
  assert.ok(Math.abs(hit.t - 0.02) < 0.0006, `t=${hit.t}`);
});

test('shape diameter ~ local diameter on a uniform tube', () => {
  const mesh = makeTube([[0, 0.008], [0.04, 0.008], [0.08, 0.008], [0.12, 0.008]]);
  const sdf = shapeDiameter(mesh.positions, mesh.indices, normalsOf(mesh.positions, mesh.indices));
  const mid = [];
  for (let v = 0; v < sdf.length; v++) {
    const z = mesh.positions[v * 3 + 2];
    if (z > 0.03 && z < 0.09 && Number.isFinite(sdf[v])) mid.push(sdf[v]);
  }
  mid.sort((a, b) => a - b);
  const median = mid[mid.length >> 1];
  assert.ok(median > 0.014 && median < 0.02, `median SDF ${median}`);
});

test('spindle: thin cords at both ends are tendon, belly is not', () => {
  const mesh = spindle();
  const { tendon, stats } = computeTendonMask(mesh.positions, mesh.indices, normalsOf(mesh.positions, mesh.indices));
  const cords = fractionWhere(mesh, tendon, (z) => z < 0.055 || z > 0.255);
  const belly = fractionWhere(mesh, tendon, (z) => z > 0.12 && z < 0.19);
  assert.ok(cords >= 0.9, `cords ${cords} (${JSON.stringify(stats)})`);
  assert.ok(belly <= 0.02, `belly ${belly}`);
});

test('uniformly thin sheet stays mostly muscle (relative threshold)', () => {
  // 60 x 2 mm "strap" (a flattened tube) of constant thickness: nothing is relatively thin.
  const seg = 24;
  const profile = [];
  for (let z = 0; z <= 0.0601; z += 0.004) profile.push([z, 0.012]);
  const mesh = makeTube(profile, seg);
  for (let i = 0; i < mesh.positions.length; i += 3) mesh.positions[i + 1] *= 0.1; // flatten y -> 2.4 mm thick
  const { tendon } = computeTendonMask(mesh.positions, mesh.indices, normalsOf(mesh.positions, mesh.indices));
  const frac = fractionWhere(mesh, tendon, () => true);
  assert.ok(frac <= 0.4, `thin sheet tendon fraction ${frac}`);
});

test('missing / degenerate input returns zeros, never NaN', () => {
  const out = computeTendonMask(new Float32Array(9), new Uint32Array([0, 1, 2]), new Float32Array(9));
  assert.equal(out.tendon.length, 3);
  assert.ok([...out.tendon].every((v) => v === 0));
  assert.deepEqual([...quantizeUnorm8([NaN, -1, 0.5, 2])], [0, 0, 128, 255]);
});

test('weighted percentile respects weights', () => {
  assert.equal(weightedPercentile([1, 2, 3, 4], [1, 1, 1, 1], 0.75), 3);
  assert.equal(weightedPercentile([1, 2, 3, 4], [0, 0, 0, 1], 0.5), 4);
});
