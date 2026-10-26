#!/usr/bin/env node
/**
 * Studio Chirp 3 HD Read Aloud Audio Generator & Verifier for Human Body 3D Atlas.
 *
 * Scope:
 *   - 9 languages: en, es, zh, yue, ja, ko, pt, fr, it
 *   - 128 keys per language (27 curated parts × kids/pro + 37 tissues × kids/pro) = 1,152 clips
 *   - Single source of truth: imports buildSelectionNarration, VOICE_CONFIG, splitTextIntoByteChunks from ../src/narration.js
 *   - Sentence-boundary UTF-8 byte chunking (<= 4,500 bytes per API call, concatenating MP3 buffers in order)
 *   - Concurrency <= 4 with exponential backoff on HTTP 429 / 5xx and automatic token refresh
 *   - Content-hash manifest per language: assets/audio/<lang>/manifest.json
 *     mapping key -> { sha256, bytes, durationSec, chars }
 *   - Incremental & resumable: skips clips whose on-disk MP3 is valid and matches sha256(voice + cleanedText)
 */

import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

import { ANATOMY_PARTS } from '../src/anatomyData.js';
import { TISSUE_INFO } from '../src/content.js';
import { SUPPORTED_LANGS, getLocalizedPart, getLocalizedTissueInfo } from '../src/i18n.js';
import {
  VOICE_CONFIG,
  buildSelectionNarration,
  splitTextIntoByteChunks
} from '../src/narration.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const AUDIO_ROOT = path.join(ROOT, 'assets', 'audio');
const BILLING_PROJECT = process.env.GOOGLE_CLOUD_PROJECT || 'project-maui';
const CONCURRENCY = Math.min(12, Math.max(1, Number(process.env.TTS_CONCURRENCY || 8)));

let cachedToken = null;
let cachedTokenTime = 0;

function getAccessToken(forceRefresh = false) {
  if (process.env.GCLOUD_ACCESS_TOKEN && !forceRefresh) {
    return process.env.GCLOUD_ACCESS_TOKEN.trim();
  }
  const now = Date.now();
  if (!forceRefresh && cachedToken && now - cachedTokenTime < 25 * 60 * 1000) {
    return cachedToken;
  }
  const envVal = process.env.CLOUDSDK_METRICS_ENVIRONMENT
    ? `${process.env.CLOUDSDK_METRICS_ENVIRONMENT} datacloud.antigravity`
    : 'datacloud.antigravity';
  cachedToken = execFileSync('gcloud', ['auth', 'print-access-token'], {
    encoding: 'utf8',
    env: {
      ...process.env,
      CLOUDSDK_METRICS_ENVIRONMENT: envVal
    }
  }).trim();
  cachedTokenTime = now;
  return cachedToken;
}

export function computeClipHash(voiceName, studioText) {
  return crypto
    .createHash('sha256')
    .update(`${voiceName}\n${studioText}`, 'utf8')
    .digest('hex');
}

export function isValidMp3Buffer(buf) {
  if (!buf || buf.length < 256) return false;
  // Check for "ID3" header or MPEG frame sync (0xFF followed by 0xE0..0xFF)
  if (buf[0] === 0x49 && buf[1] === 0x44 && buf[2] === 0x33) return true;
  if (buf[0] === 0xff && (buf[1] & 0xe0) === 0xe0) return true;
  return false;
}

export function probeDurationSec(filePath) {
  try {
    const out = execFileSync('afinfo', [filePath], { encoding: 'utf8' });
    const m = out.match(/estimated duration:\s*([0-9.]+)\s*sec/i);
    if (m) return Number(Number(m[1]).toFixed(3));
  } catch (_e) {
    // Fallback if afinfo fails
  }
  return 0;
}

