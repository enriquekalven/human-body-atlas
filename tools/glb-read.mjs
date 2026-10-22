/**
 * Minimal GLB reader for the atlas' own layer files (tools/build-models.mjs output).
 *
 * Decodes, per node: name, extras, dequantized world-space positions (KHR_mesh_quantization uint16
 * positions with a per-node translation + uniform scale), triangle indices, and any custom
 * per-vertex attribute such as `_TENDON` (normalized UNSIGNED_BYTE -> Float32 in [0, 1]).
 * Used by the tendon benchmarks and the tendon report. Plain Node, no dependencies.
 */

import fs from 'node:fs';

const COMPONENT = {
  5120: { array: Int8Array, size: 1, norm: 127 },
  5121: { array: Uint8Array, size: 1, norm: 255 },
  5122: { array: Int16Array, size: 2, norm: 32767 },
  5123: { array: Uint16Array, size: 2, norm: 65535 },
  5125: { array: Uint32Array, size: 4, norm: 1 },
  5126: { array: Float32Array, size: 4, norm: 1 }
};
const TYPE_SIZE = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4 };

export function parseGlb(buf) {
  const dv = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
  if (dv.getUint32(0, true) !== 0x46546c67) throw new Error('not a GLB');
  const jsonLen = dv.getUint32(12, true);
  const json = JSON.parse(Buffer.from(buf.buffer, buf.byteOffset + 20, jsonLen).toString('utf8'));
  const binOffset = 20 + jsonLen;
  const binLen = dv.getUint32(binOffset, true);
  const bin = new Uint8Array(buf.buffer, buf.byteOffset + binOffset + 8, binLen);
  return { json, bin };
}

// Returns a Float32Array (normalized accessors are mapped to [-1,1] / [0,1]) or the raw integer array
// when `raw` is set. Handles interleaved/padded strides.
export function readAccessor(glb, index, { raw = false } = {}) {
  const acc = glb.json.accessors[index];
  const view = glb.json.bufferViews[acc.bufferView];
  const comp = COMPONENT[acc.componentType];
  const n = TYPE_SIZE[acc.type];
  const stride = view.byteStride || comp.size * n;
  const base = (view.byteOffset || 0) + (acc.byteOffset || 0);
  const out = raw ? new comp.array(acc.count * n) : new Float32Array(acc.count * n);
  const dv = new DataView(glb.bin.buffer, glb.bin.byteOffset, glb.bin.byteLength);
  const getter = {
    5120: (o) => dv.getInt8(o),
    5121: (o) => dv.getUint8(o),
    5122: (o) => dv.getInt16(o, true),
    5123: (o) => dv.getUint16(o, true),
    5125: (o) => dv.getUint32(o, true),
    5126: (o) => dv.getFloat32(o, true)
  }[acc.componentType];
  for (let i = 0; i < acc.count; i++) {
    for (let k = 0; k < n; k++) {
      const v = getter(base + i * stride + k * comp.size);
      out[i * n + k] = raw || !acc.normalized ? v : Math.max(-1, v / comp.norm);
    }
  }
  return out;
}

/**
 * Decode every mesh node of a layer GLB.
 * @returns {Array<{name:string, extras:object, positions:Float32Array, indices:Uint32Array,
 *   attributes:Record<string, Float32Array>, attributeInfo:Record<string, object>}>}
 */
export function readLayer(file) {
  const glb = parseGlb(fs.readFileSync(file));
  const parts = [];
  for (const node of glb.json.nodes) {
    if (node.mesh === undefined) continue;
    const prim = glb.json.meshes[node.mesh].primitives[0];
    const q = readAccessor(glb, prim.attributes.POSITION);
    const t = node.translation || [0, 0, 0];
    const s = node.scale || [1, 1, 1];
    const positions = new Float32Array(q.length);
    for (let i = 0; i < q.length; i += 3) {
      positions[i] = t[0] + q[i] * s[0];
      positions[i + 1] = t[1] + q[i + 1] * s[1];
      positions[i + 2] = t[2] + q[i + 2] * s[2];
    }
    const indices = Uint32Array.from(readAccessor(glb, prim.indices, { raw: true }));
    const attributes = {};
    const attributeInfo = {};
    for (const [name, accIdx] of Object.entries(prim.attributes)) {
      if (name === 'POSITION') continue;
      attributes[name] = readAccessor(glb, accIdx);
      const acc = glb.json.accessors[accIdx];
      attributeInfo[name] = { componentType: acc.componentType, normalized: !!acc.normalized, type: acc.type, count: acc.count };
    }
    parts.push({ name: node.name, extras: node.extras || {}, positions, indices, attributes, attributeInfo });
  }
  return parts;
}
