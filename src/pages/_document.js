// import { ServerStyleSheets } from "@material-ui/core/styles";
import Document, { Head, Html, Main } from "next/document";
import Script from "next/script";
import React from "react";
import DeferNextScript from "../components/DeferNextScript";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="UTF-8" />
                </Head>
                <body id="canvas">
                    <Main />
                    <DeferNextScript />
                    <Script
                        type=""
                        src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"
                    />
                    <Script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js" />
                    <Script src="js/jquery-1.11.0.min.js" />
                    <Script src="js/bootstrap.min.js" />
                    {/* <Script src="js/jquery.superslides.js" /> */}
                    {/* <Script src="js/masonry.pkgd.min.js" /> */}
                    {/* <Script src="js/jquery.stellar.min.js" /> */}
                    {/* <Script src="js/jquery-ui-1.10.3.custom.js" /> */}
                    {/* <Script src="js/jquery.magnific-popup.min.js" /> */}
                    {/* <Script src="js/jquery.isotope.min.js" /> */}
                    {/* <Script src="js/jquery.flexslider-min.js" /> */}
                    {/* <Script src="js/jquery.downCount.js" /> */}
                    {/* <Script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
                    /> */}
                </body>
            </Html>
        );
    }
}
// MyDocument.getInitialProps = async (ctx) => {
//     const sheets = new ServerStyleSheets();
//     const originalRenderPage = ctx.renderPage;

//     ctx.renderPage = () =>
//         originalRenderPage({
//             enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
//         });

//     const initialProps = await Document.getInitialProps(ctx);

//     return {
//         ...initialProps,
//         styles: [
//             ...React.Children.toArray(initialProps.styles),
//             sheets.getStyleElement(),
//         ],
//     };
// };
export default MyDocument;
