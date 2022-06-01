import { Container, Grid, TextField, useMediaQuery } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Footer.module.scss";
const Footer = () => {
    const isMobile = useMediaQuery("(max-width:768px)");

    if (isMobile) {
        return (
            <div className={styles.footer}>
                <Container>
                    <Grid container>
                        <Grid item xs={isMobile ? 12 : 4} md={4}>
                            {/* <a href="/"> */}
                            {/* <img
                                alt="logo-header"
                                src="/images/logo-mobile.png"
                                onClick={() => {
                                    window.location.assign("/");
                                }}
                            /> */}
                            <Link href="/" className={styles.logo}>
                                <Image
                                    alt="logo"
                                    src="/images/logo.png"
                                    width="16"
                                    height="16"
                                />
                            </Link>
                            {/* </a> */}
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <div>
                                <Image
                                    alt="dmca"
                                    src="/images/footer_under_logo.png"
                                    className={styles.footer_under_logo}
                                    width={100}
                                    height={100}
                                />
                            </div>
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <div
                                style={{
                                    display: "flex",
                                    flex: 1,
                                    width: "100%",
                                    justifyContent: "center",
                                    alignItems: "flex-end",
                                }}
                            >
                                <div className={styles.socialContainerMobile}>
                                    <Link href="/about-us">
                                        <Image
                                            alt="twitter-icon"
                                            src="/images/twitter.png"
                                            className={styles.socialIconMobile}
                                        />
                                    </Link>
                                    <Link href="/contact">
                                        <Image
                                            alt="facebook-icon"
                                            src="/images/facebook.png"
                                            className={styles.socialIconMobile}
                                        />
                                    </Link>
                                    <Link href="/privacy">
                                        <Image
                                            alt="youtube-icon"
                                            src="/images/youtube.png"
                                            className={styles.socialIconMobile}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={4} md={4}>
                            <h3>Company</h3>
                            <Link href="/about-us">About Us</Link>
                            <Link href="/contact">Contact</Link>
                            <Link href="/privacy">Privacy</Link>
                        </Grid>
                    </Grid>
                    <div className={styles.footerSubscribeContainer}>
                        <div
                            style={{
                                display: "flex",
                                flex: 1,
                                width: "100%",
                                flexDirection: "column",
                            }}
                        >
                            <div className={styles.mailIconContainer}>
                                <div className={styles.sendEmailContainer}>
                                    <TextField
                                        className={
                                            styles.footerSentEmailTextField
                                        }
                                        size={"small"}
                                        placeholder={"Your Email Address"}
                                        variant="standard"
                                        style={{
                                            border: "1px solid ",
                                            borderTopColor: "transparent",
                                            borderLeftColor: "transparent",
                                            borderRightColor: "transparent",
                                            borderBottomColor:
                                                " rgba(255, 255, 255, 0.52)",
                                        }}
                                        InputProps={{ disableUnderline: true }}
                                        inputProps={{
                                            style: {
                                                color: "#FFFFFF",
                                            },
                                        }}
                                    />
                                    <div className={styles.footerSendButton}>
                                        Send
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }

    return (
        <div className={styles.footer}>
            <Container>
                <Grid container>
                    <Grid item md={4}>
                        {/* <a href="/"> */}
                        {/* <img
                            alt="logo-header"
                            src="/images/logo.png"
                            onClick={() => {
                                window.location.assign("/");
                            }}
                        /> */}
                        <Link href="/">
                            <Image
                                alt="mail-icon"
                                src="/images/logo.png"
                                width={16}
                                height={16}
                                className={styles.mailIcon}
                            />
                        </Link>
                        {/* </a> */}
                    </Grid>
                    <Grid item xs={isMobile ? 6 : 4} md={4}>
                        <h3>Company</h3>
                        <Link href="/about-us">About Us</Link>
                        <Link href="/contact">Contact</Link>
                        <Link href="/privacy">Privacy</Link>
                    </Grid>
                    <Grid item xs={isMobile ? 6 : 4} md={4}>
                        <h3>Social</h3>
                        <Link
                            href="https://www.facebook.com/Worksheet-Zone-103291858875415"
                            target="_blank"
                        >
                            Facebook
                        </Link>
                        <Link href="https://twitter.com/WorksheetZone">
                            Twitter
                        </Link>
                        <Link href="https://www.instagram.com/worksheetzone/">
                            Instagram
                        </Link>
                    </Grid>
                </Grid>
                <div className={styles.footerSubscribeContainer}>
                    <div
                        style={{
                            display: "flex",
                            flex: 1,
                            width: "100%",
                            flexDirection: "column",
                        }}
                    >
                        <div className={styles.mailIconContainer}>
                            <Image
                                alt="mail-icon"
                                src="/images/mail.png"
                                width="100"
                                height="100"
                                className={styles.mailIcon}
                            />
                            <Image
                                alt="subscribe-icon"
                                src="/images/subscribe.png"
                                width="100"
                                height="100"
                                objectFit="contain"
                                className={styles.footerSubscribeIcon}
                            />
                            <div className={styles.subscribeText}>
                                Be first to know about the latest update and
                                access free materials only for subscribers!
                            </div>
                            <div className={styles.sendEmailContainer}>
                                <TextField
                                    className={styles.footerSentEmailTextField}
                                    size={"small"}
                                    placeholder={"Your Email Address"}
                                    variant="standard"
                                    style={{
                                        border: "1px solid ",
                                        borderTopColor: "transparent",
                                        borderLeftColor: "transparent",
                                        borderRightColor: "transparent",
                                        borderBottomColor:
                                            " rgba(255, 255, 255, 0.52)",
                                    }}
                                    InputProps={{ disableUnderline: true }}
                                    inputProps={{
                                        style: {
                                            color: "#FFFFFF",
                                        },
                                    }}
                                />
                                <div className={styles.footerSendButton}>
                                    Send
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flex: 1,
                            width: "100%",
                            justifyContent: "flex-end",
                            alignItems: "flex-end",
                        }}
                    >
                        <div className={styles.socialContainer}>
                            <Link href="/about-us">
                                <Image
                                    alt="twitter-icon"
                                    src="/images/twitter.png"
                                    width="100"
                                    height="100"
                                    className={styles.socialIcon}
                                />
                            </Link>
                            <Link href="/contact">
                                <Image
                                    alt="facebook-icon"
                                    src="/images/facebook.png"
                                    width="100"
                                    height="100"
                                    className={styles.socialIcon}
                                />
                            </Link>
                            <Link href="/privacy">
                                <Image
                                    alt="youtube-icon"
                                    src="/images/youtube.png"
                                    width="100"
                                    height="100"
                                    className={styles.socialIcon}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;
