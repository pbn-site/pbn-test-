import { Container, useMediaQuery } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getFullPathAsset } from "../../utils";
import styles from "./Header.module.scss";

const Header = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");
    const srcLogo = isMobile ? "/images/logo-mobile.png" : "/images/logo.png";
    return (
        <Container className={styles.container}>
            {/* <img
                alt="logo-header"
                src="/images/web_icon.svg"
                onClick={() => {
                    window.location.assign("/");
                }} 
            />
            */}
            <Link href="/">
                <Image
                    alt="mail-icon"
                    src={getFullPathAsset(srcLogo)}
                    width="16"
                    height="16"
                />
            </Link>
        </Container>
    );
};
export default Header;
