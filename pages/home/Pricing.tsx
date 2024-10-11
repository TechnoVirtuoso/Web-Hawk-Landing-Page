import { CheckIcon } from "@heroicons/react/20/solid";

const tiers = [
  {
    name: "Basic Tier",
    id: "tier-basic",
    href: "https://pay.webhawk.ai/b/dR63e0g0xbbr1Es8wD",
    priceMonthly: "$399",
    priceYearly: "$4,309/year (10% discount)",
    description: "Simplicity and accessibility for small businesses.",
    features: ["500 matches per month", "$0.10 per match over 500"],
    mostPopular: false,
    cta: "Get Started",
  },
  {
    name: "Pro Tier",
    id: "tier-pro",
    href: "https://pay.webhawk.ai/b/dR63e0g0xbbr1Es8wD",
    priceMonthly: "$699",
    priceYearly: "$7,549/year (10% discount)",
    description: "Designed for growing businesses to scale.",
    features: ["1,500 matches per month", "$0.08 per match over 1,500"],
    mostPopular: true,
    cta: "Upgrade to Pro",
  },
  {
    name: "Enterprise Tier",
    id: "tier-enterprise",
    href: "https://pay.webhawk.ai/b/dR63e0g0xbbr1Es8wD",
    priceMonthly: "$1,199",
    priceYearly: "$12,949/year (10% discount)",
    description: "Advanced capabilities for large enterprises.",
    features: ["5,000 matches per month", "$0.07 per match over 5,000"],
    mostPopular: false,
    cta: "Contact Us for Enterprise",
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Pricing() {
  return (
    <div id="pricing" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Pricing
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Choose the Plan That Fits Your Business
          </p>
        </div>
        <p className="mt-6  text-center text-lg sm:text-2xl leading-8 text-black">
          Flexible pricing options for businesses of all sizes. Get started with
          the plan that works for you.
        </p>
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular ? "lg:z-10 lg:rounded-b-none" : "lg:mt-8",
                tierIdx === 0 ? "lg:rounded-r-none" : "",
                tierIdx === tiers.length - 1 ? "lg:rounded-l-none" : "",
                "flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10"
              )}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3
                    id={tier.id}
                    className={classNames(
                      tier.mostPopular ? "text-indigo-600" : "text-black",
                      "text-lg font-semibold leading-8"
                    )}
                  >
                    {tier.name}
                  </h3>
                  {tier.mostPopular ? (
                    <p className="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-indigo-600">
                      Most popular
                    </p>
                  ) : null}
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {tier.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">
                    {tier.priceMonthly}
                  </span>
                  <span className="text-sm font-semibold leading-6 text-gray-600">
                    /month
                  </span>
                </p>
                <p className="mt-2 text-sm text-black">{tier.priceYearly}</p>
                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm leading-6 text-black"
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon
                        aria-hidden="true"
                        className="h-6 w-5 flex-none text-indigo-600"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? "bg-indigo-600 text-white shadow-sm hover:bg-indigo-500"
                    : "text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300",
                  "mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                )}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
