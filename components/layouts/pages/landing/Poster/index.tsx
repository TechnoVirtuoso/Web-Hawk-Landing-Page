import React from "react";

import TileBg from "@/assests/images/TileBg.png";
import "./index.scss";

const Poster = () => {
    return (
        <div
            className="Landing-Poster"
            style={
                {
                    // backgroundImage: `url(${TileBg.src})`,
                }
            }
        >
            <div className="wrapper">
                <video autoPlay muted loop>
                    <source
                        src="/videos/WebhawkExplainer.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

export default Poster;
