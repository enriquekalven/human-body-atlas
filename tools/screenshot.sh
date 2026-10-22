#!/usr/bin/env bash
# Renders the atlas in headless Chrome (GPU via ANGLE/Metal) and saves a PNG + console log.
# Usage: tools/screenshot.sh "<query string>" <output.png> [width] [height] [budget_ms]
set -euo pipefail
QUERY="${1:-view=muscles&ui=0}"
OUT="${2:-shot.png}"
W="${3:-1600}"
H="${4:-1000}"
BUDGET="${5:-30000}"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
PROFILE_DIR="${ATLAS_CHROME_PROFILE:-$(dirname "$OUT")/chrome-profile}"
mkdir -p "$PROFILE_DIR"
"$CHROME" --headless=new --no-first-run --no-default-browser-check \
  --user-data-dir="$PROFILE_DIR" \
  --use-angle=metal --enable-gpu --ignore-gpu-blocklist --enable-unsafe-webgpu=false \
  --hide-scrollbars --window-size="${W},${H}" \
  --virtual-time-budget="$BUDGET" --run-all-compositor-stages-before-draw \
  --enable-logging=stderr --v=0 \
  --screenshot="$OUT" "http://127.0.0.1:8094/?${QUERY}" 2> "${OUT%.png}.log" || true
grep -E "CONSOLE|Uncaught|THREE|WebGL|ERROR:gpu" "${OUT%.png}.log" | grep -v "Fontconfig" | head -40 || true
ls -la "$OUT"
