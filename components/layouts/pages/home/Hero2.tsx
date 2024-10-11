import React from "react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import Image from "next/image";
import Typewriter from "../sections/rerusables/Typewriter";
const Hero = () => {
  return (
    <div className="relative isolate overflow-hidden ">
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full stroke-indigo-600/20 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-indigo-800/5">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>
      <div
        aria-hidden="true"
        className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
          className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-30"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-52  lg:px-8 lg:pt-40 h-full flex flex-col  justify-center items-center">
        <div className="mx-auto max-w-5xl text-center">
          <div className=" 6">
            <Link
              href="https://app.webhawk.ai"
              target="_blank"
              className="inline-flex space-x-6"
            >
              <span className="rounded-full bg-amber-500/10 px-3 py-1 text-sm font-semibold leading-6 text-orange-400 ring-1 ring-inset ring-indigo-500/20">
                Latest updates
              </span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-black">
                <span>Just shipped v1.0</span>
                <ChevronRightIcon
                  aria-hidden="true"
                  className="h-5 w-5 text-gray-500"
                />
              </span>
            </Link>
          </div>
          <h1 className="mt-10 text-4xl font-black uppercase tracking-tight text-black sm:text-7xl md:text-[6rem]">
            Turn Your Website <span className="text-purple-500">Traffic </span>
            into{" "}
            <Typewriter
              texts={[
                "Leads",
                "Customers",
              ]}
              period={2000}
            />{" "}
          </h1>
          <p className="mt-6 text-lg sm:text-2xl leading-8 text-black">
            We identify your website visitors in real-time, allowing instant
            engagement.{" "}
            <strong>
              <em>Identify. Connect. Convert.</em>
            </strong>
          </p>
          <div className="mt-10 flex justify-center items-center gap-x-6">
            <Link
              href="https://app.webhawk.ai"
              target="_blank"
              className="rounded bg-indigo-600 border-2 border-indigo-600 px-6 py-4 text-base font-medium text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
              Get Started
            </Link>
            <Link
              href="https://app.webhawk.ai"
              target="_blank"
              className="rounded border-2 border-indigo-600 px-6 py-4 text-base font-medium text-indigo-600 shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
              Get a demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
