import React, { FC } from "react";
import LightPurpleBg from "@/assests/images/LightPurpleBg.png";
import Dashboard2 from "@/assests/images/Dashboard2.png";

import WHITE_GRID from "@/assests/images/WHITE_GRID.png";
import "./index.scss";

type Props = {
    Title: string | FC;
    description: string;
    sub_title: string;
    font?: "LIGHT";
};
const ModernImageCta: FC<Props> = ({ Title, description, sub_title, font }) => {
    return (
        <div className={`ModernImageCta ${font}`}>
            <div
                className={`ModernImageCta-wrapper ${font}`}
                style={{
                    backgroundImage: `url(${LightPurpleBg.src})`,
                }}
            >
                <img src={WHITE_GRID.src} alt="" className="grid" />
                <div className="content">
                    <div className="sub_title">{sub_title}</div>
                    <div className={`title ${font}`}>
                        {typeof Title === "string" ? Title : <Title />}
                    </div>
                    <div className="description">{description}</div>
                </div>
                <div className="right">
                    <img className="dashboard" src={Dashboard2.src} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ModernImageCta;
