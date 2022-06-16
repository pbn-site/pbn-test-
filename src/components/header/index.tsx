import useMediaQuery from "@mui/material/useMediaQuery";
import React, { useState } from "react";
import SEO from "../../theme-medical/seo";
import { getFullPathAsset } from "../../utils";
import ImageComponent from "../common/Image";

const Header = ({
    title,
    description,
    keywords,
}: {
    title: string;
    description: string;
    keywords: string;
}) => {
    const [open, setOpen] = useState(false);
    const isMobile = useMediaQuery("(max-width: 768px)");
    const srcLogo = isMobile ? "/images/logo-mobile.png" : "/images/logo.png";

    return (
        <>
            <SEO title={title} description={description} keywords={""} />
            <header>
                <div className="container">
                    <div className="logo">
                        <a href="/">
                            <ImageComponent src={getFullPathAsset("images/logo.png")} />
                        </a>
                    </div>

                    <nav className="webimenu">
                        <div
                            className="menu-toggle"
                            onClick={() => {
                                isMobile && setOpen(!open);
                            }}
                        >
                            <i className="fa fa-bars"> </i>
                        </div>
                        <ul
                            className="ownmenu"
                            style={{
                                display: open ? "block" : "none",
                            }}
                        >
                            <li className="active">
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/about-us">About us </a>
                            </li>

                            {/* <li>
                                <a href="/contact">Contact</a>
                            </li> */}
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};
export default Header;
