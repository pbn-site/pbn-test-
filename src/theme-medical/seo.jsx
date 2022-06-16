import Head from "next/head";
import Script from "next/script";
import React from "react";

const SEO = ({ title, description, keywords }) => {
    return (
        <Head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>{title}</title>
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            {/* <link href="css/main.css" rel="stylesheet" type="text/css" />
             */}

            <link
                href="css/style.css"
                rel="stylesheet"
                type="text/css"
                // media="print"
                // onload="this.media='all'"
            />

            <link
                href="css/bootstrap.min.css"
                rel="stylesheet"
                type="text/css"
                // media="print"
                // onload="this.media='all'"
            />
            <link
                href="css/font-awesome.min.css"
                rel="stylesheet"
                type="text/css"
                media="print"
                onload="this.media='all'"
            />
            {/* <link href="css/ionicons.min.css" rel="stylesheet" type="text/css" /> */}
            {/* <link
                href="http://fonts.googleapis.com/css?family=Raleway:500,600,700,100,800,900,400,200,300"
                rel="stylesheet"
                type="text/css"
            /> */}
            {/* <![endif]--> */}
        </Head>
    );
};

export default SEO;
