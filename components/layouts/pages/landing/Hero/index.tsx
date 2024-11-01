import React, { FC } from "react";
import "./index.scss";
import Image, { StaticImageData } from "next/image";
import DashboardImage from "@/assests/images/HeroDashboard.png";
import Dashboard2 from "@/assests/images/Dashboard2.png";
import MOBILE_Dashboard2 from "@/assests/images/HERO_MOBILE_DASHBOARD.png";

type Props =
    | {
          type: "IMAGE";
          Background: StaticImageData;
      }
    | {
          type: "VIDEO";
          Background: string;
      };
const Hero: FC<Props> = ({ Background, type }) => {
    return (
        <div className="Landing-Hero" id="FEATURES">
            <div
                className="bg-wrapper"
                style={
                    type === "IMAGE"
                        ? { backgroundImage: `url(${Background.src})` }
                        : {}
                }
            >
                <div className="Landing-Hero-wrapper">
                    <div className="content">
                        <div className="left">
                            <div className="title">
                                Turn Your
                                <span className="bld"> Website Traffic </span>
                                into Leads
                            </div>
                            <div className="description">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s,
                            </div>
                            <div className="actions">
                                <button className="one simple_white_btn">
                                    Get Started
                                </button>
                                <button className="two simple_outline_btn">
                                    Book a Demo
                                </button>
                            </div>
                        </div>
                        <div className="right">
                            {type == "IMAGE" && (
                                <>
                                    <img
                                        className="Landing-Hero-dashboard-bg"
                                        src={DashboardImage.src}
                                        style={{
                                            position: "absolute",
                                        }}
                                        alt=""
                                    />
                                    <img
                                        className="Landing-Hero-dashboard-bg-mobile"
                                        src={MOBILE_Dashboard2.src}
                                        alt=""
                                    />
                                </>
                            )}
                            {type === "VIDEO" && (
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    className="Landing-Hero-dashboard-bg-video"
                                    style={{
                                        position: "absolute",
                                    }}
                                >
                                    <source
                                        src="/videos/WebhawkExplainer.mp4"
                                        type="video/mp4"
                                    />
                                    Your browser does not support the video tag.
                                </video>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
