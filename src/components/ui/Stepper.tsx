import React, { useState, useRef, useEffect } from "react";
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
  const stepperRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const steps = [
    { name: "All paper Products", icon: <FaRegPaperPlane /> },
    { name: "Paper cup machines", icon: <FaCoffee /> },
    { name: "Paper bowl machines", icon: <FaUtensils /> },
    { name: "Paper bag machines", icon: <FaShoppingBag /> },
    { name: "Paper plate machines", icon: <FaConciergeBell /> },
    { name: "Paper straw machines", icon: <FaStarHalf /> },
    { name: "Paper wrap machines", icon: <FaRegPaperPlane /> },
    { name: "Napkin machines", icon: <FaCoffee /> },
    { name: "Tissue machines", icon: <FaUtensils /> },
    { name: "new products", icon: <FaShoppingBag /> },
    { name: "Other products", icon: <FaShoppingBag /> },
  ];

  const handleClick = (index: number) => {
    setActiveStep(index);
    onStepChange(index);
  };

  useEffect(() => {
    if (stepperRef.current) {
      checkScrollability();
    }
  }, []);

  const checkScrollability = () => {
    if (stepperRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = stepperRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (stepperRef.current) {
      stepperRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (stepperRef.current) {
      stepperRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="sticky bg-[#f2f2f2]/80 backdrop-blur-xl top-14 left-0 w-full z-30">
      <div className="relative flex items-center justify-center w-full py-2 mx-auto">
        <div
          className="relative flex items-center justify-start overflow-x-scroll scrollbar-hide w-full px-8"
          ref={stepperRef}
          onScroll={checkScrollability}
        >
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`flex flex-col items-center relative cursor-pointer ${
                  index === activeStep ? "text-black" : "text-gray-500"
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
                <span className="text-xs lg:text-sm mt-2 font-poppins text-center w-20 lg:w-24">
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
    </div>
  );
};

export default Stepper;
