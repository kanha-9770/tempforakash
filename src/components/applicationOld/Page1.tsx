"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { Page1Data } from "../Constants/applicationOld/applicationOld_data";

const Page1 = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className=" relative w-full h-[16rem] mt-[4rem]  mb-[1rem] flex justify-center ">
        <div className="w-[82vw] h-[16rem] overflow-hidden">
          <button className="border-solid border-2 border-[#3a2a79]  text-[#3a2a79] p-[0.4rem] text-[1.4rem] rounded-[2rem] absolute top-[6rem] left-4 hover:bg-[#3a2a79] hover:text-white" onClick={scrollLeft}>
            {Page1Data.leftIcon}
          </button>
          <button className="border-solid border-2 border-[#3a2a79]  text-[#3a2a79] p-[0.4rem] text-[1.4rem] rounded-[2rem] absolute top-[6rem] right-4 hover:bg-[#3a2a79] hover:text-white" onClick={scrollRight}>
            {Page1Data.rightIcon}
          </button>
          <div className="flex justify-center items-center overflow-auto w-full scrollbar-hide" ref={carouselRef}>
            <div className="w-max h-[13rem] mt-[2.5rem] flex justify-center pl-[28vw]">
              {Page1Data.icons.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col mx-[0.8rem] w-[6.5rem] items-center"
                >
                  <Image
                    className="w-[6rem] rounded-[1rem]"
                    src={item.image}
                    alt={item.title}
                  />
                  <p className="w-[4.6rem] text-center font-bold hover:text-[#dc0e2a] hover:font-extrabold font-poppins">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page1;
