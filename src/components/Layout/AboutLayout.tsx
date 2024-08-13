"use client";
import React, { useRef, useEffect, useState, useCallback } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { items, titlesWithImages } from "../Constants/Navbar/about-data";
import { motion } from "framer-motion";
import AnimatedContainer from "@/hooks/AnimatedContainer";
import { BlurImage } from "../ui/BlurImage";

// Lazy load components
const IoIosArrowDown = dynamic(() => import("react-icons/io").then(mod => mod.IoIosArrowDown));
const IoIosArrowUp = dynamic(() => import("react-icons/io").then(mod => mod.IoIosArrowUp));
const Link = dynamic(() => import("next/link"), { ssr: false });

const AboutLayout = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Memoized handlers to prevent unnecessary re-renders
  const scrollDown = useCallback(() => {
    setCurrentIndex(prev => (prev < items.length - 2 ? prev + 1 : prev));
  }, [items.length]);

  const scrollUp = useCallback(() => {
    setCurrentIndex(prev => (prev > 0 ? prev - 1 : prev));
  }, []);

  // Debounce the scroll event to reduce redundant calls
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
    <div className="flex w-[98vw] p-2 px-4 max-w-screen-2xl flex-col md:flex-row items-center justify-center rounded-xl h-full">
      <div className="grid -ml-2 grid-cols-2 justify-start md:grid-cols-4 w-[75vw]">
        {titlesWithImages.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col justify-start items-center mt-4"
          >
            <Link href={`/${item.title}`} passHref>
              <BlurImage
                src={item.image}
                alt={item.title}
                className="bg-gray-600 rounded-2xl cursor-pointer w-56 h-56 object-cover transform hover:scale-80 transition-transform duration-200"
                width={240}
                height={240}
                priority={index < 4} // Prioritize the first few images
                loading={index < 4 ? "eager" : "lazy"}
              />
              <p className="mt-2 flex items-center justify-center space-x-2 text-center font-poppins text-black hover:text-[#483d78] hover:font-bold text-base transform hover:scale-80 transition-transform duration-300">
                <span>{item.title}</span>
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="ml-2 w-2 h-72 border-l border-gray-300"></div>
      <div className="ml-4 md:w-[20vw] min-h-full flex flex-col justify-between">
        <AnimatedContainer currentIndex={currentIndex}>
          {items.slice(currentIndex, currentIndex + 2).map((item, index) => (
            <Link key={index} href={`/${item.title}`} passHref>
              <div
                className={`${item.color} hover:scale-80 mr-2 transition-transform duration-200 flex items-center p-4 rounded-3xl mb-2`}
              >
                <div
                  className={`h-12 w-12 mr-4 flex justify-center items-center text-2xl ${item.textcolor}`}
                >
                  <item.icon />
                </div>
                <div>
                  <h3 className="text-md text-black font-bold mb-0">
                    {item.title}
                  </h3>
                  <p className="text-xs text-black line-clamp-3">
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
              className="absolute text-2xl text-black top-0 p-2 rounded-full"
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
