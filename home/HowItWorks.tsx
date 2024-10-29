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
  const [activeStep, setActiveStep] = useState(0);
  return (
    <div id="how-it-works" className="mx-auto relative">
      <div className="bg-indigo-600 border-y-4 border-black">
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

      <div
        className={cn(
          steps[activeStep].bg,
          "transition-all duration-700 ease-in-out h-full  border-b-4 border-black"
        )}
      >
        <div className="pt-10 sm:py-12 lg:py-16">
          <div className="relative grid max-w-[100rem] mx-auto lg:grid-cols-2 w-full gap-10  py-16   ">
            <div className="w-full lg:border-l lg:border-l-purple-400">
              <div className="tabs flex flex-col space-y-20 min-w-full ">
                {steps.map((step, index) => (
                  <button
                    key={index}
                    className={`text-left transition-all duration-500 ease-in-out p-5 lg:pl-5 min-w-full 
                ${
                  activeStep === index
                    ? "text-black font-bold transition-all duration-700 ease-in-out  border-l-indigo-600 lg:border-l-4"
                    : "lg:text-black/50"
                }`}
                    onClick={() => setActiveStep(index)}
                  >
                    <div className={` min-h-full lg:hidden block min-w-full border-2 border-black `}>
                      <div className="min-w-full  min-h-full flex items-center justify-center">
                        <Lottie animationData={step.visual} loop={true} />
                      </div>
                    </div>
                    <h3 className="text-4xl mt-5 uppercase font-black tracking-tight sm:text-5xl ">
                      {step.title}
                    </h3>
                    <p className="mt-5 transition-all text-lg lg:text-2xl font-medium  ">
                      {step.content}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            <div className="w-full hidden lg:block relative">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`transition-all absolute inset-0 duration-700 ease-in-out z-10
              ${activeStep === index ? "opacity-100" : "opacity-0"}`}
                >
                  <div className="">
                    <Lottie animationData={step.visual} loop={true} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
