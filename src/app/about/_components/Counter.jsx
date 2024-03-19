import React from "react";
import Image from "next/image";
import product from "../../../assets/image/about/counter-icon1.svg";
import team from "../../../assets/image/about/counter-icon2.svg";
import sales from "../../../assets/image/about/counter-icon3.svg";

const Counter = () => {
  return (
    <div className="bg-[#0088FF] lg:my-20 lg:w-[85%] lg:mx-auto mx-5 h-96 lg:h-56 rounded-3xl my-10 p-8">
      <div className="lg:flex justify-between items-center h-full lg:w-9/12 mx-auto">
        <div className="flex gap-x-5 mb-8 lg:mb-0">
          <div className="bg-[#0077E0] rounded-full p-5">
            <Image src={product} alt="product image " />
          </div>
          <div>
            <h1 className="text-2xl lg:text-3xl font-extrabold text-white">
              200+
            </h1>
            <p className="text-white">Total Product</p>
          </div>
        </div>
        <div className="flex gap-x-5 mb-8 lg:mb-0">
          <div className="bg-[#0077E0] rounded-full p-5">
            <Image src={team} alt="product image " />
          </div>
          <div>
            <h1 className="text-2xl lg:text-3xl font-extrabold text-white">
              40+
            </h1>
            <p className="text-white">Team Member</p>
          </div>
        </div>
        <div className="flex gap-x-5 ">
          <div className="bg-[#0077E0] rounded-full p-5">
            <Image src={sales} alt="product image " />
          </div>
          <div>
            <h1 className="text-2xl lg:text-3xl font-extrabold text-white">
              14K+
            </h1>
            <p className="text-white">Total Sales</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
