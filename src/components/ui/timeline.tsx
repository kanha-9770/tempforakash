"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { FaRegCircle } from "react-icons/fa";
import Image from "next/image";

interface TimelineEntry {
  title: string;
  description: string;
  image: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-screen">
      <div
        className="w-full bg-black dark:bg-neutral-950 font-sans "
        ref={containerRef}
      >
        <div className="max-w-8xl mx-auto py-5 px-4 md:px-8 lg:px-10 bg-black bg- sticky top-0 z-50">
          <h2 className="text-2xl lg:text-5xl font-poppins font-medium text-white dark:text-white text-center lg:mt-9 mt-10 ">
            Our <span className="text-red-600"> History </span>
          </h2>
        </div>

        <div className="sticky-gradient-wrapper w-full ">
          <div className="mass-gradient-timeline"></div>
        </div>

        <div
          ref={ref}
          className="relative max-w-8xl mx-auto lg:pb-20 md:px-10  "
        >
          {data.map((item, index) => (
            <div
              key={index}
              className="flex justify-start pt-10 md:pt-40 md:gap-10 "
            >
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-7 relative lg:left-[2.5vw]  w-7 rounded-full bg-black dark:bg-black flex items-center justify-center">
                  <div className="h-5 w-5 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-" />
                </div>
                <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-white dark:text-neutral-500 ">
                  {item.title}
                </h3>
              </div>

              <div className=" pl-20 pr-4 md:pl-4 w-full h-full">
                <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                  {item.title}
                </h3>
                <div className="lg:flex  lg:flex-row flex flex-col relative h-[50vh] ">
                  <div className="lg:w-2/5 w-2/3 h-full absolute lg:left-0 ">
                    <Image
                      src={item.image}
                      alt="banner"
                      height={290}
                      width={290}
                      className=" object-contain rounded-xl "
                    />
                  </div>
                  <div className=" lg:w-3/5 text-xs lg:text-lg absolute lg:right-0 bottom-0 lg:top-0 px-6 text-white font-regular font-poppins ">
                <p className="-ml-4">{item.description}</p>
                </div>
                </div>
              </div>
            </div>
          ))}
          <div
            style={{
              height: height + "px",
            }}
            className="absolute md:left-[5.6vw] left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full "
            />
          </div>
        </div>
      </div>
    </div>
  );
};
