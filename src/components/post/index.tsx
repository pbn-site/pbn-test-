import { Container } from "@mui/material";
import React from "react";
import { IPost } from "../../models/Post";
import Content from "./content";
import styles from "./Post.module.scss";

interface Props {
    post: IPost;
}

const Post: React.FC<Props> = ({ post }: Props) => {
    // const { html } = post;
    // // const { tagSlugs, slug } = post.fields;
    // const { tags, title, date } = post.frontmatter;
    return (
        <Container className={styles.post}>
            <div className={styles.content}>
                <Content
                    date={new Date()}
                    body={post.content}
                    title={post.title}
                />
            </div>
        </Container>
    );
};

export default Post;
