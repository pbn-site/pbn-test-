import Link from "next/link";
import React from "react";
import { IPost } from "../../models/Post";
import ImageComponent from "../common/Image";
import styles from "./Feed.module.scss";

type Props = {
    posts: IPost[];
};

type PropsFeedDetail = {
    post: IPost;
    className: any;
    index: number;
    heightProps?: string;
};

const ContentHome: React.FC<Props> = ({ posts }: Props) => {
    return (
        <div className={styles.feed}>
            {posts[0] && (
                <FeedDetail
                    post={posts[0]}
                    className={styles.item + " " + styles.firstRow}
                    index={1}
                    heightProps={"300"}
                />
            )}
            <div className={styles.listItem}>
                {posts.map((edge: any, index: number) => (
                    <FeedDetail key={index} post={edge} className={styles.item} index={index} />
                ))}
            </div>
            {posts[0] && (
                <FeedDetail
                    post={posts[0]}
                    className={styles.item + " " + styles.lastRow}
                    index={posts.length - 1}
                    heightProps={"500"}
                />
            )}
        </div>
    );
};
const FeedDetail: React.FC<PropsFeedDetail> = ({
    className,
    post,
    index,
    heightProps,
}: PropsFeedDetail) => {
    return (
        <Link className={className} key={index} href={"/" + post.slug}>
            <div className={className} key={index}>
                <div className={styles.content}>
                    <h2 className={styles.title}>{post.title}</h2>
                    <p className={styles.description}>
                        {/* {edge.node.frontmatter.description ?? */}
                        It is a long established fact that a reader will be distracted by the
                        readable content of a page when looking at its layout. The point of using
                        {/* } */}
                    </p>
                    <div className={styles.meta}>
                        <time
                            className={styles.time}
                            dateTime={new Date(post.date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "2-digit",
                            })}
                        >
                            {new Date(post.date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "2-digit",
                            })}
                        </time>
                        <div className={styles.more}>Read more</div>
                    </div>
                </div>
                <div className={styles.images}>
                    <ImageComponent
                        src={"/images/default.png"}
                        alt="image"
                        heightProps={heightProps}
                    />
                </div>
            </div>
        </Link>
    );
};
export default ContentHome;
