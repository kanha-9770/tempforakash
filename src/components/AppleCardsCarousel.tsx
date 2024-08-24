"use client";
import React, { useEffect, useRef, useState } from "react";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import Image, { ImageProps } from "next/image";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

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
    <div className="relative items-center flex flex-row w-full">
      <div className="flex flex-col items-center h-[8rem]  w-[30%] gap-2 ">
        <div className="h-1/2 items-center">
          <h1 className="text-3xl font-semibold text-red-500 text-center ">
            Announcements
          </h1>
          <p className="text-xl text-center font-poppins font-medium">
            Our Lates Events
          </p>
        </div>
        <div className="flex flex-row h-1/2">
          <button
            className="relative z-40 h-20 w-24 rounded-full flex items-center justify-center disabled:opacity-50"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <FaArrowLeft className="text-2xl text-gray-500" />
          </button>
          <button
            className="relative z-40 h-20 w-24 rounded-full flex items-center justify-center disabled:opacity-50"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <FaArrowRight className="text-2xl text-gray-500" />
          </button>
        </div>
      </div>
      <div
        className="flex w-[80%] overflow-x-scroll overscroll-x-auto py-10 md:py-20 scroll-smooth [scrollbar-width:none]"
        ref={carouselRef}
        onScroll={checkScrollability}
      >
        <div className="flex flex-row justify-start gap-4 pl-4 max-w-7xl mx-auto">
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
  src: string;
  title: string;
  category: string;
}

export const Card = ({ src, title, category }: CardProps) => {
  return (
    <motion.div className="rounded-3xl bg-white shadow-lg dark:bg-neutral-900 h-32 w-48 md:h-[8rem] md:w-72 overflow-hidden flex items-center space-x-4 p-4">
      <div className="relative flex-shrink-0 h-20 w-20 rounded-lg overflow-hidden">
        <Image src={src} alt={title} layout="fill" className="object-cover" />
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="text-black text-lg font-semibold">{title}</h3>
        <p className="text-gray-600 text-sm">{category}</p>
        {/* <p className="text-gray-500 text-xs mt-1">{date}</p> */}
      </div>
    </motion.div>
  );
};
