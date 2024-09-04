"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
}

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="relative flex flex-col lg:flex-row w-full items-center">
      <div className="flex flex-col items-center h-[6rem] lg:h-[8rem] w-full lg:w-[30%] gap-1 px-4 lg:px-0">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl lg:text-3xl font-semibold text-red-500 text-center">
            Announcements
          </h1>
          <p className="text-lg lg:text-xl text-center font-poppins font-medium">
            Our Latest Events
          </p>
        </div>
        <div className="flex justify-between w-full lg:w-auto">
          <button
            className="relative z-20 h-12 w-12 lg:h-20 lg:w-24 rounded-full flex items-center justify-center disabled:opacity-50"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <FaArrowLeft className="text-xl lg:text-2xl text-gray-500" />
          </button>
          <button
            className="relative z-20 h-12 w-12 lg:h-20 lg:w-24 rounded-full flex items-center justify-center disabled:opacity-50"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <FaArrowRight className="text-xl lg:text-2xl text-gray-500" />
          </button>
        </div>
      </div>
      <div
        className="flex w-full lg:w-[80%] overflow-x-scroll py-6 lg:py-10 scroll-smooth [scrollbar-width:none] -mx-4 lg:mx-0 px-4 lg:px-0"
        ref={carouselRef}
        onScroll={checkScrollability}
      >
        <div className="flex flex-row justify-start gap-4 lg:pl-4 max-w-7xl mx-auto">
          {items.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: 0.2 * index,
                  ease: "easeOut",
                },
              }}
              key={"card" + index}
              className="last:pr-[5%] md:last:pr-[2%] rounded-3xl"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

interface CardProps {
  src: string | StaticImageData;
  title: string;
  category: string;
  date?: string;
}

export const Card = ({ src, title, category, date }: CardProps) => {
  return (
    <motion.div className="rounded-3xl bg-white shadow-lg dark:bg-neutral-900 h-32 w-[18rem] md:h-[9.5rem] md:w-96 overflow-hidden flex items-center space-x-4 p-4">
      <div className="relative flex-shrink-0 h-20 w-20 md:h-28 md:w-28 rounded-2xl overflow-hidden">
        <Image
          src={src}
          alt={title}
          height={200}
          width={200}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col font-poppins h-24 md:h-28">
        <h3 className="text-black text-base md:text-2xl font-bold">{title}</h3>
        <p className="text-gray-600 font-light text-sm md:text-lg">
          {category}
        </p>
        <p className="text-gray-500 font-light text-sm md:text-lg mt-1">
          {date}
        </p>
      </div>
    </motion.div>
  );
};
