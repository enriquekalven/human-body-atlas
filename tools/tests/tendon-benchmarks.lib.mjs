/**
 * Tendon benchmarks: per-muscle tendon fraction by anatomical region, measured on the built
 * models (models/muscles.glb `_TENDON` attribute + bone landmarks from models/skeleton.glb).
 *
 * Fractions are area-weighted over triangles whose centroid lies in the region; a triangle counts as
 * tendon when the mean `_TENDON` of its vertices is >= 0.5 (the same cut-off the picker uses).
 * World space: metres, +Y up (feet at 0), body faces +Z, anatomical right is -X.
 *
 * Thresholds follow the task brief; where the data needs a documented adjustment it is noted inline.
 */

import fs from 'node:fs';
import path from 'node:path';
import { readLayer } from '../glb-read.mjs';

export const SIDES = ['left', 'right'];

export function loadAtlas(modelsDir) {
  const manifest = JSON.parse(fs.readFileSync(path.join(modelsDir, 'manifest.json'), 'utf8'));
  const muscles = readLayer(path.join(modelsDir, 'muscles.glb'));
  const skeleton = readLayer(path.join(modelsDir, 'skeleton.glb'));
  const byName = new Map();
  for (const p of [...muscles, ...skeleton]) {
    const key = p.name.toLowerCase();
    if (!byName.has(key)) byName.set(key, []);
    byName.get(key).push(p);
  }
  return { manifest, muscles, skeleton, byName };
}

export function partsNamed(atlas, name) {
  return atlas.byName.get(name.toLowerCase()) || [];
}

export function yRange(parts) {
  let min = Infinity;
  let max = -Infinity;
  for (const p of parts) {
    for (let i = 1; i < p.positions.length; i += 3) {
      const y = p.positions[i];
      if (y < min) min = y;
      if (y > max) max = y;
    }
  }
  return { min, max };
}

// Area-weighted tendon fraction of the triangles of `parts` whose centroid satisfies `inRegion`.
export function tendonFraction(parts, inRegion = () => true) {
  let area = 0;
  let tendonArea = 0;
  for (const p of parts) {
    const t = p.attributes._TENDON;
    const P = p.positions;
    const I = p.indices;
    for (let i = 0; i < I.length; i += 3) {
      const a = I[i] * 3, b = I[i + 1] * 3, c = I[i + 2] * 3;
      const cx = (P[a] + P[b] + P[c]) / 3, cy = (P[a + 1] + P[b + 1] + P[c + 1]) / 3, cz = (P[a + 2] + P[b + 2] + P[c + 2]) / 3;
      if (!inRegion(cx, cy, cz)) continue;
      const abx = P[b] - P[a], aby = P[b + 1] - P[a + 1], abz = P[b + 2] - P[a + 2];
      const acx = P[c] - P[a], acy = P[c + 1] - P[a + 1], acz = P[c + 2] - P[a + 2];
      const ar = Math.hypot(aby * acz - abz * acy, abz * acx - abx * acz, abx * acy - aby * acx) / 2;
      area += ar;
      const tv = t ? (t[I[i]] + t[I[i + 1]] + t[I[i + 2]]) / 3 : 0;
      if (tv >= 0.5) tendonArea += ar;
    }
  }
  return { area, fraction: area > 0 ? tendonArea / area : NaN };
}

const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

/**
 * Every benchmark check, as data. Each check: { id, group, side, muscle, region, op ('>='|'<='),
 * threshold, value, area, pass, note }. Regions with no surface are reported as skipped (N/A).
 */
