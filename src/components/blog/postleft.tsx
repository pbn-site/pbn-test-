import React from "react";
import { IPost } from "../../models/Post";
import { getFullPathAsset } from "../../utils";
import ImageComponent from "../common/Image";
import styles from './Blog.module.scss'

const PostContentLeft = ({ post }: { post: IPost }) => {
    return (
        <li className={`row ${styles.post_left}`}>
            <div className="col-md-5">
                <div className={`text-section text-center ${styles.content}`}>
                    <a href={post.slug}>{post.title}</a>
                    <span>
                        {/* post by <strong>John Doe</strong> on */}
                        <strong className={styles.date}>{post.date}</strong>
                    </span>
                    <hr />
                    <p dangerouslySetInnerHTML={{ __html: post.description ?? "" }} />
                    <a href={post.slug} className={`btn btn-1 ${styles.btn}`}>
                        View more
                    </a>
                </div>
            </div>

            <div className="col-md-7 text-center">
                <div className={`post-img ${styles.post_img}`}>
                    <ImageComponent
                        src={
                            !!post.image
                                ? post.image
                                : getFullPathAsset("images/blog-img.png")
                        }
                        className={`img-responsive ${styles.blog_image}`}
                    />
                </div>
            </div>
        </li>
    );
};

export default PostContentLeft;
