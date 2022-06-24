import { Button, TextField } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";
import ImageComponent from "../../components/common/Image";
import { getFullPathAsset } from "../../utils";
import styles from "./Footer.module.scss";
const Footer = () => {
    return (
        <footer className={styles.background}>
            <div className={`container ${styles.container}`}>
                <div className={`row ${styles.row_1}`}>
                    <div className="col-md-5">
                        <div className={`logo ${styles.logo_footer}`}>
                            <a href="/">
                                <ImageComponent
                                    src={getFullPathAsset(
                                        "images/logo-main.png"
                                    )}
                                />
                            </a>
                        </div>
                        <p className={styles.text_under_logo}>
                            Lorem ipsum dolor sit amet consectetur
                        </p>
                    </div>
                </div>
            </div>
        </footer>
        // <footer className={styles.background}>
        //     <div className={`container ${styles.container}`}>
        //         <div className={`row ${styles.row_1}`}>
        //             <div className="col-md-5">
        //                 <div className={`logo ${styles.logo_footer}`}>
        //                     <a href='/'>
        //                         <ImageComponent
        //                         src={getFullPathAsset('images/logo-main.png')}
        //                         />
        //                     </a>
        //                 </div>
        //                 <ImageComponent
        //                     src={getFullPathAsset('images/cert.png')}
        //                 />
        //             </div>
        //             <div className="col-md-3">
        //                 <h4 className={styles.header_link}>Company</h4>
        //                 <ul>
        //                     <li>
        //                         <h3>
        //                             <a href="#."> About</a>
        //                         </h3>
        //                     </li>
        //                     <li>
        //                         <h3>
        //                             <a href="#."> Contact</a>
        //                         </h3>
        //                     </li>
        //                     <li>
        //                         <h3>
        //                             <a href="#."> Privacy</a>
        //                         </h3>
        //                     </li>
        //                     <li>
        //                         <h3>
        //                             <a href="#."> Support</a>
        //                         </h3>
        //                     </li>
        //                 </ul>
        //             </div>
        //             <div className="col-md-3">
        //                 <h4 className={styles.header_link}>Company</h4>
        //                 <ul>
        //                     <li>
        //                         <h3>
        //                             <a href="#."> About</a>
        //                         </h3>
        //                     </li>
        //                     <li>
        //                         <h3>
        //                             <a href="#."> Contact</a>
        //                         </h3>
        //                     </li>
        //                     <li>
        //                         <h3>
        //                             <a href="#."> Privacy</a>
        //                         </h3>
        //                     </li>
        //                     <li>
        //                         <h3>
        //                             <a href="#."> Support</a>
        //                         </h3>
        //                     </li>
        //                 </ul>
        //             </div>
        //             {/* <div className="col-md-1">

        //             </div> */}
        //         </div>

        //         <div className={`row ${styles.row_2}`}>
        //             <div className="col-md-10">
        //                 <ImageComponent
        //                     src={getFullPathAsset('images/mailbox.png')}
        //                 />
        //                 <div className={styles.subscribe_title}>
        //                     <ImageComponent
        //                         src={getFullPathAsset('images/subscribe.png')}
        //                     />
        //                     <p>Be first to know about the latest update and access free materials only for subscribers!</p>
        //                 </div>
        //                 <div className={styles.subscribe_input}>
        //                     <div className={styles.input_field}>
        //                         <TextField
        //                             fullWidth
        //                             className={styles.input}
        //                             label="Your Email Address"
        //                             variant="standard"
        //                             InputLabelProps={{
        //                                 className: styles.input_label
        //                             }}
        //                         />
        //                         <TextField
        //                             fullWidth
        //                             className={styles.input}
        //                             label="Type your name"
        //                             variant="standard"
        //                             InputLabelProps={{
        //                                 className: styles.input_label
        //                             }}
        //                         />
        //                     </div>
        //                     <div className={styles.btn_filed}>
        //                         <Button
        //                             size="large"
        //                             variant="contained"
        //                             className={styles.btn}
        //                         >Sent</Button>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className={`col-md-2 ${styles.group_icons}`}>
        //                 <a className={styles.icon} href='/'>
        //                     <ImageComponent
        //                         src={getFullPathAsset('images/twitter.png')}
        //                     />
        //                 </a>
        //                 <a className={styles.icon} href='/'>
        //                     <ImageComponent
        //                         src={getFullPathAsset('images/facebook.png')}
        //                     />
        //                 </a>
        //                 <a className={styles.icon} href='/'>
        //                     <ImageComponent
        //                         src={getFullPathAsset('images/youtube.png')}
        //                     />
        //                 </a>
        //             </div>
        //         </div>
        //     </div>
        // </footer>
    );
};

export default Footer;
