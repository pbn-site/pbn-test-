import React from "react";
import SEO from "./seo";
import { IPost } from "../models/Post";
import PostContentRight from "../components/blog/post-right";
import PostContentLeft from "../components/blog/postleft";
import Header from "../components/header";
import Footer from "../components/footer";

const ThemeMedical = ({ posts }: { posts: IPost[] }) => {
    return (
        <>
            <div id="wrap">
                <Header />

                <div className="content fix-nav-space">
                    <section className="sub-banner" data-stellar-background-ratio="0.5">
                        <div className="overlay">
                            <div className="container">
                                <h3>Blog</h3>
                                <p>Provide useful information on health and wellness</p>

                                <ol className="breadcrumb">
                                    <li>
                                        <a href="#">Home</a>
                                    </li>
                                    <li className="active">Blog</li>
                                </ol>
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

                            {/* <nav>
                                <ul className="pagination">
                                    <li className="active">
                                        <a href="#">1</a>
                                    </li>
                                    <li>
                                        <a href="#">2</a>
                                    </li>
                                    <li>
                                        <a href="#">3</a>
                                    </li>
                                    <li>
                                        <a href="#">...</a>
                                    </li>
                                    <li>
                                        <a href="#">8</a>
                                    </li>
                                    <li>
                                        <a href="#">9</a>
                                    </li>
                                </ul>
                            </nav> */}
                        </div>
                    </section>
                </div>

                {/* <Footer /> */}
            </div>
        </>
    );
};

export default ThemeMedical;
