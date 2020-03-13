#!/bin/sh -e
date
cd $(dirname $0)/..
#git pull
#npm install
npm run build
git status | grep -q "nothing to commit" || {
    now=$(date -Iseconds --utc | sed -e 's/+.*$/Z/')
    echo \"${now}\" > dist/updated.json
    git commit -a -m 'latest'
    git push
}
