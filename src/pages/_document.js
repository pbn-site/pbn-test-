// import { ServerStyleSheets } from "@material-ui/core/styles";
import Document, { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";
import React from "react";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="UTF-8" />
                </Head>
                <body id="canvas">
                    <Main />
                    <NextScript />
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
