import React from "react";
import { BsArrowRight } from "react-icons/bs";

import web from "../../../assets/image/featured image/solutions/service-icon1.svg";

import domain from "../../../assets/image/featured image/solutions/service-icon4.svg";

import tech from "../../../assets/image/featured image/solutions/service-icon6.svg";
import Image from "next/image";

import laravel from "../../../assets/image/comprehensive/laravel_scripts.svg";
import shared from "../../../assets/image/comprehensive/shared_hosting.svg";
import back_link from "../../../assets/image/comprehensive/backlink.svg";
import mobile from "../../../assets/image/comprehensive/mobile_app.svg";
import vps from "../../../assets/image/comprehensive/VPS_hosting.svg";
import press from "../../../assets/image/comprehensive/press_release.svg";
import ui from "../../../assets/image/comprehensive/ui_ux.svg";
import dedicated from "../../../assets/image/comprehensive/dedicated_server.svg";
import dm from "../../../assets/image/comprehensive/digital_marketing.svg";
import wordpress from "../../../assets/image/comprehensive/wordpress_plugins.svg";
import smtp from "../../../assets/image/comprehensive/SMTP_server.svg";
import branding from "../../../assets/image/comprehensive/branding.svg";

const ComprehensiveForPhone = () => {
  const cards = [
    {
      title: "Laravel Script",
      image: laravel,
      description:
        "Ready-made and custom-built Laravel scripts for efficient web application development.",
      icon: BsArrowRight,
    },
    {
      title: "Mobile Apps",
      image: mobile,
      description:
        "Ready-made and custom-built mobile apps for iOS and Android platforms.",
      icon: BsArrowRight,
    },
    {
      title: "UI/UX Design",
      image: ui,
      description:
        "Creative and user-centric design solutions for websites and applications.",
      icon: BsArrowRight,
    },
    {
      title: "Wordpress Plugins",
      image: wordpress,
      description:
        "Ready-made and custom-built plugins to enhance functionality in WordPress websites.",
      icon: BsArrowRight,
    },
    {
      title: "Shared Hosting",
      image: shared,
      description:
        "Affordable web hosting solutions for small to medium-sized websites.",
      icon: BsArrowRight,
    },
    {
      title: "VPS Hosting",
      image: vps,
      description:
        "Scalable and reliable Virtual Private Server hosting for better performance and control.",
      icon: BsArrowRight,
    },
    {
      title: "Dedicated Server",
      image: dedicated,
      description:
        "High-performance servers exclusively dedicated to meet specific project requirements.",
      icon: BsArrowRight,
    },
    {
      title: "SMTP Server",
      image: smtp,
      description:
        "Secure and efficient server setup for streamlined email communication.",
      icon: BsArrowRight,
    },
    {
      title: "Backlink",
      image: back_link,
      description:
        "Quality backlink services to improve website visibility and search engine rankings.",
      icon: BsArrowRight,
    },
    {
      title: "Press Release",
      image: press,
      description:
        "Our expert team crafts and strategically distributes press releases to generate widespread publicity and media coverage.",
      icon: BsArrowRight,
    },
    {
      title: "Digital Marketing",
      image: dm,
      description:
        "Comprehensive strategies to promote businesses online and increase brand visibility.",
      icon: BsArrowRight,
    },
    {
      title: "Branding",
      image: branding,
      description:
        "Secure and efficient server setup for streamlined email communication.",
      icon: BsArrowRight,
    },
  ];
  return (
    <section className="block lg:hidden">
      <div className="mt-20 lg:mt-0 lg:my-20 lg:w-[85%] lg:mx-auto mx-5">
        <div className="lg:w-8/12 mx-auto">
          <h1 className="text-xl lg:text-[44px] font-bold text-center">
            Solutions for Your Digital Business
          </h1>
          <p className="mt-10 text-center lg:mx-6">
            Elevating businesses with our wide range of services including web
            and mobile applications, cutting-edge UI/UX design, reliable domain
            & hosting solutions, powerful digital marketing strategies, and
            expert tech consultancy.
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
    </section>
  );
};

export default ComprehensiveForPhone;
