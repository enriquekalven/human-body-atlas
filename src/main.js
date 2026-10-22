/**
 * Human Body 3D Atlas — application controller.
 *
 * Security: all dynamic UI is built with document.createElement / textContent / replaceChildren.
 * No innerHTML, no inline handlers, no eval — compatible with the strict CSP in index.html/server.py.
 */

import { AnatomyViewer, LAYER_IDS, VIEW_PRESETS } from './viewer/AnatomyViewer.js';
import { ANATOMY_PARTS } from './anatomyData.js';
import { buildSearchIndex, searchAnatomy, resolveCuratedMembers, layerLabel } from './content.js';
import { SKIN_TONES } from './viewer/materials.js';
import {
  initAnalytics,
  trackSelectPart,
  trackViewChange,
  trackSexSwitch,
  trackAudienceSwitch,
  trackReadAloud,
  trackSearch,
  trackQuizEvent,
  trackLanguageSwitch
} from './analytics.js';
import {
  normalizeLang,
  getUiStrings,
  getLocalizedPart,
  getLocalizedTissueInfo,
  getLocalizedQuizQuestions,
  translateAnatomyName
} from './i18n.js';

const $ = (id) => document.getElementById(id);

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined && text !== null) node.textContent = text;
  return node;
}

class AtlasApp {
  constructor() {
    initAnalytics();
    this.params = new URLSearchParams(window.location.search);
    this.audience = this.params.get('audience') === 'pro' ? 'pro' : 'kids';
    this.sex = this.params.get('sex') === 'female' ? 'female' : 'male';
    this.lang = this._detectInitialLanguage();
    this.selection = null; // { indices, title, curatedId }
    this.labelsOn = this.params.get('labels') === '1';
    this.autoRotate = false;
    this.labelNodes = [];
    this.lastLabelUpdate = 0;
    this.searchActive = -1;
    this.currentViewId = 'muscles';
    this.isSpeaking = false;
    this.currentAudio = null;

    if ('speechSynthesis' in window) {
      // Pre-warm browser voice list asynchronously
      window.speechSynthesis.getVoices();
      if (typeof window.speechSynthesis.addEventListener === 'function') {
        window.speechSynthesis.addEventListener('voiceschanged', () => {
          window.speechSynthesis.getVoices();
        });
      }
    }

    const quality = this.params.get('quality') || (window.matchMedia('(max-width: 768px)').matches ? 'balanced' : 'high');
    this.viewer = new AnatomyViewer($('anatomy-canvas'), {
      quality,
      autoQuality: !this.params.get('quality'),
      sex: this.sex,
      toneMapping: this.params.get('tm') || undefined,
      exposure: this.params.get('exposure') ? Number(this.params.get('exposure')) : undefined
    });

    if (this.params.get('ui') === '0') document.body.classList.add('no-ui');
    this._renderViewBar();
    this._renderLayerSliders();
    this._renderSkinTones();
    this._bindUi();
    this._bindCanvas();
    this._syncAudienceButtons();
    this._syncSexButtons();
    this._syncLanguageButtons();
    this._applyUiStrings();
    $('quality-select').value = quality;
    $('btn-labels').classList.toggle('is-on', this.labelsOn);
    $('btn-labels').setAttribute('aria-pressed', String(this.labelsOn));

    const view = this.params.get('view');
    this.setView(VIEW_PRESETS[view] ? view : 'muscles', false);
    if (this.params.get('ao') === 'debug') this.viewer.setAODebug(true);
    const tone = this.params.get('tone');
    if (tone && SKIN_TONES[tone]) this.viewer.setSkinTone(tone);

    this.viewer.addEventListener('layerschange', () => this._syncLayerSliders());
    this.viewer.addEventListener('qualitychange', (e) => {
      $('quality-select').value = e.detail;
    });
    this.viewer.addEventListener('frame', () => this._onFrame());
    this.viewer.start();
    this._load();
  }

  _detectInitialLanguage() {
    const urlLang = this.params.get('lang');
    if (urlLang) return normalizeLang(urlLang);
    try {
      const saved = window.localStorage.getItem('atlas_lang');
      if (saved) return normalizeLang(saved);
    } catch (_e) {
      // Ignore storage access errors
    }
    return 'en';
  }

  _ui() {
    return getUiStrings(this.lang);
  }

  _displayName(englishName) {
    return translateAnatomyName(englishName, this.lang);
  }

  async _load() {
    try {
      await this.viewer.load({
        onProgress: ({ loadedBytes, totalBytes, layer }) => {
          const ui = this._ui();
          const pct = Math.min(100, Math.round((loadedBytes / totalBytes) * 100));
          $('progress-bar').style.width = `${pct}%`;
          $('loading-meta').textContent = ui.loadingProgress(
            pct,
            (loadedBytes / 1048576).toFixed(1),
            (totalBytes / 1048576).toFixed(1)
          );
          const layerName = ui.layerNames[layer] || layer;
          $('loading-sub').textContent = ui.loadingLayer(layerName);
        }
      });
    } catch (err) {
      console.error('Atlas failed to load models:', err && err.message ? err.message : String(err));
      this._showError(this._ui().errorLoadModels);
      return;
    }
    this.manifest = this.viewer.manifest;
    this.searchIndex = buildSearchIndex(this.manifest);
    this.curatedMembers = resolveCuratedMembers(this.manifest, ANATOMY_PARTS);
    this._buildPartToGroups();
    $('loading-overlay').classList.add('done');
    setTimeout(() => $('loading-overlay').classList.add('hidden'), 700);

    const q = this.params.get('q');
    if (q) this._runSearchSelect(q);
    this.readyFrames = 0;
  }

  _showError(msg) {
    const banner = $('error-banner');
    banner.textContent = msg;
    banner.classList.remove('hidden');
  }

  // --------------------------------------------------------------------------
  // Views & layers
  // --------------------------------------------------------------------------
  _renderViewBar() {
    const ui = this._ui();
    const bar = $('view-bar');
    bar.replaceChildren();
    for (const [id, preset] of Object.entries(VIEW_PRESETS)) {
      const label = ui.viewPresets[id] || preset.label;
      const btn = el('button', 'view-btn', label);
      btn.type = 'button';
      btn.dataset.view = id;
      const active = id === this.currentViewId;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
      btn.addEventListener('click', () => this.setView(id, true));
      bar.appendChild(btn);
    }
  }

