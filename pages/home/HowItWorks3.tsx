"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState } from "react";
import Lottie from "lottie-react";
import script_gif from "@/assests/webhawk-lotties/script.json";
import timeline_gif from "@/assests/webhawk-lotties/timeline.json";
import popup_gif from "@/assests/webhawk-lotties/popup.json";
const steps = [
  {
    title: "Put Our Script to Work",
    bg: "bg-pink-300",
    content:
      "We provide you with a simple script to embed on your website. This script acts like a digital ‘hawk,’ scanning your site’s visitors in real-time. The moment someone lands on your page, Webhawk.ai gathers key insights about who they are and what they’re interested in.",
    visual: script_gif,
    // "https://real-intent.s3.eu-north-1.amazonaws.com/webhawk-cdn/wetransfer_dash-json_2024-09-30_1338/2-script.gif",
  },
  {
    title: "Get the Full Picture",
    bg: "bg-purple-300",
    content:
      "As visitors browse your site, Webhawk.ai captures valuable information, including names and contact details, building a comprehensive profile of your hottest prospects.",
    visual: timeline_gif,
    // "https://real-intent.s3.eu-north-1.amazonaws.com/webhawk-cdn/GettheFullPicture-ezgif.com-png-to-webp-converter.webp",
  },
  {
    title: "Turn Insights Into Action",
    bg: "bg-indigo-300",
    content:
      "With detailed visitor profiles at your fingertips, it’s time to take action. Use these insights for targeted marketing campaigns, personalized outreach, or direct engagement. Webhawk.ai empowers you to connect with the right leads, at the right time.",
    visual: popup_gif,
    // "https://real-intent.s3.eu-north-1.amazonaws.com/webhawk-cdn/TurnInsightsIntoAction-ezgif.com-png-to-webp-converter.webp",
  },
];
const HowItWorks = () => {
  return (
    <div id="how-it-works" className="mx-auto relative">
      <div className="bg-indigo-600 border-y-4 border-black sticky top-24 inset-x-0 z-40">
        <div className="mx-auto max-w-[100rem] py-20 px-6 lg:px-8 flex flex-col lg:flex-row justify-between lg:items-center gap-10">
          <div>
            <h2 className="text-4xl font-black tracking-tight uppercase text-white sm:text-6xl">
              How It Works
            </h2>
            <p className="mt-6 text-lg font-medium sm:text-2xl max-w-xl leading-8 text-white">
              Your website&apos;s visitors are your hottest leads. With
              Webhawk.ai, you can identify, connect, and convert them instantly.
            </p>
          </div>

          <div className="">
            <Link
              href="https://app.webhawk.ai"
              target="_blank"
              className=" bg-black  transition-all ease-in-out duration-300 block hover:scale-150 border-r-4 border-b-4 hover:border-pink-500 px-10 py-6 text-base sm:text-xl font-medium text-white shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
              Reveal Your Visitors Now!
            </Link>
          </div>
        </div>
      </div>

      <div className="relative  w-full h-full ">
        {steps.map((step, index) => (
          <div
            key={index}
            className={cn(
              step.bg,
              "border-b-4 border-b-black h-full sticky top-10 z-30 "
            )}
          >
            <div className=" flex mx-auto max-w-[100rem] py-10 px-6 lg:px-8 justify-between items-center flex-col lg:flex-row ">
              <div className="flex items-center justify-center lg:w-1/2">
                <Lottie animationData={step.visual} loop={true} />
              </div>
              <div className="lg:w-1/2 text-pretty">
                <h3 className="text-4xl mt-5 uppercase font-black tracking-tight sm:text-5xl ">
                  {step.title}
                </h3>
                <p
                  className={`mt-5 transition-al text-lg lg:text-2xl font-medium   `}
                >
                  {step.content}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* <div className="w-full min-h-full hidden lg:block relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`transition-all absolute inset-0 min-h-full duration-700 ease-in-out z-10
              ${activeStep === index ? "opacity-100" : "opacity-0"}`}
              >
                <div className="min-w-full  min-h-full flex items-center justify-center">
                  <img src={step.visual} className="w-full  h-full" />
                </div>
              </div>
            ))}
          </div> */}
      </div>
    </div>
  );
};

export default HowItWorks;
