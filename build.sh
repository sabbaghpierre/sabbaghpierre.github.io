#!/usr/bin/env bash
# Build resume PDF, picking the largest base font size that still fits one A4 page.
set -euo pipefail
DIR="$(cd "$(dirname "$0")" && pwd)"
SRC="$DIR/resume_source.html"
OUT="$DIR/resume.pdf"

if [ -n "${CHROME:-}" ]; then :
elif [ -x "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" ]; then
  CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
else
  CHROME="$(command -v google-chrome || command -v google-chrome-stable || command -v chromium || true)"
fi
[ -n "$CHROME" ] || { echo "Chrome not found. Set CHROME=/path/to/chrome" >&2; exit 1; }
command -v python3 >/dev/null || { echo "python3 is required" >&2; exit 1; }
command -v pdfinfo >/dev/null || { echo "pdfinfo is required (install Poppler)" >&2; exit 1; }

TMP_DIR="$(mktemp -d "$DIR/.resume.XXXXXX")"
TMP_HTML="$TMP_DIR/resume.html"
TMP_PDF="$TMP_DIR/resume.pdf"
CHROME_LOG="$TMP_DIR/chrome.log"
trap 'rm -f "$TMP_HTML" "$TMP_PDF" "$CHROME_LOG"; rmdir "$TMP_DIR"' EXIT

# Render $SRC into $1 with --base-size set to $2, without touching $SRC.
render_sized() {
  python3 - "$SRC" "$1" "$2" <<'PY'
import re, sys
src, dst, size = sys.argv[1], sys.argv[2], sys.argv[3]
with open(src) as f:
    text = f.read()
with open(dst, "w") as f:
    f.write(re.sub(r"--base-size: [0-9.]+pt", f"--base-size: {size}pt", text))
PY
}

# Persist the chosen size back into $SRC.
set_size() {
  python3 - "$SRC" "$1" <<'PY'
import re, sys
path, size = sys.argv[1], sys.argv[2]
with open(path) as f:
    text = f.read()
with open(path, "w") as f:
    f.write(re.sub(r"--base-size: [0-9.]+pt", f"--base-size: {size}pt", text))
PY
}

for SIZE in 10.4 10.2 10.0 9.8 9.6 9.4 9.2 9.0 8.8 8.6 8.4; do
  render_sized "$TMP_HTML" "$SIZE"
  rm -f "$TMP_PDF"
  if ! "$CHROME" --headless --disable-gpu --no-pdf-header-footer \
    --print-to-pdf="$TMP_PDF" "file://$TMP_HTML" 2>"$CHROME_LOG"; then
    echo "Chrome failed to generate the resume PDF" >&2
    cat "$CHROME_LOG" >&2
    exit 1
  fi
  if ! PAGES=$(LC_ALL=C pdfinfo "$TMP_PDF" | awk '/^Pages:/{print $2}'); then
    cat "$CHROME_LOG" >&2
    exit 1
  fi
  if [ "$PAGES" = "1" ]; then
    set_size "$SIZE"
    mv -f "$TMP_PDF" "$OUT"
    echo "OK: single page at ${SIZE}pt"
    exit 0
  fi
  echo "  ${SIZE}pt -> ${PAGES} pages, trying smaller"
done

echo "WARNING: no size down to 8.4pt fit one page" >&2
exit 1