  setView(id, track = true) {
    this.currentViewId = id;
    this.viewer.setView(id);
    for (const btn of $('view-bar').querySelectorAll('.view-btn')) {
      const active = btn.dataset.view === id;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
    }
    this._syncLayerSliders();
    if (track) trackViewChange({ viewId: id, language: this.lang });
  }

  _renderLayerSliders() {
    const ui = this._ui();
    const wrap = $('layer-sliders');
    wrap.replaceChildren();
    this.layerInputs = {};
    for (const id of LAYER_IDS) {
      const row = el('div', 'layer-row');
      row.dataset.layer = id;
      const label = el('label', 'layer-name', ui.layerNames[id] || id);
      label.htmlFor = `layer-${id}`;
      const dot = el('span', `layer-dot dot-${id}`);
      dot.setAttribute('aria-hidden', 'true');
      label.prepend(dot);
      const input = el('input');
      input.type = 'range';
      input.min = '0';
      input.max = '1';
      input.step = '0.01';
      input.id = `layer-${id}`;
      input.addEventListener('input', () => {
        this.viewer.setLayerOpacity(id, Number(input.value));
        for (const btn of $('view-bar').querySelectorAll('.view-btn')) {
          btn.classList.remove('is-active');
          btn.setAttribute('aria-pressed', 'false');
        }
      });
      const out = el('span', 'layer-value', '0%');
      row.append(label, input, out);
      wrap.appendChild(row);
      this.layerInputs[id] = { input, out, row, label };
    }
  }

  _syncLayerSliders() {
    for (const id of LAYER_IDS) {
      const v = this.viewer.layerOpacity[id] ?? 0;
      const entry = this.layerInputs[id];
      if (!entry) continue;
      const { input, out, row } = entry;
      input.value = String(v);
      out.textContent = `${Math.round(v * 100)}%`;
      row.classList.toggle('is-off', v < 0.01);
    }
  }

  _renderSkinTones() {
    const ui = this._ui();
    const wrap = $('skin-tones');
    wrap.replaceChildren();
    for (const [name, hex] of Object.entries(SKIN_TONES)) {
      const btn = el('button', 'tone-swatch');
      btn.type = 'button';
      btn.dataset.tone = name;
      btn.style.backgroundColor = `#${hex.toString(16).padStart(6, '0')}`;
      btn.setAttribute('aria-label', ui.skinToneSwatchAria(name));
      btn.addEventListener('click', () => {
        this.viewer.setSkinTone(name);
        for (const b of wrap.children) b.classList.toggle('is-active', b === btn);
      });
      if (name === 'medium') btn.classList.add('is-active');
      wrap.appendChild(btn);
    }
  }

  // --------------------------------------------------------------------------
  // Language & UI strings
  // --------------------------------------------------------------------------
  _setLanguage(lang) {
    const next = normalizeLang(lang);
    if (next === this.lang) return;
    const prev = this.lang;
    this._stopSpeech();
    this.lang = next;
    try {
      window.localStorage.setItem('atlas_lang', next);
    } catch (_e) {
      // Ignore storage access errors
    }
    trackLanguageSwitch({ fromLanguage: prev, toLanguage: next });
    this._syncLanguageButtons();
    this._applyUiStrings();
    if (!$('search-results').classList.contains('hidden')) {
      this._renderSearchResults();
    }
    if ($('search-input').value.trim() && this.selection) {
      $('search-input').value = this._displayName(this.selection.title);
    }
    if (this.selection) {
      this._renderInspector();
    }
    if (this.labelsOn && this.manifest) {
      this._computeLabels();
    }
    if (!$('quiz-modal').classList.contains('hidden') && this.quiz) {
      this._renderQuiz();
    }
  }

  _syncLanguageButtons() {
    for (const code of ['en', 'es', 'zh']) {
      const btn = $(`btn-lang-${code}`);
      if (!btn) continue;
      const active = this.lang === code;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
    }
    document.documentElement.lang = this.lang === 'zh' ? 'zh-CN' : this.lang;
  }

