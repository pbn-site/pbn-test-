import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import React from "react";
import ImageComponent from "../components/common/Image";
import ContentHome from "../components/content-home";
import ArrowDownIcon from "../components/Icon/ArrowDown";
import Layout from "../components/layout";
import { IPost } from "../models/Post";
import { getFullPathAsset } from "../utils";
import styles from "./Index.module.scss";

const ThemeWorkSheet = ({ posts }: { posts: IPost[] }) => {
    return (
        <Layout title={""} description={""}>
            <div className={styles.homepage}>
                <Container maxWidth="lg">
                    <div className={styles.homepageContainer}>
                        <div className={styles.left}>
                            <h1 className={styles.title}>Worksheet Zone Blog</h1>
                            <div className={styles.text}>
                                Everything you Need to Know to Get Better on your Learning Progress
                            </div>
                        </div>
                        <div className={styles.right}>
                            <ImageComponent src={getFullPathAsset("/images/banner-home.png")} alt={"banner"} />
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
};

export default ThemeWorkSheet;
