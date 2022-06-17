import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import React from "react";
import ImageComponent from "../components/common/Image";
import ContentHome from "../components/content-home";
import ArrowDownIcon from "../components/Icon/ArrowDown";
import Layout from "../components/layout";
import { IPost } from "../models/Post";
import ThemeMedical from "../theme-medical";
import { convertToJSONObject, getFullPathAsset } from "../utils";
import { readAllPost } from "../utils/FileUtils";
import styles from "./Index.module.scss";
import ThemeMedicalSingle from "../theme-medical/single-page";
import { isWebWorksheet } from "../utils/web";
const Page = ({ posts }: { posts: IPost[] }) => {
    if (isWebWorksheet()) {
        return (
            <Layout title={""} description={""}>
                <div className={styles.homepage}>
                    <Container maxWidth="lg">
                        <div className={styles.homepageContainer}>
                            <div className={styles.left}>
                                <div className={styles.title}>Worksheet Zone Blog</div>
                                <div className={styles.text}>
                                    Everything you Need to Know to Get Better on your Learning
                                    Progress
                                </div>
                            </div>
                            <div className={styles.right}>
                                <ImageComponent
                                    src={getFullPathAsset("/images/banner-home.png")}
                                    alt={"banner"}
                                />
                            </div>
                        </div>
                        <div>
                            <ContentHome posts={posts} />
                        </div>
                        <div className={styles.btnSeemore}>
                            <Button>
                                See more
                                <ArrowDownIcon />
                            </Button>
                        </div>
                    </Container>
                </div>
            </Layout>
        );
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