  _applyUiStrings() {
    const ui = this._ui();
    document.title = ui.pageTitle;
    if ($('skip-link')) $('skip-link').textContent = ui.skipLink;
    $('anatomy-canvas').setAttribute('aria-label', ui.canvasAria);
    if ($('loading-title')) $('loading-title').textContent = ui.loadingTitle;
    if ($('loading-sub') && !this.manifest) $('loading-sub').textContent = ui.loadingSubDefault;
    if ($('brand-title')) $('brand-title').textContent = ui.brandTitle;
    if ($('brand-subtitle')) $('brand-subtitle').textContent = ui.brandSubtitle;
    if ($('search-label')) $('search-label').textContent = ui.searchLabel;
    $('search-input').placeholder = ui.searchPlaceholder;
    $('search-results').setAttribute('aria-label', ui.searchResultsAria);
    if ($('sex-group')) $('sex-group').setAttribute('aria-label', ui.sexGroupAria);
    $('btn-female').textContent = ui.female;
    $('btn-male').textContent = ui.male;
    if ($('audience-group')) $('audience-group').setAttribute('aria-label', ui.audienceGroupAria);
    $('btn-kids').textContent = ui.kids;
    $('btn-pro').textContent = ui.pro;
    if ($('lang-group')) $('lang-group').setAttribute('aria-label', ui.langGroupAria);
    $('btn-quiz').textContent = ui.quizBtn;
    $('view-bar').setAttribute('aria-label', ui.viewBarAria);

    // Update view preset button labels
    for (const btn of $('view-bar').querySelectorAll('.view-btn')) {
      const id = btn.dataset.view;
      if (id && ui.viewPresets[id]) btn.textContent = ui.viewPresets[id];
    }

    // Update layer slider labels
    if (this.layerInputs) {
      for (const id of LAYER_IDS) {
        const entry = this.layerInputs[id];
        if (!entry) continue;
        const dot = el('span', `layer-dot dot-${id}`);
        dot.setAttribute('aria-hidden', 'true');
        entry.label.replaceChildren(dot, document.createTextNode(ui.layerNames[id] || id));
      }
    }

    if ($('left-panel')) $('left-panel').setAttribute('aria-label', ui.leftPanelAria);
    if ($('layers-title')) $('layers-title').textContent = ui.layersTitle;
    if ($('layers-hint')) $('layers-hint').textContent = ui.layersHint;
    if ($('heart-panel-title')) $('heart-panel-title').textContent = ui.heartPanelTitle;
    if ($('heart-rate-label')) $('heart-rate-label').textContent = ui.heartRateLabel;
    $('heart-rate-out').textContent = ui.bpmUnit($('heart-rate').value);
    if ($('legend-artery-text')) $('legend-artery-text').textContent = ui.legendArteries;
    if ($('legend-vein-text')) $('legend-vein-text').textContent = ui.legendVeins;
    $('btn-flow').textContent = ui.bloodFlowBtn;
    if ($('display-panel-title')) $('display-panel-title').textContent = ui.displayPanelTitle;
    $('btn-labels').textContent = ui.labelsBtn;
    $('btn-isolate').textContent = ui.isolateBtn;
    $('btn-rotate').textContent = ui.autoRotateBtn;
    $('btn-reset').textContent = ui.resetViewBtn;
    if ($('quality-label')) $('quality-label').textContent = ui.qualityLabel;
    if ($('quality-opt-high')) $('quality-opt-high').textContent = ui.qualityHigh;
    if ($('quality-opt-balanced')) $('quality-opt-balanced').textContent = ui.qualityBalanced;
    if ($('quality-opt-fast')) $('quality-opt-fast').textContent = ui.qualityFast;
    if ($('skin-tone-label')) $('skin-tone-label').textContent = ui.skinToneLabel;
    $('skin-tones').setAttribute('aria-label', ui.skinToneLabel);
    for (const b of $('skin-tones').children) {
      if (b.dataset.tone) b.setAttribute('aria-label', ui.skinToneSwatchAria(b.dataset.tone));
    }

    $('inspector-panel').setAttribute('aria-label', ui.inspectorAria);
    if ($('inspector-empty-title')) $('inspector-empty-title').textContent = ui.emptyTitle;
    if ($('inspector-empty-desc')) $('inspector-empty-desc').textContent = ui.emptyDesc;
    if ($('inspector-tips')) {
      const tipsList = $('inspector-tips');
      tipsList.replaceChildren();
      for (const t of ui.tips) {
        const li = el('li');
        if (t.bold) li.appendChild(el('strong', null, t.bold));
        if (t.rest) li.appendChild(document.createTextNode(t.rest));
        if (t.bold2) li.appendChild(el('strong', null, t.bold2));
        if (t.rest2) li.appendChild(document.createTextNode(t.rest2));
        tipsList.appendChild(li);
      }
    }

    this._syncSpeakButton();
    $('btn-zoom-part').textContent = ui.zoomPartBtn;
    $('btn-isolate-part').textContent = this.viewer.isolated ? ui.showAllBtn : ui.isolatePartBtn;
    $('btn-clear').textContent = ui.clearBtn;

    $('btn-zoom-out').setAttribute('aria-label', ui.zoomOutAria);
    $('btn-zoom-in').setAttribute('aria-label', ui.zoomInAria);
    if ($('zoom-label')) $('zoom-label').textContent = ui.zoomLabel;
    if ($('footer-attribution')) $('footer-attribution').textContent = ui.footerAttribution;
    $('quiz-title').textContent = ui.quizTitle;
    $('btn-quiz-close').textContent = ui.quizCloseBtn;
    $('btn-quiz-close').setAttribute('aria-label', ui.quizCloseAria);
  }

