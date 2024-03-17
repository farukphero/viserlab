import Image from "next/image";
import React from "react";
import shape from "../../../assets/image/effective-work/wave-shape.png";

const Remarkable = () => {
  return (
    <div
      className="h-screen w-full bg-[#0088FF] mt-28 relative"
      style={{
        backgroundImage: `url("https://viserlab.com/assets/images/shapes/our-achievement-bg.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Image src={shape} alt="" className="absolute bottom-0 border-none outline-none shadow-none" />
      <div className="mt-20 lg:mt-0 lg:my-20 lg:w-[85%] lg:mx-auto mx-5">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="lg:w-9/12 pt-20">
            <h1 className="text-white font-bold text-xl lg:text-5xl leading-loose">
              Our Remarkable Achievements
            </h1>
            <p className="text-white pt-6 pb-8">
              Highlighting Our Impressive Milestones and Accomplishments.
              Explore our track record of delivering exceptional results,
              exceeding client expectations, and making a positive impact in the
              digital landscape.
            </p>
            <button className="text-white hover:bg-white hover:text-[#0088FF] duration-700 ease-in-out  border border-white rounded-md py-3 px-5 uppercase text-sm font-medium">
              Contact us
            </button>
          </div>
          <div className="lg:w-9/12 h-[360px] lg:h-[30rem] mt-16">
            <div className="bg-[#1A94FF] rounded-full h-full w-full p-10 relative">
              <div className="bg-[#33A0FF] rounded-full h-full w-full ">
                
              </div>
            <div className="absolute top-0 flex justify-center rounded-full">
               <li>xvfdgdg</li>
               
            </div>
            <div className="absolute top-5 left-10 flex justify-center rounded-full">
               <li>xvfdgdg</li>
               
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Remarkable;
