#!/bin/bash
# cd /home/code/work-sheet-zone-blog
ENV='.env.local'
DOMAIN=$1
FORCE_NEW_DEPLOY=$2
DIR_BLOG='src/data'
mkdir $DIR_BLOG
echo  $DOMAIN
node node/index.js $DOMAIN $FORCE_NEW_DEPLOY
totalFile=$(find "$DIR_BLOG" -maxdepth 1 -type f|wc -l)
. $ENV
echo 1
echo $IS_LOCAL
echo 2
echo "Total file: $totalFile"
if ($IS_LOCAL gt 'true'); then
    yarn dev
elif [[ $totalFile -gt  0 || $FORCE_NEW_DEPLOY ]]; then
    ./build.sh $DOMAIN
    rm -rf $DIR_BLOG
fi
