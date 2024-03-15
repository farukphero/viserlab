import React from "react";
import Image from "next/image";
import image1 from "../../../assets/image/effective-work/how-to-deal1.svg";
import image2 from "../../../assets/image/effective-work/how-to-deal2.svg";
import image3 from "../../../assets/image/effective-work/how-to-deal3.svg";
import image4 from "../../../assets/image/effective-work/how-to-deal4.svg";

const EffectiveWorkForPhone = () => {
  const cards = [
    {
      title: "Discuss",
      image: image1,
      description:
        "We initiate the process by engaging in open and thorough discussions with you. We listen attentively to understand your specific requirements, goals, and expectations.",
    },
    {
      title: "Deal",
      image: image2,
      description:
        "After gaining a deep understanding of your needs, We work closely with you, crafting tailored proposals and transparent deal that align with your budget and objectives.",
    },

    {
      title: "Develop",
      image: image3,
      description:
        "Once the deal is finalized, our expert team leverages technical prowess and industry insights to develop innovative solutions that precisely cater to your requirements, keeping you involved throughout the process.",
    },
    {
      title: "Delivery",
      image: image4,
      description:
        "With meticulous attention to detail, we ensure timely and successful project delivery, exceeding expectations and prioritizing your satisfaction.",
    },
  ];
  return (
    <div className="mt-20 lg:mt-0 lg:my-20 lg:w-[85%] lg:mx-auto mx-5 lg:hidden">
      <div className="lg:w-[68%] mx-auto">
        <h1 className="text-xl lg:text-[44px] font-bold text-center">
          Our Effective Work Process
        </h1>
        <p className="mt-10 text-center lg:mx-6">
          Our methodology for building strong client relationships. Discover how
          we foster open communication, prioritize your goals, and deliver
          exceptional results through our collaborative approach to working
          together.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-10">
        {cards.map((card) => (
          <div key={card.title} className="p-5 border">
            <div className="flex justify-center">
              <Image
                src={card.image}
                alt="image"
                className="bg-[#EDF7FF] h-40 w-40 p-5 z-50 rounded-md"
              />
            </div>
            <h1 className="my-4 text-xl lg:text-2xl font-bold text-center">
              {card.title}
            </h1>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EffectiveWorkForPhone;
