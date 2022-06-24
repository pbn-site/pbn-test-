import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";

import ImageComponent from "../common/Image";
import styles from "./Header.module.scss";

const Header = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");
    const srcLogo = isMobile ? "/images/logo-mobile.png" : "/images/logo.png";

    return (
        <Container className={styles.container}>
            <a href="/">
                <ImageComponent src={srcLogo} alt={"logo"} />
            </a>
        </Container>
    );
};
export default Header;