  // --------------------------------------------------------------------------
  // UI events
  // --------------------------------------------------------------------------
  _bindUi() {
    const search = $('search-input');
    search.addEventListener('input', () => this._renderSearchResults());
    search.addEventListener('focus', () => this._renderSearchResults());
    search.addEventListener('keydown', (e) => this._onSearchKey(e));
    document.addEventListener('pointerdown', (e) => {
      if (!e.target.closest('.search')) this._hideSearch();
    });

    $('btn-female').addEventListener('click', () => this._setSex('female'));
    $('btn-male').addEventListener('click', () => this._setSex('male'));
    $('btn-kids').addEventListener('click', () => this._setAudience('kids'));
    $('btn-pro').addEventListener('click', () => this._setAudience('pro'));
    if ($('btn-lang-en')) $('btn-lang-en').addEventListener('click', () => this._setLanguage('en'));
    if ($('btn-lang-es')) $('btn-lang-es').addEventListener('click', () => this._setLanguage('es'));
    if ($('btn-lang-zh')) $('btn-lang-zh').addEventListener('click', () => this._setLanguage('zh'));

    const hr = $('heart-rate');
    hr.addEventListener('input', () => {
      this.viewer.setHeartRate(Number(hr.value));
      $('heart-rate-out').textContent = this._ui().bpmUnit(hr.value);
    });
    this._bindToggle('btn-flow', (on) => this.viewer.setBloodFlow(on), true);
    this._bindToggle(
      'btn-labels',
      (on) => {
        this.labelsOn = on;
        if (!on) this._clearLabels();
        else if (this.manifest) this._computeLabels();
      },
      this.labelsOn
    );
    this._bindToggle('btn-isolate', (on) => {
      this.viewer.setIsolation(on);
      $('btn-isolate-part').textContent = on ? this._ui().showAllBtn : this._ui().isolatePartBtn;
    }, false);
    this._bindToggle(
      'btn-rotate',
      (on) => {
        this.viewer.controls.autoRotate = on;
        this.viewer.controls.autoRotateSpeed = 1.2;
      },
      false
    );
    $('btn-reset').addEventListener('click', () => this.viewer.resetCamera());
    $('quality-select').addEventListener('change', (e) => {
      this.viewer.autoQuality = false;
      this.viewer.setQuality(e.target.value);
    });

    $('btn-zoom-part').addEventListener('click', () => {
      if (this.selection) this.viewer.frameParts(this.selection.indices);
    });
    $('btn-isolate-part').addEventListener('click', () => {
      const isolate = !this.viewer.isolated;
      this.viewer.setIsolation(isolate);
      $('btn-isolate').classList.toggle('is-on', isolate);
      $('btn-isolate').setAttribute('aria-pressed', String(isolate));
      $('btn-isolate-part').textContent = isolate ? this._ui().showAllBtn : this._ui().isolatePartBtn;
      if (isolate && this.selection) this.viewer.frameParts(this.selection.indices);
    });
    $('btn-clear').addEventListener('click', () => this.clearSelection());
    $('btn-speak').addEventListener('click', () => this._speak());

    const zoom = $('zoom-slider');
    zoom.addEventListener('input', () => {
      this.viewer.tween = null;
      this.viewer.setZoomLevel(Number(zoom.value));
    });
    $('btn-zoom-in').addEventListener('click', () => this.viewer.zoomBy(0.6));
    $('btn-zoom-out').addEventListener('click', () => this.viewer.zoomBy(1.6));

    $('btn-quiz').addEventListener('click', () => this._openQuiz());
    $('btn-quiz-close').addEventListener('click', () => this._closeQuiz());
    $('quiz-modal').addEventListener('click', (e) => {
      if (e.target === $('quiz-modal')) this._closeQuiz();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !$('quiz-modal').classList.contains('hidden')) this._closeQuiz();
    });
  }

  _bindToggle(id, onChange, initial) {
    const btn = $(id);
    let on = !!initial;
    btn.classList.toggle('is-on', on);
    btn.setAttribute('aria-pressed', String(on));
    btn.addEventListener('click', () => {
      on = !on;
      btn.classList.toggle('is-on', on);
      btn.setAttribute('aria-pressed', String(on));
      onChange(on);
    });
  }

  _setSex(sex) {
    const next = sex === 'female' ? 'female' : 'male';
    this.sex = next;
    this.viewer.setSex(next);
    this._syncSexButtons();
    trackSexSwitch({ sex: next, language: this.lang });
    if (this.selection && this.manifest) {
      // If Skin was selected, switch selection to the active sex's skin mesh; if a sex-specific
      // organ from the other sex was selected, clear the selection.
      const parts = this.selection.indices.map((i) => this.manifest.parts[i]);
      if (parts.length === 1 && /^FJ281[0234]F?$/.test(parts[0].fj)) {
        const baseFj = parts[0].fj.replace(/F$/, '');
        const targetFj = next === 'female' ? `${baseFj}F` : baseFj;
        const idx = this.manifest.parts.findIndex((p) => p.fj === targetFj);
        if (idx >= 0) this.selectPart(idx);
      } else if (parts.every((p) => p.sex && p.sex !== next)) {
        this.clearSelection();
      }
    }
  }

  _syncSexButtons() {
    const fem = this.sex === 'female';
    $('btn-female').classList.toggle('is-active', fem);
    $('btn-female').setAttribute('aria-pressed', String(fem));
    $('btn-male').classList.toggle('is-active', !fem);
    $('btn-male').setAttribute('aria-pressed', String(!fem));
  }

  _setAudience(a) {
    this._stopSpeech();
    this.audience = a;
    this._syncAudienceButtons();
    trackAudienceSwitch({ audience: a, language: this.lang });
    if (this.selection) this._renderInspector();
  }

  _syncAudienceButtons() {
    const kids = this.audience === 'kids';
    $('btn-kids').classList.toggle('is-active', kids);
    $('btn-kids').setAttribute('aria-pressed', String(kids));
    $('btn-pro').classList.toggle('is-active', !kids);
    $('btn-pro').setAttribute('aria-pressed', String(!kids));
    // Kids mode hides internal reproductive organs (unless explicitly selected) and adds modesty garments.
    this.viewer.setTissueHidden('reproductive', kids);
    this.viewer.setModesty(kids);
  }

  // --------------------------------------------------------------------------
  // Canvas interaction: hover names, click to select, keyboard orbit
  // --------------------------------------------------------------------------
  _bindCanvas() {
    const canvas = $('anatomy-canvas');
    const tooltip = $('hover-tooltip');
    let downAt = null;
    let lastHover = 0;

    canvas.addEventListener('pointerdown', (e) => {
      downAt = { x: e.clientX, y: e.clientY, t: performance.now() };
    });
    canvas.addEventListener('pointerup', (e) => {
      if (!downAt || !this.manifest) return;
      const moved = Math.hypot(e.clientX - downAt.x, e.clientY - downAt.y);
      if (moved < 6 && e.button === 0) {
        const hit = this.viewer.pickAt(e.clientX, e.clientY);
        if (hit) this.selectPart(hit.object.userData.partIndex);
      }
      downAt = null;
    });
    canvas.addEventListener('pointermove', (e) => {
      if (!this.manifest || e.pointerType === 'touch') return;
      const now = performance.now();
      if (now - lastHover < 50 || (downAt && e.buttons)) return;
      lastHover = now;
      const hit = this.viewer.pickAt(e.clientX, e.clientY);
      const idx = hit ? hit.object.userData.partIndex : null;
      this.viewer.setHovered(idx);
      canvas.style.cursor = idx !== null ? 'pointer' : 'grab';
      if (idx !== null) {
        const part = this.manifest.parts[idx];
        tooltip.replaceChildren(
          el('strong', null, this._displayName(part.name)),
          el('span', null, layerLabel(part.layer, this.lang))
        );
        tooltip.style.transform = `translate(${e.clientX + 16}px, ${e.clientY + 14}px)`;
        tooltip.classList.remove('hidden');
      } else {
        tooltip.classList.add('hidden');
      }
    });
    canvas.addEventListener('pointerleave', () => {
      this.viewer.setHovered(null);
      tooltip.classList.add('hidden');
    });
    canvas.addEventListener('keydown', (e) => {
      const step = 0.12;
      if (e.key === 'ArrowLeft') this.viewer.orbit(-step, 0);
      else if (e.key === 'ArrowRight') this.viewer.orbit(step, 0);
      else if (e.key === 'ArrowUp') this.viewer.orbit(0, -step);
      else if (e.key === 'ArrowDown') this.viewer.orbit(0, step);
      else if (e.key === '+' || e.key === '=') this.viewer.zoomBy(0.75);
      else if (e.key === '-' || e.key === '_') this.viewer.zoomBy(1.33);
      else return;
      e.preventDefault();
    });
  }

  // --------------------------------------------------------------------------
  // Search
  // --------------------------------------------------------------------------
  _renderSearchResults() {
    const ui = this._ui();
    const input = $('search-input');
    const list = $('search-results');
    list.replaceChildren();
    this.searchActive = -1;
    if (!this.searchIndex) {
      if (input.value.trim()) {
        list.appendChild(el('li', 'search-empty', ui.searchStillLoading));
        list.classList.remove('hidden');
      }
      return;
    }
    const results = searchAnatomy(this.searchIndex, input.value, 10);
    this.searchResults = results;
    if (!input.value.trim()) {
      this._hideSearch();
      return;
    }
    if (results.length === 0) {
      list.appendChild(el('li', 'search-empty', ui.searchNoMatch));
    }
    results.forEach((r, i) => {
      const li = el('li', 'search-item');
      li.id = `search-opt-${i}`;
      li.setAttribute('role', 'option');
      li.setAttribute('aria-selected', 'false');
      const displayName =
        this.lang === 'es' ? r.nameEs || this._displayName(r.name) : this.lang === 'zh' ? r.nameZh || this._displayName(r.name) : r.name;
      const name = el('span', 'search-name', displayName);
      const meta = el(
        'span',
        'search-meta',
        r.kind === 'group' ? ui.structuresCount(r.members.length) : layerLabel(r.layer, this.lang)
      );
      li.append(name, meta);
      li.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        this._chooseSearchResult(r);
      });
      list.appendChild(li);
    });
    list.classList.remove('hidden');
    input.setAttribute('aria-expanded', 'true');
  }

  _onSearchKey(e) {
    const items = $('search-results').querySelectorAll('.search-item');
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      if (!items.length) return;
      e.preventDefault();
      this.searchActive = (this.searchActive + (e.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length;
      items.forEach((it, i) => it.setAttribute('aria-selected', String(i === this.searchActive)));
      $('search-input').setAttribute('aria-activedescendant', items[this.searchActive].id);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const results = this.searchResults || [];
      const pick = results[this.searchActive >= 0 ? this.searchActive : 0];
      if (pick) this._chooseSearchResult(pick);
    } else if (e.key === 'Escape') {
      this._hideSearch();
    }
  }

  _chooseSearchResult(r) {
    const rawQuery = $('search-input').value;
    const displayName =
      this.lang === 'es' ? r.nameEs || this._displayName(r.name) : this.lang === 'zh' ? r.nameZh || this._displayName(r.name) : r.name;
    $('search-input').value = displayName;
    this._hideSearch();
    $('search-input').blur();
    trackSearch({ query: rawQuery, resultName: r.name, language: this.lang });
    if (r.kind === 'group') this.selectGroup(r.members, r.name);
    else this.selectPart(r.members[0]);
  }

  _runSearchSelect(q) {
    const results = searchAnatomy(this.searchIndex, q, 1);
    if (results[0]) this._chooseSearchResult(results[0]);
  }

  _hideSearch() {
    $('search-results').classList.add('hidden');
    $('search-input').setAttribute('aria-expanded', 'false');
    $('search-input').removeAttribute('aria-activedescendant');
  }

  // --------------------------------------------------------------------------
  // Selection
  // --------------------------------------------------------------------------
  _buildPartToGroups() {
    this.partGroups = new Map();
    this.manifest.groups.forEach((g, gi) => {
      if (g.members.length < 2 || g.members.length > 300) return;
      for (const m of g.members) {
        if (!this.partGroups.has(m)) this.partGroups.set(m, []);
        this.partGroups.get(m).push(gi);
      }
    });
  }

  _curatedFor(indices) {
    let best = null;
    for (const [id, members] of this.curatedMembers) {
      const set = new Set(members);
      const overlap = indices.filter((i) => set.has(i)).length;
      if (overlap === 0) continue;
      const coverage = overlap / indices.length;
      if (coverage < 0.5) continue;
      if (!best || members.length < best.size) best = { id, size: members.length };
    }
    return best ? ANATOMY_PARTS.find((p) => p.id === best.id) : null;
  }

  selectPart(index) {
    const part = this.manifest.parts[index];
    if (!part) return;
    this._select({ indices: [index], title: part.name, kind: 'part' });
  }

  selectGroup(indices, title) {
    this._select({ indices, title, kind: 'group' });
  }

  selectCurated(curatedId) {
    const entry = ANATOMY_PARTS.find((p) => p.id === curatedId);
    const indices = this.curatedMembers.get(curatedId) || [];
    if (!entry || !indices.length) return;
    this._select({ indices, title: entry.name, kind: 'group', curated: entry });
  }

  _select(sel) {
    this._stopSpeech();
    // If the selection has both male and female variants (e.g. Skin), filter to active sex;
    // if the selection is exclusively for one sex (e.g. Uterus or Prostate), switch to that sex!
    const parts = sel.indices.map((i) => this.manifest.parts[i]);
    const hasMale = parts.some((p) => p.sex === 'male');
    const hasFemale = parts.some((p) => p.sex === 'female');
    const hasNeutral = parts.some((p) => !p.sex);
    if (hasFemale && !hasMale && !hasNeutral && this.sex !== 'female') {
      this.sex = 'female';
      this.viewer.setSex('female');
      this._syncSexButtons();
    } else if (hasMale && !hasFemale && !hasNeutral && this.sex !== 'male') {
      this.sex = 'male';
      this.viewer.setSex('male');
      this._syncSexButtons();
    } else if (hasMale && hasFemale) {
      sel.indices = sel.indices.filter((i) => {
        const s = this.manifest.parts[i].sex;
        return !s || s === this.sex;
      });
      if (sel.indices.length === 1) sel.kind = 'part';
    }
    const layers = new Set(sel.indices.map((i) => this.manifest.parts[i].layer));
    // Reveal the layer(s) the selection lives in so it is actually visible.
    for (const layer of layers) this.viewer.ensureLayerVisible(layer);
    sel.curated = sel.curated || this._curatedFor(sel.indices);
    this.selection = sel;
    this.viewer.setSelection(sel.indices);
    this.viewer.frameParts(sel.indices);
    trackSelectPart({
      title: sel.title,
      curatedId: sel.curated ? sel.curated.id : 'none',
      kind: sel.kind,
      audience: this.audience,
      sex: this.sex,
      language: this.lang
    });
    this._renderInspector();
  }

  clearSelection() {
    this._stopSpeech();
    this.selection = null;
    this.viewer.setSelection([]);
    this.viewer.setIsolation(false);
    $('btn-isolate').classList.remove('is-on');
    $('btn-isolate').setAttribute('aria-pressed', 'false');
    $('btn-isolate-part').textContent = this._ui().isolatePartBtn;
    $('inspector-content').classList.add('hidden');
    $('inspector-empty').classList.remove('hidden');
  }

  // --------------------------------------------------------------------------
  // Inspector
  // --------------------------------------------------------------------------
  _renderInspector() {
    const sel = this.selection;
    if (!sel) return;
    const ui = this._ui();
    const parts = sel.indices.map((i) => this.manifest.parts[i]);
    const first = parts[0];
    const curated = sel.curated ? getLocalizedPart(sel.curated, this.lang) : null;
    const kids = this.audience === 'kids';

    $('inspector-empty').classList.add('hidden');
    $('inspector-content').classList.remove('hidden');
    const displayTitle =
      curated && sel.curated && sel.title === sel.curated.name
        ? curated.name
        : this._displayName(sel.title);
    $('inspector-title').textContent = displayTitle;
    $('btn-isolate-part').textContent = this.viewer.isolated ? ui.showAllBtn : ui.isolatePartBtn;

    const tissue = this._dominantTissue(parts);
    if (curated) {
      $('inspector-badge').textContent = kids ? curated.kids.badge : curated.systemLabel;
    } else {
      $('inspector-badge').textContent = layerLabel(first.layer, this.lang);
    }
    const subtitleBits = [];
    if (sel.kind === 'group') subtitleBits.push(ui.structuresCount(parts.length));
    if (!kids && first.fma && sel.kind === 'part') subtitleBits.push(first.fma);
    if (curated && kids) subtitleBits.push(ui.sayIt(curated.kids.pronounce));
    if (curated && !kids) subtitleBits.push(curated.latinName);
    if (sel.kind === 'part' && first.side) subtitleBits.push(ui.sideLabel(first.side));
    $('inspector-subtitle').textContent = subtitleBits.join(' · ');

    const body = $('inspector-body');
    body.replaceChildren();

    if (curated && sel.kind === 'part' && sel.curated.name !== sel.title) {
      const shortCuratedName = curated.name.split(/\s*[（(]/)[0];
      const chip = el('button', 'context-chip', ui.partOfChip(shortCuratedName));
      chip.type = 'button';
      chip.addEventListener('click', () => this.selectCurated(curated.id));
      body.appendChild(chip);
    }

    if (curated) {
      if (kids) this._renderKids(body, curated);
      else this._renderPro(body, curated);
    } else {
      const info = getLocalizedTissueInfo(tissue, this.lang);
      body.appendChild(el('p', 'lead', kids ? info.kids : info.pro));
    }

    // Anatomical context: the smallest named groups that contain this structure.
    if (sel.kind === 'part') {
      const groups = (this.partGroups.get(sel.indices[0]) || [])
        .map((gi) => this.manifest.groups[gi])
        .filter((g) => g.name.toLowerCase() !== sel.title.toLowerCase())
        .sort((a, b) => a.members.length - b.members.length)
        .slice(0, 4);
      if (groups.length) {
        body.appendChild(el('h3', 'section-title', ui.belongsTo));
        const row = el('div', 'chip-row');
        for (const g of groups) {
          const rawName = g.name.charAt(0).toUpperCase() + g.name.slice(1);
          const localName = this._displayName(rawName);
          const chip = el('button', 'chip', `${localName} (${g.members.length})`);
          chip.type = 'button';
          chip.addEventListener('click', () => this.selectGroup(g.members, rawName));
          row.appendChild(chip);
        }
        body.appendChild(row);
      }
    } else {
      body.appendChild(el('h3', 'section-title', ui.structuresInSelection));
      const row = el('div', 'chip-row');
      const names = new Map();
      for (const i of sel.indices) {
        const n = this.manifest.parts[i].name;
        if (!names.has(n)) names.set(n, i);
      }
      [...names.entries()].slice(0, 18).forEach(([n, i]) => {
        const chip = el('button', 'chip', this._displayName(n));
        chip.type = 'button';
        chip.addEventListener('click', () => this.selectPart(i));
        row.appendChild(chip);
      });
      if (names.size > 18) row.appendChild(el('span', 'chip-more', ui.moreChip(names.size - 18)));
      body.appendChild(row);
    }

    if (!kids && sel.kind === 'part') {
      let sourceText = ui.sourceModel(first.fj, first.fma);
      if (first.recon) {
        sourceText = ui.sourceRecon(first.fma);
      } else if (first.vhf) {
        sourceText = ui.sourceVhf(first.fma);
      }
      body.appendChild(el('p', 'source-note', sourceText));
    }
  }

  _dominantTissue(parts) {
    const counts = new Map();
    for (const p of parts) counts.set(p.mat, (counts.get(p.mat) || 0) + 1);
    return [...counts.entries()].sort((a, b) => b[1] - a[1])[0][0];
  }

  _renderKids(body, c) {
    const ui = this._ui();
    body.appendChild(el('p', 'lead', c.kids.summary));
    const callout = el('div', 'callout');
    callout.append(el('div', 'callout-title', ui.whyYouNeedIt), el('p', null, c.kids.whyYouNeedIt));
    body.appendChild(callout);
    body.appendChild(el('h3', 'section-title', ui.fastFacts));
    const grid = el('div', 'stat-grid');
    for (const s of c.kids.quickStats) {
      const card = el('div', 'stat');
      card.append(el('span', 'stat-label', s.label), el('span', 'stat-value', s.value));
      grid.appendChild(card);
    }
    body.appendChild(grid);
    body.appendChild(el('h3', 'section-title', ui.funFacts));
    const ul = el('ul', 'fact-list');
    for (const f of c.kids.funFacts) ul.appendChild(el('li', null, f));
    body.appendChild(ul);
  }

  _renderPro(body, c) {
    const ui = this._ui();
    const p = c.pro;
    body.appendChild(el('p', 'lead', p.summary));
    const specs = [
      [ui.arterialSupply, p.bloodSupply],
      [ui.venousDrainage, p.venousDrainage],
      [ui.innervation, p.innervation],
      [ui.attachmentsRelations, p.originInsertion]
    ];
    const dl = el('dl', 'spec-list');
    for (const [k, v] of specs) dl.append(el('dt', null, k), el('dd', null, v));
    body.appendChild(dl);
    body.appendChild(el('h3', 'section-title', ui.referenceValues));
    const grid = el('div', 'stat-grid');
    for (const m of p.metrics) {
      const card = el('div', 'stat');
      card.append(el('span', 'stat-label', m.label), el('span', 'stat-value', m.value));
      grid.appendChild(card);
    }
    body.appendChild(grid);
    const callout = el('div', 'callout callout-clinical');
    callout.append(el('div', 'callout-title', ui.clinicalCorrelation), el('p', null, p.clinicalPearls));
    body.appendChild(callout);
    body.appendChild(el('p', 'source-note', p.classification));
  }

  // --------------------------------------------------------------------------
  // Read Aloud: Chirp3-HD Studio Audio + Neural Browser TTS Fallback
  // --------------------------------------------------------------------------
  _syncSpeakButton() {
    const btn = $('btn-speak');
    if (!btn) return;
    const ui = this._ui();
    btn.classList.toggle('is-speaking', this.isSpeaking);
    btn.textContent = this.isSpeaking ? ui.stopSpeakBtn : ui.readAloudBtn;
    btn.setAttribute('aria-label', this.isSpeaking ? ui.stopSpeakAria : ui.readAloudAria);
  }

  _stopSpeech() {
    if (this.currentAudio) {
      try {
        this.currentAudio.pause();
        this.currentAudio.currentTime = 0;
      } catch (_e) {
        // Ignore audio reset errors
      }
      this.currentAudio = null;
    }
    if ('speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
      } catch (_e) {
        // Ignore synthesis cancel errors
      }
    }
    this.isSpeaking = false;
    this._syncSpeakButton();
  }

  _speak() {
    if (this.isSpeaking) {
      this._stopSpeech();
      return;
    }
    if (!this.selection) return;

    const sel = this.selection;
    const curated = sel.curated ? getLocalizedPart(sel.curated, this.lang) : null;
    const tissue = this._dominantTissue(sel.indices.map((i) => this.manifest.parts[i]));
    const info = getLocalizedTissueInfo(tissue, this.lang);
    const displayTitle =
      curated && sel.curated && sel.title === sel.curated.name
        ? curated.name
        : this._displayName(sel.title);

    let text = `${displayTitle}. `;
    if (curated) {
      text +=
        this.audience === 'kids'
          ? `${curated.kids.summary} ${curated.kids.whyYouNeedIt}`
          : `${curated.pro.summary} ${curated.pro.clinicalPearls}`;
    } else {
      text += this.audience === 'kids' ? info.kids : info.pro;
    }

    // Studio Chirp3-HD MP3 path for curated parts and tissue categories
    const studioFile = curated
      ? `./assets/audio/${this.lang}/${this.audience}_${curated.id}.mp3`
      : `./assets/audio/${this.lang}/${this.audience}_tissue_${tissue}.mp3`;

    this.isSpeaking = true;
    this._syncSpeakButton();

    const audio = new Audio(studioFile);
    this.currentAudio = audio;
    let fellBack = false;

    const fallbackToBrowser = () => {
      if (fellBack || this.currentAudio !== audio) return;
      fellBack = true;
      this.currentAudio = null;
      this._speakWithBrowserTTS(text);
    };

    audio.addEventListener('ended', () => {
      if (this.currentAudio === audio) {
        this._stopSpeech();
      }
    });
    audio.addEventListener('error', fallbackToBrowser);

    const playPromise = audio.play();
    if (playPromise && typeof playPromise.then === 'function') {
      playPromise
        .then(() => {
          trackReadAloud({
            title: sel.title,
            curatedId: curated ? curated.id : `tissue_${tissue}`,
            audience: this.audience,
            language: this.lang,
            mode: 'studio_chirp3_hd'
          });
        })
        .catch(fallbackToBrowser);
    }
  }

  _speakWithBrowserTTS(rawText) {
    if (!('speechSynthesis' in window)) {
      this._stopSpeech();
      return;
    }
    const sel = this.selection;
    const curated = sel ? sel.curated : null;
    trackReadAloud({
      title: sel ? sel.title : '',
      curatedId: curated ? curated.id : 'none',
      audience: this.audience,
      language: this.lang,
      mode: 'browser_neural_tts'
    });

    window.speechSynthesis.cancel();
    const cleaned = this._cleanSpeechProsody(rawText, this.lang);
    const u = new SpeechSynthesisUtterance(cleaned);
    const bestVoice = this._pickBestBrowserVoice(this.lang);
    if (bestVoice) {
      u.voice = bestVoice;
      u.lang = bestVoice.lang;
    } else {
      u.lang = this.lang === 'es' ? 'es-ES' : this.lang === 'zh' ? 'zh-CN' : 'en-US';
    }
    u.rate = this.audience === 'kids' ? 0.96 : 0.98;
    u.pitch = 1.0;
    u.onend = () => this._stopSpeech();
    u.onerror = () => this._stopSpeech();
    window.speechSynthesis.speak(u);
  }

  _cleanSpeechProsody(text, lang = 'en') {
    let s = String(text || '');
    // Remove parenthetical FMA/Terminologia Anatomica codes that sound unnatural
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
        .replace(/\bm²\b/g, '平方米');
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

  _pickBestBrowserVoice(lang = 'en') {
    if (!('speechSynthesis' in window)) return null;
    const voices = window.speechSynthesis.getVoices() || [];
    if (!voices.length) return null;
    const targetPrefix = lang === 'es' ? 'es' : lang === 'zh' ? 'zh' : 'en';
    const matching = voices.filter((v) => {
      const vl = String(v.lang || '').toLowerCase();
      if (targetPrefix === 'zh') return vl.startsWith('zh') || vl.startsWith('cmn');
      return vl.startsWith(targetPrefix);
    });
    if (!matching.length) return null;

    const noveltyPattern =
      /albert|bad news|bahh|bells|boing|bubbles|cellos|deranged|good news|hysterical|pipe organ|trinoids|whisper|zarvox|fred|junior|ralph|espeak/i;
    const preferredNames =
      /ava|samantha|allison|victoria|karen|daniel|serena|paulina|mónica|monica|jorge|tingting|ting-ting|meijia|sinji|xiaoxiao|yunxi/i;

    let best = matching[0];
    let bestScore = -999;
    for (const v of matching) {
      let score = 0;
      const name = String(v.name || '');
      if (noveltyPattern.test(name)) score -= 120;
      if (/natural|online/i.test(name)) score += 100;
      if (/google/i.test(name)) score += 85;
      if (/premium|enhanced|siri|neural/i.test(name)) score += 65;
      if (preferredNames.test(name)) score += 45;
      if (v.default) score += 10;
      if (score > bestScore) {
        bestScore = score;
        best = v;
      }
    }
    return best;
  }

  // --------------------------------------------------------------------------
  // Per-frame UI: zoom slider sync + floating labels
  // --------------------------------------------------------------------------
  _onFrame() {
    const zoom = $('zoom-slider');
    if (document.activeElement !== zoom) zoom.value = String(this.viewer.getZoomLevel());
    if (this.labelsOn && this.manifest) {
      const now = performance.now();
      if (now - this.lastLabelUpdate > 400 && !this.viewer.tween) {
        this.lastLabelUpdate = now;
        this._computeLabels();
      }
      this._positionLabels();
    }
    if (this.manifest && this.readyFrames !== undefined && this.readyFrames < 30) {
      this.readyFrames++;
      if (this.readyFrames === 30) document.documentElement.dataset.atlasReady = 'true';
    }
  }

  _computeLabels() {
    const v = this.viewer;
    const cam = v.camera;
    const focal = (window.innerHeight / 2) / Math.tan((cam.fov * Math.PI) / 360);
    const candidates = [];
    for (const mesh of v.pickables) {
      if (!mesh.visible || !mesh.parent?.visible || v._layerOpacityOf(mesh) < 0.5) continue;
      const idx = mesh.userData.partIndex;
      const part = this.manifest.parts[idx];
      const center = v.partCenter(idx);
      const dist = center.distanceTo(cam.position);
      const rpx = (part.r / dist) * focal;
      if (rpx < 26) continue;
      const s = v.projectToScreen(center);
      if (!s.visible || s.x < 60 || s.y < 120 || s.x > window.innerWidth - 60 || s.y > window.innerHeight - 70) continue;
      candidates.push({ idx, rpx, s });
    }
    candidates.sort((a, b) => b.rpx - a.rpx);
    const chosen = [];
    const seenNames = new Set();
    for (const c of candidates.slice(0, 40)) {
      if (chosen.length >= 12) break;
      const name = this.manifest.parts[c.idx].name;
      if (seenNames.has(name)) continue;
      if (chosen.some((o) => Math.abs(o.s.x - c.s.x) < 150 && Math.abs(o.s.y - c.s.y) < 28)) continue;
      if (!v.isPartFrontmost(c.idx)) continue;
      chosen.push(c);
      seenNames.add(name);
    }
    this._clearLabels();
    const layer = $('label-layer');
    this.labelNodes = chosen.map((c) => {
      const node = el('div', 'part-label');
      node.append(
        el('span', 'part-label-dot'),
        el('span', 'part-label-text', this._displayName(this.manifest.parts[c.idx].name))
      );
      layer.appendChild(node);
      return { node, idx: c.idx };
    });
  }

  _positionLabels() {
    for (const { node, idx } of this.labelNodes) {
      const s = this.viewer.projectToScreen(this.viewer.partCenter(idx));
      node.style.transform = `translate(${s.x}px, ${s.y}px)`;
      node.classList.toggle('hidden', !s.visible);
    }
  }

  _clearLabels() {
    $('label-layer').replaceChildren();
    this.labelNodes = [];
  }

  // --------------------------------------------------------------------------
  // Quiz
  // --------------------------------------------------------------------------
  _openQuiz() {
    if (!this.manifest) return;
    const questions = getLocalizedQuizQuestions(this.lang);
    this.quiz = { index: 0, score: 0 };
    trackQuizEvent({ action: 'start', score: 0, total: questions.length, language: this.lang });
    $('quiz-modal').classList.remove('hidden');
    this._renderQuiz();
    $('btn-quiz-close').focus();
  }

  _closeQuiz() {
    $('quiz-modal').classList.add('hidden');
    $('btn-quiz').focus();
  }

  _renderQuiz() {
    const ui = this._ui();
    const questions = getLocalizedQuizQuestions(this.lang);
    const body = $('quiz-body');
    body.replaceChildren();
    const { index, score } = this.quiz;
    if (index >= questions.length) {
      trackQuizEvent({ action: 'complete', score, total: questions.length, language: this.lang });
      body.appendChild(el('h3', 'quiz-question', ui.quizScoreTitle(score, questions.length)));
      body.appendChild(el('p', 'lead', score === questions.length ? ui.quizPerfectLead : ui.quizGoodLead));
      const again = el('button', 'primary-btn', ui.quizPlayAgainBtn);
      again.type = 'button';
      again.addEventListener('click', () => {
        this.quiz = { index: 0, score: 0 };
        trackQuizEvent({ action: 'restart', score: 0, total: questions.length, language: this.lang });
        this._renderQuiz();
      });
      body.appendChild(again);
      return;
    }
    const q = questions[index];
    this.selectCurated(q.targetPartId);
    body.appendChild(el('p', 'quiz-step', ui.quizStep(index + 1, questions.length, score)));
    body.appendChild(el('h3', 'quiz-question', q.question));
    const opts = el('div', 'quiz-options');
    const feedback = el('div', 'quiz-feedback hidden');
    q.options.forEach((text, i) => {
      const b = el('button', 'quiz-option', text);
      b.type = 'button';
      b.addEventListener('click', () => {
        const all = opts.querySelectorAll('button');
        all.forEach((x) => {
          x.disabled = true;
        });
        if (i === q.correctIndex) {
          b.classList.add('is-correct');
          this.quiz.score++;
        } else {
          b.classList.add('is-wrong');
          all[q.correctIndex].classList.add('is-correct');
        }
        feedback.replaceChildren(el('p', null, q.explanation));
        const next = el('button', 'primary-btn', index + 1 < questions.length ? ui.quizNextBtn : ui.quizSeeScoreBtn);
        next.type = 'button';
        next.addEventListener('click', () => {
          this.quiz.index++;
          this._renderQuiz();
        });
        feedback.appendChild(next);
        feedback.classList.remove('hidden');
        next.focus();
      });
      opts.appendChild(b);
    });
    body.append(opts, feedback);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  try {
    const app = new AtlasApp();
    if (new URLSearchParams(window.location.search).get('debug') === '1') {
      // Test hook for automated render checks (tools/capture.mjs). Not exposed in normal use.
      app.debugStats = () => {
        const info = app.viewer.renderer.info;
        return {
          quality: app.viewer.qualityName,
          calls: info.render.calls,
          triangles: info.render.triangles,
          programs: info.programs ? info.programs.length : 0,
          loaded: [...app.viewer.loadedLayers]
        };
      };
      window.__atlas = app;
    }
  } catch (err) {
    const banner = document.getElementById('error-banner');
    const lang = normalizeLang(new URLSearchParams(window.location.search).get('lang'));
    banner.textContent = getUiStrings(lang).errorWebgl;
    banner.classList.remove('hidden');
    console.error('Atlas initialisation failed:', err && err.message ? err.message : String(err));
  }
});
