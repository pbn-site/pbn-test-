import useMediaQuery from "@mui/material/useMediaQuery";
import React, { useState } from "react";
import ImageComponent from "../../components/common/Image";
import SEO from "../../theme-medical/seo";
import { getFullPathAsset } from "../../utils";
import styles from "./Header.module.scss";

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
    const isMobile = useMediaQuery("(max-width: 990px)");
    const srcLogo = isMobile ? "/images/logo-mobile.png" : "/images/logo.png";

    return (
        <>
            <SEO title={title} description={description} keywords={""} />
            <header>
                <div className="container">
                    <div className="logo">
                        <a href="/">
                            <ImageComponent
                                src={getFullPathAsset("images/logo-main.webp")}
                            />
                        </a>
                    </div>

                    <nav className="webimenu">
                        <div
                            className={`menu-toggle ${styles.menu_icon}`}
                            onClick={() => {
                                isMobile && setOpen(!open);
                            }}
                        >
                            <svg
                                width="30"
                                height="30"
                                viewBox="0 0 24 24"
                                fill="#ffffff"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill="#fff"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M3 8C2.45 8 2 7.55 2 7C2 6.45 2.45 6 3 6H21C21.55 6 22 6.45 22 7C22 7.55 21.55 8 21 8H3ZM2 12C2 12.55 2.45 13 3 13H21C21.55 13 22 12.55 22 12C22 11.45 21.55 11 21 11H3C2.45 11 2 11.45 2 12ZM2 17C2 17.55 2.45 18 3 18H21C21.55 18 22 17.55 22 17C22 16.45 21.55 16 21 16H3C2.45 16 2 16.45 2 17Z"
                                    fillOpacity={0.54}
                                />
                            </svg>
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
                  <a href='/contact'>Contact</a>
                </li> */}
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};
export default Header;
