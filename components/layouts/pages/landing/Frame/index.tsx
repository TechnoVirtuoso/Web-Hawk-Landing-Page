import React, { FC, ReactNode } from "react";
import FrameLight from "@/assests/images/FrameLight.png";
import FrameDark from "@/assests/images/FrameDark.png";

const Frame: FC<{ children: ReactNode; font?: "LIGHT" }> = ({
    children,
    font,
}) => {
    return (
        <div
            className="frame"
            style={{
                height: "460px",
                display: "flex",
                position: "relative",
            }}
        >
            <img
                src={font ? FrameLight.src : FrameDark.src}
                alt=""
                style={{
                    position: "absolute",
                    objectFit: "fill",
                }}
            />
            {children}
        </div>
    );
};

export default Frame;
