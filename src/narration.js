/**
 * Single source of truth for Read Aloud narration text construction,
 * multilingual prosody/unit/emoji cleanup, and UTF-8 byte-safe sentence chunking.
 *
 * Imported by both runtime (`src/main.js` `_speak()`) and the studio audio
 * generator (`tools/generate-tts-audio.mjs`).
 */

export const VOICE_CONFIG = {
  en: { languageCode: 'en-US', name: 'en-US-Chirp3-HD-Aoede' },
  es: { languageCode: 'es-US', name: 'es-US-Chirp3-HD-Aoede' },
  zh: { languageCode: 'cmn-CN', name: 'cmn-CN-Chirp3-HD-Aoede' },
  ja: { languageCode: 'ja-JP', name: 'ja-JP-Chirp3-HD-Aoede' },
  ko: { languageCode: 'ko-KR', name: 'ko-KR-Chirp3-HD-Aoede' },
  pt: { languageCode: 'pt-BR', name: 'pt-BR-Chirp3-HD-Aoede' },
  fr: { languageCode: 'fr-FR', name: 'fr-FR-Chirp3-HD-Aoede' },
  it: { languageCode: 'it-IT', name: 'it-IT-Chirp3-HD-Aoede' }
};

export function getTitleSeparator(lang = 'en') {
  return lang === 'zh' || lang === 'ja' ? '。' : '. ';
}

/**
 * Build raw narration text for a localized curated part (`ANATOMY_PARTS` entry).
 */
export function buildCuratedNarrationText(localizedPart, audience = 'kids', lang = 'en') {
  if (!localizedPart) return '';
  const sep = getTitleSeparator(lang);
  const body =
    audience === 'kids'
      ? `${localizedPart.kids.summary} ${localizedPart.kids.whyYouNeedIt}`
      : `${localizedPart.pro.summary} ${localizedPart.pro.clinicalPearls}`;
  return `${localizedPart.name}${sep}${body}`;
}

/**
 * Build raw narration text for a localized tissue category (`TISSUE_INFO` entry).
 * When `displayTitle` is provided (e.g. non-curated structure at runtime), it is prepended.
 */
export function buildTissueNarrationText(
  localizedTissueInfo,
  audience = 'kids',
  lang = 'en',
  displayTitle = ''
) {
  if (!localizedTissueInfo) return displayTitle || '';
  const body = audience === 'kids' ? localizedTissueInfo.kids : localizedTissueInfo.pro;
  if (!displayTitle) return String(body || '');
  const sep = getTitleSeparator(lang);
  return `${displayTitle}${sep}${body}`;
}

/**
 * Unified helper for runtime `_speak()` and generator tasks.
 */
export function buildSelectionNarration({
  lang = 'en',
  audience = 'kids',
  curatedPart = null,
  tissueKey = 'organ',
  tissueInfo = null,
  displayTitle = ''
}) {
  if (curatedPart) {
    const key = `${audience}_${curatedPart.id}`;
    const rawText = buildCuratedNarrationText(curatedPart, audience, lang);
    const cleanedText = cleanTextForTts(rawText, lang);
    return { key, rawText, cleanedText, isCurated: true };
  }
  const key = `${audience}_tissue_${tissueKey}`;
  const rawText = buildTissueNarrationText(tissueInfo, audience, lang, displayTitle);
  const cleanedText = cleanTextForTts(rawText, lang);
  return { key, rawText, cleanedText, isCurated: false };
}

/**
 * Clean and normalize narration text for Chirp 3 HD and browser TTS:
 * - Strips emoji, pictographs, and decorative symbols so TTS never reads "emoji" names
 * - Strips FMA/TA98 codes and syllable-hyphenated pronunciation guides
 * - Expands medical units, symbols (~, °C, mmHg, bpm, mL/min, L/min, cm, kg, m², etc.) per language
 * - Outputs plain text only (no SSML)
 */
