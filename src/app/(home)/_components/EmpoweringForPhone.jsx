import React from "react";
import Image from "next/image";
import idea from "../../../assets/image/empowering/how-work11.svg";
import research from "../../../assets/image/empowering/how-work21.svg";
import ui from "../../../assets/image/empowering/how-work31.svg";
import development from "../../../assets/image/empowering/how-work41.svg";
import domain from "../../../assets/image/empowering/how-work51.svg";
import seo from "../../../assets/image/empowering/how-work61.svg";
import success from "../../../assets/image/empowering/how-work71.svg";

const EmpoweringForPhone = () => {
  const cards = [
    {
      title: "Idea-Generation",
      image: idea,
      description:
        "We generate innovative ideas based on your requirements and market trends to lay the foundation for your project.",
    },
    {
      title: "Research",
      image: research,
      description:
        "Thorough market research enables us to gather insights and define strategies for your project&apos;s success.",
    },
    {
      title: "UI/UX",
      image: ui,
      description:
        "Our expert designers create visually appealing interfaces and seamless user experiences for maximum engagement.",
    },
    {
      title: "Development",
      image: development,
      description:
        "Our skilled developers bring your ideas to life, crafting robust and scalable solutions.",
    },
    {
      title: "Domain-Hosting",
      image: domain,
      description:
        "We provide reliable hosting solutions, ensuring your website or application remains secure and accessible.",
    },
    {
      title: "SEO",
      image: seo,
      description:
        "Our SEO strategies enhance your online visibility, driving targeted traffic and increasing organic search rankings.",
    },
    {
      title: "Success",
      image: success,
      description:
        "We measure success through continuous evaluation, optimization, and delivering exceptional results for your digital venture.",
    },
  ];
  return (
    <div className="mt-20 lg:mt-0 lg:my-20 lg:w-[85%] lg:mx-auto mx-5 lg:hidden">
      <div className="lg:w-8/12 mx-auto">
        <h1 className="text-xl lg:text-[44px] font-bold text-center">
          How We Empowering Toward Success
        </h1>
        <p className="mt-10 text-center lg:mx-6">
          A transparent journey to digital excellence. Discover our systematic
          approach, from envisioning your goals to delivering tailored
          solutions, as we collaborate to turn your vision into reality.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-10">
        {cards.map((card) => (
          <div key={card.title} className="p-5 border">
            <div className="flex justify-center">
              <Image
                src={card.image}
                alt="course image"
                className="bg-blue-400 rounded-full h-12 w-12 p-3"
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

export default EmpoweringForPhone;
