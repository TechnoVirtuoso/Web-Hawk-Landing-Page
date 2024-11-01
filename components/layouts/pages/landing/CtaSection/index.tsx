import React from "react";

import LIGHT_GRID from "@/assests/images/LIGHT_GRID.png";
import DarkBg from "@/assests/images/DarkBg.png";
import "./index.scss";

const CtaSection = () => {
    return (
        <div className="Landing-CtaSection">
            <div
                className="Landing-CtaSection-wrapper"
                style={{
                    backgroundImage: `url(${DarkBg.src})`,
                }}
            >
                <img src={LIGHT_GRID.src} alt="" className="grid" />
                <div className="title">Start with Webhawk.ai today!</div>
                <div className="description">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard
                </div>
                <button className="simple_white_btn">Get Started</button>
            </div>
        </div>
    );
};

export default CtaSection;
