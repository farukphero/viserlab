import React from "react";
import banner_tech2 from "../../../assets/image/banner-tech2.png";
import banner_tech6 from "../../../assets/image/banner-tech6.png";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="lg:w-[85%] lg:mx-auto mx-5">
      <div>
        <h1 className="text-[#0088FF] text-sm lg:text-lg font-bold text-center pb-5 pt-7 lg:pt-0 lg:pb-10">
          Looking for One Stop Solution Provider?
        </h1>
        <div className="flex justify-between">
          <Image
            src={banner_tech2}
            alt="banner_tech"
            width={100}
            height={100}
            className="w-36 h-28 hidden lg:flex"
          />
          <p className="text-[22px] lg:text-6xl text-black/75 font-extrabold text-center">
            360 Degree Solution For Your Digital Business
          </p>
          <Image
            src={banner_tech6}
            alt="banner_tech"
            className="w-36 h-28 hidden lg:flex"
          />
        </div>
      </div>
      <div>
        <ul className="hidden lg:flex justify-between text-gray-800 py-2  text-xs lg:text-[13px]  w-7/12 mx-auto my-10">
          <li>Web Application</li> |<li>Mobile Application</li> |
          <li>UI/UX Design</li> | <li>Domain & Hosting</li> |
          <li>Digital Marketing</li> |<li>Tech Consultancy</li>
        </ul>
      </div>

      <div className="mb-10 mt-5 lg:hidden mx-1">
        <ul className=" flex justify-between text-gray-800 py-2 text-xs">
          <li>Web Application</li> |<li>Mobile Application</li> |
          <li>UI/UX Design</li>
        </ul>
        <ul className=" flex justify-between text-gray-800 text-xs">
          <li>Domain & Hosting</li> |<li>Digital Marketing</li> |
          <li>Tech Consultancy</li>
        </ul>
      </div>

      <div className="flex justify-center gap-x-5">
        <button className="bg-[#0088FF] hover:bg-[#ecf6fe] transition duration-700 ease-in-out hover:text-[#0088FF]  border  border-[#0088FF] py-3 lg:py-4 px-5 lg:px-8 rounded text-white font-medium   flex gap-x-2">
          <span className="text-sm"> EXPLORE US</span>
        </button>
        <button className="hover:bg-[#0088FF] bg-[#ecf6fe] transition duration-700 ease-in-out  text-[#0088FF]  border  border-[#0088FF] py-3 lg:py-4 px-5 lg:px-8 rounded hover:text-white font-medium   flex gap-x-2">
          <span className="text-sm"> CONTACT US</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
