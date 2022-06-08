import Head from "next/head";
import Script from "next/script";
import React from "react";

const SEO = () => {
    return (
        <Head>
            <meta charset="utf-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <title>Medikal - Health Care &amp; Medical HTML5 Template</title>
            <meta
                name="keywords"
                content="HTML5,CSS3,HTML,Template,Multi-Purpose,M_Adnan,Corporate Theme,Medikal,Health Care,Medikal - Health Care & Medical HTML5 Template"
            />
            <meta
                name="description"
                content="Medikal - Health Care & Medical HTML5 Template"
            />
            <meta name="author" content="M_Adnan" />

            {/* <!-- FONTS ONLINE --> */}
            <link
                href="http://fonts.googleapis.com/css?family=Raleway:500,600,700,100,800,900,400,200,300"
                rel="stylesheet"
                type="text/css"
            />

            {/* <!--MAIN STYLE--> */}
            <link
                href="css/bootstrap.min.css"
                rel="stylesheet"
                type="text/css"
            />
            <link href="css/main.css" rel="stylesheet" type="text/css" />
            <link href="css/style.css" rel="stylesheet" type="text/css" />
            <link href="css/responsive.css" rel="stylesheet" type="text/css" />
            <link href="css/animate.css" rel="stylesheet" type="text/css" />
            <link
                href="css/font-awesome.min.css"
                rel="stylesheet"
                type="text/css"
            />
            <link
                href="css/ionicons.min.css"
                rel="stylesheet"
                type="text/css"
            />

            {/* <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries --> */}
            {/* <!-- WARNING: Respond.js doesn't work if you view the page via file:// --> */}
            {/* <!--[if lt IE 9]> */}
            <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
            <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
            <script src="js/jquery-1.11.0.min.js"></script>
            <Script src="js/bootstrap.min.js"></Script>
            <Script src="js/own-menu.js"></Script>
            <Script src="js/owl.carousel.min.js"></Script>
            <Script src="js/jquery.superslides.js"></Script>
            <Script src="js/masonry.pkgd.min.js"></Script>
            <Script src="js/jquery.stellar.min.js"></Script>
            <Script src="js/jquery-ui-1.10.3.custom.js"></Script>
            <Script src="js/jquery.magnific-popup.min.js"></Script>
            <Script src="js/jquery.isotope.min.js"></Script>
            <Script src="js/jquery.flexslider-min.js"></Script>
            <Script src="js/appointment.js"></Script>
            <Script src="js/jquery.downCount.js"></Script>
            <Script src="js/counter.js"></Script>
            <Script src="js/main.js"></Script>
            {/* <![endif]--> */}
        </Head>
    );
};

export default SEO;
