import React, { useEffect, useState } from "react";
import { getFullPathAsset, replaceYoutubeLink } from "../../../utils";
import ImageComponent from "../../common/Image";
import styles from "./Content.module.scss";

interface Props {
    title: string;
    body: string;
    date: Date;
}

const Content: React.FC<Props> = ({ body, title, date }: Props) => {
    // const isMobile = useMediaQuery("(max-width:600px)");
    let formatBody = replaceYoutubeLink(body, false);
    const useRef = React.useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState("0");
    useEffect(() => {
        if (useRef.current) {
            setWidth(String(useRef.current.offsetWidth));
        }
    }, [useRef]);
    return (
        <div className={styles.content} ref={useRef}>
            <ImageComponent
                src={`/images/default.png`}
                alt={"image"}
                widthProps={width}
                heightProps="380"
            />
            {/* <img src={getFullPathAsset(`/images/default.png`)} alt="" /> */}
            <h1 className={styles.title}>{title}</h1>
            {/* <AuthorPost date={date}></AuthorPost> */}
            <div className={styles.body} dangerouslySetInnerHTML={{ __html: formatBody }} />
        </div>
    );
};

export default Content;
