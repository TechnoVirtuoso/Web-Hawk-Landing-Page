import { cn } from "@/lib/utils";
import {
  IdentificationIcon,
  ChartBarIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

const benefits = [
  {
    name: "Real-Time Identification",
    description: "Instantly know who’s visiting your site.",
    icon: IdentificationIcon,
  },
  {
    name: "Actionable Insights",
    description: "Get names and contact details for targeted outreach.",
    icon: EnvelopeIcon,
  },
  {
    name: "Boost Conversions",
    description: "Turn anonymous traffic into real sales leads.",
    icon: ChartBarIcon,
  },
];

export default function ValueProposition() {
  return (
    <div className="bg-amber-100 border-y-4 border-black ">
      <div
        id="features"
        className="mx-auto py-32 max-w-7xl px-6 sm:py-56 lg:px-8"
      >
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl">
          <h2 className="text-base font-semibold leading-8 text-teal-400">
            Why Webhawk.ai?
          </h2>
          <p className="mt-2 text-3xl font-black uppercase tracking-tight text-black sm:text-6xl">
            Transform your website traffic into actionable leads
          </p>
          <p className="mt-6 text-lg sm:text-2xl leading-8 text-black">
            Discover the key benefits of Webhawk.ai and how it can boost your
            conversions.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-black sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.name}
              className="flex flex-col items-start gap-y-3 p-10  bg-white border-r-8 border-b-8 border-black"
            >
              <div
                className={cn(
                  index === 0
                    ? "bg-green-200 text-green-600"
                    : index === 1
                    ? "bg-orange-200 text-orange-600"
                    : "bg-red-200 text-red-600",
                  "flex h-12 w-12 items-center justify-center"
                )}
              >
                <benefit.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <dt className="mt-4 text-lg font-semibold leading-7 text-black">
                {benefit.name}
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                {benefit.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
