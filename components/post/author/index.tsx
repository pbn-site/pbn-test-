import React from "react";
import { getDayOfWeek, getMothOfYears } from "../../../utils";
import styles from "./Author.module.scss";

const AuthorPost = ({ author, date }: { date: Date; author: any }) => {
    return (
        <div className={styles.author}>
            <div className={styles.name}>Written by {author.name}</div>
            <div className={styles.date}>
                {getDayOfWeek(date)} {getMothOfYears(date)} {date.getDate()}
            </div>
        </div>
    );
};

export default AuthorPost;