async function synthesizeChunkMp3(textChunk, lang, maxRetries = 6) {
  const voice = VOICE_CONFIG[lang];
  if (!voice) throw new Error(`Unsupported voice language: ${lang}`);

  const body = {
    input: { text: textChunk },
    voice,
    audioConfig: {
      audioEncoding: 'MP3',
      speakingRate: 0.98
    }
  };

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const token = getAccessToken(attempt > 1);
      const res = await fetch('https://texttospeech.googleapis.com/v1/text:synthesize', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'x-goog-user-project': BILLING_PROJECT,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });

      if (!res.ok) {
        const errText = await res.text();
        const status = res.status;
        if (status === 400 && errText.includes('sentences that are too long') && textChunk.length > 20) {
          const isCjk = lang === 'zh' || lang === 'yue' || lang === 'ja';
          const parts = textChunk
            .split(/(?<=[。！？!?؟，、،,;؛；:：])\s*/u)
            .map((p) => p.replace(/[，、،,;؛；:：\s]+$/u, '').trim())
            .filter(Boolean)
            .map((p) => (/[。！？.!?؟]$/u.test(p) ? p : `${p}${isCjk ? '。' : '.'}`));
          if (parts.length > 1) {
            const subBufs = [];
            for (const p of parts) {
              subBufs.push(await synthesizeChunkMp3(p, lang, maxRetries));
            }
            return Buffer.concat(subBufs);
          }
          const mid = Math.floor(textChunk.length / 2);
          const b1 = await synthesizeChunkMp3(`${textChunk.slice(0, mid)}${isCjk ? '。' : '.'}`, lang, maxRetries);
          const b2 = await synthesizeChunkMp3(textChunk.slice(mid), lang, maxRetries);
          return Buffer.concat([b1, b2]);
        }
        if (status === 429 || status >= 500 || status === 401) {
          const delayMs = Math.min(15000, 750 * Math.pow(2, attempt - 1) + Math.floor(Math.random() * 400));
          if (attempt < maxRetries) {
            await new Promise((r) => setTimeout(r, delayMs));
            continue;
          }
        }
        throw new Error(`HTTP ${status} (${lang}): ${errText.slice(0, 280)}`);
      }

      const data = await res.json();
      if (!data.audioContent) {
        throw new Error(`Missing audioContent in TTS response for ${lang}`);
      }
      return Buffer.from(data.audioContent, 'base64');
    } catch (err) {
      if (attempt === maxRetries) throw err;
      const delayMs = Math.min(15000, 750 * Math.pow(2, attempt - 1) + Math.floor(Math.random() * 400));
      await new Promise((r) => setTimeout(r, delayMs));
    }
  }
}

async function synthesizeFullClip(studioText, lang) {
  const chunks = splitTextIntoByteChunks(studioText, lang, 4500);
  const buffers = [];
  for (const chunk of chunks) {
    const buf = await synthesizeChunkMp3(chunk, lang);
    buffers.push(buf);
  }
  return Buffer.concat(buffers);
}

async function loadManifest(manifestPath) {
  try {
    const raw = await fs.readFile(manifestPath, 'utf8');
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') return {};
    if (parsed.clips && typeof parsed.clips === 'object') {
      return parsed.clips;
    }
    return parsed;
  } catch (_e) {
    return {};
  }
}

async function saveManifest(manifestPath, manifestObj, lang) {
  const voice = VOICE_CONFIG[lang] || {};
  const sortedKeys = Object.keys(manifestObj).sort();
  const orderedClips = {};
  for (const k of sortedKeys) {
    orderedClips[k] = manifestObj[k];
  }
  const payload = {
    schemaVersion: 2,
    lang,
    voice: voice.name || '',
    languageCode: voice.languageCode || '',
    audioEncoding: 'MP3',
    sampleRateHertz: 24000,
    clipCount: sortedKeys.length,
    generatedAt: new Date().toISOString(),
    clips: orderedClips
  };
  await fs.writeFile(manifestPath, `${JSON.stringify(payload, null, 2)}\n`, 'utf8');
}

function buildLangTasks(lang) {
  const voice = VOICE_CONFIG[lang];
  const tasks = [];

  // 1. All 27 curated ANATOMY_PARTS (kids + pro = 54 keys)
  for (const rawPart of ANATOMY_PARTS) {
    const localizedPart = getLocalizedPart(rawPart, lang);
    for (const audience of ['kids', 'pro']) {
      const { key, cleanedText, studioText } = buildSelectionNarration({
        lang,
        audience,
        curatedPart: localizedPart
      });
      tasks.push({
        lang,
        key,
        cleanedText,
        studioText,
        chars: studioText.length,
        sha256: computeClipHash(voice.name, studioText)
      });
    }
  }

  // 2. All 37 TISSUE_INFO categories (kids + pro = 74 keys)
  for (const tissueKey of Object.keys(TISSUE_INFO)) {
    const localizedTissue = getLocalizedTissueInfo(tissueKey, lang);
    for (const audience of ['kids', 'pro']) {
      const { key, cleanedText, studioText } = buildSelectionNarration({
        lang,
        audience,
        curatedPart: null,
        tissueKey,
        tissueInfo: localizedTissue,
        displayTitle: ''
      });
      tasks.push({
        lang,
        key,
        cleanedText,
        studioText,
        chars: studioText.length,
        sha256: computeClipHash(voice.name, studioText)
      });
    }
  }

  return tasks;
}

