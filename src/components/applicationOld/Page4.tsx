"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Page4Data } from "../Constants/applicationOld/applicationOld_data";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page4: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const borderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (borderRef.current) {
      gsap.fromTo(
        borderRef.current,
        { width: "10%" },
        {
          width: "92%",
          ease: "none",
          scrollTrigger: {
            trigger: carouselRef.current,
            start: "-40% 80%",
            end: "70% 85%",
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <div className="w-full h-[40rem] mt-[5rem] mb-[1rem]">
      <div
        ref={borderRef}
        className="border-t-[0.1rem] border-solid border-[#6f6f6f] w-[10%] mx-[3rem]"
      ></div>
      <div className="flex pt-[3rem] pb-[2rem] px-[3.6rem]">
        <h1 className="text-[#a6a6a6] font-poppins text-[3rem] mr-[1rem]">
          {Page4Data.title1}
        </h1>
        <h1 className="text-[#e12d2c] font-poppins text-[3rem]">
          {Page4Data.title2}
        </h1>
      </div>
      <div className="w-full h-[30rem] flex pt-[1rem]" ref={carouselRef}>
        <div className="w-[80vw] h-[29rem] overflow-hidden">
          <div className="overflow-auto w-full scrollbar-hide">
            <div className="flex justify-start items-center pl-[2rem] w-max">
              <div className="mx-[0.5rem] h-[25rem] flex flex-col items-center">
                <Image className="w-[28rem]" src={Page4Data.img1} alt="" />
                <p className="w-[18rem] mt-[3rem] text-[1.4rem] font-poppins text-[#a6a6a6] text-center hover:text-[#e12d2c] hover:font-medium">
                  {Page4Data.description1}
                </p>
              </div>
              <div className="mx-[0.5rem] h-[25rem] flex flex-col items-center">
                <Image className="w-[24rem]" src={Page4Data.img2} alt="" />
                <p className="w-[18rem] mt-[0.2rem] hover:text-[#e12d2c] hover:font-medium text-[1.4rem] font-poppins text-[#a6a6a6] text-center">
                  {Page4Data.description2}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end mt-[15vh]">
          <button className="bg-white text-[2rem] text-[#e12d2c] drop-shadow-lg h-[5rem] px-[1.5rem] rounded-full ml-[5rem]">
            {Page4Data.rightIcon}
          </button>
          <p className="text-[#e12d2c] font-poppins mt-[0.5rem] text-[1.2rem]">
            {Page4Data.iconDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page4;
