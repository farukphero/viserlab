import React from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import image1 from "../../../assets/image/services/web/web-aplication.png";
import image2 from "../../../assets/image/services/web/web_application_02.png";

const WebApplication = () => {
  return (
    <div className="  lg:my-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 items-center">
        <Image
          src={image1}
          alt=""
          className="h-full w-[480px] hidden lg:flex justify-end"
        />
        <div>
          <h1 className="text-xl lg:text-4xl font-bold lg:leading-tight mb-6">
            Empowering Businesses with Innovative Web Application Development
          </h1>
          <p>
            At ViserLab, we specialize in developing robust web applications
            using PHP, MySQL, Laravel, and other related technology. Our
            customized solutions are tailored to your specific business needs,
            offering a seamless user experience. With a focus on security and
            reliability, we ensure efficient database integration and provide
            ongoing support for your web application.
          </p>
          <div className="my-10 lg:flex justify-between">
            <ul>
              <li className="flex gap-x-3">
                <FaCheckCircle className="text-[#0088FF] mt-1" />{" "}
                <span className="text-[17.5px]">Robust Web Applications</span>
              </li>
              <li className="flex gap-x-3">
                <FaCheckCircle className="text-[#0088FF] mt-1" />{" "}
                <span className="text-[17.5px]">Customized Solutions</span>
              </li>
              <li className="flex gap-x-3">
                <FaCheckCircle className="text-[#0088FF] mt-1" />{" "}
                <span className="text-[17.5px]">Laravel Framework</span>
              </li>
            </ul>
            <ul>
              <li className="flex gap-x-3">
                <FaCheckCircle className="text-[#0088FF] mt-1" />{" "}
                <span className="text-[17.5px]">
                  Seamless Database Integration
                </span>
              </li>
              <li className="flex gap-x-3">
                <FaCheckCircle className="text-[#0088FF] mt-1" />{" "}
                <span className="text-[17.5px]">Secure and Reliable</span>
              </li>
              <li className="flex gap-x-3">
                <FaCheckCircle className="text-[#0088FF] mt-1" />{" "}
                <span className="text-[17.5px]">Ongoing Support</span>
              </li>
            </ul>
          </div>
          <div className="border-b-2 my-10"></div>
          <div className="lg:flex  gap-x-5">
            <button className="bg-[#0088FF] hover:bg-[#ecf6fe] transition duration-700 ease-in-out hover:text-[#0088FF]  border  border-[#0088FF] py-3 lg:py-4 px-5 lg:px-8 rounded text-white font-medium   flex gap-x-2">
              <span className="text-sm">Explore-ready-made-scripts</span>
            </button>

            <button className="hover:bg-[#0088FF] bg-[#ecf6fe] transition duration-700 ease-in-out  text-[#0088FF]  border  border-[#0088FF] py-3 lg:py-4 px-5 lg:px-8 rounded hover:text-white font-medium   flex gap-x-2 mt-4 lg:mt-0">
              <span className="text-sm"> Build custom application</span>
            </button>
          </div>
        </div>
        <div className="my-20">
          <Image src={image1} alt="" className="h-full w-full lg:hidden" />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 items-center">
        <div>
          <h1 className="text-xl lg:text-4xl font-bold lg:leading-tight mb-6">
            Choose Us for Unmatched Web Application Excellence
          </h1>
          <p>
            Our unmatched web application excellence stems from our expertise in
            PHP, MySQL, and Laravel. With tailored solutions, reliable support,
            and cutting-edge technologies, we deliver exceptional results,
            ensuring your business stays ahead of the competition.
          </p>

          <div className="mt-10">
            <div className="flex gap-x-3 lg:gap-x-8">
              <div className="border-l-[3px] border-[#0088FF] h-12"></div>
              <div className="border border-gray-400 shadow-md rounded-full w-12 h-12 p-4 flex items-center justify-center">
                1
              </div>
              <div>
                <h1 className="font-bold">Expertise and Experience</h1>
                <p>
                  Extensive knowledge and proven track record in web application
                  development.
                </p>
              </div>
            </div>
            <div className="flex gap-x-3 lg:gap-x-8 my-7">
              <div className="border-l-[3px] border-[#0088FF] h-12"></div>
              <div className="border border-gray-400 shadow-md rounded-full w-12 h-12 p-4 flex items-center justify-center">
                2
              </div>
              <div>
                <h1 className=" font-bold">Customized Solutions</h1>
                <p>
                  Tailored web applications to meet your unique business
                  requirements.
                </p>
              </div>
            </div>
            <div className="flex gap-x-3 lg:gap-x-8">
              <div className="border-l-[3px] border-[#0088FF] h-12"></div>
              <div className="border border-gray-400 shadow-md rounded-full w-12 h-12 p-4 flex items-center justify-center">
                3
              </div>
              <div>
                <h1 className=" font-bold">Reliable Support</h1>
                <p>
                  Dedicated support and maintenance for seamless web application
                  operation.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-20">
          <Image src={image2} alt="" className="h-full w-full  " />
        </div>
      </div>
    </div>
  );
};

export default WebApplication;
