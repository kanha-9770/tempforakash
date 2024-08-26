import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaRegPaperPlane,
  FaCoffee,
  FaUtensils,
  FaShoppingBag,
  FaConciergeBell,
  FaStarHalf,
} from "react-icons/fa";

const Stepper: React.FC<{ onStepChange: (index: number) => void }> = ({
  onStepChange,
}) => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { name: "All paper Products", icon: <FaRegPaperPlane /> },
    { name: "Paper cup machines", icon: <FaCoffee /> },
    { name: "Paper bowl machines", icon: <FaUtensils /> },
    { name: "Paper bag machines", icon: <FaShoppingBag /> },
    { name: "Paper plate machines", icon: <FaConciergeBell /> },
    { name: "Paper straw machines", icon: <FaStarHalf /> },
  ];

  const handleClick = (index: number) => {
    setActiveStep(index);
    onStepChange(index);
  };

  return (
    <div className="sticky bg-[#f2f2f2]/80 backdrop-blur-xl top-14 left-0 w-full z-30">
      <div className="relative flex items-center justify-center w-full py-2 mx-auto">
        {/* Gradient Mask */}
        <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-[#f2f2f2]/90 to-transparent z-20 pointer-events-none"></div>

        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`flex flex-col items-center relative cursor-pointer ${
                index === activeStep ? "text-black" : "text-black"
              }`}
              onClick={() => handleClick(index)}
            >
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: index === activeStep ? 1.2 : 1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`relative h-8 w-8 flex items-center justify-center text-2xl ${
                  index === activeStep
                    ? "bg-blue-100 rounded-full p-2 shadow-lg"
                    : "p-2"
                }`}
              >
                {step.icon}
              </motion.div>
              <span className="text-xs mt-2 font-poppins text-center w-10">
                {step.name}
              </span>
            </motion.div>
            {index < steps.length - 1 && (
              <div className="flex items-center">
                <div className="h-1 border-t-2 w-4 lg:w-10"></div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Stepper;