async function checkDiskClip(mp3Path) {
  try {
    const buf = await fs.readFile(mp3Path);
    if (!isValidMp3Buffer(buf) || buf.length <= 4096) return null;
    return buf;
  } catch (_e) {
    return null;
  }
}

async function main() {
  const filterLangs = process.argv.slice(2).filter((a) => !a.startsWith('--'));
  const targetLangs = filterLangs.length
    ? SUPPORTED_LANGS.filter((l) => filterLangs.includes(l))
    : SUPPORTED_LANGS;

  const summaryByLang = {};
  const allManifests = {};

  for (const lang of targetLangs) {
    const langDir = path.join(AUDIO_ROOT, lang);
    await fs.mkdir(langDir, { recursive: true });
    const manifestPath = path.join(langDir, 'manifest.json');
    const manifest = await loadManifest(manifestPath);
    const tasks = buildLangTasks(lang);

    let generated = 0;
    let skipped = 0;
    let synthesizedChars = 0;
    let totalChars = 0;
    let cursor = 0;

    console.log(
      `[${lang}] Checking ${tasks.length} clips with voice ${VOICE_CONFIG[lang].name} (concurrency=${CONCURRENCY})...`
    );

    async function worker() {
      while (cursor < tasks.length) {
        const task = tasks[cursor++];
        totalChars += task.chars;
        const mp3Path = path.join(langDir, `${task.key}.mp3`);
        const existing = manifest[task.key];

        if (process.env.FORCE_REGEN !== '1') {
          const diskBuf = await checkDiskClip(mp3Path);
          if (diskBuf) {
            if (!existing || existing.bytes !== diskBuf.length || existing.sha256 !== task.sha256) {
              manifest[task.key] = {
                sha256: task.sha256,
                bytes: diskBuf.length,
                durationSec: existing?.durationSec || probeDurationSec(mp3Path)
              };
            }
            skipped++;
            continue;
          }
        }

        const mp3Buf = await synthesizeFullClip(task.studioText, lang);
        if (!isValidMp3Buffer(mp3Buf)) {
          throw new Error(`Invalid MP3 header returned for ${lang}/${task.key}`);
        }
        await fs.writeFile(mp3Path, mp3Buf);
        const durationSec = probeDurationSec(mp3Path);

        manifest[task.key] = {
          sha256: task.sha256,
          bytes: mp3Buf.length,
          durationSec
        };
        generated++;
        synthesizedChars += task.chars;

        if ((generated + skipped) % 16 === 0) {
          await saveManifest(manifestPath, manifest, lang);
          console.log(
            `  [${lang}] ${generated + skipped}/${tasks.length} processed (${generated} synthesized, ${skipped} cached)`
          );
        }
      }
    }

    await Promise.all(Array.from({ length: CONCURRENCY }, () => worker()));
    await saveManifest(manifestPath, manifest, lang);
    allManifests[lang] = manifest;
    summaryByLang[lang] = {
      totalClips: tasks.length,
      generatedClips: generated,
      skippedClips: skipped,
      synthesizedChars,
      totalChars
    };
    console.log(
      `[${lang}] Done: ${generated} synthesized (${synthesizedChars} chars), ${skipped} cached (${totalChars} total chars).`
    );
  }

  // Load any manifests for languages not in targetLangs so src/audioManifests.js is always complete
  for (const lang of SUPPORTED_LANGS) {
    if (!allManifests[lang]) {
      allManifests[lang] = await loadManifest(path.join(AUDIO_ROOT, lang, 'manifest.json'));
    }
  }

  // Write compact runtime manifest index to src/audioManifests.js (maps lang -> key -> 8-char hash prefix)
  const compactIndex = {};
  for (const lang of SUPPORTED_LANGS) {
    compactIndex[lang] = {};
    const m = allManifests[lang] || {};
    for (const [k, v] of Object.entries(m)) {
      if (v && v.sha256) {
        compactIndex[lang][k] = v.sha256.slice(0, 8);
      }
    }
  }
  const indexModulePath = path.join(ROOT, 'src', 'audioManifests.js');
  await fs.writeFile(
    indexModulePath,
    `/**\n * Auto-generated by tools/generate-tts-audio.mjs.\n * Maps language -> clip key -> first 8 chars of sha256(voice + cleanedText).\n */\nexport const AUDIO_MANIFEST_HASHES = ${JSON.stringify(compactIndex, null, 2)};\n`,
    'utf8'
  );

  console.log('\n=== Generation Summary ===');
  console.log(JSON.stringify(summaryByLang, null, 2));
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((err) => {
    console.error('TTS generation failed:', err);
    process.exit(1);
  });
}
