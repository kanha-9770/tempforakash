"use client";
import React, { useEffect } from "react";
import { Page1Data } from "../Constants/application/application_data";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page1: React.FC = () => {
  useEffect(() => {
    gsap.to(".page1-h1", {
      scrollTrigger: {
        trigger: ".page1-h1",
        start: "top top",
        end: "bottom+=100px top",
        scrub: true,
      },
      height: "20vh",
      fontSize: "3rem",
      paddingTop: "7vh",
      ease: "power1.out",
    });
  }, []);

  return (
    <>
      <div className="font-poppins">
        <div className="h-[32vh] w-full bg-white  fixed z-10 page1-h1">
          <h1 className="text-[#f2f2f2] absolute -bottom-3 left-3 text-[5.1rem] font-bold page1-h1">
            {Page1Data.applicaion}
          </h1>
        </div>
        <div className="w-full h-[20rem] relative top-[31vh] flex flex-col items-center justify-center">
          <div className="mb-[2rem]">
            <h2 className="text-[2.8rem] font-medium text-[#483d73]">
              {Page1Data.title}
            </h2>
          </div>
          <div className="w-[72rem]">
            <p className="text-center">{Page1Data.paragraph}</p>
          </div>
          <div className="border-t-[0.2rem] border-solid border-[#e12d2c] w-[10rem] mt-[1rem]"></div>
        </div>
      </div>
    </>
  );
};

export default Page1;
