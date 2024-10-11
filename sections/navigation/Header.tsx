"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
const navigation = [
  { name: "Product", href: "#how-it-works" },
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="sticky -top-0 inset-x-0 z-50 bg-white border-b-2 border-black">
      <nav
        aria-label="Global"
        className="flex items-center justify-between mx-auto max-w-[100rem] py-6 px-6 lg:px-8"
      >
        <div className="flex lg:flex-1 lg:gap-x-12 items-center">
          <Link href="/" className="-m-1.5 p-1.5 font-bold text-black text-xl">
            <span className="sr-only"> webhawk.</span>
            <Image
              width={200}
              height={50}
              alt="webhawk logo"
              src="https://real-intent.s3.eu-north-1.amazonaws.com/webhawk-cdn/Logo_Webhawk_Dark.png"
              className="h-14 w-full aspect-auto "
            />
          </Link>

          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                scroll
                className="text-base font-medium leading-6 text-gray-900"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex lg:hidden ">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end space-x-4 items-center">
          <Link
            href="https://pay.webhawk.ai/b/dR63e0g0xbbr1Es8wD"
            target="_blank"
            className="rounded-md  bg-indigo-600 px-6 py-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get Started
          </Link>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5 font-bold text-black text-xl">
              <span className="sr-only"> webhawk.</span>
              <Image
                width={200}
                height={50}
                alt="webhawk logo"
                src="https://real-intent.s3.eu-north-1.amazonaws.com/webhawk-cdn/Logo_Webhawk_Dark.png"
                className="h-14 w-full aspect-auto "
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="https://pay.webhawk.ai/b/dR63e0g0xbbr1Es8wD"
                  target="_blank"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Header;
