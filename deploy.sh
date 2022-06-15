#!/bin/bash
# cd /home/code/work-sheet-zone-blog
DOMAIN=$1
FORCE_NEW_DEPLOY=$2
echo  $DOMAIN
node node/index.js $DOMAIN $FORCE_NEW_DEPLOY
DIR_BLOG='src/data'
if [ -d "$DIR_BLOG" ]; then
    totalFile=$(find "$DIR_BLOG" -maxdepth 1 -type f|wc -l)
    echo "Total file: $totalFile"
    if [[ $totalFile -gt  0 ]]; then
        ./build.sh $DOMAIN
        # yarn build
        # pm2 restart $DOMAIN
    fi
fi


