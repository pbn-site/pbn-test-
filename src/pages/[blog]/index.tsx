import { GetStaticPaths } from "next";
import React from "react";
import Layout from "../../components/layout";
import Post from "../../components/post";
import { IPost } from "../../models/Post";
import ThemeMedicalSingle from "../../theme-medical/single-page";
import { convertToJSONObject } from "../../utils";
import { readAllFile, readContentFile } from "../../utils/FileUtils";
import { isWebWorksheet } from "../../utils/web";

const BlogPage = ({ post }: { post: IPost }) => {
    if (isWebWorksheet()) {
        return (
            <Layout title={`${post.title}  `} description={post.description}>
                <Post post={post} />
            </Layout>
        );
    }
    return <ThemeMedicalSingle post={post} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
    let allFiles = readAllFile();
    const paths: any = allFiles.map((file) => {
        if (file.endsWith(".json")) {
            file = file.replace(".json", "");
        }
        return {
            params: {
                blog: file,
            },
        };
    });
    return { paths, fallback: false };
};
export const getStaticProps = async (context: any) => {
    let blogSlug = context.params.blog as string;
    let post = await readContentFile(blogSlug);

    return convertToJSONObject({
        props: {
            post: post,
        },
    });
};

export default BlogPage;
