import React from "react";
import PostContentRight from "../components/content-blog/post-right";
import PostContentLeft from "../components/content-blog/postleft";
import Footer from "../theme-medical/footer";
import Header from "../theme-medical/header";
import ScrollButton from "../components/scroll-button";
import { IPost } from "../models/Post";
import styles from "./Index.module.scss";

const ThemeMedical = ({ posts }: { posts: IPost[] }) => {
    return (
        <>
            <div id="wrap">
                <Header
                    title="Provide useful information on health and
                                    wellness"
                    description="Provide useful information on health and wellness"
                    keywords=""
                />

                <div className="content fix-nav-space">
                    <section
                        className="sub-banner"
                        data-stellar-background-ratio="0.5"
                        style={{
                            backgroundImage: `url(/images/banner.webp)`,
                        }}
                    >
                        <div className={`overlay ${styles.homepage_container}`}>
                            <div className={`container ${styles.banner}`}>
                                <h3>Blog</h3>
                                <p>Lorem ipsum dolor sit amet consectetur</p>
                            </div>
                        </div>
                    </section>

                    <section className="blog blog-pages">
                        <div
                            className={`container ${styles.blog_container}`}
                            style={{
                                backgroundImage: `url(/images/background-img.webp)`,
                            }}
                        >
                            <div className={styles.overlay}>
                                <ul>
                                    {posts?.map(
                                        (post: IPost, index: number) => {
                                            if (index % 2 == 1) {
                                                return (
                                                    <PostContentLeft
                                                        key={index}
                                                        post={post}
                                                    />
                                                );
                                            }
                                            return (
                                                <PostContentRight
                                                    key={index}
                                                    post={post}
                                                />
                                            );
                                        }
                                    )}
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>

                <Footer />
                <ScrollButton />
            </div>
        </>
    );
};

export default ThemeMedical;
