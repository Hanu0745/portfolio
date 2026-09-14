#!/usr/bin/env bash
# Renders resume/hanumanthu-buddha-resume.html to public/hanumanthu-buddha-resume.pdf with headless Chrome.
set -euo pipefail
DIR="$(cd "$(dirname "$0")" && pwd)"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
OUT="${1:-$DIR/../public/hanumanthu-buddha-resume.pdf}"
"$CHROME" --headless=new --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="$OUT" "file://$DIR/hanumanthu-buddha-resume.html" 2>/dev/null
echo "Wrote $OUT"
