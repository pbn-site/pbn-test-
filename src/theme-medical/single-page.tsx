import React from "react";
import ImageComponent from "../components/common/Image";
import Header from "../components/header";
import { IPost } from "../models/Post";

const ThemeMedicalSingle = ({ post }: { post: IPost }) => {
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
                                                    : "images/blog-img-large-1.jpg"
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

                                    {/* <div className="stare-ev">
                                        <div className="tags">
                                            <ul>
                                                <li>
                                                    <h5>Tags:</h5>
                                                </li>
                                                <li>
                                                    <a href="#."> Health, </a>
                                                </li>
                                                <li>
                                                    <a href="#."> Medical,</a>
                                                </li>
                                                <li>
                                                    <a href="#."> news, </a>
                                                </li>
                                                <li>
                                                    <a href="#."> Sport, </a>
                                                </li>
                                            </ul>
                                        </div>

                                        <ul className="social_icons pull-right">
                                            <li>
                                                <h5>Share:</h5>
                                            </li>
                                            <li className="facebook">
                                                <a href="#.">
                                                    <i className="fa fa-facebook"></i>
                                                </a>
                                            </li>
                                            <li className="twitter">
                                                <a href="#.">
                                                    <i className="fa fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li className="googleplus">
                                                <a href="#.">
                                                    <i className="fa fa-google-plus"></i>
                                                </a>
                                            </li>
                                            <li className="instagram">
                                                <a href="#.">
                                                    <i className="fa fa-instagram"></i>
                                                </a>
                                            </li>
                                            <li className="soundcloud">
                                                <a href="#.">
                                                    <i className="fa fa-rss"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div> */}

                                    {/* <div className="admin-info">
                                        <ul>
                                            <li className="media">
                                                <div className="media-left about-small">
                                                    <div className="avatar">
                                                        <img src="images/admin-avatar.jpg" alt="" />
                                                    </div>
                                                </div>
                                                <div className="media-body">
                                                    <h5>John Doe </h5>
                                                    <p>
                                                        Typi non habent claritatem insitam; est usus
                                                        legentis in iis qui facit eorum claritatem.
                                                        Sagittis porta fermentum maecenas inceptos
                                                        leo sodales vitae eget dui vestibulum porta
                                                        aenean habitasse tristique fuscerhoncus.
                                                    </p>

                                                    <ul className="social_icons">
                                                        <li className="facebook">
                                                            <a href="#.">
                                                                <i className="fa fa-facebook"></i>
                                                            </a>
                                                        </li>
                                                        <li className="twitter">
                                                            <a href="#.">
                                                                <i className="fa fa-twitter"></i>
                                                            </a>
                                                        </li>
                                                        <li className="dribbble">
                                                            <a href="#.">
                                                                <i className="fa fa-dribbble"></i>
                                                            </a>
                                                        </li>
                                                        <li className="pinterest">
                                                            <a href="#.">
                                                                <i className="fa fa-pinterest"></i>
                                                            </a>
                                                        </li>
                                                        <li className="linkedin">
                                                            <a href="#.">
                                                                <i className="fa fa-linkedin"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="pre-next-post">
                                        <ul className="row">
                                            <li className="col-sm-6">
                                                <div className="row">
                                                    <div className="col-xs-12">
                                                        <span>Previous Post</span>
                                                        <a href="#.">
                                                            Suspendisse ac urna. Etiam pellentesque
                                                            mauris ut lectus.
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="col-sm-6">
                                                <div className="row">
                                                    <div className="col-xs-12">
                                                        <span>Next Post</span>
                                                        <a href="#.">
                                                            Suspendisse ac urna. Etiam pellentesque
                                                            mauris ut lectus.
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="comments">
                                        <h5>There are 03 comments on this post</h5>

                                        <ul className="media-list">
                                            <li className="media">
                                                <div className="media-left">
                                                    <img
                                                        className="media-object"
                                                        src="images/avatar-1.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="media-body">
                                                    <h6 className="media-heading">
                                                        John Doe<span>says: </span>
                                                    </h6>
                                                    <span>March 26, 2015 at 1:57 pm</span>
                                                    <a href="#."> REPLY</a>
                                                    <p>
                                                        Phasellus pede arcu, dapibus eu, fermentum
                                                        et, dapibus sed, urna. Morbi interdum mollis
                                                        sapien. Sed ac risus. Phasellus lacinia,
                                                        magna a ullamcorper laoreet, lectus arcu
                                                        pulvinar risus, vitae facilisis libero dolor
                                                        a purus.
                                                    </p>
                                                </div>
                                            </li>

                                            <li className="media margin-l-80">
                                                <div className="media-left">
                                                    <img
                                                        className="media-object"
                                                        src="images/avatar.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="media-body">
                                                    <h6 className="media-heading">
                                                        John Doe <span> says:</span>
                                                    </h6>
                                                    <span>March 26, 2015 at 1:57 pm</span>
                                                    <a href="#."> REPLY </a>
                                                    <p>
                                                        Phasellus pede arcu, dapibus eu, fermentum
                                                        et, dapibus sed, urna. Morbi interdum mollis
                                                        sapien. Sed ac risus. Phasellus lacinia,
                                                        magna a ullamcorper laoreet, lectus arcu
                                                        pulvinar risus, vitae facilisis libero dolor
                                                        a purus.
                                                    </p>
                                                </div>
                                            </li>

                                            <li className="media">
                                                <div className="media-left">
                                                    <img
                                                        className="media-object"
                                                        src="images/avatar-1.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="media-body">
                                                    <h6 className="media-heading">
                                                        Jack Smith <span>says:</span>
                                                    </h6>
                                                    <span>March 26, 2015 at 1:57 pm</span>
                                                    <a href="#."> REPLY </a>
                                                    <p>
                                                        Phasellus pede arcu, dapibus eu, fermentum
                                                        et, dapibus sed, urna. Morbi interdum mollis
                                                        sapien. Sed ac risus. Phasellus lacinia,
                                                        magna a ullamcorper laoreet, lectus arcu
                                                        pulvinar risus, vitae facilisis libero dolor
                                                        a purus.
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                        <h5>leave a comment</h5>

                                        <form>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <ul className="row">
                                                        <li className="col-sm-4">
                                                            <label>
                                                                Name <span>*</span>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name="name"
                                                                    placeholder=""
                                                                />
                                                            </label>
                                                        </li>
                                                        <li className="col-sm-4">
                                                            <label>
                                                                Email <span>*</span>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name="name"
                                                                    placeholder=""
                                                                />
                                                            </label>
                                                        </li>
                                                        <li className="col-sm-4">
                                                            <label>
                                                                Website <span>*</span>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name="name"
                                                                    placeholder=""
                                                                />
                                                            </label>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-12">
                                                    <ul className="row">
                                                        <li className="col-sm-12">
                                                            <label>
                                                                Message <span>*</span>
                                                                <textarea className="form-control"></textarea>
                                                            </label>
                                                        </li>
                                                        <li className="col-sm-12">
                                                            <button type="submit" className="btn">
                                                                Post comment
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </form>
                                    </div> */}
                                </div>

                                {/* <div className="col-sm-3">
                                    <div className="side-bar">
                                        <div className="search">
                                            <h5>SEARCH</h5>
                                            <input type="search" placeholder="Search Here" />
                                            <button type="submit">
                                                <i className="fa fa-search"></i>
                                            </button>
                                        </div>

                                        <h5 className="margin-t-40">categories</h5>
                                        <ul className="cate">
                                            <li>
                                                <a href="#."> All </a>
                                            </li>
                                            <li>
                                                <a href="#."> Health </a>
                                            </li>
                                            <li>
                                                <a href="#."> Medical news </a>
                                            </li>
                                            <li>
                                                <a href="#."> Sport</a>
                                            </li>
                                            <li>
                                                <a href="#."> Yoga</a>
                                            </li>
                                            <li>
                                                <a href="#."> Pharma</a>
                                            </li>
                                            <li>
                                                <a href="#."> Uncategorized</a>
                                            </li>
                                        </ul>

                                        <div className="dapart depart-sec margin-t-40">
                                            <h5>departments</h5>
                                            <ul className="row">
                                                <li className="col-xs-4">
                                                    <a href="#." className="in-dert">
                                                        <img
                                                            className="img-responsive"
                                                            src="images/icon-1.png"
                                                            alt=""
                                                        />
                                                    </a>
                                                </li>
                                                <li className="col-xs-4">
                                                    <a href="#." className="in-dert">
                                                        <img
                                                            className="img-responsive"
                                                            src="images/icon-2.png"
                                                            alt=""
                                                        />
                                                    </a>
                                                </li>
                                                <li className="col-xs-4">
                                                    <a href="#." className="in-dert">
                                                        <img
                                                            className="img-responsive"
                                                            src="images/icon-3.png"
                                                            alt=""
                                                        />
                                                    </a>
                                                </li>
                                                <li className="col-xs-4">
                                                    <a href="#." className="in-dert">
                                                        <img
                                                            className="img-responsive"
                                                            src="images/icon-4.png"
                                                            alt=""
                                                        />
                                                    </a>
                                                </li>
                                                <li className="col-xs-4">
                                                    <a href="#." className="in-dert">
                                                        <img
                                                            className="img-responsive"
                                                            src="images/icon-5.png"
                                                            alt=""
                                                        />
                                                    </a>
                                                </li>
                                                <li className="col-xs-4">
                                                    <a href="#." className="in-dert">
                                                        <img
                                                            className="img-responsive"
                                                            src="images/icon-6.png"
                                                            alt=""
                                                        />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="add-call">
                                            <img
                                                className="img-responsive"
                                                src="images/add-img.jpg"
                                                alt=""
                                            />
                                            <div className="call">
                                                <h5>
                                                    <img src="images/phone-icon.png" alt="" />
                                                    0123-000-8899
                                                </h5>
                                                <p>Call us for book an appoitment!</p>
                                            </div>
                                        </div>

                                        <div className="appointment margin-t-40">
                                            <h5>Make an appointment</h5>
                                            <ul>
                                                <li>
                                                    <input type="text" placeholder="Full name *" />
                                                </li>
                                                <li>
                                                    <input type="text" placeholder="Email * " />
                                                </li>
                                                <li>
                                                    <select>
                                                        <option>Dental</option>
                                                        <option>Dental</option>
                                                        <option>Dental</option>
                                                    </select>
                                                </li>
                                                <li>
                                                    <input type="text" placeholder="Full name *" />
                                                </li>
                                                <li>
                                                    <textarea placeholder="Message"></textarea>
                                                </li>
                                                <li>
                                                    <button type="submit" className="btn btn-1">
                                                        Send request
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>

                {/* <Footer /> */}
            </div>
        </>
    );
};

export default ThemeMedicalSingle;