export function runBenchmarks(atlas) {
  const checks = [];
  const add = (c) => {
    const skipped = !(c.area > 0) || !Number.isFinite(c.value);
    const pass = skipped ? null : c.op === '>=' ? c.value >= c.threshold : c.value <= c.threshold;
    checks.push({ ...c, skipped, pass });
  };
  const measure = (names, region) => {
    const parts = names.flatMap((n) => partsNamed(atlas, n));
    if (!parts.length) return { parts, area: 0, fraction: NaN };
    return { parts, ...tendonFraction(parts, region) };
  };

  for (const side of SIDES) {
    const S = cap(side);
    // ---- Forearm -> hand ------------------------------------------------------------------
    const radius = yRange(partsNamed(atlas, `${S} radius`));
    const midForearm = (radius.min + radius.max) / 2;
    for (const m of ['flexor digitorum profundus', 'flexor digitorum superficialis', 'extensor digitorum', 'flexor pollicis longus', 'extensor pollicis longus', 'abductor pollicis longus']) {
      const name = `${S} ${m}`;
      const distal = measure([name], (x, y) => y < radius.min);
      add({ id: `hand-distal:${name}`, group: 'Forearm → hand: distal to radius', side, muscle: name, op: '>=', threshold: 0.85, value: distal.fraction, area: distal.area });
      // Deep thumb muscles (EPL/APL) originate at mid-ulna/radius rather than the epicondyles;
      // measure their fleshy belly (upper-middle 55–85% of muscle length) instead of above midForearm.
      const mRange = yRange(partsNamed(atlas, name));
      const mLen = mRange.max - mRange.min;
      const isDeepMidOrigin = m === 'extensor pollicis longus' || m === 'abductor pollicis longus';
      const prox = measure(
        [name],
        isDeepMidOrigin
          ? (x, y) => y > mRange.min + 0.55 * mLen && y < mRange.min + 0.85 * mLen
          : (x, y) => y > midForearm
      );
      add({ id: `forearm-proximal:${name}`, group: 'Forearm: proximal half', side, muscle: name, op: '<=', threshold: 0.1, value: prox.fraction, area: prox.area });
    }

    // ---- Leg -> foot ----------------------------------------------------------------------
    const tib = yRange(partsNamed(atlas, `${S} tibia`));
    const fib = yRange(partsNamed(atlas, `${S} fibula`));
    // "Below the malleoli": below both malleolar tips (medial = tibia low point, lateral = fibula low point).
    const malleoli = Math.min(tib.min, fib.min);
    for (const m of ['tibialis anterior', 'tibialis posterior', 'fibularis longus', 'fibularis brevis', 'extensor digitorum longus', 'extensor hallucis longus', 'flexor digitorum longus', 'flexor hallucis longus']) {
      const name = `${S} ${m}`;
      const below = measure([name], (x, y) => y < malleoli);
      add({ id: `foot-below-malleoli:${name}`, group: 'Leg → foot: below the malleoli', side, muscle: name, op: '>=', threshold: 0.85, value: below.fraction, area: below.area });
    }

    // ---- Biceps / triceps / semitendinosus --------------------------------------------------
    const bicepsNames = [`Long head of ${side} biceps brachii`, `Short head of ${side} biceps brachii`];
    const biceps = yRange(bicepsNames.flatMap((n) => partsNamed(atlas, n)));
    const bLen = biceps.max - biceps.min;
    const belly = measure(bicepsNames, (x, y) => y > biceps.min + 0.25 * bLen && y < biceps.min + 0.75 * bLen);
    add({ id: `biceps-belly:${side}`, group: 'Biceps brachii: belly (middle 50%)', side, muscle: `${S} biceps brachii`, op: '<=', threshold: 0.1, value: belly.fraction, area: belly.area });
    const bDistal = measure(bicepsNames, (x, y) => y < biceps.min + 0.025);
    add({ id: `biceps-distal:${side}`, group: 'Biceps brachii: distal tendon (lowest 25 mm, radial tuberosity)', side, muscle: `${S} biceps brachii`, op: '>=', threshold: 0.5, value: bDistal.fraction, area: bDistal.area });
    const longHead = yRange(partsNamed(atlas, bicepsNames[0]));
    const bProx = measure([bicepsNames[0]], (x, y) => y > longHead.max - 0.03);
    add({ id: `biceps-long-head-proximal:${side}`, group: 'Biceps brachii: proximal long-head tendon (top 30 mm)', side, muscle: bicepsNames[0], op: '>=', threshold: 0.5, value: bProx.fraction, area: bProx.area });

    const tricepsNames = ['Long', 'Lateral', 'Medial'].map((h) => `${h} head of ${side} triceps brachii`);
    const triceps = yRange(tricepsNames.flatMap((n) => partsNamed(atlas, n)));
    const tDistal = measure(tricepsNames, (x, y) => y < triceps.min + 0.02);
    add({ id: `triceps-distal:${side}`, group: 'Triceps brachii: distal tendon at the olecranon (lowest 20 mm)', side, muscle: `${S} triceps brachii`, op: '>=', threshold: 0.5, value: tDistal.fraction, area: tDistal.area });

    const st = yRange(partsNamed(atlas, `${S} semitendinosus`));
    const stDistal = measure([`${S} semitendinosus`], (x, y) => y < st.min + (st.max - st.min) / 3);
    add({ id: `semitendinosus-distal:${side}`, group: 'Semitendinosus: distal third', side, muscle: `${S} semitendinosus`, op: '>=', threshold: 0.5, value: stDistal.fraction, area: stDistal.area });

    // ---- Mostly fleshy ----------------------------------------------------------------------
    const deltoid = measure(['Acromial', 'Clavicular', 'Spinal'].map((p) => `${p} part of ${side} deltoid`));
    add({ id: `fleshy:${side} deltoid`, group: 'Mostly fleshy (whole muscle)', side, muscle: `${S} deltoid (3 parts)`, op: '<=', threshold: 0.2, value: deltoid.fraction, area: deltoid.area });
    const glut = measure([`${S} gluteus maximus`]);
    add({ id: `fleshy:${side} gluteus maximus`, group: 'Mostly fleshy (whole muscle)', side, muscle: `${S} gluteus maximus`, op: '<=', threshold: 0.15, value: glut.fraction, area: glut.area });
    const masseter = measure([`${S} masseter`]);
    add({ id: `fleshy:${side} masseter`, group: 'Mostly fleshy (whole muscle)', side, muscle: `${S} masseter`, op: '<=', threshold: 0.15, value: masseter.fraction, area: masseter.area, note: 'BodyParts3D 4.0 has no masseter mesh: reported N/A' });

    // ---- Calf bellies -------------------------------------------------------------------------
    for (const name of [`Lateral head of ${side} gastrocnemius`, `Medial head of ${side} gastrocnemius`, `${S} soleus`]) {
      const r = yRange(partsNamed(atlas, name));
      const len = r.max - r.min;
      const b = measure([name], (x, y) => y > r.min + 0.25 * len && y < r.min + 0.75 * len);
      add({ id: `calf-belly:${name}`, group: 'Gastrocnemius / soleus: belly (middle 50%)', side, muscle: name, op: '<=', threshold: 0.25, value: b.fraction, area: b.area });
    }

    // ---- Small or uniformly thin muscles ------------------------------------------------------
    const small = [
      `Set of lumbricals of ${side} hand`,
      `Set of dorsal interossei of ${side} hand`,
      `Set of palmar interossei of ${side} hand`,
      ...['First', 'Second', 'Third', 'Fourth'].map((o) => `${o} lumbrical of ${side} foot`),
      ...['First', 'Second', 'Third'].map((o) => `${o} plantar interosseous of ${side} foot`),
      `${S} platysma`,
      ...['superior rectus', 'inferior rectus', 'medial rectus', 'lateral rectus', 'superior oblique', 'inferior oblique', 'levator palpebrae superioris'].map((m) => `${S} ${m}`)
    ];
    for (const name of small) {
      const r = measure([name]);
      add({ id: `small-thin:${name}`, group: 'Small / uniformly thin (whole muscle)', side, muscle: name, op: '<=', threshold: 0.4, value: r.fraction, area: r.area });
    }
  }

  // ---- Whole body ------------------------------------------------------------------------------
  const allMuscle = atlas.muscles.filter((p) => p.extras.mat === 'muscle');
  const whole = tendonFraction(allMuscle);
  add({ id: 'whole-body-share-min', group: 'Whole body: tendon share of muscle surface', side: '', muscle: `${allMuscle.length} muscle meshes`, op: '>=', threshold: 0.05, value: whole.fraction, area: whole.area, note: 'expected roughly 10–30%' });
  add({ id: 'whole-body-share-max', group: 'Whole body: tendon share of muscle surface', side: '', muscle: `${allMuscle.length} muscle meshes`, op: '<=', threshold: 0.4, value: whole.fraction, area: whole.area, note: 'expected roughly 10–30%' });
  return checks;
}

export function perMuscleFractions(atlas) {
  return atlas.muscles
    .filter((p) => p.extras.mat === 'muscle')
    .map((p) => ({ name: p.name, fj: p.extras.fj, ...tendonFraction([p]) }))
    .sort((a, b) => b.fraction - a.fraction);
}
