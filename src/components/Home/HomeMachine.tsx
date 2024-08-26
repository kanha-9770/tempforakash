"use client";

import React, { useState } from "react";
import Stepper from "../ui/Stepper";
import { HomeMachineCarousel } from "./Common/HomeMachineCarousel";
import { cardsData } from "./Common/HomeMachineCarousel";

const HomeMachine: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const categories = [
    "all",
    "cup",
    "bowl",
    "bag",
    "plate",
    "straw",
  ];

  const filteredCardsData = categories[activeStep] === "all"
    ? cardsData
    : cardsData.filter(card => card.category === categories[activeStep]);

  return (
    <div className="h-full mt-14 ">
      <Stepper onStepChange={setActiveStep} />
      <div className="h-[90%] lg:mx-2 px-1 lg:px-4">
        <HomeMachineCarousel filteredCardsData={filteredCardsData} />
      </div>
    </div>
  );
};

export default HomeMachine;
