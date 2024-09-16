import HeroSection from "@/components/knowledgeCenter/HeroSection";
import { SubSection } from "@/components/knowledgeCenter/SubSection";
import React from "react";

const page = () => {
  return (
    <div className="h-full bg-black  w-full ">
      <HeroSection />
      <SubSection/>
    </div> 
  );
};

export default page;
