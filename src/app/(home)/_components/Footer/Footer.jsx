import Image from "next/image";
import React from "react";
import logo from "../../../../assets/image/logo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#030444]">
      <div className="w-full px-8 lg:w-[85%] lg:mx-auto pt-16 lg:pt-28">
        <div className="lg:flex justify-between  gap-x-10 ">
          <div className="lg:w-[40%]">
            <Image src={logo} alt="logo" className="w-[225px] h-[54px]" />
            <p className="text-gray-400 w-full py-5 text-justify">
              Ignite digital success with our 360-Degree solution. We provide
              everything from concept to design and development, domain and
              hosting to marketing. Trust us as your partner in the journey to
              your success.
            </p>
          </div>
          <div className="grid justify-between grid-cols-2 lg:grid-cols-4 gap-4">
            <ul>
              <p className="block mb-3 font-sans antialiased font-semibold leading-normal text-white text-xl">
                Company
              </p>
              <li>
                <Link
                  href="/about"
                  className="block py-1.5 font-sans text-base font-normal leading-relaxed text-gray-400 antialiased transition-colors hover:text-blue-gray-500 hover:underline"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block py-1.5 font-sans text-base font-normal leading-relaxed text-gray-400 antialiased transition-colors hover:text-blue-gray-500 hover:underline"
                >
                  Contact us
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="block py-1.5 font-sans text-base font-normal leading-relaxed text-gray-400 antialiased transition-colors hover:text-blue-gray-500 hover:underline"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/user/login"
                  className="block py-1.5 font-sans text-base font-normal leading-relaxed text-gray-400 antialiased transition-colors hover:text-blue-gray-500 hover:underline"
                >
                  Account Login
                </Link>
              </li>
            </ul>
            <ul>
              <p className="block mb-3 font-sans antialiased font-semibold leading-normal text-white text-xl">
                Digital Marketing
              </p>
              <li>
                <Link
                  href="/marketing/backlink"
                  className="block py-1.5 font-sans text-base font-normal leading-relaxed text-gray-400 antialiased transition-colors hover:text-blue-gray-500 hover:underline"
                >
                  Backlink
                </Link>
              </li>
              <li>
                <Link
                  href="/marketing/press-release"
                  className="block py-1.5 font-sans text-base font-normal leading-relaxed text-gray-400 antialiased transition-colors hover:text-blue-gray-500 hover:underline"
                >
                  Press Release
                </Link>
              </li>
              <li>
                <Link
                  href="/marketing/advertising"
                  className="block py-1.5 font-sans text-base font-normal leading-relaxed text-gray-400 antialiased transition-colors hover:text-blue-gray-500 hover:underline"
                >
                  Advertising
                </Link>
              </li>
              <li>
                <Link
                  href="/marketing/branding"
                  className="block py-1.5 font-sans text-base font-normal leading-relaxed text-gray-400 antialiased transition-colors hover:text-blue-gray-500 hover:underline"
                >
                  Branding
                </Link>
              </li>
            </ul>
            <ul>
              <p className="block mb-3 font-sans antialiased leading-normal text-white text-xl font-semibold">
                Web Hosting
              </p>
              <li>
                <Link
                  href="/hosting/premium"
                  className="block py-1.5 font-sans text-base font-normal leading-relaxed text-gray-400 antialiased transition-colors hover:text-blue-gray-500 hover:underline"
                >
                  Shared Hosting
                </Link>
              </li>
              <li>
                <Link
                  href="/hosting/vps"
                  className="block py-1.5 font-sans text-base font-normal leading-relaxed text-gray-400 antialiased transition-colors hover:text-blue-gray-500 hover:underline"
                >
                  VPS Hosting
                </Link>
              </li>
              <li>
                <Link
                  href="/hosting/dedicated"
                  className="block py-1.5 font-sans text-base font-normal leading-relaxed text-gray-400 antialiased transition-colors hover:text-blue-gray-500 hover:underline"
                >
                  Dedicated Server
                </Link>
              </li>
              <li>
                <Link
                  href="/hosting/cluster"
                  className="block py-1.5 font-sans text-base font-normal leading-relaxed text-gray-400 antialiased transition-colors hover:text-blue-gray-500 hover:underline"
                >
                  Server Cluster
                </Link>
              </li>
            </ul>
            <ul>
              <p className="block mb-3 font-sans antialiased leading-normal text-white text-xl font-semibold">
                More....
              </p>
              <li>
                <Link
                  href="/hosting/domain-registration"
                  className="block py-1.5 font-sans text-base font-normal leading-relaxed text-gray-400 antialiased transition-colors hover:text-blue-gray-500 hover:underline"
                >
                  Domain
                </Link>
              </li>
              <li>
                <Link
                  href="/hosting/smtp"
                  className="block py-1.5 font-sans text-base font-normal leading-relaxed text-gray-400 antialiased transition-colors hover:text-blue-gray-500 hover:underline"
                >
                  SMTP
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="block py-1.5 font-sans text-base font-normal leading-relaxed text-gray-400 antialiased transition-colors hover:text-blue-gray-500 hover:underline"
                >
                  Digital Items
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="block py-1.5 font-sans text-base font-normal leading-relaxed text-gray-400 antialiased transition-colors hover:text-blue-gray-500 hover:underline"
                >
                  Get Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full py-7 mt-12 border-t border-blue-gray-400 md:flex-row md:justify-between">
          <p className="block mb-4 font-sans text-sm antialiased font-normal leading-normal text-center text-gray-400 text-[16px] md:mb-0">
            Copyright © 2024 <span className="text-white">ViserLab LLC</span>{" "}
            All Right Reserved
          </p>

          <ul className="flex flex-wrap justify-between lg:gap-x-10 text-gray-400">
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
            <li>Terms of Services</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
