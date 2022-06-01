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
        <Container>
            {/* <Link className={styles.button} to="/">
                All Articles
            </Link> */}
            {/* <Author /> */}

            <div className={styles.content}>
                <Content date={new Date()} body={content} title={""} />
            </div>
            {/* 
            <div className={styles.footer}>
                <Meta date={date} />
                {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
            </div> */}

            {/* <div className={styles.comments}>
                <Comments postSlug={slug} postTitle={post.frontmatter.title} />
            </div> */}
        </Container>
    );
};

export default Post;
