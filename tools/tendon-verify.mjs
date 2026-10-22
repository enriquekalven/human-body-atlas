/**
 * Tendon feature verification driver (headless Chrome over the DevTools protocol).
 *
 * Modes
 *   shots  — region screenshots (palm/wrist, back of hand, forearm, ankle/foot, knee, elbow, shoulder)
 *            at identical camera poses, so BEFORE/AFTER images are directly comparable.
 *   perf   — load time + steady-state FPS (mobile emulation: iPhone 16 metrics, touch, 4x CPU throttle).
 *   ui     — tooltip / inspector / Tendons toggle / learning card in all 8 languages, plus regression
 *            checks (selection, isolate, labels, search, quiz, read-aloud). Writes a JSON report.
 *
 * Usage
 *   node tools/tendon-verify.mjs --mode shots --label before --device desktop --out <dir>
 *   node tools/tendon-verify.mjs --mode perf  --label after  --device iphone  --out <dir>
 *   node tools/tendon-verify.mjs --mode ui    --out <dir>
 *
 * Safety: Chrome's DevTools endpoint binds to 127.0.0.1 (port 9334) with a throwaway profile; the
 * page under test is served from 127.0.0.1:8793 by server.py. Everything started here is killed on
 * exit. Uses only Node built-ins (global fetch + WebSocket). Browser content is treated as data.
 */

import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const args = Object.fromEntries(
  process.argv.slice(2).reduce((acc, cur, i, arr) => {
    if (cur.startsWith('--')) acc.push([cur.slice(2), arr[i + 1] && !arr[i + 1].startsWith('--') ? arr[i + 1] : '1']);
    return acc;
  }, [])
);

const MODE = args.mode || 'shots';
const LABEL = (args.label || 'after').replace(/[^a-z0-9_-]/gi, '');
const DEVICE = args.device === 'iphone' ? 'iphone' : 'desktop';
const OUT = path.resolve(args.out || 'tendons-verification');
const HTTP_PORT = 8793;
const CDP_PORT = 9334;
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
fs.mkdirSync(OUT, { recursive: true });
const PROFILE = fs.mkdtempSync(path.join(OUT, '.chrome-profile-9334-'));
const IPHONE_UA =
  'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1';

const DEVICES = {
  desktop: { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false },
  iphone: { width: 393, height: 852, deviceScaleFactor: 3, mobile: true }
};

fs.mkdirSync(OUT, { recursive: true });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// ----------------------------------------------------------------------------
// Process management: local static server + headless Chrome, both killed on exit.
// ----------------------------------------------------------------------------
const children = [];
function cleanup() {
  for (const c of children) {
    try {
      c.kill('SIGTERM');
    } catch {
      // already gone
    }
  }
  try {
    fs.rmSync(PROFILE, { recursive: true, force: true });
  } catch {
    // best effort
  }
}
process.on('exit', cleanup);
process.on('SIGINT', () => process.exit(130));
process.on('SIGTERM', () => process.exit(143));

async function startServer() {
  const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
  const srv = spawn('python3', ['server.py'], { cwd: root, env: { ...process.env, PORT: String(HTTP_PORT) }, stdio: 'ignore' });
  children.push(srv);
  for (let i = 0; i < 60; i++) {
    try {
      const r = await fetch(`http://127.0.0.1:${HTTP_PORT}/index.html`);
      if (r.ok) return;
    } catch {
      // not up yet
    }
    await sleep(200);
  }
  throw new Error('static server did not start');
}

async function startChrome() {
  const chrome = spawn(
    CHROME,
    [
      '--headless=new',
      `--remote-debugging-port=${CDP_PORT}`,
      '--remote-debugging-address=127.0.0.1',
      `--user-data-dir=${PROFILE}`,
      '--no-first-run',
      '--no-default-browser-check',
      '--disable-extensions',
      '--use-angle=metal',
      '--ignore-gpu-blocklist',
      '--enable-unsafe-swiftshader',
      '--hide-scrollbars',
      '--autoplay-policy=no-user-gesture-required',
      '--window-size=1440,900',
      'about:blank'
    ],
    { stdio: 'ignore' }
  );
  children.push(chrome);
  for (let i = 0; i < 80; i++) {
    try {
      const list = await (await fetch(`http://127.0.0.1:${CDP_PORT}/json/list`)).json();
      const page = list.find((t) => t.type === 'page');
      if (page) return page.webSocketDebuggerUrl;
    } catch {
      // not up yet
    }
    await sleep(250);
  }
  throw new Error('Chrome DevTools endpoint not reachable');
}

