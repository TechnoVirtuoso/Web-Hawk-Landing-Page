import { StaticImageData } from "next/image";
import React, { FC } from "react";
import TileBg from "@/assests/images/TileBg.png";
import "./index.scss";

type Props = {
    Title: string | FC;
    description: string;
    button?: {
        type: "simple_dark_btn" | "simple_white_btn";
        content: string;
        onClick?: (e: any) => any;
    };
    isFlipped?: boolean;
    image: StaticImageData | FC;
    sub_title?: string;
    font?: "LIGHT";
};
const ImageCta: FC<Props> = ({
    button,
    description,
    image,
    isFlipped = false,
    Title,
    sub_title,
    font,
}) => {
    const IMAGE = image;
    return (
        <div className="ImageCta">
            <div className={`ImageCta-wrapper ${isFlipped ? "revert" : ""}`}>
                <div className="content">
                    {sub_title && <div className="sub_title">{sub_title}</div>}
                    <div className={`title ${font}`}>
                        {typeof Title === "string" ? Title : <Title />}
                    </div>
                    <div className="description">{description}</div>
                    {button && (
                        <button className={button.type}>
                            {button.content}
                        </button>
                    )}
                </div>
                <div className="image">
                    {typeof IMAGE == "object" ? (
                        <img
                            src={IMAGE.src}
                            width={610}
                            height={460}
                            alt="content-image"
                        />
                    ) : (
                        <IMAGE />
                    )}
                </div>
            </div>
        </div>
    );
};

export default ImageCta;
