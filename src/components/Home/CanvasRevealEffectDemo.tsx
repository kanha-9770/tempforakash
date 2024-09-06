"use client";

import Image from "next/image";
import React, { useState } from "react";
import { GrAddCircle } from "react-icons/gr";
import { cardContents } from "../Constants";
import LottieAnimation from "../ui/LottieAnimation";
import Modal from "../ui/Modal"; // Import your modal component

const KnowMachine: React.FC = () => {
  const [openModalIndex, setOpenModalIndex] = useState<number | null>(null);

  const handleOpenModal = (index: number) => {
    setOpenModalIndex(index);
  };

  const handleCloseModal = () => {
    setOpenModalIndex(null);
  };

  return (
    <div className="lg:p-6 px-2 pb-24 lg:pb-32 lg:px-8 w-full h-full">
      {/* Container for the cards */}
      <div className="flex flex-col lg:flex-row lg:flex-wrap justify-around space-y-4 lg:space-y-0 ">
        {cardContents.map((content, index) => (
          <div
            key={index}
            className="relative bg-white rounded-3xl shadow-lg overflow-hidden w-full h-[12rem] lg:w-[31%] lg:h-[75vh] group flex-shrink-0"
          >
            <Image
              src={content.image}
              alt={content.title}
              height={400}
              width={400}
              className="h-full w-full object-cover" // Make sure the image covers the entire div properly
            />
            <div
              className="absolute top-0 z-30 right-0 m-2 cursor-pointer"
              onClick={() => handleOpenModal(index)}
            >
              <GrAddCircle size={30} className="text-white" />
            </div>
            <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-black to-transparent"></div>
            <div className="absolute bottom-4 lg:top-12 w-full h-16  flex items-center justify-center">
              <h2 className="font-semibold w-[60%] text-center text-xl lg:text-4xl text-white">
                {content.title}
              </h2>
            </div>
            <div className="absolute m-2 transform scale-[600%] bottom-32 right-1/2 translate-x-1/2 translate-y-1/2 transition-transform duration-300">
              <LottieAnimation
                animationData={content.lottieAnimation}
                className="h-4 w-4 lg:h-10 lg:w-10" // Example Tailwind CSS classes for size
              />
            </div>
          </div>
        ))}
      </div>

      {openModalIndex !== null && (
        <Modal
          image={cardContents[openModalIndex].image}
          title={cardContents[openModalIndex].title}
          firstname={cardContents[openModalIndex].title}
          description="" // Include any additional props for the modal here
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default KnowMachine;
