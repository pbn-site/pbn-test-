import { Container, Grid, TextField, useMediaQuery } from "@mui/material";
import Link from "next/link";
import React from "react";
import { getFullPathAsset } from "../../utils";
import { isWebWorksheet } from "../../utils/web";
import FacebookIcon from "../common/icon/facebook";
import TwittersIcon from "../common/icon/twitters";
import YoutubeIcon from "../common/icon/youtube";
import ImageComponent from "../common/Image";

import styles from "./Footer.module.scss";
const Footer = () => {
    const isMobile = useMediaQuery("(max-width:768px)");
    let srcLogo = isWebWorksheet() ? "/images3/logo.png" : "/images/logo.png";
    if (isMobile) {
        return (
            <div className={styles.footer}>
                <Container>
                    <Grid container>
                        <Grid item xs={12} md={4}>
                            <a className={styles.footerLogo} href="/">
                                <ImageComponent src={getFullPathAsset(srcLogo)} alt={"logo"} className={styles.logo} />
                            </a>
                            {/* </a> */}
                        </Grid>
                        <Grid
                            item
                            xs={6}
                            md={4}
                            style={{
                                paddingBottom: "40px",
                            }}
                        >
                            <div>
                                <ImageComponent src={getFullPathAsset("/images3/footer_under_logo.png")} alt={"logo"} />
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
                                    <Link href="https://twitter.com/WorksheetZone">
                                        <TwittersIcon />
                                    </Link>
                                    <Link href="https://www.facebook.com/Worksheet-Zone-103291858875415">
                                        <FacebookIcon />
                                    </Link>
                                    {/* <Link href="#">
                                        <YoutubeIcon />
                                    </Link> */}
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
                                        className={styles.footerSentEmailTextField}
                                        size={"small"}
                                        placeholder={"Your Email Address"}
                                        variant="standard"
                                        style={{
                                            border: "1px solid ",
                                            borderTopColor: "transparent",
                                            borderLeftColor: "transparent",
                                            borderRightColor: "transparent",
                                            borderBottomColor: " rgba(255, 255, 255, 0.52)",
                                        }}
                                        InputProps={{ disableUnderline: true }}
                                        inputProps={{
                                            style: {
                                                color: "#FFFFFF",
                                            },
                                        }}
                                    />
                                    <div className={styles.footerSendButton}>Send</div>
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
                        <a href="/">
                            <ImageComponent src={getFullPathAsset(srcLogo)} alt={"logo"} />
                        </a>
                    </Grid>
                    <Grid item xs={isMobile ? 6 : 4} md={4}>
                        <h3>Company</h3>
                        <Link href="/about-us">About Us</Link>
                        <Link href="/contact">Contact</Link>
                        <Link href="/privacy">Privacy</Link>
                    </Grid>
                    <Grid item xs={isMobile ? 6 : 4} md={4}>
                        <h3>Social</h3>
                        <Link href="https://www.facebook.com/Worksheet-Zone-103291858875415" target="_blank">
                            Facebook
                        </Link>
                        <Link href="https://twitter.com/WorksheetZone">Twitter</Link>
                        <Link href="https://www.instagram.com/worksheetzone/">Instagram</Link>
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
                            <ImageComponent src={`/images/mail.png`} alt={"mail-icon"} />

                            <div className={styles.subscribeText}>
                                <p className={styles.subscribeTextTitle}>SUBSCRIBE</p>
                                <p className={styles.subscribeTextContent}>
                                    Be first to know about the latest update and access free materials only for
                                    subscribers!
                                </p>
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
                                        borderBottomColor: " rgba(255, 255, 255, 0.52)",
                                    }}
                                    InputProps={{ disableUnderline: true }}
                                    inputProps={{
                                        style: {
                                            color: "#FFFFFF",
                                        },
                                    }}
                                />
                                <div className={styles.footerSendButton}>Send</div>
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
                                <ImageComponent src={`/images/twitter.png`} alt={"icon twitters"} />
                            </Link>
                            <Link href="/contact">
                                <ImageComponent src={`/images/facebook.png`} alt={"icon facebook"} />
                            </Link>
                            <Link href="/privacy">
                                <ImageComponent src={`/images/youtube.png`} alt={"icon youtube"} />
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;
