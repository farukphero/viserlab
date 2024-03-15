import React from "react";
import Image from "next/image";
import image1 from "../../../assets/image/effective-work/how-to-deal1.svg";
import image2 from "../../../assets/image/effective-work/how-to-deal2.svg";
import image3 from "../../../assets/image/effective-work/how-to-deal3.svg";
import image4 from "../../../assets/image/effective-work/how-to-deal4.svg";

const EffectiveWork = () => {
  return (
    <section className="hidden lg:block">
      <div className="mt-20 lg:mt-60 lg:w-[85%] lg:mx-auto mx-5">
        <div className="lg:w-[68%] mx-auto">
          <h1 className="text-xl lg:text-[44px] font-bold text-center">
            Our Effective Work Process
          </h1>
          <p className="mt-10 text-center lg:mx-6">
            Our methodology for building strong client relationships. Discover
            how we foster open communication, prioritize your goals, and deliver
            exceptional results through our collaborative approach to working
            together.
          </p>
        </div>
        <div className="ml-20">
          <div className="w-[650px] mx-auto">
            <div className="flex justify-center gap-x-10 mt-20">
              <div>
                <Image
                  src={image1}
                  alt=""
                  className="bg-[#EDF7FF] h-40 w-40 p-5 z-50 rounded-md"
                />
              </div>
              <div className="flex justify-center">
                <div>
                  <div>
                    <div>
                      <div className="bg-[#d0eaff] rounded-full p-2">
                        <div className="bg-[#42A5F5] font-bold text-white text-xl h-14 w-14 rounded-full flex justify-center items-center">
                          01
                        </div>
                      </div>
                    </div>

                    <div className="border-l-2 border-dashed border-[#42A5F5] h-[150px] ml-[36px]"></div>
                  </div>
                </div>
              </div>
              <div className="w-72">
                <h1 className="text-2xl font-semibold">Discuss</h1>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We initiate the process by engaging in open and thorough
                  discussions with you. We listen attentively to understand your
                  specific requirements, goals, and expectations.
                </p>
              </div>
            </div>
          </div>
          <div className="w-[800px] mx-auto">
            <div className="flex justify-center gap-x-10  mr-[150px] ">
              <div className="w-80">
                <h1 className="text-2xl font-semibold text-right">Deal</h1>
                <p className="text-sm text-gray-600 leading-relaxed text-right">
                  After gaining a deep understanding of your needs, We work
                  closely with you, crafting tailored proposals and transparent
                  deal that align with your budget and objectives.
                </p>
              </div>

              <div className="flex justify-center  ">
                <div>
                  <div>
                    <div>
                      <div className="bg-[#d0eaff] rounded-full p-2">
                        <div className="bg-[#42A5F5] font-bold text-white text-xl h-14 w-14 rounded-full flex justify-center items-center">
                          02
                        </div>
                      </div>
                    </div>

                    <div className="border-l-2 border-dashed border-[#42A5F5] h-[150px] ml-[36px]"></div>
                  </div>
                </div>
              </div>
              <div className="w-72">
                <Image
                  src={image2}
                  alt=""
                  className="bg-[#EDF7FF] h-40 w-40 p-5 z-50 rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="w-[650px] mx-auto">
            <div className="flex justify-center gap-x-10">
              <div>
                <Image
                  src={image3}
                  alt=""
                  className="bg-[#EDF7FF] h-40 w-40 p-5 z-50 rounded-md"
                />
              </div>
              <div className="flex justify-center">
                <div>
                  <div>
                    <div>
                      <div className="bg-[#d0eaff] rounded-full p-2">
                        <div className="bg-[#42A5F5] font-bold text-white text-xl h-14 w-14 rounded-full flex justify-center items-center">
                          03
                        </div>
                      </div>
                    </div>

                    <div className="border-l-2 border-dashed border-[#42A5F5] h-[150px] ml-[36px]"></div>
                  </div>
                </div>
              </div>
              <div className="w-72">
                <h1 className="text-2xl font-semibold">Develop</h1>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Once the deal is finalized, our expert team leverages
                  technical prowess and industry insights to develop innovative
                  solutions that precisely cater to your requirements, keeping
                  you involved throughout the process.
                </p>
              </div>
            </div>
          </div>
          <div className="w-[800px] mx-auto">
            <div className="flex justify-center gap-x-10  mr-[150px] ">
              <div className="w-80">
                <h1 className="text-2xl font-semibold text-right">Delivery</h1>
                <p className="text-sm text-gray-600 leading-relaxed text-right">
                  With meticulous attention to detail, we ensure timely and
                  successful project delivery, exceeding expectations and
                  prioritizing your satisfaction.
                </p>
              </div>

              <div className="flex justify-center  ">
                <div>
                  <div>
                    <div>
                      <div className="bg-[#d0eaff] rounded-full p-2">
                        <div className="bg-[#42A5F5] font-bold text-white text-xl h-14 w-14 rounded-full flex justify-center items-center">
                          04
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-72">
                <Image
                  src={image4}
                  alt=""
                  className="bg-[#EDF7FF] h-40 w-40 p-5 z-50 rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EffectiveWork;
