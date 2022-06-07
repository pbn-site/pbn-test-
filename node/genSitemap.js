const writeFileSiteMap = (content) => {
    let result = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">`;
    result += content;
    result += `</urlset>`;
    fs.writeFileSync(FILE_NAME, result, {
        flag: "w",
    });
};

const genFileSiteMap = () => {
    if (!fs.existsSync(FILE_NAME)) {
        let content = genSiteMapItem(BASE_URL, getLastMod());
        writeFileSiteMap(content);
    }
};

const appendUrlToSiteMap = async () => {
    let xmlData = await fs.readFileSync(FILE_NAME, { encoding: "utf-8" });
    parser.parseString(xmlData, async (err, result) => {
        const urls = result.urlset.url;
        console.log("urls ", result.urlset);
        let siteMapItemsExit = [];
        for (let urlData of urls) {
            siteMapItemsExit.push({
                loc: urlData.loc[0],
                lastmod: urlData.lastmod[0],
            });
        }
        for (let url of LIST_URLS) {
            siteMapItemsExit.push({
                loc: url,
                lastmod: getLastMod(),
            });
        }
        const siteMapItems = siteMapItemsExit.map(({ loc, lastmod }) => {
            return genSiteMapItem(loc, lastmod);
        });
        writeFileSiteMap(siteMapItems.join(""));
        // fs.writeFileSync(FILE_NAME, siteMapItems.join(""), {
        //     flag: "w",
        // });
    });
};

const genSiteMapItem = (loc, lastmod) => {
    return `<url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
</url>`;
};

const getNumberString = (number) => {
    if (number < 10) {
        return "0" + number;
    }
    return number;
};

const getLastMod = () => {
    let currentDate = new Date(Date.now());
    return (
        currentDate.getFullYear() +
        "-" +
        getNumberString(currentDate.getMonth() + 1) +
        "-" +
        getNumberString(currentDate.getDate()) +
        "T" +
        getNumberString(currentDate.getHours()) +
        ":" +
        getNumberString(currentDate.getMinutes()) +
        ":" +
        getNumberString(currentDate.getSeconds()) +
        "+07:00"
    );
};

const processGenSiteMap = async () => {
    await genFileSiteMap();
    await appendUrlToSiteMap();
};

main();
