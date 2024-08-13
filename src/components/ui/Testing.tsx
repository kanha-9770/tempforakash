"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "../../lib/utils";
import Image from "next/image"; // Assuming you're using Next.js Image component

export const Testing = ({
  items,
  speed = "slow",
  pauseOnHover = true,
  className,
}: {
  items: {
    src: string;
    username: string;
    profile: string;
    country: string;
    quote: string;
    flag: string;
  }[];
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];
  const scrollerRefs = [
    useRef<HTMLUListElement>(null),
    useRef<HTMLUListElement>(null),
    useRef<HTMLUListElement>(null),
  ];

  useEffect(() => {
    containerRefs.forEach((containerRef, index) => {
      if (containerRef.current && scrollerRefs[index].current) {
        const scrollerContent = Array.from(
          scrollerRefs[index].current.children
        );
        const totalHeight = scrollerContent.reduce(
          (acc, item) => acc + item.clientHeight,
          0
        );
        const containerHeight = containerRef.current.clientHeight;

        // Duplicate the content enough times to ensure a seamless loop
        let duplicateCount = Math.ceil(containerHeight / totalHeight) + 1;
        for (let i = 0; i < duplicateCount; i++) {
          scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            scrollerRefs[index].current?.appendChild(duplicatedItem);
          });
        }
      }
    });

    getSpeed();
  }, []);

  const getSpeed = () => {
    containerRefs.forEach((containerRef, index) => {
      if (containerRef.current) {
        if (speed === "fast") {
          containerRef.current.style.setProperty(
            "--animation-duration",
            index === 1 ? "200s" : "160s"
          ); // Slower for fast
        } else if (speed === "normal") {
          containerRef.current.style.setProperty(
            "--animation-duration",
            index === 1 ? "250s" : "200s"
          ); // Slower for normal
        } else {
          containerRef.current.style.setProperty(
            "--animation-duration",
            index === 1 ? "300s" : "250s"
          ); // Slowest for slow
        }
      }
    });
  };

  return (
    <div
      className={cn(
        "relative max-w-5xl mask-gradient overflow-hidden grid grid-cols-3 ",
        className
      )}
    >
      {[0, 1, 2].map((index) => (
        <div
          ref={containerRefs[index]}
          key={index}
          className={cn(
            "scroller relative z-20 h-full overflow-hidden",
            className
          )}
          style={{ animationDirection: "forwards" }}
        >
          <ul
            ref={scrollerRefs[index]}
            className={cn(
              "flex flex-col min-h-full shrink-0 py-4 flex-nowrap",
              "animate-scroll-testinomial",
              pauseOnHover && "hover:[animation-play-state:paused]"
            )}
            style={{
              animationDirection: "forwards",
              animationName: "scrollTestinomial",
            }}
          >
            {items.map((el, idx) => (
              <li
                key={el.username + idx}
                className="p-[0.2rem] rounded-3xl w-[15.5rem] border-[1px] mt-2 bg-gradient-to-t from-purple-500 to-transparent"
              >
                <div className="p-2 h-[14.8rem] w-[15rem] bg-white rounded-[1.2rem] flex flex-col justify-between">
                  <div>
                    <div className="flex flex-row justify-between items-center">
                      <Image
                        src={el.src}
                        className="h-12 w-12 rounded-full object-cover"
                        height="48"
                        width="48"
                        alt={el.username}
                      />
                      <div className="flex justify-end">
                        <img
                          src={el.flag}
                          alt={`${el.country} flag`}
                          className="w-8 h-8"
                        />
                      </div>
                    </div>
                    <p className="text-center text-4xl">❝</p>
                    <p className="text-gray-700 text-center text-base mb-2">{el.quote}</p>
                  </div>
                  <div className="flex text-base pb-1 flex-row justify-start items-center">
                     <div className="h-10 w-1 bg-[#483d78]"></div>
                    <div className="flex ml-2 flex-col">
                      <h3 className="text-sm ">{el.username}</h3>
                      <p className="text-sm text-gray-500">{el.profile}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