export function cleanTextForTts(rawText, lang = 'en') {
  let s = String(rawText || '');

  // 1. Strip emoji, pictographs, variation selectors, and decorative bullets
  s = s.replace(/[\p{Extended_Pictographic}\p{Emoji_Presentation}\uFE0F\u200D]/gu, '');
  s = s.replace(/[•●◆▪▸★☆]/g, ' ');

  // 2. Strip parenthetical FMA / TA98 ontology codes
  s = s.replace(/\((?:FMA|TA98)[^)]*\)/gi, '');
  s = s.replace(/（(?:FMA|TA98)[^）]*）/gi, '');

  // 3. Strip any inline syllable-hyphenated pronunciation guides if present
  s = s.replace(/(?:Say it|Cómo se dice|Pronúncia|Prononciation|Pronuncia|読み方|발음|发音提示)\s*[:：]\s*["“«「『][^"”»」』]+["”»」』]/gi, '');

  // 4. Replace arrows and dashes with natural pauses
  const pauseSep = lang === 'zh' || lang === 'ja' ? '、' : ', ';
  s = s.replace(/\s*[→↔]\s*/g, pauseSep);
  s = s.replace(/\s*[—–]\s*/g, pauseSep);

  // 5. Language-specific unit and symbol expansions
  if (lang === 'es') {
    s = s
      .replace(/[≈~]\s*/g, 'aproximadamente ')
      .replace(/°C\b/g, ' grados Celsius')
      .replace(/\bmmHg\b/g, 'milímetros de mercurio')
      .replace(/\bmL\/min\b/g, 'mililitros por minuto')
      .replace(/\bL\/min\b/g, 'litros por minuto')
      .replace(/\bmL\/(?:día|d)\b/gi, 'mililitros por día')
      .replace(/(\d)\s*mL\b/g, '$1 mililitros')
      .replace(/\bmL\b/g, 'mililitros')
      .replace(/(\d)\s*L\b/g, '$1 litros')
      .replace(/\bcm³\b/g, 'centímetros cúbicos')
      .replace(/\bcm²\b/g, 'centímetros cuadrados')
      .replace(/\bm²\b/g, 'metros cuadrados')
      .replace(/(\d)\s*cm\b/g, '$1 centímetros')
      .replace(/(\d)\s*mm\b/g, '$1 milímetros')
      .replace(/(\d)\s*kg\b/g, '$1 kilogramos')
      .replace(/\b(?:lpm|bpm)\b/gi, 'latidos por minuto')
      .replace(/×\s*(\d+)/g, 'por $1')
      .replace(/\bNC\s+([IVX]+)/g, 'nervio craneal $1');
  } else if (lang === 'zh') {
    s = s
      .replace(/[≈~]\s*/g, '约')
      .replace(/°C\b/g, '摄氏度')
      .replace(/\bmmHg\b/g, '毫米汞柱')
      .replace(/\bmL\/min\b/g, '毫升每分钟')
      .replace(/\bL\/min\b/g, '升每分钟')
      .replace(/\bmL\/d(?:ay)?\b/gi, '毫升每天')
      .replace(/(\d)\s*mL\b/g, '$1毫升')
      .replace(/\bmL\b/g, '毫升')
      .replace(/(\d)\s*L\b/g, '$1升')
      .replace(/\bcm³\b/g, '立方厘米')
      .replace(/\bcm²\b/g, '平方厘米')
      .replace(/\bm²\b/g, '平方米')
      .replace(/(\d)\s*cm\b/g, '$1厘米')
      .replace(/(\d)\s*mm\b/g, '$1毫米')
      .replace(/(\d)\s*kg\b/g, '$1千克')
      .replace(/\bbpm\b/gi, '次每分钟')
      .replace(/×\s*(\d+)/g, '乘$1')
      .replace(/[，、；;：:\/（）()""“”‘’·]/g, '。')
      .replace(/[！？!?]/g, '。')
      .replace(/\.\s*/g, '。')
      .replace(/\s+/g, '')
      .replace(/。+/g, '。');
    // Chirp3-HD cmn-CN requires concise clauses (<= 25 chars per sentence) with a space after 。
    s =
      s
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
        .join('。 ') + '。';
    return s;
  } else if (lang === 'ja') {
    s = s
      .replace(/[≈~]\s*/g, '約')
      .replace(/°C\b/g, '度')
      .replace(/\bmmHg\b/g, 'ミリメートル水銀柱')
      .replace(/\bmL\/min\b/g, 'ミリリットル毎分')
      .replace(/\bL\/min\b/g, 'リットル毎分')
      .replace(/\bmL\/(?:日|day|d)\b/gi, 'ミリリットル毎日')
      .replace(/(\d)\s*mL\b/g, '$1ミリリットル')
      .replace(/\bmL\b/g, 'ミリリットル')
      .replace(/(\d)\s*L\b/g, '$1リットル')
      .replace(/\bcm³\b/g, '立方センチメートル')
      .replace(/\bcm²\b/g, '平方センチメートル')
      .replace(/\bm²\b/g, '平方メートル')
      .replace(/(\d)\s*cm\b/g, '$1センチメートル')
      .replace(/(\d)\s*mm\b/g, '$1ミリメートル')
      .replace(/(\d)\s*kg\b/g, '$1キログラム')
      .replace(/\bbpm\b/gi, '回毎分')
      .replace(/×\s*(\d+)/g, 'かける$1')
      .replace(/。/g, '。 ');
  } else if (lang === 'ko') {
    s = s
      .replace(/[≈~]\s*/g, '약 ')
      .replace(/°C\b/g, ' 섭씨도')
      .replace(/\bmmHg\b/g, '밀리미터 수은주')
      .replace(/\bmL\/min\b/g, '분당 밀리리터')
      .replace(/\bL\/min\b/g, '분당 리터')
      .replace(/\bmL\/(?:일|day|d)\b/gi, '하루 밀리리터')
      .replace(/(\d)\s*mL\b/g, '$1 밀리리터')
      .replace(/\bmL\b/g, '밀리리터')
      .replace(/(\d)\s*L\b/g, '$1 리터')
      .replace(/\bcm³\b/g, '세제곱센티미터')
      .replace(/\bcm²\b/g, '제곱센티미터')
      .replace(/\bm²\b/g, '제곱미터')
      .replace(/(\d)\s*cm\b/g, '$1 센티미터')
      .replace(/(\d)\s*mm\b/g, '$1 밀리미터')
      .replace(/(\d)\s*kg\b/g, '$1 킬로그램')
      .replace(/\bbpm\b/gi, '회 매분')
      .replace(/×\s*(\d+)/g, '곱하기 $1');
  } else if (lang === 'pt') {
    s = s
      .replace(/[≈~]\s*/g, 'cerca de ')
      .replace(/°C\b/g, ' graus Celsius')
      .replace(/\bmmHg\b/g, 'milímetros de mercúrio')
      .replace(/\bmL\/min\b/g, 'mililitros por minuto')
      .replace(/\bL\/min\b/g, 'litros por minuto')
      .replace(/\bmL\/(?:dia|day|d)\b/gi, 'mililitros por dia')
      .replace(/(\d)\s*mL\b/g, '$1 mililitros')
      .replace(/\bmL\b/g, 'mililitros')
      .replace(/(\d)\s*L\b/g, '$1 litros')
      .replace(/\bcm³\b/g, 'centímetros cúbicos')
      .replace(/\bcm²\b/g, 'centímetros quadrados')
      .replace(/\bm²\b/g, 'metros quadrados')
      .replace(/(\d)\s*cm\b/g, '$1 centímetros')
      .replace(/(\d)\s*mm\b/g, '$1 milímetros')
      .replace(/(\d)\s*kg\b/g, '$1 quilogramas')
      .replace(/\bbpm\b/gi, 'batimentos por minuto')
      .replace(/×\s*(\d+)/g, 'vezes $1');
  } else if (lang === 'fr') {
    s = s
      .replace(/[≈~]\s*/g, 'environ ')
      .replace(/°C\b/g, ' degrés Celsius')
      .replace(/\bmmHg\b/g, 'millimètres de mercure')
      .replace(/\bmL\/min\b/g, 'millilitres par minute')
      .replace(/\bL\/min\b/g, 'litres par minute')
      .replace(/\bmL\/(?:jour|day|d)\b/gi, 'millilitres par jour')
      .replace(/(\d)\s*mL\b/g, '$1 millilitres')
      .replace(/\bmL\b/g, 'millilitres')
      .replace(/(\d)\s*L\b/g, '$1 litres')
      .replace(/\bcm³\b/g, 'centimètres cubes')
      .replace(/\bcm²\b/g, 'centimètres carrés')
      .replace(/\bm²\b/g, 'mètres carrés')
      .replace(/(\d)\s*cm\b/g, '$1 centimètres')
      .replace(/(\d)\s*mm\b/g, '$1 millimètres')
      .replace(/(\d)\s*kg\b/g, '$1 kilogrammes')
      .replace(/\bbpm\b/gi, 'battements par minute')
      .replace(/×\s*(\d+)/g, 'fois $1');
  } else if (lang === 'it') {
    s = s
      .replace(/[≈~]\s*/g, 'circa ')
      .replace(/°C\b/g, ' gradi Celsius')
      .replace(/\bmmHg\b/g, 'millimetri di mercurio')
      .replace(/\bmL\/min\b/g, 'millilitri al minuto')
      .replace(/\bL\/min\b/g, 'litri al minuto')
      .replace(/\bmL\/(?:giorno|day|d)\b/gi, 'millilitri al giorno')
      .replace(/(\d)\s*mL\b/g, '$1 millilitri')
      .replace(/\bmL\b/g, 'millilitri')
      .replace(/(\d)\s*L\b/g, '$1 litri')
      .replace(/\bcm³\b/g, 'centimetri cubi')
      .replace(/\bcm²\b/g, 'centimetri quadrati')
      .replace(/\bm²\b/g, 'metri quadrati')
      .replace(/(\d)\s*cm\b/g, '$1 centimetri')
      .replace(/(\d)\s*mm\b/g, '$1 millimetri')
      .replace(/(\d)\s*kg\b/g, '$1 chilogrammi')
      .replace(/\bbpm\b/gi, 'battiti al minuto')
      .replace(/×\s*(\d+)/g, 'per $1');
  } else {
    // English ('en')
    s = s
      .replace(/[≈~]\s*/g, 'about ')
      .replace(/°C\b/g, ' degrees Celsius')
      .replace(/\bmmHg\b/g, 'millimeters of mercury')
      .replace(/\bmL\/min\b/g, 'milliliters per minute')
      .replace(/\bL\/min\b/g, 'liters per minute')
      .replace(/\bmL\/(?:day|d)\b/gi, 'milliliters per day')
      .replace(/(\d)\s*mL\b/g, '$1 milliliters')
      .replace(/\bmL\b/g, 'milliliters')
      .replace(/(\d)\s*L\b/g, '$1 liters')
      .replace(/\bcm³\b/g, 'cubic centimeters')
      .replace(/\bcm²\b/g, 'square centimeters')
      .replace(/\bm²\b/g, 'square meters')
      .replace(/(\d)\s*cm\b/g, '$1 centimeters')
      .replace(/(\d)\s*mm\b/g, '$1 millimeters')
      .replace(/(\d)\s*kg\b/g, '$1 kilograms')
      .replace(/\bbpm\b/gi, 'beats per minute')
      .replace(/×\s*(\d+)/g, 'times $1')
      .replace(/\bCN\s+([IVX]+)/g, 'cranial nerve $1');
  }

  return s.replace(/\s{2,}/g, ' ').trim();
}

const utf8Encoder = new TextEncoder();

export function utf8ByteLength(str) {
  return utf8Encoder.encode(String(str || '')).length;
}

/**
 * Splits cleaned plain text on sentence boundaries so every chunk is <= `maxBytes` UTF-8 bytes
 * (Cloud TTS `text:synthesize` enforces a 5,000-byte limit; CJK/Hangul characters are 3 bytes each).
 */
export function splitTextIntoByteChunks(text, lang = 'en', maxBytes = 4500) {
  const s = String(text || '').trim();
  if (!s) return [];
  if (utf8ByteLength(s) <= maxBytes) return [s];

  const sentenceRegex =
    lang === 'ja' || lang === 'zh'
      ? /(?<=[。！？!?])\s*/u
      : /(?<=[.!?。！？])\s+/u;

  const sentences = s.split(sentenceRegex).filter(Boolean);
  const chunks = [];
  let current = '';
  const joiner = lang === 'ja' || lang === 'zh' ? '' : ' ';

  const pushOrSplitSentence = (sent) => {
    if (utf8ByteLength(sent) <= maxBytes) {
      if (!current) {
        current = sent;
      } else {
        const candidate = `${current}${joiner}${sent}`;
        if (utf8ByteLength(candidate) <= maxBytes) {
          current = candidate;
        } else {
          chunks.push(current);
          current = sent;
        }
      }
      return;
    }
    // Fallback if a single sentence exceeds maxBytes: split on clause punctuation
    if (current) {
      chunks.push(current);
      current = '';
    }
    const clauses = sent.split(/(?<=[,，、;；:：])\s*/u).filter(Boolean);
    for (const cl of clauses) {
      const candidate = current ? `${current}${joiner}${cl}` : cl;
      if (utf8ByteLength(candidate) <= maxBytes) {
        current = candidate;
      } else {
        if (current) chunks.push(current);
        current = cl;
      }
    }
  };

  for (const sent of sentences) {
    pushOrSplitSentence(sent);
  }
  if (current) chunks.push(current);
  return chunks;
}
