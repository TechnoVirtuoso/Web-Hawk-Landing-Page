"use client";
import Header from "@/components/layouts/pages/landing/Header";
import Hero from "@/components/layouts/pages/landing/Hero";
import Spacer from "@/components/layouts/pages/landing/Spacer";
import Icons from "@/components/layouts/pages/landing/Icons";
import React from "react";
import ImageCta from "@/components/layouts/pages/landing/ImageCta";
import Image2 from "@/assests/images/Image2.png";
import Pricing from "@/components/layouts/pages/landing/Pricing";
import HeroBg2 from "@/assests/images/HeroBg.png";
import Tiles from "@/assests/images/Tiles.png";
import ModernImageCta from "@/components/layouts/pages/landing/ModerImageCta";
import CtaSection from "@/components/layouts/pages/landing/CtaSection";
import Footer from "@/components/layouts/pages/landing/Footer";

import script_gif from "@/assests/lotties/script.json";
import timeline_gif from "@/assests/lotties/timeline.json";
import popup_gif from "@/assests/lotties/popup.json";
import Lottie from "lottie-react";
import Frame from "@/components/layouts/pages/landing/Frame";
import LottieCta from "@/components/layouts/pages/landing/LottieCta";
import LottieCards from "@/components/layouts/pages/landing/LottieCards";
import Poster from "@/components/layouts/pages/landing/Poster";

const page = () => {
    return (
        <div>
            <Header />
            {/* <Hero type="IMAGE" Background={HeroBg2} /> */}
            <div
                className="tiles-wrapper"
                style={{
                    backgroundImage: `url('${Tiles.src}')`,
                    backgroundPosition: "100% 100%",
                }}
            >
                {/* <Spacer paddingTop={80} breakpoints={{ 700: 30 }} /> */}
                {/* <Icons /> */}
                <Spacer paddingTop={80} breakpoints={{ 700: 50 }} />
                <div id="PRODUCT"></div>
                <Spacer paddingTop={80} breakpoints={{ 700: 30 }} />
                <div className="GLOBAL_TITLE">
                    How it <span className="mod">Works</span>
                </div>
                <Spacer paddingTop={70} breakpoints={{ 700: 30 }} />
                <Poster />
            
                <Spacer paddingTop={70} breakpoints={{ 700: 30 }} />
                <LottieCards />
                <Spacer paddingTop={100} breakpoints ={{ 700: 0 }} />
                {/* <ImageCta
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
                <Spacer paddingTop={100} breakpoints={{ 700: 50 }} /> */}
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
                    font="LIGHT"
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
