import React from "react";
import { IPost } from "../../models/Post";
import ImageComponent from "../common/Image";

const PostContentRight = ({ post }: { post: IPost }) => {
    return (
        <li className="row">
            <div className="col-md-7 text-center">
                <div className="post-img">
                    {/* <ImageComponent src="images/blog-img-large-1.jpg" className="img-responsive" /> */}
                    <ImageComponent
                        src={!!post.image ? post.image : "images/blog-img-large-1.jpg"}
                        className="img-responsive"
                    />
                </div>
            </div>

            <div className="col-md-5">
                <div className="text-section text-center">
                    <a href={post.slug}>{post.title}</a>
                    <span>
                        {/* post by <strong>John Doe</strong> on */}
                        <strong>{post.date}</strong>
                    </span>
                    <hr />
                    <p dangerouslySetInnerHTML={{ __html: post.description ?? "" }} />
                    <a href={post.slug} className="btn btn-1">
                        View more
                    </a>
                </div>
            </div>
        </li>
    );
};

export default PostContentRight;
