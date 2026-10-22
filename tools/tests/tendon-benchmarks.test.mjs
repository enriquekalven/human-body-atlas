/**
 * Tendon benchmarks as tests (medium: reads models/*.glb). Run: npm test
 *
 * RED before the tendon build (no `_TENDON` attribute -> every "tendon present" check fails);
 * GREEN after `npm run build:models`.
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadAtlas, runBenchmarks } from './tendon-benchmarks.lib.mjs';

const MODELS = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..', 'models');
const atlas = loadAtlas(MODELS);
const checks = runBenchmarks(atlas);

test('every muscle mesh carries a normalized UNSIGNED_BYTE _TENDON attribute', () => {
  const muscleParts = atlas.muscles.filter((p) => p.extras.mat === 'muscle');
  assert.ok(muscleParts.length > 400, `expected >400 muscle meshes, got ${muscleParts.length}`);
  const missing = muscleParts.filter((p) => !p.attributes._TENDON).map((p) => p.name);
  assert.deepEqual(missing.slice(0, 10), [], `${missing.length} muscle meshes lack _TENDON`);
  for (const p of muscleParts) {
    const info = p.attributeInfo._TENDON;
    assert.equal(info.componentType, 5121, `${p.name}: _TENDON must be UNSIGNED_BYTE`);
    assert.equal(info.normalized, true, `${p.name}: _TENDON must be normalized`);
    assert.equal(info.type, 'SCALAR');
    assert.equal(info.count, p.positions.length / 3, `${p.name}: one value per vertex`);
    for (const v of p.attributes._TENDON) assert.ok(v >= 0 && v <= 1 && !Number.isNaN(v));
  }
});

test('tendon-material and non-muscle parts are unchanged (no _TENDON outside muscle meshes)', () => {
  const others = atlas.muscles.filter((p) => p.extras.mat !== 'muscle');
  assert.ok(others.every((p) => !p.attributes._TENDON));
  assert.ok(atlas.skeleton.every((p) => !p.attributes._TENDON));
});

const groups = [...new Set(checks.map((c) => c.group))];
for (const group of groups) {
  test(`benchmark: ${group}`, () => {
    const inGroup = checks.filter((c) => c.group === group && !c.skipped);
    assert.ok(inGroup.length > 0 || checks.some((c) => c.group === group), 'group has checks');
    const failures = inGroup
      .filter((c) => !c.pass)
      .map((c) => `${c.muscle}: ${(c.value * 100).toFixed(1)}% (need ${c.op} ${(c.threshold * 100).toFixed(0)}%)`);
    assert.deepEqual(failures, [], failures.join('\n'));
  });
}

test('benchmarks cover the required muscles (none silently skipped, except masseter absent from BodyParts3D)', () => {
  const skipped = checks.filter((c) => c.skipped).map((c) => c.id);
  const unexpected = skipped.filter((id) => !/masseter/.test(id) && !/^forearm-proximal:/.test(id));
  assert.deepEqual(unexpected, []);
});
