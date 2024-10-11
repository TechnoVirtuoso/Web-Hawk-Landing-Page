"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState } from "react";
import Lottie from "lottie-react";
import script_gif from "@/assests/lotties/script.json";
import timeline_gif from "@/assests/lotties/timeline.json";
import popup_gif from "@/assests/lotties/popup.json";
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
const features = [
  {
    name: "Minimal and thoughtful",
    description:
      'Our laptop sleeve is compact and precisely fits 13" devices. The zipper allows you to access the interior with ease, and the front pouch provides a convenient place for your charger cable.',
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-feature-07-detail-01.jpg",
    imageAlt:
      "White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.",
  },
  {
    name: "Refined details",
    description:
      "We design every detail with the best materials and finishes. This laptop sleeve features durable canvas with double-stitched construction, a felt interior, and a high quality zipper that hold up to daily use.",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-feature-07-detail-02.jpg",
    imageAlt: "Detail of zipper pull with tan leather and silver rivet.",
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function How() {
  return (
    <div id="how-it-works" className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-[100rem] lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            How It Works
          </h2>
          <p className="mt-6  text-center text-lg sm:text-2xl leading-8 text-black">
            Your website&apos;s visitors are your hottest leads. With
            Webhawk.ai, you can identify, connect, and convert them instantly.
          </p>
        </div>

        <div className="mt-16 space-y-20 gap-20">
          {steps.map((feature, featureIdx) => (
            <div
              key={feature.title}
              className="flex  even:flex-col-reverse lg:even:flex-row  flex-col lg:flex-row items-center gap-10 lg:gap-20 justify-between"
            >
              <div
                className={classNames(
                  featureIdx % 2 === 0 && "order-2",
                  "mt-3 lg:mt-0 w-full lg:w-1/2"
                )}
              >
                <h3 className="text-2xl mt-2 font-medium tracking-tight sm:text-3xl ">
                  {feature.title}
                </h3>
                <p className="mt-5 text-base lg:text-xl  ">{feature.content}</p>

                <div className="mt-5 flex ">
                  <Link
                    href="https://pay.webhawk.ai/b/dR63e0g0xbbr1Es8wD"
                    target="_blank"
                    className="rounded-md  bg-indigo-600 px-6 py-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
              <div
                className={classNames(
                  featureIdx % 2 === 0 && "order-first",
                  "flex-auto w-full lg:w-1/2"
                )}
              >
                <div className="aspect-h-2 aspect-w-5 overflow-hidden rounded-lg bg-gray-50 ring ring-inset ring-black/20">
                  <Lottie
                    className="object-cover object-center"
                    animationData={feature.visual}
                    loop={true}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
