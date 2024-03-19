import React from "react";
import { BsArrowRight } from "react-icons/bs";
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

const Comprehensive = () => {
  return (
    <section className="hidden lg:block">
        <div className="mt-20 lg:mt-0 lg:my-20 lg:w-[85%] lg:mx-auto mx-5">
      <div className="lg:w-8/12 mx-auto mb-24">
        <h1 className="text-xl lg:text-[44px] font-bold text-center">
          Our Comprehensive Offerings
        </h1>
        <p className="mt-10 text-center lg:mx-6">
          Discover the power of digital transformation with Viserlab&apos;s
          diverse offerings. from cutting-edge web and mobile applications to
          expert consultancy, we deliver custom solutions to drive your digital
          success.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {/* 1st column  */}
        <div className="flex flex-col gap-5  mt-10">
          {/* 1 st  */}
          <div className="p-5 border">
            <div className="flex justify-center">
              <Image src={laravel} alt="course image" className="h-16 w-16" />
            </div>
            <h1 className="my-4 text-xl lg:text-2xl font-bold text-center">
              Laravel Script
            </h1>
            <p className="text-center">
              Ready-made and custom-built Laravel scripts for efficient web
              application development.
            </p>
            <div className="my-8 flex justify-center">
              <BsArrowRight className="h-6 w-6" />
            </div>
          </div>
          {/* 2nd  */}
          <div className="p-5 border">
            <div className="flex justify-center">
              <Image src={shared} alt="course image" className="h-16 w-16" />
            </div>
            <h1 className="my-4 text-xl lg:text-2xl font-bold text-center">
              Shared Hosting
            </h1>
            <p className="text-center">
              Affordable web hosting solutions for small to medium-sized
              websites.
            </p>
            <div className="my-8 flex justify-center">
              <BsArrowRight className="h-6 w-6" />
            </div>
          </div>
          {/* 3rd  */}
          <div className="p-5 border">
            <div className="flex justify-center">
              <Image src={back_link} alt="course image" className="h-16 w-16" />
            </div>
            <h1 className="my-4 text-xl lg:text-2xl font-bold text-center">
              Backlink
            </h1>
            <p className="text-center">
              Quality backlink services to improve website visibility and search
              engine rankings.
            </p>
            <div className="my-8 flex justify-center">
              <BsArrowRight className="h-6 w-6" />
            </div>
          </div>
        </div>
        {/* 2nd column  */}
        <div className="flex flex-col gap-5  -mt-10">
          {/* 1 st  */}
          <div className="p-5 border">
            <div className="flex justify-center">
              <Image src={mobile} alt="course image" className="h-16 w-16" />
            </div>
            <h1 className="my-4 text-xl lg:text-2xl font-bold text-center">
              Mobile Apps
            </h1>
            <p className="text-center">
              Ready-made and custom-built mobile apps for iOS and Android
              platforms.
            </p>
            <div className="my-8 flex justify-center">
              <BsArrowRight className="h-6 w-6" />
            </div>
          </div>
          {/* 2nd  */}
          <div className="p-5 border">
            <div className="flex justify-center">
              <Image src={vps} alt="course image" className="h-16 w-16" />
            </div>
            <h1 className="my-4 text-xl lg:text-2xl font-bold text-center">
              VPS Hosting
            </h1>
            <p className="text-center">
              Scalable and reliable Virtual Private Server hosting for better
              performance and control.
            </p>
            <div className="my-8 flex justify-center">
              <BsArrowRight className="h-6 w-6" />
            </div>
          </div>
          {/* 3rd  */}
          <div className="p-5 border">
            <div className="flex justify-center">
              <Image src={press} alt="course image" className="h-16 w-16" />
            </div>
            <h1 className="my-4 text-xl lg:text-2xl font-bold text-center">
              Press Release
            </h1>
            <p className="text-center">
              Our expert team crafts and strategically distributes press
              releases to generate widespread publicity and media coverage.
            </p>
            <div className="my-8 flex justify-center">
              <BsArrowRight className="h-6 w-6" />
            </div>
          </div>
        </div>
        {/* 3rd column  */}
        <div className="flex flex-col gap-5  mt-14">
          {/* 1 st  */}
          <div className="p-5 border">
            <div className="flex justify-center">
              <Image src={ui} alt="course image" className="h-16 w-16" />
            </div>
            <h1 className="my-4 text-xl lg:text-2xl font-bold text-center">
              UI/UX Design
            </h1>
            <p className="text-center">
              Creative and user-centric design solutions for websites and
              applications.
            </p>
            <div className="my-8 flex justify-center">
              <BsArrowRight className="h-6 w-6" />
            </div>
          </div>
          {/* 2nd  */}
          <div className="p-5 border">
            <div className="flex justify-center">
              <Image src={dedicated} alt="course image" className="h-16 w-16" />
            </div>
            <h1 className="my-4 text-xl lg:text-2xl font-bold text-center">
              Dedicated Server
            </h1>
            <p className="text-center">
              High-performance servers exclusively dedicated to meet specific
              project requirements.
            </p>
            <div className="my-8 flex justify-center">
              <BsArrowRight className="h-6 w-6" />
            </div>
          </div>
          {/* 3rd  */}
          <div className="p-5 border">
            <div className="flex justify-center">
              <Image src={dm} alt="course image" className="h-16 w-16" />
            </div>
            <h1 className="my-4 text-xl lg:text-2xl font-bold text-center">
              Digital Marketing
            </h1>
            <p className="text-center">
              Comprehensive strategies to promote businesses online and increase
              brand visibility.
            </p>
            <div className="my-8 flex justify-center">
              <BsArrowRight className="h-6 w-6" />
            </div>
          </div>
        </div>
        {/* 4th column  */}
        <div className="flex flex-col gap-5  -mt-11">
          {/* 1 st  */}
          <div className="p-5 border">
            <div className="flex justify-center">
              <Image src={wordpress} alt="course image" className="h-16 w-16" />
            </div>
            <h1 className="my-4 text-xl lg:text-2xl font-bold text-center">
              Wordpress Plugins
            </h1>
            <p className="text-center">
              Ready-made and custom-built plugins to enhance functionality in
              WordPress websites.
            </p>
            <div className="my-8 flex justify-center">
              <BsArrowRight className="h-6 w-6" />
            </div>
          </div>
          {/* 2nd  */}
          <div className="p-5 border">
            <div className="flex justify-center">
              <Image src={smtp} alt="course image" className="h-16 w-16" />
            </div>
            <h1 className="my-4 text-xl lg:text-2xl font-bold text-center">
              SMTP Server
            </h1>
            <p className="text-center">
              Secure and efficient server setup for streamlined email
              communication.
            </p>
            <div className="my-8 flex justify-center">
              <BsArrowRight className="h-6 w-6" />
            </div>
          </div>
          {/* 3rd  */}
          <div className="p-5 border">
            <div className="flex justify-center">
              <Image src={branding} alt="course image" className="h-16 w-16" />
            </div>
            <h1 className="my-4 text-xl lg:text-2xl font-bold text-center">
              Branding
            </h1>
            <p className="text-center">
              Crafting unique brand identities through logo design, messaging,
              and visual elements.
            </p>
            <div className="my-8 flex justify-center">
              <BsArrowRight className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Comprehensive;