// ----------------------------------------------------------------------------
// Minimal CDP client
// ----------------------------------------------------------------------------
class Cdp {
  constructor(ws) {
    this.ws = ws;
    this.id = 0;
    this.pending = new Map();
    this.errors = [];
    this.warnings = [];
    this.handlers = [];
    ws.onmessage = (ev) => {
      const msg = JSON.parse(ev.data);
      if (msg.id && this.pending.has(msg.id)) {
        const p = this.pending.get(msg.id);
        this.pending.delete(msg.id);
        if (msg.error) p.reject(new Error(`${p.method}: ${msg.error.message}`));
        else p.resolve(msg.result);
        return;
      }
      if (msg.method === 'Runtime.consoleAPICalled') {
        const text = msg.params.args.map((a) => a.value ?? a.description ?? '').join(' ');
        if (msg.params.type === 'error' || msg.params.type === 'assert') this.errors.push(`[console.${msg.params.type}] ${text}`);
        else if (msg.params.type === 'warning') this.warnings.push(`[console.warn] ${text}`);
      } else if (msg.method === 'Runtime.exceptionThrown') {
        const d = msg.params.exceptionDetails;
        this.errors.push(`[pageerror] ${d.text} ${d.exception?.description || ''}`.trim());
      } else if (msg.method === 'Log.entryAdded') {
        const e = msg.params.entry;
        // GA is disabled off-production and blocked by nothing here; ignore its network noise only.
        if (e.level === 'error' && !/googletagmanager|google-analytics/.test(e.url || e.text || '')) {
          this.errors.push(`[log.error] ${e.text} ${e.url || ''}`.trim());
        } else if (e.level === 'warning') this.warnings.push(`[log.warn] ${e.text}`);
      } else if (msg.method === 'Network.loadingFailed') {
        const t = msg.params;
        if (!t.canceled && !/googletagmanager|google-analytics/.test(t.errorText || '')) this.netFailures.push(t);
      }
      for (const h of this.handlers) h(msg);
    };
    this.netFailures = [];
  }

  send(method, params = {}) {
    const id = ++this.id;
    this.ws.send(JSON.stringify({ id, method, params }));
    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject, method });
      setTimeout(() => {
        if (this.pending.has(id)) {
          this.pending.delete(id);
          reject(new Error(`${method}: timeout`));
        }
      }, 120000);
    });
  }

  async eval(expression, { awaitPromise = true } = {}) {
    const r = await this.send('Runtime.evaluate', { expression, awaitPromise, returnByValue: true });
    if (r.exceptionDetails) throw new Error(`eval failed: ${r.exceptionDetails.exception?.description || r.exceptionDetails.text}`);
    return r.result.value;
  }

  async screenshot(file) {
    const shot = await this.send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(file, Buffer.from(shot.data, 'base64'));
    return file;
  }
}

async function connect() {
  const wsUrl = await startChrome();
  const ws = new WebSocket(wsUrl);
  await new Promise((r, j) => {
    ws.onopen = r;
    ws.onerror = j;
  });
  const cdp = new Cdp(ws);
  await cdp.send('Runtime.enable');
  await cdp.send('Log.enable');
  await cdp.send('Page.enable');
  await cdp.send('Network.enable');
  return cdp;
}

async function emulate(cdp, device) {
  const d = DEVICES[device];
  await cdp.send('Emulation.setDeviceMetricsOverride', d);
  if (device === 'iphone') {
    await cdp.send('Emulation.setTouchEmulationEnabled', { enabled: true, maxTouchPoints: 5 });
    await cdp.send('Emulation.setEmitTouchEventsForMouse', { enabled: true, configuration: 'mobile' });
    await cdp.send('Network.setUserAgentOverride', { userAgent: IPHONE_UA, platform: 'iPhone' });
  }
}

async function openAtlas(cdp, query, { timeoutMs = 120000 } = {}) {
  const url = `http://127.0.0.1:${HTTP_PORT}/?${query}${query.includes('debug=1') ? '' : '&debug=1'}`;
  const t0 = Date.now();
  await cdp.send('Page.navigate', { url });
  while (Date.now() - t0 < timeoutMs) {
    const v = await cdp.eval(
      `(() => { const a = window.__atlas; return document.documentElement.dataset.atlasReady === 'true' && a && a.viewer.loadedLayers.size === 6 ? 'ready' : ''; })()`
    ).catch(() => '');
    if (v === 'ready') return Date.now() - t0;
    await sleep(250);
  }
  throw new Error(`atlas not ready after ${timeoutMs} ms (${url})`);
}

