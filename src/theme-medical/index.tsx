import React from "react";
import PostContentRight from "../components/blog/post-right";
import PostContentLeft from "../components/blog/postleft";
import Header from "../components/header";
import { IPost } from "../models/Post";

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
                            backgroundImage: `url(/images/slider-images/sub-bnr-bg.webp)`,
                        }}
                    >
                        <div className="overlay">
                            <div className="container">
                                <h3>Blog</h3>
                                <p>Provide useful information on health and wellness</p>
                            </div>
                        </div>
                    </section>

                    <section className="blog blog-pages">
                        <div className="container">
                            <ul>
                                {posts.map((post: IPost, index: number) => {
                                    if (index % 2 == 1) {
                                        return <PostContentLeft post={post} />;
                                    }
                                    return <PostContentRight post={post} />;
                                })}
                            </ul>
                        </div>
                    </section>
                </div>

                {/* <Footer /> */}
            </div>
        </>
    );
};

export default ThemeMedical;
