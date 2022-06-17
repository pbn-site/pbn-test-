import React from "react";
import { IPost } from "../models/Post";
import ThemeMedical from "../theme-medical";
import ThemeWorkSheet from "../theme-worksheet";
import { convertToJSONObject } from "../utils";
import { readAllPost } from "../utils/FileUtils";
import { isWebWorksheet } from "../utils/web";
const Page = ({ posts }: { posts: IPost[] }) => {
    if (isWebWorksheet()) {
        return <ThemeWorkSheet posts={posts} />;
    }
    return <ThemeMedical posts={posts} />;
};

export const getStaticProps = async (context: any) => {
    let posts = await readAllPost();

    // let appInfo = getAppInfo(appNameId);
    // let listPractice = await getListTopicAPI(appInfo.appId);

    // let tests: ITestInfo[] = [];
    // if (!appInfo.hasState) {
    //     tests = await getListTestApi(appInfo.appId);
    // }
    // let footerContent = readFooterMenusData();
    // let homeSeoContent = await getHomeSeoContentApi(
    //     getAppNameFromAppNameId(appInfo.appNameId) + "-home-seo-content"
    // );

    return convertToJSONObject({
        props: {
            posts: posts,
        },
    });
};

export default Page;
