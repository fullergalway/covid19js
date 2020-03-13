#!/bin/sh -e
date
cd $(dirname $0)/..
#git pull
#npm install
npm run build
git status | grep -q "nothing to commit" || {
    head -1 dist/covid19.js > dist/covid19js.tmp
    echo '\nif(typeof(module) !== "undefined") module.exports = covid19;' >> dist/covid19js.tmp
    mv dist/covid19js.tmp dist/covid19.js
    now=$(date -Iseconds --utc | sed -e 's/+.*$/Z/')
    echo \"${now}\" > dist/updated.json
    git commit -a -m 'latest'
    git push
}
