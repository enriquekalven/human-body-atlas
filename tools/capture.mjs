/**
 * Deterministic render check: launches headless Chrome, waits until the atlas reports it is ready
 * (document.documentElement.dataset.atlasReady === 'true'), optionally runs a script against the
 * debug handle (window.__atlas, exposed only with ?debug=1), then saves a screenshot and console log.
 *
 * Usage: node tools/capture.mjs --url "<query>" --out shot.png [--w 1600 --h 1000] [--eval "<js>"] [--wait 1500]
 * Uses only Node built-ins (global fetch + WebSocket) and the locally installed Google Chrome.
 */

import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const args = Object.fromEntries(
  process.argv.slice(2).reduce((acc, cur, i, arr) => {
    if (cur.startsWith('--')) acc.push([cur.slice(2), arr[i + 1]]);
    return acc;
  }, [])
);
const query = args.url || 'view=muscles&ui=0';
const out = path.resolve(args.out || 'shot.png');
const W = Number(args.w || 1600);
const H = Number(args.h || 1000);
const extraWait = Number(args.wait || 1200);
const PORT = 9300 + Math.floor(Math.random() * 500);
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const profile = path.join(path.dirname(out), 'chrome-profile-cdp');
fs.mkdirSync(profile, { recursive: true });

const chrome = spawn(
  CHROME,
  [
    '--headless=new',
    `--remote-debugging-port=${PORT}`,
    `--user-data-dir=${profile}`,
    '--no-first-run',
    '--no-default-browser-check',
    '--disable-extensions',
    '--use-angle=metal',
    '--ignore-gpu-blocklist',
    '--hide-scrollbars',
    `--window-size=${W},${H}`,
    'about:blank'
  ],
  { stdio: 'ignore' }
);

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const logLines = [];

async function getPageWs() {
  for (let i = 0; i < 60; i++) {
    try {
      const list = await (await fetch(`http://127.0.0.1:${PORT}/json/list`)).json();
      const page = list.find((t) => t.type === 'page');
      if (page) return page.webSocketDebuggerUrl;
    } catch {
      // Chrome not up yet
    }
    await sleep(250);
  }
  throw new Error('Chrome DevTools endpoint not reachable');
}

let msgId = 0;
const pending = new Map();
function send(ws, method, params = {}) {
  const id = ++msgId;
  ws.send(JSON.stringify({ id, method, params }));
  return new Promise((resolve, reject) => {
    pending.set(id, { resolve, reject });
  });
}

async function main() {
  const wsUrl = await getPageWs();
  const ws = new WebSocket(wsUrl);
  await new Promise((r, j) => {
    ws.onopen = r;
    ws.onerror = j;
  });
  ws.onmessage = (ev) => {
    const msg = JSON.parse(ev.data);
    if (msg.id && pending.has(msg.id)) {
      const p = pending.get(msg.id);
      pending.delete(msg.id);
      if (msg.error) p.reject(new Error(msg.error.message));
      else p.resolve(msg.result);
      return;
    }
    if (msg.method === 'Runtime.consoleAPICalled') {
      const text = msg.params.args.map((a) => a.value ?? a.description ?? '').join(' ');
      logLines.push(`[console.${msg.params.type}] ${text}`);
    } else if (msg.method === 'Runtime.exceptionThrown') {
      const d = msg.params.exceptionDetails;
      logLines.push(`[exception] ${d.text} ${d.exception?.description || ''}`);
    } else if (msg.method === 'Log.entryAdded') {
      logLines.push(`[log.${msg.params.entry.level}] ${msg.params.entry.text}`);
    }
  };
  await send(ws, 'Runtime.enable');
  await send(ws, 'Log.enable');
  await send(ws, 'Page.enable');
  await send(ws, 'Emulation.setDeviceMetricsOverride', { width: W, height: H, deviceScaleFactor: 1, mobile: false });
  const cleanQuery = query.replace(/^https?:\/\/[^?]+\??/, '').replace(/^\?/, '');
  const url = `http://127.0.0.1:8094/?${cleanQuery}${cleanQuery.includes('debug=1') ? '' : '&debug=1'}`;
  await send(ws, 'Page.navigate', { url });

  const t0 = Date.now();
  let ready = false;
  while (Date.now() - t0 < 90000) {
    const r = await send(ws, 'Runtime.evaluate', { expression: 'document.documentElement.dataset.atlasReady || ""', returnByValue: true });
    if (r.result.value === 'true') {
      ready = true;
      break;
    }
    await sleep(300);
  }
  logLines.push(`[capture] ready=${ready} after ${Date.now() - t0} ms`);

  if (args.eval) {
    const r = await send(ws, 'Runtime.evaluate', { expression: args.eval, awaitPromise: true, returnByValue: true });
    logLines.push(`[capture] eval -> ${JSON.stringify(r.result.value ?? r.result.description ?? null)}`);
  }
  await sleep(extraWait);
  const perf = await send(ws, 'Runtime.evaluate', {
    expression: 'window.__atlas ? JSON.stringify(window.__atlas.debugStats()) : "n/a"',
    returnByValue: true
  });
  logLines.push(`[capture] stats ${perf.result.value}`);
  const shot = await send(ws, 'Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(out, Buffer.from(shot.data, 'base64'));
  fs.writeFileSync(out.replace(/\.png$/, '.log'), logLines.join('\n'));
  ws.close();
}

main()
  .catch((e) => {
    logLines.push(`[capture] FAILED ${e.message}`);
    fs.writeFileSync(out.replace(/\.png$/, '.log'), logLines.join('\n'));
  })
  .finally(() => {
    chrome.kill('SIGTERM');
    console.log(logLines.slice(-25).join('\n'));
    console.log(`saved ${out}`);
  });
