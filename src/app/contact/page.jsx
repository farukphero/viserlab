import React from "react";
import { NavBar } from "../(home)/_components/NavBar/NavBar";
import left_image from "../../assets/image/contact/contact.svg";
import Image from "next/image";

const ContactPage = () => {
  return (
    <div>
      <NavBar />
      <div className="my-10 lg:flex items-center lg:gap-x-10 lg:w-[85%] lg:mx-auto mx-5">
        <Image
          src={left_image}
          alt=""
          className="h-full w-1/2 hidden lg:flex"
        />
        <div className="bg-white rounded-md h-screen lg:p-10">
          <h1 className="text-xl lg:text-4xl font-bold mb-2">
            Contact with us.
          </h1>
          <p className="text-sm text-gray-800 leading-relaxed">
            Please feel free to reach out to us in any situation. We truly value
            your feedback and would be delighted to hear from you.
          </p>
          <div className="lg:flex lg:gap-x-5 mt-8 mb-5">
            <div>
              <h3>Name</h3>
              <input
                type="text"
                className="border border-gray-500 rounded py-3 px-4 w-full mt-1"
              />
            </div>
            <div className="mt-5 lg:mt-0">
              <h3>Email</h3>
              <input
                type="text"
                className="border border-gray-500 rounded py-3 px-4 w-full mt-1"
              />
            </div>
          </div>
          <div>
            <h3>Subject</h3>
            <input
              type="text"
              className="border border-gray-500 rounded py-3 px-4 w-full mt-1"
            />

            <div className="my-5">
              <h3>Message</h3>
              <textarea
                type="text"
                className="border border-gray-500 rounded py-3 px-4 w-full h-32 mt-1"
              />
            </div>
            <div>
              <button className="w-full h-12 bg-[#0088FF] text-white text-center font-semibold rounded-md">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
