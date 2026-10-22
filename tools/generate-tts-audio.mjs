#!/usr/bin/env node
/**
 * Generates studio-quality Chirp3-HD narration MP3s for the Human Body 3D Atlas
 * across English ('en'), Spanish ('es'), and Simplified Chinese ('zh'):
 *   - All 27 curated ANATOMY_PARTS entries (kids + pro)
 *   - All 37 TISSUE_INFO categories (kids + pro)
 *
 * Uses Google Cloud Text-to-Speech API v1 with Chirp3-HD Aoede voices.
 * Set GOOGLE_CLOUD_PROJECT in the environment before running.
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

import { ANATOMY_PARTS } from '../src/anatomyData.js';
import { TISSUE_INFO } from '../src/content.js';
import { getLocalizedPart, getLocalizedTissueInfo } from '../src/i18n.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const AUDIO_ROOT = path.join(ROOT, 'assets', 'audio');
const BILLING_PROJECT = process.env.GOOGLE_CLOUD_PROJECT || '';

const VOICE_CONFIG = {
  en: { languageCode: 'en-US', name: 'en-US-Chirp3-HD-Aoede' },
  es: { languageCode: 'es-US', name: 'es-US-Chirp3-HD-Aoede' },
  zh: { languageCode: 'cmn-CN', name: 'cmn-CN-Chirp3-HD-Aoede' }
};

function cleanForSpeech(text, lang) {
  let s = String(text || '');
  // Strip parenthetical FMA/TA98 codes
  s = s.replace(/\((?:FMA|TA98)[^)]*\)/gi, '');
  s = s.replace(/[—–]/g, ', ');

  if (lang === 'es') {
    s = s
      .replace(/~/g, 'aproximadamente ')
      .replace(/\bmmHg\b/g, 'milímetros de mercurio')
      .replace(/\bmL\/min\b/g, 'mililitros por minuto')
      .replace(/\bL\/min\b/g, 'litros por minuto')
      .replace(/\bmL\/día\b/g, 'mililitros por día')
      .replace(/\bmL\b/g, 'mililitros')
      .replace(/\bm²\b/g, 'metros cuadrados')
      .replace(/\blpm\b/g, 'latidos por minuto')
      .replace(/\bNC\s+([IVX]+)/g, 'nervio craneal $1');
  } else if (lang === 'zh') {
    s = s
      .replace(/~/g, '约 ')
      .replace(/\bmmHg\b/g, '毫米汞柱')
      .replace(/\bmL\/min\b/g, '毫升每分钟')
      .replace(/\bL\/min\b/g, '升每分钟')
      .replace(/\bmL\/d\b/g, '毫升每天')
      .replace(/\bmL\b/g, '毫升')
      .replace(/\bm²\b/g, '平方米')
      .replace(/[，、；;：:\/（）()""“”‘’·]/g, '。')
      .replace(/[！？!?]/g, '。')
      .replace(/\.\s*/g, '。')
      .replace(/\s+/g, '')
      .replace(/。+/g, '。');
    // Ensure no individual sentence exceeds 25 chars
    s = s
      .split('。')
      .filter(Boolean)
      .flatMap((seg) => {
        if (seg.length <= 25) return [seg];
        const chunks = [];
        for (let i = 0; i < seg.length; i += 22) {
          chunks.push(seg.slice(i, i + 22));
        }
        return chunks;
      })
      .join('。') + '。';
  } else {
    s = s
      .replace(/~/g, 'about ')
      .replace(/\bmmHg\b/g, 'millimeters of mercury')
      .replace(/\bmL\/min\b/g, 'milliliters per minute')
      .replace(/\bL\/min\b/g, 'liters per minute')
      .replace(/\bmL\/day\b/g, 'milliliters per day')
      .replace(/\bmL\b/g, 'milliliters')
      .replace(/\bm²\b/g, 'square meters')
      .replace(/\bbpm\b/g, 'beats per minute')
      .replace(/\bCN\s+([IVX]+)/g, 'cranial nerve $1');
  }
  return s.replace(/\s{2,}/g, ' ').trim();
}

