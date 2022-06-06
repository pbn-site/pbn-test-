#git pull origin master;
ENV='.env.local'
. $ENV
len=${#NEXT_PUBLIC_ASSET_PREFIX}
if [ -z "$NEXT_PUBLIC_ASSET_PREFIX" ] || [ $len -gt 0 ]; then
    echo 1
    cd public
    path=${NEXT_PUBLIC_ASSET_PREFIX:1:len}
    echo $path
    mkdir -p $path/images
    cp -R images/  $path/images
fi 
yarn && yarn build