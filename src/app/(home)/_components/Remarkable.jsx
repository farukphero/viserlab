import Image from "next/image";
import React from "react";
import shape from "../../../assets/image/effective-work/wave-shape.png";
import circle1 from "../../../assets/image/remarkable/achievement-1.svg";
import circle2 from "../../../assets/image/remarkable/achievement-2.svg";
import circle3 from "../../../assets/image/remarkable/achievement-3.svg";
import circle4 from "../../../assets/image/remarkable/achievement-4.svg";
import circle5 from "../../../assets/image/remarkable/achievement-5.svg";
import circle6 from "../../../assets/image/remarkable/achievement-6.svg";
import circle7 from "../../../assets/image/remarkable/achievement-7.svg";
import circle8 from "../../../assets/image/remarkable/achievement-8.svg";
import circle9 from "../../../assets/image/remarkable/achievement-9.svg";
import circle10 from "../../../assets/image/remarkable/achievement-10.svg";
import circle11 from "../../../assets/image/remarkable/achievement-11.svg";
import circle12 from "../../../assets/image/remarkable/achievement-12.svg";
import circle13 from "../../../assets/image/remarkable/achievement-13.svg";
 
const Remarkable = () => {
  return (
    <div
      className="h-[450px] lg:h-screen w-full bg-[#0088FF] mt-28 relative"
      style={{
        backgroundImage: `url("https://viserlab.com/assets/images/shapes/our-achievement-bg.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Image
        src={shape}
        alt=""
        className="absolute bottom-0 border-none outline-none shadow-none"
      />
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
          <div className="lg:w-9/12 h-[360px] lg:h-[30rem] mt-16 hidden lg:block">
            <div className="bg-[#1A94FF] rounded-full h-full w-full p-10 relative">
              <div className="bg-[#33A0FF] rounded-full h-full w-full "></div>
              <div className="circleIcon">
                <Image src={circle1} alt="circle" />
              </div>
              <div className=" absolute top-[85px] left-16 rotate-45 flex justify-between items-center w-20 lg:w-40">
                <div className="circleIcon2">
                  <Image src={circle13} alt="circle" />
                </div>
                <div className="circleIcon2">
                  <Image src={circle5} alt="circle" />
                </div>
              </div>
              <div className="iconWraps2">
                <div className="circleIcon2">
                  <Image src={circle3} alt="circle" />
                </div>
                <div className="circleIcon2">
                  <Image src={circle9} alt="circle" />
                </div>
              </div>

              {/* <div className="iconWraps2">
                <div className="circleIcon2">
                  <Image src={circle6} alt="circle" />
                </div>
                <div className="circleIcon2">
                  <Image src={circle7} alt="circle" />
                </div>
              </div> */}
              <div className="iconWraps3">
                <div className="circleIcon2">
                  <Image src={circle11} alt="circle" />
                </div>
                <div className="circleIcon2">
                  <Image src={circle4} alt="circle" />
                </div>
              </div>
              <div className="iconWraps4">
                <div className="circleIcon2">
                  <Image src={circle2} alt="circle" />
                </div>
                <div className="circleIcon2">
                  <Image src={circle7} alt="circle" />
                </div>
              </div>
              <div className="circleIcon2 circleIcon3">
                <Image src={circle12} alt="circle" />
              </div>
              {/* top  */}
              <div className="circleIcon2 circleIcon4">
                <Image src={circle6} alt="circle" />
              </div>
              <div className="circleIcon2 circleIcon5">
                <Image src={circle10} alt="circle" />
              </div>
              <div className="circleIcon2 circleIcon7">
                <Image src={circle8} alt="circle" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Remarkable;
