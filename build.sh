#!/usr/bin/env bash
# Build resume PDF, picking the largest base font size that still fits one A4 page.
set -euo pipefail
DIR="$(cd "$(dirname "$0")" && pwd)"
SRC="$DIR/resume_source.html"
OUT="$DIR/resume.pdf"
TMP="$DIR/.tmp.html"

if [ -n "${CHROME:-}" ]; then :
elif [ -x "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" ]; then
  CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
else
  CHROME="$(command -v google-chrome || command -v google-chrome-stable || command -v chromium || true)"
fi
[ -n "$CHROME" ] || { echo "Chrome not found. Set CHROME=/path/to/chrome" >&2; exit 1; }
command -v python3 >/dev/null || { echo "python3 is required" >&2; exit 1; }

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

# Persist a known-good size back into $SRC so the next build starts from it.
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

# Chrome stamps the wall clock into the PDF, which makes identical content
# differ byte-for-byte. Replace it with a fixed value of the SAME length so
# the xref offsets stay valid and rebuilds are reproducible.
normalize_pdf() {
  python3 - "$1" <<'PY'
import re, sys
path = sys.argv[1]
with open(path, "rb") as f:
    data = f.read()
data = re.sub(
    rb"/(Creation|Mod)Date \(D:\d{14}[^)]*\)",
    lambda m: b"/" + m.group(1) + b"Date (D:20000101000000+00'00')",
    data,
)
with open(path, "wb") as f:
    f.write(data)
PY
}

trap 'rm -f "$TMP"' EXIT

for SIZE in 10.4 10.2 10.0 9.8 9.6 9.4 9.2 9.0 8.8 8.6 8.4; do
  render_sized "$TMP" "$SIZE"
  "$CHROME" --headless --disable-gpu --no-pdf-header-footer \
    --print-to-pdf="$OUT" "file://$TMP" 2>/dev/null
  normalize_pdf "$OUT"
  PAGES=$(python3 -c "
import re
with open('$OUT','rb') as f:
    data = f.read()
m = re.findall(rb'/Count\s+(\d+)', data)
print(int(m[-1]) if m else 0)
")
  if [ "$PAGES" = "1" ]; then
    set_size "$SIZE"
    echo "OK: single page at ${SIZE}pt"
    exit 0
  fi
  echo "  ${SIZE}pt -> ${PAGES} pages, trying smaller"
done

echo "WARNING: no size down to 8.4pt fit one page" >&2
exit 1
