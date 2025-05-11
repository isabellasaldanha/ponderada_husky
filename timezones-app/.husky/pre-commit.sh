#!/bin/sh
. "$(dirname "$0")/_/husky.sh"
echo "➡️  Rodando build e lint..."

npm run build
npx eslint .
