import Image from "next/image";
import React, { useState } from "react";
import { getFullPathAsset } from "../../utils";

const ImageComponent = ({
    src,
    alt,
    className,
    heightProps,
    widthProps,
}: {
    src: string;
    alt?: string;
    className?: string;
    heightProps?: string;
    widthProps?: string;
}) => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    return (
        <Image
            className={className ?? " "}
            alt={alt ?? "image"}
            src={src}
            onLoadingComplete={(e) => {
                setWidth(e.naturalWidth);
                setHeight(e.naturalHeight);
            }}
            loader={() => src}
            width={widthProps ?? width}
            height={heightProps ?? height}
            objectFit="cover"
            style={{
                width: "100%",
                height: "100%",
            }}
        />
    );
};

export default ImageComponent;
