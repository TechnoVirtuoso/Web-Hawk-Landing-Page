import Link from "next/link";

export default function CTA() {
  return (
    <div className="relative isolate py-32 px-6  sm:pt-56 sm:py-40 lg:px-8 bg-black">
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full stroke-black/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      >
        <defs>
          <pattern
            id="cta-pattern"
            width={200}
            height={200}
            x="50%"
            y={0}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          fill="url(#cta-pattern)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>

      <div className="absolute inset-x-0 top-10 -z-10 flex justify-center overflow-hidden blur-3xl">
        <div
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
          className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
        />
      </div>

      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-4xl font-black uppercase tracking-tight text-white sm:text-6xl">
          Start with Webhawk.ai today!
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg sm:text-2xl leading-8 text-white">
          Webhawk.ai gives you real-time insights into your website visitors and
          the tools you need to convert traffic into leads. Don&apos;t wait—see
          who&apos;s on your website now!
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="https://pay.webhawk.ai/b/dR63e0g0xbbr1Es8wD"
            target="_blank"
            className=" bg-indigo-600 px-10 py-5 rounded-full border-indigo-600 text-white font-semibold text-base shadow-sm hover:bg-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Try Webhawk.ai Now
          </Link>
        </div>
      </div>
    </div>
  );
}
