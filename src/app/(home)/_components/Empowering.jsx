import React from "react";
import Image from "next/image";
import idea from "../../../assets/image/empowering/how-work11.svg";
import research from "../../../assets/image/empowering/how-work21.svg";
import ui from "../../../assets/image/empowering/how-work31.svg";
import development from "../../../assets/image/empowering/how-work41.svg";
import domain from "../../../assets/image/empowering/how-work51.svg";
import seo from "../../../assets/image/empowering/how-work61.svg";
import success from "../../../assets/image/empowering/how-work71.svg";

const Empowering = () => {
  return (
    <section>
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
              <div>
                <div className="relative">
                  <Image
                    src={idea}
                    alt="idea"
                    className="bg-blue-400 rounded-full h-12 w-12 p-3 absolute -top-28 ml-10"
                  />
                </div>

                <div className="absolute -top-16  border-r border-blue-400 h-16 ml-16"></div>
                <div>Idea-Generation</div>
              </div>
              {/* 2nd */}

              <div>
                <div className="absolute -top-7"> Research </div>
                <div className="relative">
                  <Image
                    src={idea}
                    alt="idea"
                    className="bg-blue-400 rounded-full h-12 w-12 p-3 absolute top-16  -ml-6"
                  />
                </div>

                <div className="absolute top-0  border-r border-blue-400 h-16  "></div>
                <div className=" invisible">Idea-Generation</div>
              </div>
              {/* 3 rd  */}
              <div>
                <div className="relative">
                  <Image
                    src={idea}
                    alt="idea"
                    className="bg-blue-400 rounded-full h-12 w-12 p-3 absolute -top-28 -ml-6"
                  />
                </div>

                <div className="absolute -top-16  border-r border-blue-400 h-16  "></div>
                <div> UI/UX </div>
              </div>
              {/* 4th
               */}
              <div>
                <div className="absolute -top-7">Development</div>
                <div className="relative">
                  <Image
                    src={idea}
                    alt="idea"
                    className="bg-blue-400 rounded-full h-12 w-12 p-3 absolute top-16  -ml-6"
                  />
                </div>

                <div className="absolute top-0  border-r border-blue-400 h-16  "></div>
                <div className=" invisible">Idea-Generation</div>
              </div>
              {/* 5 th  */}
              <div>
                <div className="relative">
                  <Image
                    src={idea}
                    alt="idea"
                    className="bg-blue-400 rounded-full h-12 w-12 p-3 absolute -top-28 -ml-6"
                  />
                </div>

                <div className="absolute -top-16  border-r border-blue-400 h-16  "></div>
                <div>Domain-Hosting</div>
              </div>
              {/* 6 th  */}
              <div>
                <div className="absolute -top-7">SEO</div>
                <div className="relative">
                  <Image
                    src={idea}
                    alt="idea"
                    className="bg-blue-400 rounded-full h-12 w-12 p-3 absolute top-16  -ml-6"
                  />
                </div>

                <div className="absolute top-0  border-r border-blue-400 h-16  "></div>
                <div className=" invisible">Idea-Generation</div>
              </div>
              {/* 7th  */}
              <div>
                <div className="relative">
                  <Image
                    src={idea}
                    alt="idea"
                    className="bg-blue-400 rounded-full h-12 w-12 p-3 absolute -top-28 -ml-6"
                  />
                </div>

                <div className="absolute -top-16  border-r border-blue-400 h-16  "></div>
                <div>Success</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Empowering;
