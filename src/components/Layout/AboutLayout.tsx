"use client";
import React, { useRef, useEffect, useState, useCallback } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { items, titlesWithImages } from "../Constants/Navbar/about-data";
import { motion } from "framer-motion";
import AnimatedContainer from "@/hooks/AnimatedContainer";

const IoIosArrowDown = dynamic(() => import("react-icons/io").then(mod => mod.IoIosArrowDown));
const IoIosArrowUp = dynamic(() => import("react-icons/io").then(mod => mod.IoIosArrowUp));
const Link = dynamic(() => import("next/link"), { ssr: false });

const AboutLayout = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollDown = useCallback(() => {
    setCurrentIndex(prev => (prev < items.length - 2 ? prev + 1 : prev));
  }, []);

  const scrollUp = useCallback(() => {
    setCurrentIndex(prev => (prev > 0 ? prev - 1 : prev));
  }, []);

  const handleWheel = useCallback(
    (e: WheelEvent) => {
      const isScrollingDown = e.deltaY > 0;
      isScrollingDown ? scrollDown() : scrollUp();
    },
    [scrollDown, scrollUp]
  );

  useEffect(() => {
    const carouselElement = carouselRef.current;
    if (carouselElement) {
      carouselElement.addEventListener("wheel", handleWheel);
    }
    return () => {
      if (carouselElement) {
        carouselElement.removeEventListener("wheel", handleWheel);
      }
    };
  }, [handleWheel]);

  return (
    <div className="flex w-full p-2 px-4 pb-6 max-w-screen-2xl flex-col lg:flex-row items-center justify-center rounded-xl h-full">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full lg:w-[75vw]">
        {titlesWithImages.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col justify-start items-center lg:mt-4"
          >
            <Link href={`/${item.title}`} passHref>
              <Image
                src={item.image}
                alt={item.title}
                className="rounded-2xl cursor-pointer w-36 h-36 sm:w-48 sm:h-48 lg:w-56 lg:h-56 object-cover transform hover:scale-80 transition-transform duration-200"
                width={224}
                height={224}
                priority={index < 4}
                loading={index < 4 ? "eager" : "lazy"}
              />
              <p className="mt-2 flex items-center justify-center space-x-2 text-center font-poppins text-black hover:text-[#483d78] hover:font-bold text-xs sm:text-sm md:text-base transform hover:scale-80 transition-transform duration-300">
                <span>{item.title}</span>
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="hidden lg:flex ml-2 w-2 h-72 border-l border-gray-300"></div>
      <div className="w-full lg:w-[20vw] border-t-2 min-h-full flex flex-col justify-between mt-4 lg:mt-0">
        <AnimatedContainer currentIndex={currentIndex}>
          {items.slice(currentIndex, currentIndex + 2).map((item, index) => (
            <Link key={index} href={`/${item.title}`} passHref>
              <div
                className={`${item.color} hover:scale-80 transition-transform duration-200 flex items-center p-4 rounded-3xl mb-2`}
              >
                <div
                  className={`h-12 w-12 mr-4 flex justify-center items-center text-2xl ${item.textcolor}`}
                >
                  <item.icon />
                </div>
                <div>
                  <h3 className="text-sm  sm:text-md text-black font-bold mb-0">
                    {item.title}
                  </h3>
                  <p className="text-xs hidden lg:flex text-black line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </AnimatedContainer>
        <div className="flex w-full justify-center">
          {currentIndex > 0 && (
            <button
              onClick={scrollUp}
              className="absolute text-2xl text-black lg:top-0 top-[40%] p-2 rounded-full"
            >
              <IoIosArrowUp />
            </button>
          )}
        </div>
        <div className="bottom-4 flex w-full justify-center text-3xl">
          {currentIndex < items.length - 2 && (
            <button
              onClick={scrollDown}
              className="absolute bg-transparent text-black flex justify-center items-center rounded-full"
            >
              <IoIosArrowDown />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutLayout;
