"use client"
import React from "react";
import { NavBar } from "../(home)/_components/NavBar/NavBar";
import { FaLaravel } from "react-icons/fa";
import card1 from "../../assets/image/featured image/28811404_cover.jpg";
import card2 from "../../assets/image/featured image/29668217_cover.jpg";
import card3 from "../../assets/image/featured image/33575024_cover.jpg";
import card4 from "../../assets/image/featured image/33821085_cover.jpg";
import Cards from "../_components/Cards";

const ProductPage = () => {
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
    <div>
      <NavBar />
      <Cards cards={cards} />
    </div>
  );
};

export default ProductPage;
