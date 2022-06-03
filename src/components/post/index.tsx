import { Container } from "@mui/material";
import React from "react";
import Content from "./content";
import styles from "./Post.module.scss";

interface Props {
    content: string;
}

const Post: React.FC<Props> = ({ content }: Props) => {
    // const { html } = post;
    // // const { tagSlugs, slug } = post.fields;
    // const { tags, title, date } = post.frontmatter;
    return (
        <Container className={styles.post}>
            <div className={styles.content}>
                <Content date={new Date()} body={content} title={""} />
            </div>
        </Container>
    );
};

export default Post;
