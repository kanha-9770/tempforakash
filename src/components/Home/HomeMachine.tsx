"use client";

import React, { useState } from "react";
import Stepper from "../ui/Stepper";
import { cardsData, HomeMachineCarousel } from "./Common/HomeMachineCarousel";
const HomeMachine: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const categories = ["all", "cup", "bowl", "bag", "plate", "straw"];
  const filteredCardsData =
    categories[activeStep] === "all"
      ? cardsData
      : cardsData.filter((card) => card.category === categories[activeStep]);

  return (
    <div className="h-full w-screen max-w-screen-2xl mx-auto">
      <Stepper onStepChange={setActiveStep} />
      <div className="h-[90%]  mt-4 lg:ml-0">
        <HomeMachineCarousel filteredCardsData={filteredCardsData} />
      </div>
    </div>
  );
};

export default HomeMachine;