function getAccessToken() {
  if (process.env.GCLOUD_ACCESS_TOKEN) {
    return process.env.GCLOUD_ACCESS_TOKEN.trim();
  }
  return execFileSync('gcloud', ['auth', 'print-access-token'], {
    encoding: 'utf8',
    env: {
      ...process.env,
      CLOUDSDK_METRICS_ENVIRONMENT: `${
        process.env.CLOUDSDK_METRICS_ENVIRONMENT ? `${process.env.CLOUDSDK_METRICS_ENVIRONMENT} ` : ''
      }datacloud.antigravity`
    }
  }).trim();
}

async function synthesizeMp3(text, lang, token, retries = 4) {
  const voice = VOICE_CONFIG[lang];
  const body = {
    input: { text },
    voice,
    audioConfig: {
      audioEncoding: 'MP3',
      speakingRate: 0.98
    }
  };

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
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
        throw new Error(`HTTP ${res.status}: ${errText.slice(0, 240)}`);
      }
      const data = await res.json();
      if (!data.audioContent) {
        throw new Error('Missing audioContent in TTS response');
      }
      return Buffer.from(data.audioContent, 'base64');
    } catch (err) {
      if (attempt === retries) throw err;
      await new Promise((r) => setTimeout(r, 600 * attempt));
    }
  }
}

async function fileExistsNonEmpty(filePath) {
  try {
    const stat = await fs.stat(filePath);
    return stat.size > 256;
  } catch (_e) {
    return false;
  }
}

async function main() {
  const token = getAccessToken();
  const tasks = [];

  for (const lang of ['en', 'es', 'zh']) {
    const langDir = path.join(AUDIO_ROOT, lang);
    await fs.mkdir(langDir, { recursive: true });
    const sep = lang === 'zh' ? '。' : '. ';

    // 1. All 27 curated ANATOMY_PARTS
    for (const rawPart of ANATOMY_PARTS) {
      const part = getLocalizedPart(rawPart, lang);
      const kidsText = cleanForSpeech(
        `${part.name}${sep}${part.kids.summary} ${part.kids.whyYouNeedIt}`,
        lang
      );
      const proText = cleanForSpeech(
        `${part.name}${sep}${part.pro.summary} ${part.pro.clinicalPearls}`,
        lang
      );
      tasks.push({
        lang,
        outPath: path.join(langDir, `kids_${part.id}.mp3`),
        text: kidsText
      });
      tasks.push({
        lang,
        outPath: path.join(langDir, `pro_${part.id}.mp3`),
        text: proText
      });
    }

    // 2. All 37 TISSUE_INFO categories
    for (const tissueKey of Object.keys(TISSUE_INFO)) {
      const info = getLocalizedTissueInfo(tissueKey, lang);
      tasks.push({
        lang,
        outPath: path.join(langDir, `kids_tissue_${tissueKey}.mp3`),
        text: cleanForSpeech(info.kids, lang)
      });
      tasks.push({
        lang,
        outPath: path.join(langDir, `pro_tissue_${tissueKey}.mp3`),
        text: cleanForSpeech(info.pro, lang)
      });
    }
  }

  console.log(`Queued ${tasks.length} Chirp3-HD Studio MP3 synthesis tasks across en, es, zh...`);

  const concurrency = 12;
  let completed = 0;
  let skipped = 0;
  let index = 0;

  async function worker() {
    while (index < tasks.length) {
      const current = tasks[index++];
      if (await fileExistsNonEmpty(current.outPath)) {
        skipped++;
        completed++;
        continue;
      }
      const mp3Buf = await synthesizeMp3(current.text, current.lang, token);
      await fs.writeFile(current.outPath, mp3Buf);
      completed++;
      if (completed % 25 === 0 || completed === tasks.length) {
        console.log(`Progress: ${completed}/${tasks.length} MP3s ready (${skipped} cached)`);
      }
    }
  }

  await Promise.all(Array.from({ length: concurrency }, () => worker()));
  console.log(`Done! All ${tasks.length} Chirp3-HD Studio MP3 files are saved in assets/audio/{en,es,zh}/.`);
}

main().catch((err) => {
  console.error('TTS generation failed:', err);
  process.exit(1);
});