// ----------------------------------------------------------------------------
// Camera poses (metres; body faces +Z, anatomical right is -X, feet at y = 0).
// ----------------------------------------------------------------------------
const SHOTS = [
  { id: 'palm-wrist', target: [-0.262, 0.875, 0.035], dir: [-0.12, 0.06, 1], dist: 0.46 },
  { id: 'back-of-hand', target: [-0.262, 0.855, 0.02], dir: [-0.1, 0.12, -1], dist: 0.44 },
  { id: 'forearm', target: [-0.245, 0.97, 0.01], dir: [-0.22, 0.04, 1], dist: 0.82 },
  { id: 'ankle-foot', target: [-0.08, 0.06, 0.035], dir: [-0.85, 0.32, 0.55], dist: 0.5 },
  { id: 'ankle-foot-medial', target: [-0.07, 0.06, 0.035], dir: [0.8, 0.3, 0.45], dist: 0.5 },
  { id: 'knee', target: [-0.083, 0.46, 0.0], dir: [-0.3, 0.06, 1], dist: 0.5 },
  { id: 'elbow-anterior', target: [-0.215, 1.11, 0.0], dir: [-0.28, 0.06, 1], dist: 0.62 },
  { id: 'elbow-posterior', target: [-0.215, 1.11, -0.03], dir: [-0.25, 0.1, -1], dist: 0.62 },
  { id: 'shoulder', target: [-0.17, 1.39, 0.0], dir: [-0.62, 0.12, 0.78], dist: 0.6 }
];

function poseExpr(s) {
  const l = Math.hypot(...s.dir);
  const p = s.target.map((t, k) => t + (s.dir[k] / l) * s.dist);
  return `(() => { const v = window.__atlas.viewer; v.tween = null; v.controls.autoRotate = false;
    v.controls.target.set(${s.target.join(',')}); v.camera.position.set(${p.join(',')});
    v.camera.lookAt(${s.target.join(',')}); v.controls.update(); return true; })()`;
}

async function modeShots(cdp) {
  await emulate(cdp, DEVICE);
  const q = DEVICE === 'iphone' ? 'view=muscles&ui=0&quality=balanced' : 'view=muscles&ui=0&quality=high';
  const loadMs = await openAtlas(cdp, q);
  const dir = path.join(OUT, 'screenshots', LABEL, DEVICE);
  fs.mkdirSync(dir, { recursive: true });
  const files = [];
  await sleep(800);
  files.push(await cdp.screenshot(path.join(dir, '00-overview.png')));
  for (const s of SHOTS) {
    await cdp.eval(poseExpr(s));
    await sleep(1400);
    files.push(await cdp.screenshot(path.join(dir, `${s.id}.png`)));
  }
  return { loadMs, files };
}

// Steady-state FPS: count requestAnimationFrame callbacks while the camera auto-rotates.
async function modePerf(cdp) {
  await emulate(cdp, DEVICE);
  if (DEVICE === 'iphone') await cdp.send('Emulation.setCPUThrottlingRate', { rate: 4 });
  const runs = Number(args.runs || 3);
  const results = [];
  for (let i = 0; i < runs; i++) {
    await cdp.send('Network.clearBrowserCache');
    await cdp.send('Network.setCacheDisabled', { cacheDisabled: true });
    const q = DEVICE === 'iphone' ? 'view=muscles&ui=0' : 'view=muscles&ui=0&quality=high';
    const loadMs = await openAtlas(cdp, q);
    const timing = await cdp.eval(`(() => {
      const nav = performance.getEntriesByType('navigation')[0];
      const glb = performance.getEntriesByType('resource').filter((e) => /\\.glb$/.test(e.name));
      const lastGlb = Math.max(...glb.map((e) => e.responseEnd));
      return { domContentLoaded: Math.round(nav.domContentLoadedEventEnd), lastGlbResponseEnd: Math.round(lastGlb),
        glbBytes: glb.reduce((s, e) => s + (e.encodedBodySize || 0), 0), quality: window.__atlas.viewer.qualityName,
        isMobile: window.__atlas.viewer.isMobile };
    })()`);
    await cdp.eval(`(() => { const v = window.__atlas.viewer; v.controls.autoRotate = true; v.controls.autoRotateSpeed = 6; return true; })()`);
    await sleep(1500);
    const fps = await cdp.eval(`new Promise((resolve) => {
      let n = 0; const t0 = performance.now(); const deltas = []; let last = t0;
      function tick(t) { n++; deltas.push(t - last); last = t; if (t - t0 < 6000) requestAnimationFrame(tick); else {
        deltas.sort((a, b) => a - b); const p95 = deltas[Math.floor(deltas.length * 0.95)];
        resolve({ fps: +(n / ((t - t0) / 1000)).toFixed(1), p95FrameMs: +p95.toFixed(1), frames: n }); } }
      requestAnimationFrame(tick);
    })`);
    results.push({ run: i + 1, loadMs, ...timing, ...fps });
  }
  return { device: DEVICE, label: LABEL, cpuThrottle: DEVICE === 'iphone' ? 4 : 1, results };
}

