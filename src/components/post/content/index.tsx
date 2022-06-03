import Image from "next/image";
import React from "react";
import { replaceYoutubeLink } from "../../../utils";

import styles from "./Content.module.scss";

interface Props {
    title: string;
    body: string;
    date: Date;
}

const Content: React.FC<Props> = ({ body, title, date }: Props) => {
    // const isMobile = useMediaQuery("(max-width:600px)");
    let formatBody = replaceYoutubeLink(body, false);
    return (
        <div className={styles.content}>
            <Image
                alt="image"
                src="/images/default.png"
                className={styles.image}
                width={100}
                height={100}
            />
            <h1 className={styles.title}>{title}</h1>
            {/* <AuthorPost date={date}></AuthorPost> */}
            <div
                className={styles.body}
                dangerouslySetInnerHTML={{ __html: formatBody }}
            />
        </div>
    );
};

export default Content;
