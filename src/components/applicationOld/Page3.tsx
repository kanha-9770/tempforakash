"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Page3Data } from "../Constants/applicationOld/applicationOld_data";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page3 = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const borderRef = useRef<HTMLDivElement | null>(null);

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
            start: "-70% 80%",
            end: "105% 85%",
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <>
      <div className="w-full h-[32rem] mt-[5rem] mb-[1rem]">
        <div
          ref={borderRef}
          className="border-t-[0.1rem] border-solid border-[#6f6f6f] w-[10%] mx-[3rem]"
        ></div>
        <div className="flex pt-[3rem] pb-[2rem] px-[3.6rem]">
          <h1 className="text-[#a6a6a6] font-poppins text-[3rem] mr-[1rem]">
            {Page3Data.title1}
          </h1>
          <h1 className="text-[#dc0e2a] font-poppins text-[3rem]">
            {Page3Data.title2}
          </h1>
        </div>
        <div className="bg-white w-full h-[22rem] relative">
          <div className="flex justify-center">
            <div className="w-[88vw] h-[18rem] mt-[2rem] flex items-center overflow-hidden">
              <button
                className="border-solid border-2 border-[#3a2a79] text-[#3a2a79] p-[0.4rem] text-[1.4rem] rounded-[2rem] absolute top-[10rem] left-4 hover:bg-[#3a2a79] hover:text-white"
                onClick={scrollLeft}
              >
                {Page3Data.leftIcon}
              </button>
              <button
                className="border-solid border-2 border-[#3a2a79] text-[#3a2a79] p-[0.4rem] text-[1.4rem] rounded-[2rem] absolute top-[10rem] right-4 hover:bg-[#3a2a79] hover:text-white"
                onClick={scrollRight}
              >
                {Page3Data.rightIcon}
              </button>
              <div
                className="w-full overflow-auto scrollbar-hide"
                ref={carouselRef}
              >
                <div className="w-max flex items-center justify-center">
                  <div className="mx-[0.5rem]">
                    <Image
                      className="w-[24rem] h-[17rem] rounded-[1rem]"
                      src={Page3Data.img1}
                      alt={""}
                    />
                  </div>
                  <div className="mx-[0.5rem]">
                    <Image
                      className="w-[24rem] h-[17rem] rounded-[1rem]"
                      src={Page3Data.img2}
                      alt={""}
                    />
                  </div>
                  <div className="mx-[0.5rem]">
                    <Image
                      className="w-[24rem] h-[17rem] rounded-[1rem]"
                      src={Page3Data.img3}
                      alt={""}
                    />
                  </div>
                  <div className="mx-[0.5rem]">
                    <Image
                      className="w-[24rem] h-[17rem] rounded-[1rem]"
                      src={Page3Data.img1}
                      alt={""}
                    />
                  </div>
                  <div className="mx-[0.5rem]">
                    <Image
                      className="w-[24rem] h-[17rem] rounded-[1rem]"
                      src={Page3Data.img2}
                      alt={""}
                    />
                  </div>
                  <div className="mx-[0.5rem]">
                    <Image
                      className="w-[24rem] h-[17rem] rounded-[1rem]"
                      src={Page3Data.img3}
                      alt={""}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page3;
