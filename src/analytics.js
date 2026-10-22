/**
 * Google Analytics 4 (GA4) telemetry module for Human Body 3D Atlas.
 *
 * Bundled into `dist/atlas.js` so Content-Security-Policy remains strict without `'unsafe-inline'`.
 */

export const GA_MEASUREMENT_ID = 'G-M5GCYZ8X1R';
export const PRODUCTION_HOSTS = [
  'human-body-atlas.web.app',
  'human-body-atlas.firebaseapp.com'
];

let initialized = false;

export function initAnalytics() {
  if (typeof window === 'undefined' || initialized) return;
  initialized = true;

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = window.gtag || gtag;

  if (
    PRODUCTION_HOSTS.indexOf(window.location.hostname) === -1 &&
    !/[?&]debug_ga=1/.test(window.location.search)
  ) {
    window['ga-disable-G-M5GCYZ8X1R'] = true;
  }

  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: window.location.pathname + window.location.search,
    site_name: 'human-body-atlas',
    allow_google_signals: false,
    allow_ad_personalization_signals: false
  });
}

export function trackEvent(eventName, params = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  try {
    window.gtag('event', eventName, params);
  } catch (_err) {
    // Non-blocking telemetry
  }
}

export function trackSelectPart({ title, curatedId, kind, audience, sex, language }) {
  trackEvent('select_body_part', {
    part_title: String(title || '').slice(0, 100),
    curated_id: String(curatedId || 'none'),
    selection_kind: String(kind || 'part'),
    audience: String(audience || 'kids'),
    sex: String(sex || 'male'),
    language: String(language || 'en')
  });
}

export function trackViewChange({ viewId, language }) {
  trackEvent('change_system_view', {
    view_id: String(viewId || ''),
    language: String(language || 'en')
  });
}

export function trackSexSwitch({ sex, language }) {
  trackEvent('switch_sex_model', {
    sex: String(sex || 'male'),
    language: String(language || 'en')
  });
}

export function trackAudienceSwitch({ audience, language }) {
  trackEvent('switch_audience_mode', {
    audience: String(audience || 'kids'),
    language: String(language || 'en')
  });
}

export function trackReadAloud({ title, curatedId, audience, language, mode }) {
  trackEvent('read_aloud', {
    part_title: String(title || '').slice(0, 100),
    curated_id: String(curatedId || 'none'),
    audience: String(audience || 'kids'),
    language: String(language || 'en'),
    voice_mode: String(mode || 'studio')
  });
}

export function trackSearch({ query, resultName, language }) {
  trackEvent('search_anatomy', {
    search_term: String(query || '').slice(0, 80),
    result_name: String(resultName || '').slice(0, 100),
    language: String(language || 'en')
  });
}

export function trackQuizEvent({ action, score, total, language }) {
  trackEvent('anatomy_quiz', {
    quiz_action: String(action || 'start'),
    score: Number(score || 0),
    total: Number(total || 0),
    language: String(language || 'en')
  });
}

export function trackLanguageSwitch({ fromLanguage, toLanguage }) {
  trackEvent('switch_language', {
    from_language: String(fromLanguage || 'en'),
    to_language: String(toLanguage || 'en')
  });
}
