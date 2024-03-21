"use client";
import React from "react";
import Image from "next/image";
import { FaLaravel } from "react-icons/fa";

import featured1 from "../../../assets/image/feature-shape1.png";
import featured2 from "../../../assets/image/feature-shape2.png";

import card1 from "../../../assets/image/featured image/28811404_cover.jpg";
import card2 from "../../../assets/image/featured image/29668217_cover.jpg";
import card3 from "../../../assets/image/featured image/33575024_cover.jpg";
import card4 from "../../../assets/image/featured image/33821085_cover.jpg";

import { Card, CardBody, Typography } from "@material-tailwind/react";
import { FaStar } from "react-icons/fa6";
import Link from "next/link";

const FeaturedItems = () => {
  const cards = [
    {
      title: "ptcLAB - Pay Per Click Platform",
      image: card1,
      icon: FaLaravel,
      course: "Laravel",
      price: 79,
    },
    {
      title: "ViserBank - Digital Banking System",
      image: card2,
      icon: FaLaravel,
      course: "Laravel",
      price: 59,
    },
    {
      title: "HYIPLAB - Complete HYIP Investment System",
      image: card3,
      icon: FaLaravel,
      course: "Laravel",
      price: 119,
    },
    {
      title: "SignalLab - Forex And Crypto Trading Signal Platform",
      image: card4,
      icon: FaLaravel,
      course: "Laravel",
      price: 49,
    },
  ];

  return (
    <div className="mt-20 lg:mt-0 lg:my-20 lg:w-[85%] lg:mx-auto mx-5 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16">
      <div className="bg-[#0088FF] h-full lg:h-[700px] flex justify-center items-center mb-20 rounded-lg relative">
        <div>
          <h1 className="text-xl lg:text-4xl font-bold text-white px-5 lg:w-6/12 mx-auto">
            Featured Items
          </h1>
          <p className="p-5 lg:w-6/12 mx-auto text-white lg:font-medium leading-relaxed">
            Discover our featured software solutions that can help you achieve
            your business goals.
          </p>
          <div className="lg:w-6/12 mx-auto p-5">
            <button className="text-white hover:bg-white hover:text-[#0088FF] duration-700 ease-in-out  border border-white rounded-lg py-4 px-8 uppercase text-sm font-medium">
              view all featured items
            </button>
          </div>
        </div>
        <div>
          <Image
            src={featured1}
            alt="feature-shape"
            className="absolute top-0 right-0"
          />
          <Image
            src={featured2}
            alt="feature-shape"
            className="absolute bottom-0  left-0"
          />
        </div>
      </div>
      <div className="h-full lg:h-[700px] mt-5 lg:mt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {cards.map((card) => (
            <Link key={card.price} href={`/product/${card.title}`}>
              <Card >
                <Image
                  src={card.image}
                  alt="card-image"
                  className="rounded-t-md"
                />

                <CardBody>
                  <Typography
                    color="blue-gray"
                    className="mb-2 text-sm font-bold"
                  >
                    {card.title}
                  </Typography>
                  <div className="flex justify-between">
                    <Typography className="flex gap-x-1 text-[#FDB63A] mt-[6px]">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </Typography>
                    <button className="border px-2 py-[3px] rounded hover:bg-[#0088FF] hover:text-white font-medium duration-700 ease-in-out">
                      live preview
                    </button>
                  </div>
                  <div className="border-b-2 py-2"></div>
                  <div className="mt-2 flex justify-between mb-0 pb-0">
                    <div className="flex items-center gap-x-3 ">
                      <card.icon className="h-8 w-8 mt-1 bg-red-400/30 text-red-400 p-2 rounded" />
                      <h1 className="text-red-400 text-sm font-medium">
                        {card.course}
                      </h1>
                    </div>
                    <div className=" font-bold">$ {card.price}</div>
                  </div>
                </CardBody>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedItems;
