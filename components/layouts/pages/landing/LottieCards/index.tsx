import React from "react";
import "./index.scss";
import Lottie from "lottie-react";
import Frame from "../Frame";
import script_gif from "@/assests/lotties/script.json";
import timeline_gif from "@/assests/lotties/timeline.json";
import popup_gif from "@/assests/lotties/popup.json";

const LottieCards = () => {
    return (
        <div className="LottieCards">
            <div className="LottieCards-wrapper">
                <div className="card">
                    <Frame font="LIGHT">
                        <Lottie
                            width="100%"
                            className="object-cover object-center animate-item"
                            animationData={script_gif}
                            loop={true}
                        />
                    </Frame>
                    <div className="content">
                        <div className="title">Put Our Script to Work</div>
                        <div className="description">
                            We provide you with a simple script to embed on your
                            website. This script acts like a digital 'hawk,'
                            scanning your site's visitors in real-time. The
                            moment someone lands on your page, Webhawk.ai
                            gathers key insights about who they are and what
                            they're interested in.
                        </div>
                        <button className="simple_dark_btn">Get Started</button>
                    </div>
                </div>
                <div className="card">
                    <Frame font="LIGHT">
                        <Lottie
                            width="100%"
                            className="object-cover object-center animate-item"
                            animationData={timeline_gif}
                            loop={true}
                        />
                    </Frame>
                    <div className="content">
                        <div className="title">Get the Full Picture</div>
                        <div className="description">
                            As visitors browse your site, Webhawk.ai captures
                            valuable information, including names and contact
                            details, building a comprehensive profile of your
                            hottest prospects.
                        </div>
                        <button className="simple_dark_btn">Get Started</button>
                    </div>
                </div>
                <div className="card">
                    <Frame font="LIGHT">
                        <Lottie
                            width="100%"
                            className="object-cover object-center animate-item"
                            animationData={popup_gif}
                            loop={true}
                        />
                    </Frame>
                    <div className="content">
                        <div className="title">Turn Insights Into Action</div>
                        <div className="description">
                            With detailed visitor profiles at your fingertips,
                            it’s time to take action. Use these insights for
                            targeted marketing campaigns, personalized outreach,
                            or direct engagement. Webhawk.ai empowers you to
                            connect with the right leads, at the right time.
                        </div>
                        <button className="simple_dark_btn">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LottieCards;