// ----------------------------------------------------------------------------
// UI checks (after only): tooltip / inspector / toggle / card in 8 languages + regressions.
// ----------------------------------------------------------------------------
const LANGS = ['en', 'es', 'zh', 'ja', 'ko', 'pt', 'fr', 'it'];

async function modeUi(cdp) {
  await emulate(cdp, DEVICE);
  const report = { device: DEVICE, langs: {}, regressions: {} };
  const dir = path.join(OUT, 'screenshots', 'ui', DEVICE);
  fs.mkdirSync(dir, { recursive: true });
  for (const lang of LANGS) {
    const q = `view=muscles&lang=${lang}&quality=${DEVICE === 'iphone' ? 'balanced' : 'high'}`;
    await openAtlas(cdp, q);
    const r = await cdp.eval(fs.readFileSync(new URL('./tendon-verify-ui.js', import.meta.url), 'utf8') + `\nrunTendonUiChecks(${JSON.stringify(lang)}, ${JSON.stringify(DEVICE)});`);
    report.langs[lang] = r;
    // Screenshot the tendon inspector state left on screen by the checks.
    await sleep(900);
    await cdp.screenshot(path.join(dir, `inspector-tendon-${lang}.png`));
    await cdp.eval(`window.__tendonUi && window.__tendonUi.showCard()`);
    await sleep(1300);
    await cdp.screenshot(path.join(dir, `card-${lang}.png`));
    await cdp.eval(`window.__tendonUi && window.__tendonUi.showToggle()`);
    await sleep(1300);
    await cdp.screenshot(path.join(dir, `toggle-${lang}.png`));
    if (lang === 'en') {
      const hover = await cdp.eval(`window.__tendonUi.hoverTendon()`);
      report.hover = hover;
      if (hover && hover.x) {
        await cdp.send('Input.dispatchMouseEvent', { type: 'mouseMoved', x: hover.x, y: hover.y });
        await sleep(400);
        await cdp.send('Input.dispatchMouseEvent', { type: 'mouseMoved', x: hover.x + 1, y: hover.y });
        await sleep(600);
        report.hoverTooltip = await cdp.eval(`(() => { const t = document.getElementById('hover-tooltip'); return { hidden: t.classList.contains('hidden'), text: t.textContent }; })()`);
        await cdp.screenshot(path.join(dir, `tooltip-tendon-${lang}.png`));
      }
      report.regressions = await cdp.eval(`window.__tendonUi.regressions()`);
    }
  }
  return report;
}

// ----------------------------------------------------------------------------
async function main() {
  await startServer();
  const cdp = await connect();
  let result;
  if (MODE === 'shots') result = await modeShots(cdp);
  else if (MODE === 'perf') result = await modePerf(cdp);
  else if (MODE === 'ui') result = await modeUi(cdp);
  else throw new Error(`unknown mode ${MODE}`);
  result.consoleErrors = cdp.errors;
  result.consoleWarnings = cdp.warnings.slice(0, 50);
  result.networkFailures = cdp.netFailures.map((f) => `${f.type} ${f.errorText}`);
  const file = path.join(OUT, `${MODE}-${LABEL}-${DEVICE}.json`);
  fs.writeFileSync(file, `${JSON.stringify(result, null, 2)}\n`);
  console.log(JSON.stringify({ mode: MODE, label: LABEL, device: DEVICE, errors: cdp.errors.length, file }, null, 2));
  try {
    cdp.ws.close();
  } catch {
    // ignore
  }
}

main()
  .catch((e) => {
    console.error(`[tendon-verify] FAILED: ${e.message}`);
    process.exitCode = 1;
  })
  .finally(() => {
    cleanup();
    setTimeout(() => process.exit(process.exitCode || 0), 300);
  });
