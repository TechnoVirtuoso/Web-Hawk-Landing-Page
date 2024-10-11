"use client";
import React, { useState } from "react";
const steps = [
  {
    title: "Put Our Script to Work",
    content:
      "We provide you with a simple script to embed on your website. This script acts like a digital ‘hawk,’ scanning your site’s visitors in real-time. The moment someone lands on your page, Webhawk.ai gathers key insights about who they are and what they’re interested in.",
    visual:
      "https://real-intent.s3.eu-north-1.amazonaws.com/webhawk-cdn/PutOurScripttoWork-ezgif.com-png-to-webp-converter.webp",
  },
  {
    title: "Get the Full Picture",
    content:
      "As visitors browse your site, Webhawk.ai captures valuable information, including names and contact details, building a comprehensive profile of your hottest prospects.",
    visual:
      "https://real-intent.s3.eu-north-1.amazonaws.com/webhawk-cdn/GettheFullPicture-ezgif.com-png-to-webp-converter.webp",
  },
  {
    title: "Turn Insights Into Action",
    content:
      "With detailed visitor profiles at your fingertips, it’s time to take action. Use these insights for targeted marketing campaigns, personalized outreach, or direct engagement. Webhawk.ai empowers you to connect with the right leads, at the right time.",
    visual:
      "https://real-intent.s3.eu-north-1.amazonaws.com/webhawk-cdn/TurnInsightsIntoAction-ezgif.com-png-to-webp-converter.webp",
  },
];
const HowItWorks2 = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div id="how-it-works" className="mx-auto mt-5 max-w-7xl px-6 sm:mt-10 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl">
          How It Works
        </h2>
        <p className="mt-6 text-lg leading-8 text-black">
          Your website&apos;s visitors are your hottest leads. With Webhawk.ai,
          you can identify, connect, and convert them instantly.
        </p>
      </div>
      <div className="mt-10  sm:mt-12 lg:mt-16 ">
        <div className="relative grid lg:grid-cols-2 gap-10 w-full space-x-0 lg:space-x-10  lg:space-y-0 py-16 ">
          <div className="w-full lg:border-l">
            <div className="tabs flex flex-col space-y-20 min-w-full ">
              {steps.map((step, index) => (
                <button
                  key={index}
                  className={`text-left transition-all duration-500 ease-in-out lg:pl-5 min-w-full 
                ${
                  activeStep === index
                    ? "text-black font-bold  border-l-indigo-600 lg:border-l-4"
                    : "lg:text-black/70"
                }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className={` min-h-full lg:hidden block min-w-full `}>
                    <div className="min-w-full  min-h-full flex items-center justify-center">
                      <img src={step.visual} className="w-full  h-full" />
                    </div>
                  </div>
                  <h3 className="text-3xl mt-5  tracking-tight sm:text-4xl min-w-full ">
                    {step.title}
                  </h3>
                  <p className={`mt-2 transition-all font-medium min-w-full `}>
                    {step.content}
                  </p>
                </button>
              ))}
            </div>
          </div>

          <div className="w-full min-h-full hidden lg:block relative">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks2;
