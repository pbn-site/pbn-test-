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
                    <section
                        className="sub-banner"
                        data-stellar-background-ratio="0.5"
                    >
                        <div className="overlay">
                            <div className="container">
                                <h3>Blog</h3>
                                <p>
                                    Provide useful information on health and
                                    wellness
                                </p>

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

                    <section className="contact-info">
                        <div className="container">
                            <ul className="row">
                                <li className="col-md-3">
                                    <i className="ion-ios-location-outline"></i>
                                    <h5>Address</h5>
                                    <p>
                                        1800 Abbot Kinney Blvd. Unit D & E
                                        Venice, CA 90291
                                    </p>
                                </li>

                                <li className="col-md-3">
                                    <i className="ion-iphone"></i>
                                    <h5>Hotline</h5>
                                    <p>+00-0122-123-0089</p>
                                </li>

                                <li className="col-md-3">
                                    <i className="ion-ios-email-outline"></i>
                                    <h5>Email contact</h5>
                                    <p>medikal@gmail.com</p>
                                    <p> contact@medikalclinic.com</p>
                                </li>

                                <li className="col-md-3">
                                    <i className="ion-earth"></i>
                                    <h5>Website</h5>
                                    <p>www.medikalclinic.com </p>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>

                <Footer />
            </div>
        </>
    );
};

export default ThemeMedical;
