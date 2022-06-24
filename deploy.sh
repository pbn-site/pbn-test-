#!/bin/bash
# cd /home/code/work-sheet-zone-blog
DOMAIN=$1
FORCE_NEW_DEPLOY=$2
DIR_BLOG='src/data'
mkdir $DIR_BLOG
echo  $DOMAIN
node node/index.js $DOMAIN $FORCE_NEW_DEPLOY

if [ -d "$DIR_BLOG" ]; then
    totalFile=$(find "$DIR_BLOG" -maxdepth 1 -type f|wc -l)
    echo "Total file: $totalFile"
    ./build.sh $DOMAIN
    # if [[ $totalFile -gt  0 ]]; then
    #     yarn build
    #     pm2 restart $DOMAIN
    # fi
fi
