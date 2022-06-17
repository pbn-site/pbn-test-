import { GetStaticPaths } from "next";
import React from "react";
import { IPost } from "../../models/Post";
import ThemeMedicalSingle from "../../theme-medical/single-page";
import { convertToJSONObject } from "../../utils";
import { readAllFile, readContentFile } from "../../utils/FileUtils";

const BlogPage = ({ post }: { post: IPost }) => {
    return <ThemeMedicalSingle post={post} />;
    // return (
    //     <Layout title={`${post.title}  `} description={post.description}>
    //         {/* <Post content={post.content} /> */}

    //     </Layout>
    // );
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
