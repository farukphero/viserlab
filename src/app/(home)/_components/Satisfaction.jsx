"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../../assets/image/feedback/pexels-photo-326055.webp";
import quote from "../../../assets/image/feedback/quote.svg";

const Satisfaction = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="my-20">
      <h1 className="text-xl lg:text-[42px] font-bold text-center">
        Voices of Satisfaction and Success
      </h1>
      <div className="lg:flex items-center justify-between lg:mx-10">
        <div>
          <Image
            src={image1}
            alt=""
            className="h-24 w-24 rounded-full mt-5 hidden lg:flex"
          />
        </div>
        <div className="lg:w-9/12 lg:mx-auto">
          <Image
            src={image1}
            alt=""
            className="h-12 w-12 rounded-full mt-5 hidden lg:flex"
          />
          <div className="my-8 border-2 rounded-2xl shadow-md mx-5">
            <Slider {...settings} className="min-h-96  w-full">
              <div className="h-full flex items-center my-10">
                <div className="flex justify-center">
                  <Image src={quote} alt="quote" />
                </div>
                <h3 className="text-center text-2xl font-normal text-gray-600   mt-7 leading-relaxed">
                  As the author said, It has a feature sets that cannot
                  anywhere. I checked <br className="hidden lg:flex" /> with
                  other scripts sources but wasn`t able to find an ultimate hyip
                  script <br className="hidden lg:flex" /> until I saw this.
                  Feature rich, Faster Customer Support and overall one best
                  <br className="hidden lg:flex" />
                  quality speed in long time.
                </h3>
                <h5 className="text-center text-2xl font-semibold mt-10 text-[#0088FF]">
                  @kailasweb
                </h5>
                <p className="text-center text-lg">
                  Buyer Of Hyiplab, Envato Market
                </p>
              </div>
              <div className="h-full flex items-center my-10">
                <Image src={quote} alt="quote" className="  mx-auto my-auto" />
                <h3 className="text-center text-2xl font-normal text-gray-600   mt-7 leading-relaxed">
                  This Is Just Amazing.Also Viserlab Support System Is Just
                  Awasome.....I <br />
                  Am Giving Mark 10 Out Of 10.
                </h3>
                <h5 className="text-center text-2xl font-semibold mt-10 text-[#0088FF]">
                  @skaut135
                </h5>
                <p className="text-center text-lg">
                  Buyer Of Hyiplab, Envato Market
                </p>
              </div>
              <div className="h-full flex items-center my-10">
                <Image src={quote} alt="quote" className="  mx-auto my-auto" />
                <h3 className="text-center text-2xl font-normal text-gray-600   mt-7 leading-relaxed">
                  A really complete script, he continues to improve it!
                  It&apos;s really great, it <br className="hidden lg:flex" />{" "}
                  answers and helps after the purchase in case of problems.
                </h3>
                <h5 className="text-center text-2xl font-semibold mt-10 text-[#0088FF]">
                  @skaut135
                </h5>
                <p className="text-center text-lg">
                  Buyer Of Hyiplab, Envato Market
                </p>
              </div>
            </Slider>
          </div>
          <div className="flex justify-end">
            <Image
              src={image1}
              alt=""
              className="h-12 w-12 rounded-full mt-5 hidden lg:flex"
            />
          </div>
        </div>
        <div>
          <Image
            src={image1}
            alt=""
            className="h-24 w-24 rounded-full mt-5 hidden lg:flex"
          />
        </div>
      </div>
    </div>
  );
};

export default Satisfaction;
