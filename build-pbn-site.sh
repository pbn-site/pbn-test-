BASE_PATH="/home/code/react"
# BASE_PATH="/Users/manhhoang/workspace/test"
REPO='git@github.com:pbn-site/pbn-test-.git'
BASE_PATH_NGINX='/etc/nginx/sites-available'
# BASE_PATH_NGINX='/Users/manhhoang/workspace/test'
DOMAIN=$1
PORT=0
# clone project
# yarn build && yarn start -port 3000
# setup nginx
#     - copy 1 template
#     - replate domain, port
#     - install ssl

cloneProject() {
    if [ -d "$DOMAIN" ]; then
        echo "folder exit ....."
    else
        echo 'clone repo'
        git clone $REPO $DOMAIN
    fi
}

buildAndStartProject() {
    echo 'start build and start project'
    cd $DOMAIN
    if [ -d "/$DOMAIN" ]; then
        ./build.sh $DOMAIN 
    else 
        ./build.sh $DOMAIN $PORT
    fi
    echo 'done build and start project'
}

setupNginx() {
    echo 'start setup Nginx'
    cp $BASE_PATH_NGINX/template.org $BASE_PATH_NGINX/$DOMAIN
    # cp `$BASE_PATH_NGINX/template.org` `$BASE_PATH_NGINX/$DOMAIN.com`
    sed -i s/template_domain.org/$DOMAIN/g $BASE_PATH_NGINX/$DOMAIN
    sed -i s/port_domain/$PORT/g $BASE_PATH_NGINX/$DOMAIN
    sudo ln -s $BASE_PATH_NGINX/$DOMAIN /etc/nginx/sites-enabled/
    nginx -t
    #sudo certbot --nginx -d $DOMAIN -d $DOMAIN
    echo 'done setup Nginx'
}

getPortForSite() {
    filename='site_info.txt'
    if [[ -f "$filename" ]]; then
        echo "has file $filename ."
    else
        echo 'xxxxx'
        touch $filename
    fi
    n=0
    currentPort=0
    while read line; do
        # reading each line
        if [[ $line == *$DOMAIN* ]]; then
            IFS='-' read -r -a array <<< "$line"
            currentPort=${array[1]}
        fi
        n=$((n+1))
    done < $filename
    if [[ $n == 0 ]]; then
        echo 'first site'
        PORT=3000
        echo $DOMAIN-$PORT >> $filename
    elif [[ $currentPort == 0 ]]; then 
        echo 'site is fist setup'
        PORT=$((currentPort + 3000 + n))
        echo $DOMAIN-$PORT >> $filename
    else
        echo 'site is exit'
    fi
}

start(){
    getPortForSite
    echo $PORT
    cd $BASE_PATH
    cloneProject
    buildAndStartProject
    setupNginx
}


start