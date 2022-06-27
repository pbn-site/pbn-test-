import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";
import SEO from "../../theme-medical/seo";

import ImageComponent from "../common/Image";
import styles from "./Header.module.scss";

interface Props {
    title: string;
    description?: string;
    keywords?: string;
    usingFont?: boolean;
}

const Header = ({
    title,
    description,
    keywords = "",
    usingFont = false,
}: Props) => {
    const isMobile = useMediaQuery("(max-width: 768px)");
    const srcLogo = isMobile
        ? "/images/logo-mobile.png"
        : "images/logo-main.webp";

    return (
        <>
            <SEO
                title={title}
                description={description}
                keywords={""}
                usingFont={usingFont}
            />
            <Container className={styles.container}>
                <a href="/">
                    <ImageComponent src={srcLogo} alt={"logo"} />
                </a>
            </Container>
        </>
    );
};
export default Header;
