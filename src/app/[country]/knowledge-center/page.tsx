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
        "At Nessco India, our Knowledge Center is your ultimate resource for mastering every aspect of your business...",
      icon: FaBoxOpen,
    },
    {
      number: 2,
      title: "Know Your Machine",
      description:
        "At Nessco India, our Knowledge Center is your ultimate resource for mastering every aspect of your business...",
      icon: FaCogs,
    },
    {
      number: 3,
      title: "Know Your Business",
      description:
        "At Nessco India, our Knowledge Center is your ultimate resource for mastering every aspect of your business...",
      icon: FaChartLine,
    },
  ];
  return (
    <div className="h-full flex flex-col  bg-black  w-full ">
      <HeroSection />
      <SubSection/>
      <div className=" bg-slate-950 flex flex-col gap-4 px-10">
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
  );
};

export default page;
