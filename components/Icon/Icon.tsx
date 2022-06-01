import React from "react";

import styles from "./Icon.module.scss";

interface Props {
    name: any;
    icon: {
        viewBox?: string;
        path?: string;
    };
}

const Icon: React.FC<Props> = ({ name, icon }: Props) => (
    <svg className={styles.icon} viewBox={icon.viewBox}>
        <title>{name}</title>
        <path d={icon.path} />
    </svg>
);

export default Icon;
