import HeroSection from "@/components/knowledgeCenter/HeroSection";
import Section from "@/components/knowledgeCenter/Section";
import { SubSection } from "@/components/knowledgeCenter/SubSection";
import React from "react";
import { FaBoxOpen, FaCogs, FaChartLine } from "react-icons/fa";

const page = () => {
  const sections = [
    {
      number: 1,
      title: "Know Your Product",
      description:
        "At Nessco India, our Knowledge Center is your ultimate resource for mastering every aspect of your business. Whether it's understanding the nuances of your product, optimizing your machinery, or driving business growth, we provide the insights and tools you need to succeed. Our focus is on empowering you with the knowledge to make informed decisions, streamline operations, and enhance your competitive edge in the market.",
      icon: FaBoxOpen,
    },
    {
      number: 2,
      title: "Know Your Machine",
      description:
        "At Nessco India, our Knowledge Center is your ultimate resource for mastering every aspect of your business. Whether it's understanding the nuances of your product, optimizing your machinery, or driving business growth, we provide the insights and tools you need to succeed. Our focus is on empowering you with the knowledge to make informed decisions, streamline operations, and enhance your competitive edge in the market.",
      icon: FaCogs,
    },
    {
      number: 3,
      title: "Know Your Business",
      description:
        "At Nessco India, our Knowledge Center is your ultimate resource for mastering every aspect of your business. Whether it's understanding the nuances of your product, optimizing your machinery, or driving business growth, we provide the insights and tools you need to succeed. Our focus is on empowering you with the knowledge to make informed decisions, streamline operations, and enhance your competitive edge in the market.",
      icon: FaChartLine,
    },
  ];
  return (
    <div className="h-full flex flex-col  bg-black  w-full ">
      <HeroSection />
      <SubSection />
      <div className="h-screen flex flex-col -mt-20 z-50 gap-8 px-10 bg-gradient-to-b from-[#3a2e6d] via-[#4a3d81] to-[#6b63a5]">
        <div className="w-[93%] absolute -mt-48">
          {sections.map((section) => (
            <Section
              key={section.number}
              number={section.number}
              title={section.title}
              description={section.description}
              Icon={section.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
