"use client";
import React, { useEffect, useRef } from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedText from "../ui/AnimatedText";

gsap.registerPlugin(ScrollTrigger);

interface Stats {
  machinesSold: number;
  readyStockMachines: number;
}

interface Card {
  image: string;
  title: string;
  link: string;
}

interface AboutUsProps {
  heading: string;
  description: string;
  stats: Stats;
  cards: Card[];
}

const AboutUs: React.FC<AboutUsProps> = ({
  heading,
  description,
  stats,
  cards,
}) => {
  const machinesSoldRef = useRef<HTMLHeadingElement>(null);
  const readyStockMachinesRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const animateCount = (
      target: HTMLHeadingElement | null,
      endValue: number
    ) => {
      if (target) {
        gsap.fromTo(
          target,
          { innerText: "0" },
          {
            innerText: endValue,
            duration: 1.5,
            ease: "power3.out",
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: target,
              start: "top 80%",
              once: true,
            },
          }
        );
      }
    };

    animateCount(machinesSoldRef.current, stats.machinesSold);
    animateCount(readyStockMachinesRef.current, stats.readyStockMachines);
  }, [stats]);

  return (
    <div className="flex mt-12 h-screen max-w-screen-2xl mx-auto flex-col items-center  md:px-6 lg:px-8">
      <div className="text-center w-full max-w-6xl">
        <h1 className="text-2xl text-[#483d78]">
          About <span className="text-red-500 font-extrabold">US</span>
        </h1>
        <h1 className="text-lg lg:text-4xl w-full font-poppins lg:px-56 py-3">
          {heading.split(" ").map((word, index) =>
            word === "Machine" ? (
              <span key={index} className="text-[#483d78] cursor-pointer">
                {word}{" "}
              </span>
            ) : (
              word + " "
            )
          )}
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-center w-full mt-4">
          <div className="text-center mb-4 md:mb-0">
            <h2
              ref={machinesSoldRef}
              className="text-3xl font-extrabold text-[#483d73]"
            >
              0
            </h2>
            <p className="text-base font-poppins">Machines Sold</p>
          </div>
          <p className="font-poppins text-sm lg:text-base md:px-6 py-4 text-center w-full md:w-[60%] leading-6">
            {description}
          </p>
          <div className="text-center mt-4 md:mt-0">
            <h2
              ref={readyStockMachinesRef}
              className="text-3xl font-extrabold text-[#483d73]"
            >
              0
            </h2>
            <p className="text-base font-poppins">Ready Stock Machines</p>
          </div>
        </div>
        <Link
          href="/products"
          className="text-[#483d73] font-poppins text-base mt-4 inline-flex items-center "
        >
          Read more
          
        </Link>
      </div>

      <div className="flex flex-col md:flex-row w-full items-end gap-4 mt-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`relative w-full md:w-1/3 group flex flex-col items-center ${
              index === 1 ? "z-10 md:w-[40%]" : ""
            }`}
          >
            <div className="w-full">
              <div
                className={`relative overflow-hidden rounded-md transition-transform transform group-hover:scale-80 ${
                  index === 1 ? "h-58" : "h-52"
                }`}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  width={600}
                  height={250}
                  className={`w-full rounded-3xl border-2 object-cover ${
                    index === 1 ? "h-[15rem] lg:w-full w-full md:w-1/3" : "h-52"
                  }`}
                />
                <div className="absolute bottom-0 left-0 p-4 flex justify-between items-end w-full">
                  <a
                    href={card.link}
                    className="text-white flex items-end text-base"
                  >
                    <AnimatedText text={`${card.title}`} />
                  </a>
                  <BsBoxArrowUpRight className="text-2xl text-white font-extrabold text-bold" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
