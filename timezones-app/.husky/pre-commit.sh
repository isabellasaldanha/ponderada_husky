#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

echo "🚀 Executando pré-commit..."

npm run build && npm run lint