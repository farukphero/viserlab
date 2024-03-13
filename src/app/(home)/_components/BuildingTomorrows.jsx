import React from "react";
import image from "../../../assets/image/about-img (1).png";
import Image from "next/image";

const BuildingTomorrows = () => {
  return (
    <div className="lg:my-20 lg:w-[85%] lg:mx-auto mx-5 grid grid-cols-1 lg:grid-cols-2">
      <div className="lg:hidden block">
        <h1 className="text-xl lg:text-5xl font-bold  leading-tight">
          Building Tomorrow&apos;s Digital World
        </h1>
        <p className="py-6">
          As a leading provider of digital solutions, ViserLab specializes in a
          wide range of services to help businesses thrive in the ever-changing
          digital landscape.
        </p>
      </div>
      <Image src={image} alt="about image" />
      <div>
        <div className="hidden lg:block">
          <h1 className="text-xl lg:text-5xl font-bold  leading-tight">
            Building Tomorrow&apos;s <br /> Digital World
          </h1>
          <p className="pt-6">
            As a leading provider of digital solutions, ViserLab specializes in
            a wide range of services to help businesses thrive in the
            ever-changing digital landscape.
          </p>
        </div>
        <div>
          <p className="py-6">
            ViserLab offers a comprehensive range of digital services to fuel
            your success. From web application development and mobile
            application development to UI/UX design, domain and hosting
            services, digital marketing, and tech consultancy, we cover all
            aspects of your digital journey. Our team of skilled professionals
            combines technical expertise and industry insights to deliver
            exceptional results in these areas. Whether you need a powerful web
            application, a user-friendly mobile app, captivating UI/UX design,
            reliable domain and hosting solutions, effective digital marketing
            strategies, or expert tech consultancy, ViserLab is your trusted
            partner.
          </p>
          <p>
            Partner with ViserLab to unlock your digital potential and achieve
            growth, innovation, and success in today&apos;s competitive digital
            market.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BuildingTomorrows;
