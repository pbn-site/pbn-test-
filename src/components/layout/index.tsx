import React from "react";
import Helmet from "react-helmet";

import Header from "../header";
import Footer from "../footer";

interface Props {
    title: string;
    description?: string;
    socialImage?: string;
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children, title, description, socialImage = "" }: Props) => {
    // const { author, url } = useSiteMetadata();
    // const metaImage = socialImage || author.photo;
    // const metaImageUrl = url + metaImage;

    return (
        <div>
            <Helmet>
                <html lang="en" />
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta property="og:site_name" content={title} />
                {/* <meta property="og:image" content={metaImageUrl} /> */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                {/* <meta name="twitter:image" content={metaImageUrl} /> */}
                <link
                    href="https://fonts.googleapis.com/css?family=Varela Round"
                    rel="stylesheet"
                />
            </Helmet>
            {children}
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Layout;
