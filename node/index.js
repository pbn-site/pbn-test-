const axios = require("axios");
const fs = require("fs");
var xml2js = require("xml2js");
let parser = new xml2js.Parser();
const BASE_URL = "https://worksheetzone.org/";
const FILE_NAME = "public/sitemap.xml";

const { convert } = require("html-to-text");
var markdown = require("markdown").markdown;
const BASE_URL_CMS = "https://pbn.passemall.com/";
const TEXT_SPLIT = "---";
const BASE_PATH =
    "/Users/manhhoang/workspace/react/work-sheet-zone-blog/content/blog/";

const LIST_URLS = [];

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
        // console.log("urls ", result.urlset);
        let siteMapItemsExit = [];
        for (let urlData of urls) {
            siteMapItemsExit.push({
                loc: urlData.loc[0],
                lastmod: urlData.lastmod[0],
            });
        }
        for (let url of LIST_URLS) {
            let exit = siteMapItemsExit.find((e) => e.loc.includes(url));
            if (!exit) {
                siteMapItemsExit.push({
                    loc: BASE_URL + url,
                    lastmod: getLastMod(),
                });
            }
        }
        const siteMapItems = siteMapItemsExit.map(({ loc, lastmod }) => {
            return genSiteMapItem(loc, lastmod);
        });
        writeFileSiteMap(siteMapItems.join(""));
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
    console.log("LIST_URLS ", LIST_URLS);
    if (LIST_URLS?.length) {
        await genFileSiteMap();
        await appendUrlToSiteMap();
    }
};

const convertMDTOHTML = async () => {
    let content = await fs.readFileSync(
        BASE_PATH + "asvab_study_guide-2.md",
        "utf-8"
    );
    let contentHTML = content;
    let description = "";
    if (content.includes(TEXT_SPLIT)) {
        let arr = content.split(TEXT_SPLIT);
        let infoArr = arr[1].split("\n");
        for (let i = 0; i < infoArr.length; i++) {
            if (infoArr[i].startsWith("description")) {
                description = infoArr[i]
                    .trim()
                    .replace("description", "")
                    .replace(': "', "");
                description = description.substring(0, description.length - 1);
            }
        }
        contentHTML = arr[2];
    }
    var fileName = BASE_PATH + "test.md";
    var opts = {
        title: "File $BASENAME in $DIRNAME",
        stylesheet: "test/style.css",
    };
    console.log("description ", description);
    let newContent = markdown.toHTML(content);
    fs.writeFileSync(fileName, newContent);
};

const processDescription = (description, post_name) => {
    console.log(post_name);
    if (description && description.includes("slug:")) {
        let newArray = description.split("slug:");
        var beforSlug = newArray[0].split("\n");
        // remove one line, starting at the first position
        beforSlug.splice(beforSlug.length - 1, beforSlug.length);
        console.log("newArray[1] ", newArray[1], " post_name ", post_name);
        var afterSlug = newArray[1].split("\n");
        // remove one line, starting at the first position
        afterSlug.splice(0, 2);
        // join the array back into a single string
        return (
            beforSlug.join("\n") +
            "\n" +
            'slug: "' +
            post_name +
            '"\n' +
            afterSlug.join("\n")
        );
    }
    return description;
};

const getAllPost = async () => {
    let res = await axios.get(BASE_URL_CMS + "wp-json/v1/get-posts");
    let allData = res.data;
    console.log("data ", allData.length);
    for (let i = 0; i < allData.length; i++) {
        let { post_name, post_content } = allData[i];
        LIST_URLS.push(post_name);
        if (allData[i].post_content_filtered) {
            fs.writeFileSync(
                BASE_PATH + post_name + ".md",
                allData[i].post_content_filtered
            );
            continue;
        }
        post_content = allData[i].post_content_filtered?.length
            ? allData[i].post_content_filtered
            : post_content;
        // const html = "<h1>Hello World</h1>";
        let arr = post_content.split("---");
        let description = convert(arr[1], {});
        description = processDescription(description, post_name);
        // let newArray = description.split("slug:");
        // console.log(newArray[0]);
        // console.log("--------");
        // console.log(newArray[1]);
        // description = description.replace("slug: ", "");
        post_content = convert(arr[2], {});
        // console.log("arr 1 ", description);
        // let newPostContent = NodeHtmlMarkdown.translate(
        //     /* html */ post_content,
        //     /* options (optional) */ {},
        //     /* customTranslators (optional) */ undefined,
        //     /* customCodeBlockTranslators (optional) */ undefined,
        // );
        fs.writeFileSync(
            BASE_PATH + post_name + ".md",
            "--- \n" + description + "\n--- \n" + post_content
        );
    }
};

const startDeploy = async () => {
    let timeString = "1 hour ago";
    let res = await axios.get(
        BASE_URL_CMS + "wp-json/v1/check-has-posts?timeString=" + timeString
    );
    console.log("res.data.length ", res.data.length);
    if (res.data.length || true) {
        await getAllPost();
    }
};

const main = async () => {
    await startDeploy();
    await processGenSiteMap();
};

main();
