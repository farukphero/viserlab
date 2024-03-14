import React from "react";
import { BsArrowRight } from "react-icons/bs";

import web from "../../../assets/image/featured image/solutions/service-icon1.svg";
import mobile from "../../../assets/image/featured image/solutions/service-icon2.svg";
import ui from "../../../assets/image/featured image/solutions/service-icon3.svg";
import domain from "../../../assets/image/featured image/solutions/service-icon4.svg";
import dm from "../../../assets/image/featured image/solutions/service-icon5.svg";
import tech from "../../../assets/image/featured image/solutions/service-icon6.svg";
import Image from "next/image";

const SolutionsPart = () => {
  const cards = [
    {
      title: "Web Application",
      image: web,
      description:
        "We develop bespoke web applications tailored to your business needs, ensuring seamless user experiences, better performance and optimal functionality.",
      icon: BsArrowRight,
    },
    {
      title: "Mobile Application",
      image: mobile,
      description:
        "Our mobile app development expertise brings your ideas to life, creating intuitive and engaging experiences for iOS and Android platforms.",
      icon: BsArrowRight,
    },
    {
      title: "UI/UX Design",
      image: ui,
      description:
        "Our talented designers craft visually stunning interfaces, focusing on user-centric design principles to enhance usability and overall satisfaction.",
      icon: BsArrowRight,
    },
    {
      title: "Domain & Hosting",
      image: domain,
      description:
        "We provide reliable domain registration services and secure hosting solutions, ensuring your online presence remains accessible and stable.",
      icon: BsArrowRight,
    },
    {
      title: "Digital Marketing",
      image: dm,
      description:
        "Our strategic digital marketing campaigns drive targeted traffic, increase brand visibility, and boost conversions through SEO, social media, and more.",
      icon: BsArrowRight,
    },
    {
      title: "Tech Consultancy",
      image: tech,
      description:
        "Leverage our tech expertise to optimize your digital business strategy, streamline operations, and stay ahead with the latest industry trends.",
      icon: BsArrowRight,
    },
  ];
  return (
    <div className="mt-20 lg:mt-0 lg:my-20 lg:w-[85%] lg:mx-auto mx-5">
      <div className="lg:w-8/12 mx-auto">
        <h1 className="text-xl lg:text-[44px] font-bold text-center">
          Solutions for Your Digital Business
        </h1>
        <p className="mt-10 text-center lg:mx-6">
          Elevating businesses with our wide range of services including web and
          mobile applications, cutting-edge UI/UX design, reliable domain &
          hosting solutions, powerful digital marketing strategies, and expert
          tech consultancy.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-10">
        {cards.map((card) => (
          <div key={card.title} className="p-5 border">
            <div className="flex justify-center">
              <Image
                src={card.image}
                alt="course image"
                className="h-16 w-16"
              />
            </div>
            <h1 className="my-4 text-xl lg:text-2xl font-bold text-center">
              {card.title}
            </h1>
            <p>{card.description}</p>
            <div className="my-8 flex justify-center">
              <card.icon className="h-6 w-6" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolutionsPart;
