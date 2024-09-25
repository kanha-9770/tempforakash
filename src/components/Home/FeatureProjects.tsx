"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  IoMdInformationCircleOutline,
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { related_product } from "./Feature.json";

gsap.registerPlugin(ScrollTrigger);

interface Page4Props {
  page4product: {
    imageWithDescription: {
      img: string;
      h1: string;
      h2: string;
      h3: string;
      image: string;
      information: string;
      sInformation: string;
      imageInformation: string;
      s: string;
    }[];
  };
}

const FeatureProjects: React.FC<Page4Props> = ({ page4product }) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const borderRef = useRef<HTMLDivElement | null>(null);

  const scrollbarLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollbarRight = () => {
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
          width: "95%",
          ease: "none",
          scrollTrigger: {
            trigger: carouselRef.current,
            start: "-80% 80%",
            end: "70% 85%",
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <>
      <div className="w-full  h-[35vh] px-10 font-poppins">
        <div
          ref={borderRef}
          className="border-t-[0.1rem] border-solid border-[#f2f2f2] w-[10%] lg:mx-[2rem] mx-[1rem]"
        ></div>
        <div className="flex flex-row rounded-2xl   lg:my-[1vh]  bg-white p-4 relative">
          <div className=" flex w-[20%] flex-col">
            <h2 className="lg:text-2xl text-center   text-[1.8rem] font-semibold">
              <h1 className="text-[#9e9c9c]">
                {related_product?.title.trim().replace(/\s+\S+$/, "")}
              </h1>{" "}
              <h1 className="text-[#dc0e2a]">
                {related_product?.title.trim().match(/\S+$/)}
              </h1>
            </h2>
            <p className="text-center text-xs p-4 font-regular">
              {related_product?.description}
            </p>
            <div className="flex absolute left-20 bottom-6 flex-row justify-between">
              <button
                className="text-[#cccaca] lg:text-[2rem] text-[1.8rem]  hover:text-black"
                onClick={scrollbarLeft}
              >
                <IoIosArrowDropleftCircle />
              </button>
              <button
                className="text-[#cccaca] lg:text-[2rem] text-[1.8rem]  hover:text-black"
                onClick={scrollbarRight}
              >
                <IoIosArrowDroprightCircle />
              </button>
            </div>
          </div>

          {/* Main Carousel Container */}
          <div className="w-full  h-[28vh] flex items-center overflow-hidden">
            <div
              className="overflow-auto  scrollbar-hide px-1 "
              ref={carouselRef}
            >
              <div className="w-max flex items-center justify-center space-x-4">
                {page4product.imageWithDescription.map((item, idx) => (
                  <div
                    key={idx}
                    className="relative h-[28vh] lg:w-[13vw] w-[70vw] bg-gradient-to-b from-[#f5f5f5] to-[#f2f2f2] rounded-lg "
                  >
                    {/* Icons */}
                    <div className="absolute top-2 right-2 flex space-x-2">
                      <div className="w-10 h-10  bg-white border-solid border-[0.1rem] border-[#f5f5f5] hover:border-[#dc0e2a] rounded-full flex items-center justify-center relative group">
                        <Image
                          src={item.image}
                          alt=""
                          width={400}
                          height={400}
                        />
                        <div className="hidden group-hover:flex absolute top-3  left-0  border bg-white border-gray-300 rounded-md  h-max w-max z-50 px-2 py-1">
                          {" "}
                          {/* Increased z-index */}
                          <p className="lg:text-[0.6rem] text-[0.7rem] text-black">
                            {item.imageInformation}
                          </p>
                        </div>
                      </div>

                      <div className="w-3 h-3 bg-white rounded-full flex items-center justify-center font-medium cursor-pointer relative group hover:text-[#dc0e2a] text-xs hidden">
                        {item.s}
                        <div className="hidden group-hover:flex absolute top-3 left-0 bg-white border border-gray-300 rounded-md px-2 py-1 h-max w-max z-50">
                          {" "}
                          {/* Increased z-index */}
                          <p className="lg:text-[0.6rem] text-[0.7rem] text-black font-normal">
                            {item.sInformation}
                          </p>
                        </div>
                      </div>

                      <div className="w-3 h-3 bg-white rounded-full flex items-center justify-center cursor-pointer relative group hover:text-[#dc0e2a] text-[1.1rem] hidden">
                        <IoMdInformationCircleOutline />
                        <div className="hidden group-hover:flex absolute top-3 left-0 bg-white border border-gray-300 rounded-md  px-2 py-1 h-max w-[10vw] z-50">
                          {" "}
                          {/* Increased z-index */}
                          <p className="lg:text-[0.6rem]  text-[0.7rem] text-black">
                            {item.information}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <div className="p-2 font-poppins">
                      <h2 className="lg:text-xs font-semimedium w-[65%]">
                        {item.h1}
                      </h2>
                      <h3 className="lg:text-xs font-semimedium">{item.h2}</h3>
                      <p className="lg:text-[0.6rem] font-regular text-[0.8rem] text-gray-600">
                        {item.h3}
                      </p>
                    </div>

                    {/* Image */}
                    <div className="flex justify-center items-center">
                      <div className="w-full px-2 lg:h-[13vh] flex justify-center items-center">
                        <Image
                          className="object-cover"
                          src={item.img}
                          alt=""
                          width={400}
                          height={400}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureProjects;
