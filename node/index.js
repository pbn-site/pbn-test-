const axios = require("axios");
const fs = require("fs");
const { convert } = require("html-to-text");
var markdown = require("markdown").markdown;
const BASE_URL_CMS = "https://pbn.passemall.com/";
const TEXT_SPLIT = "---";
const BASE_PATH =
    "/Users/manhhoang/workspace/react/work-sheet-zone-blog/content/blog/";

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
    let res = await axios.get(
        "https://cms.worksheetzone.org/wp-json/v1/get-posts"
    );
    let allData = res.data;
    console.log("data ", allData.length);
    for (let i = 0; i < allData.length; i++) {
        let { post_name, post_content } = allData[i];
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

const uploadAllFile = async () => {
    let filenames = await fs.readdirSync(BASE_PATH);
    let allFileNum = filenames.length;
    let allUrlError = [];
    for (let i = 0; i < allFileNum; i++) {
        let filename = filenames[i];
        let path = BASE_PATH + filename;
        if (!filename.startsWith(".")) {
            // console.log("path ", path, " i = ", i, " total ", allFileNum);
            let content = await fs.readFileSync(path, "utf-8");
            let title = content.split("\n")[1].replace('title: "', "");
            title = title.trim();
            title = title.slice(0, title.length - 1);
            //     .slice(title.length - 1, title.length);
            console.log(title);
            var data = JSON.stringify({
                post_title: title,
                post_content: content,
                post_name: filename,
                post_status: "draft",
                post_type: "post",
            });
            var config = {
                method: "post",
                url: "https://cms.worksheetzone.org/wp-json/v1/save-posts",
                headers: {
                    "Content-Type": "application/json",
                },
                data: data,
            };

            let res = await axios(config);
            if (res.status != 200) {
                allUrlError.push(filename);
            }
        }
    }
    console.log("allUrlError ", allUrlError);
};

const startDeploy = async () => {
    let timeString = "1 hour ago";
    let res = await axios.get(
        BASE_URL_CMS + "wp-json/v1/check-has-posts?timeString=" + timeString
    );
    console.log("res.data.length ", res.data.length);
    if (res.data.length || true) {
        getAllPost();
    }
};
// convertMDTOHTML();
startDeploy();
// uploadAllFile();
