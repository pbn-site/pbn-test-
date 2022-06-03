import { Container, useMediaQuery } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import ImageComponent from "../common/Image";
import styles from "./Header.module.scss";

const Header = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");
    const srcLogo = isMobile ? "/images/logo-mobile.png" : "/images/logo.png";

    return (
        <Container className={styles.container}>
            <Link href="/">
                <ImageComponent src={srcLogo} alt={"logo"} />
            </Link>
        </Container>
    );
};
export default Header;
