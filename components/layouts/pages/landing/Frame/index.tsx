"use client";

import React, { FC, ReactNode, useEffect, useState } from "react";
import FrameLight from "@/assests/images/FrameLight.png";
import FrameDark from "@/assests/images/FrameDark.png";

const Frame: FC<{ children: ReactNode; font?: "LIGHT" }> = ({
    children,
    font,
}) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Mobile breakpoint at 768px
        };

        handleResize(); // Set initial state
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div
            className="frame"
            style={{
                height: "460px",
                display: "flex",
                position: "relative",
                overflow: "hidden",
            }}
        >
            <img
                src={isMobile ? FrameDark.src : FrameLight.src}
                alt="frame"
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
