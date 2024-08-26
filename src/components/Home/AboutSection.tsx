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
    <div className="flex mt-12 md:space-y-14 h-screen max-w-screen-2xl mx-auto flex-col items-center">
      <div className="text-center w-full max-w-6xl px-4">
        <h1 className="text-2xl text-[#483d78]">
          About <span className="text-red-500 font-extrabold">US</span>
        </h1>
        <h1 className="text-4xl font-poppins px-4 md:px-56 py-3">
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
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <div className="text-justify mb-4 md:mb-0">
            <h2
              ref={machinesSoldRef}
              className="text-3xl font-extrabold text-[#483d73]"
            >
              0
            </h2>
            <p className="text-base font-poppins">Machines Sold</p>
          </div>
          <p className="font-poppins text-base mx-4 py-4 text-center w-full md:w-[60%] leading-6">
            {description}
          </p>
          <div className="text-center mt-4 md:mt-0">
            <h2
              ref={readyStockMachinesRef}
              className="text-3xl font-extrabold text-[#483d73] -mt-3"
            >
              0
            </h2>
            <p className="text-base font-poppins">Ready Stock Machines</p>
          </div>
        </div>
        <Link
          href="/products"
          className="text-[#483d73] font-poppins text-base mt-0 inline-flex items-center underline-offset-3 underline"
        >
          Read more
          <svg
            width="22"
            height="12"
            viewBox="0 0 22 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2"
          >
            <path
              d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
              fill="black"
            />
          </svg>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row w-full items-end gap-4 px-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`relative w-full md:w-1/3 p-0 group flex flex-col items-center ${
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
                    className="text-white  flex items-end text-base"
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
