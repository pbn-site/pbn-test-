#git pull origin master;
ENV='.env.local'
. $ENV
len=${#NEXT_PUBLIC_ASSET_PREFIX}
if [ -z "$NEXT_PUBLIC_ASSET_PREFIX" ] || [ $len -gt 0 ]; then
    echo 1
    cd public
    sudo mkdir `${NEXT_PUBLIC_ASSET_PREFIX}`
    cd `${NEXT_PUBLIC_ASSET_PREFIX}`
    mkdir `images`
    cd ..
    cp -R images/ `${NEXT_PUBLIC_ASSET_PREFIX}/images`
fi 