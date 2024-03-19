import React from "react";
import Image from "next/image";
import logo from "../../../assets/image/about/envato-logo.png";
import achievement1 from "../../../assets/image/about/achievement-1.svg";
import achievement2 from "../../../assets/image/about/achievement-4.svg";
import achievement3 from "../../../assets/image/about/achievement-8.svg";
import achievement4 from "../../../assets/image/about/achievement-13.svg";
import achievement5 from "../../../assets/image/about/achievement-10.svg";

const Outstanding = () => {
  return (
    <div>
      <div className="lg:w-[68%] mx-auto">
        <h1 className="text-xl lg:text-[44px] font-bold text-center">
          Our Outstanding Successes
        </h1>
        <p className="mt-10 text-center lg:mx-6">
          Take a look at our Envato Marketplace badges, showcasing our
          dedication to top-notch digital solutions and customer satisfaction.
        </p>
      </div>
      <div className="flex flex-wrap gap-6 lg:w-[82%] lg:mx-auto mx-5 justify-center">
        <div className="flex items-center gap-x-5 border border-gray-400/55 px-5 py-4 bg-white  rounded-xl">
          <Image
            src={achievement1}
            alt="achievement1"
            className="h-14 w-14 lg:h-16 lg:w-16"
          />
          <div>
            <p>Power Elite Author</p>
            <Image src={logo} alt="logo" />
          </div>
        </div>
        <div className="flex items-center gap-x-5 border border-gray-400/55 px-7 py-4 bg-white  rounded-xl">
          <Image
            src={achievement2}
            alt="achievement1"
            className="h-14 w-14 lg:h-16 lg:w-16"
          />
          <div>
            <p>Power Elite Author</p>
            <Image src={logo} alt="logo" />
          </div>
        </div>
        <div className="flex items-center gap-x-5 border border-gray-400/55 px-7 py-4 bg-white  rounded-xl">
          <Image
            src={achievement3}
            alt="achievement1"
            className="h-14 w-14 lg:h-16 lg:w-16"
          />
          <div>
            <p>Power Elite Author</p>
            <Image src={logo} alt="logo" />
          </div>
        </div>
        <div className="flex items-center gap-x-5 border border-gray-400/55 px-7 py-4 bg-white  rounded-xl">
          <Image
            src={achievement4}
            alt="achievement1"
            className="h-14 w-14 lg:h-16 lg:w-16"
          />
          <div>
            <p>Power Elite Author</p>
            <Image src={logo} alt="logo" />
          </div>
        </div>
        <div className="flex items-center gap-x-5 border border-gray-400/55 px-7 py-4 bg-white  rounded-xl">
          <Image
            src={achievement5}
            alt="achievement1"
            className="h-14 w-14 lg:h-16 lg:w-16"
          />
          <div>
            <p>Power Elite Author</p>
            <Image src={logo} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Outstanding;
