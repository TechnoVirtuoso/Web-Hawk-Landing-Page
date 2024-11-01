"use client";
import Header from "@/components/layouts/pages/landing/Header";
import Hero from "@/components/layouts/pages/landing/Hero";
import Spacer from "@/components/layouts/pages/landing/Spacer";
import Icons from "@/components/layouts/pages/landing/Icons";
import React, { useEffect, useState } from "react";
import ImageCta from "@/components/layouts/pages/landing/ImageCta";
import Image2 from "@/assests/images/Image2.png";
import Pricing from "@/components/layouts/pages/landing/Pricing";
import HeroBg2 from "@/assests/images/HeroBg.png";
import Tiles from "@/assests/images/Tiles.png";
import HOR_GRID from "@/assests/images/HOR_GRID.png";
import ModernImageCta from "@/components/layouts/pages/landing/ModerImageCta";
import CtaSection from "@/components/layouts/pages/landing/CtaSection";
import Footer from "@/components/layouts/pages/landing/Footer";

import script_gif from "@/assests/lotties/script.json";
import timeline_gif from "@/assests/lotties/timeline.json";
import popup_gif from "@/assests/lotties/popup.json";
import Lottie from "lottie-react";
import Frame from "@/components/layouts/pages/landing/Frame";
import LottieCta from "@/components/layouts/pages/landing/LottieCta";

const page = () => {
    return (
        <div>
            <Header />
            <Hero type="IMAGE" Background={HeroBg2} />
            <div
                className="tiles-wrapper"
                style={{
                    backgroundPosition: "center 100%",
                    backgroundRepeat: "repeat-y",
                }}
            >
                <Spacer paddingTop={80} breakpoints={{ 700: 30 }} />
                <Icons />
                <Spacer paddingTop={80} breakpoints={{ 700: 50 }} />
                <div id="PRODUCT"></div>
                <div className="GLOBAL_TITLE">
                    How it <span className="mod">Works</span>
                </div>
                <Spacer paddingTop={70} breakpoints={{ 700: 30 }} />
                <LottieCta
                    Title={() => (
                        <>
                            <span>Put</span>
                            <span className="mod"> Our Script to </span>
                            <span>Work</span>
                        </>
                    )}
                    border="SIDE"
                    button={{
                        content: "Get Started",
                        type: "simple_dark_btn",
                    }}
                    description="We provide you with a simple script to embed on your website. This script acts like a digital 'hawk,' scanning your site's visitors in real-time. The moment someone lands on your page, Webhawk.ai gathers key insights about who they are and what they're interested in."
                    image={() => (
                        <Frame font="LIGHT">
                            <Lottie
                                width="100%"
                                className="object-cover object-center animate-item"
                                animationData={script_gif}
                                loop={true}
                            />
                        </Frame>
                    )}
                />
                <Spacer paddingTop={150} breakpoints={{ 700: 48 }} />
                <LottieCta
                    Title={() => (
                        <>
                            <span>Get</span>
                            <span className="mod"> the Full Picture </span>
                        </>
                    )}
                    button={{
                        content: "Get Started",
                        type: "simple_white_btn",
                    }}
                    description="As visitors browse your site, Webhawk.ai captures valuable information, including names and contact details, building a comprehensive profile of your hottest prospects."
                    image={() => (
                        <Frame font="LIGHT">
                            <Lottie
                                width="100%"
                                className="object-cover object-center animate-item"
                                animationData={timeline_gif}
                                loop={true}
                            />
                        </Frame>
                    )}
                    isFlipped
                />
                <Spacer paddingTop={150} breakpoints={{ 700: 48 }} />
                <LottieCta
                    Title={() => (
                        <>
                            <span>Turn</span>
                            <span className="mod"> Insights Into </span>
                            <span>Action</span>
                        </>
                    )}
                    button={{
                        content: "Get Started",
                        type: "simple_dark_btn",
                    }}
                    description="With detailed visitor profiles at your fingertips, it’s time to take action. Use these insights for targeted marketing campaigns, personalized outreach, or direct engagement. Webhawk.ai empowers you to connect with the right leads, at the right time."
                    image={() => (
                        <Frame font="LIGHT">
                            <Lottie
                                // width="100%"
                                style={{
                                    flex: 1,
                                }}
                                className="object-cover object-center animate-item"
                                animationData={popup_gif}
                                loop={true}
                            />
                        </Frame>
                    )}
                />
                <Spacer paddingTop={150} breakpoints={{ 700: 60 }} />
                <Pricing
                    Title={() => (
                        <>
                            <span>Choose</span>
                            <span className="mod"> the Plan That </span>
                            <span>Fits Your </span>
                            <span className="mod"> Business </span>
                        </>
                    )}
                    sub_title="Flexible pricing options for businesses of all sizes. Get started with the plan that works for you."
                    bg="LIGHT"
                />
                <Spacer paddingTop={100} breakpoints={{ 700: 50 }} />
                <ImageCta
                    Title={() => (
                        <>
                            <span>Transform your</span>
                            <span className="mod"> website traffic into </span>
                            <span>actionable leads</span>
                        </>
                    )}
                    description="Discover the key benefits of Webhawk.ai and how it can boost your conversions."
                    image={Image2}
                    sub_title="Why Webhawk.ai?"
                />
                <Spacer paddingTop={100} breakpoints={{ 700: 60 }} />
                <ModernImageCta
                    Title={() => (
                        <>
                            <span>A live feed of </span>
                            <span className="mod">
                                visitor data helps you understand
                            </span>
                            <span> the potential.</span>
                        </>
                    )}
                    description="Here's an example of what you could be seeing in real-time!"
                    sub_title="See Webhawk.ai in Action"
                />
            </div>
            <Spacer paddingTop={100} breakpoints={{ 700: 50 }} />
            <CtaSection />
            <Footer />
            <Spacer paddingTop={50} />
        </div>
    );
};

export default page;
