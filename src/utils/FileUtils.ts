import fs from "fs";
import path from "path";
import Post from "../models/Post";
var markdown = require("markdown").markdown;

const TEXT_SPLIT = "---";

export const readAllFile = () => {
    const directoryAppInfos = path.join(process.cwd(), "src/data");
    return fs.readdirSync(directoryAppInfos).map((file) => {
        return file.replace(".md", "");
    });
};

export const readContentFile = async (fileName: string) => {
    const directoryAppInfos = path.join(
        process.cwd(),
        "src/data/" + fileName + ".md"
    );
    let content = fs.readFileSync(directoryAppInfos, "utf8");
    // console.log("content ", content);

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
        contentHTML = markdown.toHTML(contentHTML);
    }
    // console.log("description ", description);
    // console.log("contentHTML ", contentHTML);
    let post = new Post({
        title: "THis is title",
        content: contentHTML,
        description: "This is description",
        date: new Date(),
        slug: fileName,
    });
    return post;
};

export const readAllPost = async () => {
    let files = await readAllFile();
    let posts = [];
    for (let index = 0; index < files.length; index++) {
        posts.push(await readContentFile(files[index]));
    }
    return posts;
};
