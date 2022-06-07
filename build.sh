#git pull origin master;
ENV='.env.local'
DOMAIN=$1
PORT=$2
. $ENV
len=${#NEXT_PUBLIC_ASSET_PREFIX}
if [ $len -gt 0 ]; then
    echo 1
    cd public
    path=${NEXT_PUBLIC_ASSET_PREFIX:1:len}
    echo $path
    mkdir -p $path/images
    cp -R images/  $path/images
fi 
yarn && yarn build
if [ -z "$PORT" ]; then
    pm2 restart $DOMAIN
else
    pm2 start yarn --name "$DOMAIN" -- start -p $PORT
fi
pm2 save 