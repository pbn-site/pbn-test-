import React from "react";
import ImageComponent from "../components/common/Image";
import Header from "../components/header";
import { IPost } from "../models/Post";
import { getFullPathAsset } from "../utils";

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
                            backgroundImage: `url(/images/slider-images/sub-bnr-bg.webp)`,
                        }}
                    >
                        <div className="overlay">
                            <div className="container">
                                <h3>Blog</h3>
                                <p>Provide useful information on health and wellness</p>

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
                                            className="img-responsive"
                                            src={
                                                !!post.image
                                                    ? post.image
                                                    : getFullPathAsset(
                                                          "images/blog-img-large-1.webp"
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
            </div>
        </>
    );
};

export default ThemeMedicalSingle;
