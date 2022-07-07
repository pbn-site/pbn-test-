import fs from "fs";
import path from "path";
import Post from "../models/Post";
var markdown = require("markdown").markdown;

const TEXT_SPLIT = "---";

export const readAllFile = () => {
    const directoryAppInfos = path.join(process.cwd(), "src/data");
    return fs.readdirSync(directoryAppInfos).map((file) => {
        return file.replace(".json", "");
    });
};

const IMAGES = [
    "blog-img1.webp",
    "blog-img2.webp",
    "blog-img3.webp",
    "blog-img4.webp",
];
export const readContentFile = async (fileName: string) => {
    const directoryAppInfos = path.join(
        process.cwd(),
        "src/data/" + fileName + ".json"
    );
    let object = JSON.parse(fs.readFileSync(directoryAppInfos, "utf8"));
    let arr = object.post_content.split("\n");
    let newContent;
    if (arr?.length) {
        newContent = "<p>" + arr.join("</p><p>") + "</p>";
    } else {
        newContent = object.post_content;
    }
    let post = new Post({
        title: object.post_title,
        content: newContent,
        date: object.post_date,
        slug: object.post_name,
        image: object.post_image
            ? object.post_image
            : `images/${IMAGES[object.ID % IMAGES.length]}`,
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
