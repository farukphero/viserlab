import React from "react";
import Image from "next/image";
import { IoMdCheckmark } from "react-icons/io";
import shape from "../../../assets/image/about/technology-shape.png";
import favicon from "../../../assets/image/about/favicon.png";
import html from "../../../assets/image/about/technology-8.svg";
import apple from "../../../assets/image/about/technology-1.svg";
import dm from "../../../assets/image/about/technology-2.svg";
import elephant from "../../../assets/image/about/technology-3.svg";
import technology4 from "../../../assets/image/about/technology-4.svg";
import technology5 from "../../../assets/image/about/technology-5.svg";
import technology6 from "../../../assets/image/about/technology-6.svg";
import technology7 from "../../../assets/image/about/technology-7.svg";

const Technology = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:w-[85%] lg:mx-auto mx-5 my-28 justify-center">
      <div className="relative md:h-[580px] md:w-[580px] hidden lg:block">
        <Image src={shape} alt="shape" />
        <div>
          <Image
            src={favicon}
            alt="favicon"
            className="h-20 w-20 absolute top-[40%] lg:top-[43%] left-[41%]"
          />
          <div className="bg-white rounded-full  p-3 absolute top-[28%] lg:top-[178px] left-[10%]">
            <Image src={html} alt="favicon" className="h-7 w-7 lg:h-8 lg:w-8" />
          </div>
          <div className="bg-white rounded-full  p-3 absolute  top-10 lg:top-14 left-[26%]">
            <Image
              src={apple}
              alt="favicon"
              className="h-8 w-8 lg:h-10 lg:w-10"
            />
          </div>
          <div className="bg-white rounded-full  p-3 absolute top-10 lg:top-14 right-[30%] lg:right-[33%]">
            <Image src={dm} alt="favicon" className="h-8 w-8 lg:h-10 lg:w-10" />
          </div>
          <div className="bg-white rounded-full  p-3 absolute top-[28%] lg:top-[30%] right-[10%] lg:right-[14%]">
            <Image
              src={elephant}
              alt="favicon"
              className="h-8 w-8 lg:h-10 lg:w-10"
            />
          </div>
          <div className="bg-white rounded-full  p-3 absolute bottom-[28%] lg:bottom-[31%] right-[10%] lg:right-[14%]">
            <Image
              src={technology4}
              alt="favicon"
              className="h-8 w-8 lg:h-10 lg:w-10"
            />
          </div>
          <div className="bg-white rounded-full  p-3 absolute bottom-[28%] lg:bottom-[31%] left-[9%]">
            <Image
              src={technology7}
              alt="favicon"
              className="h-8 w-8 lg:h-10 lg:w-10"
            />
          </div>
          <div className="bg-white rounded-full  p-3 absolute bottom-9 lg:bottom-16 left-[28%]">
            <Image
              src={technology6}
              alt="favicon"
              className="h-8 w-8 lg:h-10 lg:w-10"
            />
          </div>
          <div className="bg-white rounded-full  p-3 absolute  bottom-9 lg:bottom-16 right-[30%] lg:right-[33%]">
            <Image
              src={technology5}
              alt="favicon"
              className="h-8 w-8 lg:h-10 lg:w-10"
            />
          </div>
        </div>
      </div>
      <div className="h-full flex items-center">
        <div>
          <h1 className="text-2xl lg:text-[44px] font-bold">
            Our Technology Stack
          </h1>
          <p className="lg:text-xl pt-7 pb-10 text-gray-700">
            We use PHP, Laravel, WordPress, Flutter, Figma, and Photoshop to
            create exceptional digital solutions, including robust web
            applications, customizable websites, cross-platform mobile apps,
            seamless UI/UX design, and captivating visuals. Your unique needs
            are our top priority.
          </p>
          <ul>
            <li className="flex gap-x-3">
              <IoMdCheckmark className="text-blue-400 h-6 w-6" />
              <span className="text-lg pb-1">
                PHP and Laravel for robust web development.
              </span>
            </li>
            <li className="flex gap-x-3">
              <IoMdCheckmark className="text-blue-400 h-6 w-6" />
              <span className="text-lg pb-1">
                WordPress for flexible and scalable content management.
              </span>
            </li>
            <li className="flex gap-x-3">
              <IoMdCheckmark className="text-blue-400 h-6 w-6" />
              <span className="text-lg pb-1">
                Flutter for cross-platform mobile app development.
              </span>
            </li>
            <li className="flex gap-x-3">
              <IoMdCheckmark className="text-blue-400 h-6 w-6" />
              <span className="text-lg pb-1">
                Figma for seamless UI/UX design collaboration.
              </span>
            </li>
            <li className="flex gap-x-3">
              <IoMdCheckmark className="text-blue-400 h-6 w-6" />
              <span className="text-lg pb-1">
                Photoshop for stunning graphics and visual enhancements.
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative md:h-[580px] md:w-[580px] lg:hidden">
        <Image src={shape} alt="shape" />
        <div>
          <Image
            src={favicon}
            alt="favicon"
            className="h-20 w-20 absolute top-[40%] lg:top-[43%] left-[41%]"
          />
          <div className="bg-white rounded-full  p-3 absolute top-[28%] lg:top-[178px] left-[10%]">
            <Image src={html} alt="favicon" className="h-7 w-7 lg:h-8 lg:w-8" />
          </div>
          <div className="bg-white rounded-full  p-3 absolute  top-10 lg:top-14 left-[26%]">
            <Image
              src={apple}
              alt="favicon"
              className="h-8 w-8 lg:h-10 lg:w-10"
            />
          </div>
          <div className="bg-white rounded-full  p-3 absolute top-10 lg:top-14 right-[30%] lg:right-[33%]">
            <Image src={dm} alt="favicon" className="h-8 w-8 lg:h-10 lg:w-10" />
          </div>
          <div className="bg-white rounded-full  p-3 absolute top-[28%] lg:top-[30%] right-[10%] lg:right-[14%]">
            <Image
              src={elephant}
              alt="favicon"
              className="h-8 w-8 lg:h-10 lg:w-10"
            />
          </div>
          <div className="bg-white rounded-full  p-3 absolute bottom-[28%] lg:bottom-[31%] right-[10%] lg:right-[14%]">
            <Image
              src={technology4}
              alt="favicon"
              className="h-8 w-8 lg:h-10 lg:w-10"
            />
          </div>
          <div className="bg-white rounded-full  p-3 absolute bottom-[28%] lg:bottom-[31%] left-[9%]">
            <Image
              src={technology7}
              alt="favicon"
              className="h-8 w-8 lg:h-10 lg:w-10"
            />
          </div>
          <div className="bg-white rounded-full  p-3 absolute bottom-9 lg:bottom-16 left-[28%]">
            <Image
              src={technology6}
              alt="favicon"
              className="h-8 w-8 lg:h-10 lg:w-10"
            />
          </div>
          <div className="bg-white rounded-full  p-3 absolute  bottom-9 lg:bottom-16 right-[30%] lg:right-[33%]">
            <Image
              src={technology5}
              alt="favicon"
              className="h-8 w-8 lg:h-10 lg:w-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
