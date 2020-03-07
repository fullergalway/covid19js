#!/bin/sh -e
date
cd $(dirname $0)/..
npm run build && git status | grep -q "nothing to commit" || git commit -a -m 'latest' && git push
