import { StaticImageData } from "next/image";
import React, { FC } from "react";
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
    border?: "SIDE" | "BOTTOM";
    font?: "LIGHT";
};
const LottieCta: FC<Props> = ({
    button,
    description,
    image,
    isFlipped = false,
    Title,
    sub_title,
    border = "SIDE",
    font,
}) => {
    const IMAGE = image;
    return (
        <div className={`LottieCta ${border}`}>
            <div className={`LottieCta-wrapper ${isFlipped ? "revert" : ""}`}>
                <div className="content">
                    {sub_title && <div className={`sub_title ${font}`}>{sub_title}</div>}
                    <div className={`title ${font}`}>
                        {typeof Title === "string" ? Title : <Title />}
                    </div>
                    <div className={`description ${font}`}>{description}</div>
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

export default LottieCta;
