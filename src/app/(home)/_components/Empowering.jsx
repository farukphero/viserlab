"use client";
import React, { useState } from "react";
import Image from "next/image";
import idea from "../../../assets/image/empowering/how-work11.svg";
import research from "../../../assets/image/empowering/how-work21.svg";
import ui from "../../../assets/image/empowering/how-work31.svg";
import development from "../../../assets/image/empowering/how-work41.svg";
import domain from "../../../assets/image/empowering/how-work51.svg";
import seo from "../../../assets/image/empowering/how-work61.svg";
import success from "../../../assets/image/empowering/how-work71.svg";

const Empowering = () => {
  const [hoveredComponent, setHoveredComponent] = useState("");

  const handleMouseEnter = (name) => {
    setHoveredComponent(name);
  };

  const handleMouseLeave = () => {
    setHoveredComponent("");
  };

  return (
    <section className="hidden lg:block">
      <div className="mt-20 lg:mt-0 lg:my-20 lg:w-[85%] lg:mx-auto mx-5">
        <div className="lg:w-8/12 mx-auto">
          <h1 className="text-xl lg:text-[42px] font-bold text-center">
            How We Empowering Toward Success
          </h1>
          <p className="mt-10 text-center lg:mx-6">
            A transparent journey to digital excellence. Discover our systematic
            approach, from envisioning your goals to delivering tailored
            solutions, as we collaborate to turn your vision into reality.
          </p>
        </div>
        <div>
          <div className="relative my-40">
            <div className="border-b-2 border-dashed border-blue-400 "></div>
            <div className="flex justify-between">
              {/* 1 st  */}
              <div
                onMouseEnter={() => handleMouseEnter("idea")}
                onMouseLeave={handleMouseLeave}
              >
                <div className="relative">
                  <div
                    className={`absolute -top-[17rem]   duration-700 ease-in-out w-60 bg-white rounded-md shadow-md p-3 transition-transform ${
                      hoveredComponent === "idea"
                        ? "block duration-700 ease-in-out transition-transform"
                        : "hidden duration-700 ease-in-out transition-transform"
                    }`}
                  >
                    We generate innovative ideas based on your requirements and
                    market trends to lay the foundation for your project.
                  </div>

                  <Image
                    src={idea}
                    alt="idea"
                    className="bg-blue-400 rounded-full h-12 w-12 p-3 absolute -top-28 ml-10"
                  />
                </div>

                <div className="absolute -top-16  border-r border-blue-400 h-16 ml-16"></div>
                <div
                  className={`font-bold ${
                    hoveredComponent === "idea" ? "text-[#42A5F5]" : ""
                  }`}
                >
                  Idea-Generation
                </div>
              </div>
              {/* 2nd */}

              <div
                onMouseEnter={() => handleMouseEnter("research")}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className={`font-bold absolute -top-7 ${
                    hoveredComponent === "research" ? "text-[#42A5F5]" : ""
                  }`}
                >
                  {" "}
                  Research{" "}
                </div>
                <div className="relative">
                  <div
                    className={`absolute top-[7rem] right-0 duration-700 ease-in-out w-60 bg-white rounded-md shadow-md p-3 transition-transform ${
                      hoveredComponent === "research"
                        ? "block duration-700 ease-in-out transition-transform"
                        : "hidden duration-700 ease-in-out transition-transform"
                    }`}
                  >
                    Thorough market research enables us to gather insights and
                    define strategies for your project&apos;s success.
                  </div>

                  <Image
                    src={research}
                    alt="idea"
                    className="bg-blue-400 rounded-full h-12 w-12 p-3 absolute top-16  -ml-6"
                  />
                </div>

                <div className="absolute top-0  border-r border-blue-400 h-16  "></div>
                <div className=" invisible">Idea-Generation</div>
              </div>
              {/* 3 rd  */}
              <div
                onMouseEnter={() => handleMouseEnter("ui")}
                onMouseLeave={handleMouseLeave}
              >
                <div className="relative">
                  <div
                    className={`absolute -top-[17rem] right-0 duration-700 ease-in-out w-60 bg-white rounded-md shadow-md p-3 transition-transform ${
                      hoveredComponent === "ui"
                        ? "block duration-700 ease-in-out transition-transform"
                        : "hidden duration-700 ease-in-out transition-transform"
                    }`}
                  >
                    Our expert designers create visually appealing interfaces
                    and seamless user experiences for maximum engagement.
                  </div>
                  <Image
                    src={ui}
                    alt="idea"
                    className="bg-blue-400 rounded-full h-12 w-12 p-3 absolute -top-28 -ml-6"
                  />
                </div>

                <div className="absolute -top-16  border-r border-blue-400 h-16  "></div>
                <div
                  className={`font-bold ${
                    hoveredComponent === "ui" ? "text-[#42A5F5]" : ""
                  }`}
                >
                  {" "}
                  UI/UX <span className=" invisible">Generation</span>{" "}
                </div>
              </div>
              {/* 4th
               */}
              <div
                onMouseEnter={() => handleMouseEnter("development")}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className={`font-bold absolute -top-7 ${
                    hoveredComponent === "development" ? "text-[#42A5F5]" : ""
                  }`}
                >
                  Development
                </div>
                <div className="relative">
                  <div
                    className={`absolute top-[7rem] right-0 duration-700 ease-in-out w-60 bg-white rounded-md shadow-md p-3 transition-transform ${
                      hoveredComponent === "development"
                        ? "block duration-700 ease-in-out transition-transform"
                        : "hidden duration-700 ease-in-out transition-transform"
                    }`}
                  >
                    Our skilled developers bring your ideas to life, crafting
                    robust and scalable solutions.
                  </div>
                  <Image
                    src={development}
                    alt="idea"
                    className="bg-blue-400 rounded-full h-12 w-12 p-3 absolute top-16  -ml-6"
                  />
                </div>

                <div className="absolute top-0  border-r border-blue-400 h-16  "></div>
                <div className=" invisible">Idea-Generation</div>
              </div>
              {/* 5 th  */}
              <div
                onMouseEnter={() => handleMouseEnter("domain")}
                onMouseLeave={handleMouseLeave}
              >
                <div className="relative">
                  <div
                    className={`absolute -top-[17rem] right-0 duration-700 ease-in-out w-60 bg-white rounded-md shadow-md p-3 transition-transform ${
                      hoveredComponent === "domain"
                        ? "block duration-700 ease-in-out transition-transform"
                        : "hidden duration-700 ease-in-out transition-transform"
                    }`}
                  >
                    We provide reliable hosting solutions, ensuring your website
                    or application remains secure and accessible.
                  </div>
                  <Image
                    src={domain}
                    alt="idea"
                    className="bg-blue-400 rounded-full h-12 w-12 p-3 absolute -top-28 -ml-6"
                  />
                </div>

                <div className="absolute -top-16  border-r border-blue-400 h-16  "></div>
                <div
                  className={`font-bold   ${
                    hoveredComponent === "domain" ? "text-[#42A5F5]" : ""
                  }`}
                >
                  Domain-Hosting
                </div>
              </div>
              {/* 6 th  */}
              <div
                onMouseEnter={() => handleMouseEnter("seo")}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className={`font-bold absolute -top-7 ${
                    hoveredComponent === "seo" ? "text-[#42A5F5]" : ""
                  }`}
                >
                  SEO
                </div>
                <div className="relative">
                  <div
                    className={`absolute top-[7rem] right-0 duration-700 ease-in-out w-60 bg-white rounded-md shadow-md p-3 transition-transform ${
                      hoveredComponent === "seo"
                        ? "block duration-700 ease-in-out transition-transform"
                        : "hidden duration-700 ease-in-out transition-transform"
                    }`}
                  >
                    Our SEO strategies enhance your online visibility, driving
                    targeted traffic and increasing organic search rankings.
                  </div>
                  <Image
                    src={seo}
                    alt="idea"
                    className="bg-blue-400 rounded-full h-12 w-12 p-3 absolute top-16  -ml-6"
                  />
                </div>

                <div className="absolute top-0  border-r border-blue-400 h-16  "></div>
                <div className=" invisible">Idea-Generation</div>
              </div>
              {/* 7th  */}
              <div
                onMouseEnter={() => handleMouseEnter("success")}
                onMouseLeave={handleMouseLeave}
              >
                <div className="relative">
                  <div
                    className={`absolute -top-[18rem] right-0 duration-700 ease-in-out w-60 bg-white rounded-md shadow-md p-3 transition-transform ${
                      hoveredComponent === "success"
                        ? "block duration-700 ease-in-out transition-transform"
                        : "hidden duration-700 ease-in-out transition-transform"
                    }`}
                  >
                    We measure success through continuous evaluation,
                    optimization, and delivering exceptional results for your
                    digital venture.
                  </div>
                  <Image
                    src={success}
                    alt="idea"
                    className="bg-blue-400 rounded-full h-12 w-12 p-3 absolute -top-28 -ml-6"
                  />
                </div>

                <div className="absolute -top-16  border-r border-blue-400 h-16  "></div>
                <div className={`font-bold ${
                    hoveredComponent === "success" ? "text-[#42A5F5]" : ""
                  }`}>Success</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Empowering;
