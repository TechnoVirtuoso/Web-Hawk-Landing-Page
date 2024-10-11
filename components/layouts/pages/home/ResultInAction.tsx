import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
export default function ResultsInAction() {
  const secondaryFeatures = [
    {
      name: "Push to deploy.",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.",
      icon: CloudArrowUpIcon,
    },
    {
      name: "SSL certificates.",
      description:
        "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
      icon: LockClosedIcon,
    },
    {
      name: "Simple queues.",
      description:
        "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.",
      icon: ArrowPathIcon,
    },
    {
      name: "Advanced security.",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.",
      icon: FingerPrintIcon,
    },
    {
      name: "Powerful API.",
      description:
        "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
      icon: Cog6ToothIcon,
    },
    {
      name: "Database backups.",
      description:
        "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. ",
      icon: ServerIcon,
    },
  ];
  return (
    <div className="mt-32 sm:mt-56">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-8">
        <div className="mx-auto max-w-5xl sm:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">
            See Webhawk.ai in Action
          </h2>
          <p className="mt-2 text-4xl font-black  tracking-tight text-bold sm:text-5xl">
            A live feed of visitor data helps you understand the potential.
          </p>
          <p className="mt-6  text-center text-lg sm:text-2xl leading-8 text-black">
            Here&apos;s an example of what you could be seeing in real-time!
          </p>
        </div>
      </div>

      {/* Simulated Live Feed */}
      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-[100rem] px-6 lg:px-8 ">
          <img
            alt="App screenshot"
            src="https://real-intent.s3.eu-north-1.amazonaws.com/webhawk-cdn/webhawk-app-screenshoot.png"
            width={2432}
            height={1442}
            className="mb-[-6%] h-full rounded-xl shadow-2xl ring-1 ring-white/10 border-2 border-black"
          />
          <div aria-hidden="true" className="relative">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-gray-50 pt-[7%]" />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mx-auto my-16 max-w-[100rem] px-6 sm:mt-20 md:mt-24 lg:px-8 text-center">
        <h3 className="text-3xl font-bold  sm:text-5xl text-indigo-600">
          Want to see more? <br /> Start using Webhawk.ai now!
        </h3>
        <div className="mt-8 flex justify-center gap-x-6">
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
