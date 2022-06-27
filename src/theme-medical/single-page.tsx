import React from "react";
import ImageComponent from "../components/common/Image";
import Footer from "../theme-medical/footer";
import Header from "../theme-medical/header";
import ScrollButton from "../components/scroll-button";
import { IPost } from "../models/Post";
import { getFullPathAsset } from "../utils";
import styles from './Index.module.scss'

const ThemeMedicalSingle = ({ post }: { post: IPost }) => {
    return (
        <>
            <div id="wrap">
                <Header title={post.title} description={post.content.slice(0, 100)} keywords="" />

                <div className="content fix-nav-space">
                    <section
                        className="sub-banner"
                        data-stellar-background-ratio="0.5"
                        style={{
                            backgroundImage: `url(/images/banner.webp)`,
                        }}
                    >
                        <div className={`overlay ${styles.singlePage_container}`}>
                            <div className={`container ${styles.banner}`}>
                                <h3>Blog</h3>
                                <p>Lorem ipsum dolor sit amet consectetur</p>

                                <ol className="breadcrumb">
                                    <li>
                                        <a href="/">Home</a>
                                    </li>
                                    {/* <li>
                                        <a href="/">BLOG</a>
                                    </li> */}
                                    <li className="active">BLOG DETAIL</li>
                                </ol>
                            </div>
                        </div>
                    </section>

                    <div className="dep-detail-page blog single-post">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="img-single">
                                        <ImageComponent
                                            className={`img-responsive ${styles.post_img}`}
                                            src={
                                                post.image
                                                ? post.image
                                                : getFullPathAsset(
                                                        "images/blog-img1.webp"
                                                    )
                                            }
                                            alt=""
                                        />
                                    </div>

                                    <div className="detail-sec">
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: post.content,
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
                <ScrollButton />
            </div>
        </>
    );
};

export default ThemeMedicalSingle;
