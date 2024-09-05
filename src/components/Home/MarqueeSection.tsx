"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { motion } from "framer-motion";

const trustedBrands = [
  { src: "/assets/client-logos/abc-news.png", alt: "Abc-News" },
  { src: "/assets/client-logos/airfrance.png", alt: "Airfrance" },
  { src: "/assets/client-logos/allianz.png", alt: "Allianz" },
  { src: "/assets/client-logos/bbc.png", alt: "BBC" },
  { src: "/assets/client-logos/cnbc.png", alt: "CNBC" },
  { src: "/assets/client-logos/gannett.png", alt: "Gannett" },
  { src: "/assets/client-logos/jaguar.png", alt: "Jaguar" },
  { src: "/assets/client-logos/linkedin.png", alt: "LinkedIn" },
  { src: "/assets/client-logos/telegraph.png", alt: "Telegraph" },
];

const partnerBrands = [
  { src: "/assets/client-logos/abc-news.png", alt: "Abc-News" },
  { src: "/assets/client-logos/airfrance.png", alt: "Airfrance" },
  { src: "/assets/client-logos/allianz.png", alt: "Allianz" },
  { src: "/assets/client-logos/bbc.png", alt: "BBC" },
  { src: "/assets/client-logos/cnbc.png", alt: "CNBC" },
  { src: "/assets/client-logos/gannett.png", alt: "Gannett" },
  { src: "/assets/client-logos/jaguar.png", alt: "Jaguar" },
  { src: "/assets/client-logos/linkedin.png", alt: "LinkedIn" },
  { src: "/assets/client-logos/telegraph.png", alt: "Telegraph" },
];

export default function MarqueeSection() {
  return (
    <div className="h-screen px-8 flex flex-col justify-center gap-12 overflow-hidden">
      <motion.div className="relative h-1/3 flex flex-col lg:flex-row">
        <div className="flex w-[10%] lg:w-[15%] flex-col">
          <div className="text-sm lg:text-2xl font-regular mt-8 font-poppins whitespace-nowrap">
            Trusted By
          </div>
          <div className="text-sm lg:text-2xl font-regular mt-12 font-poppins whitespace-nowrap">
            Partner Brands
          </div>
        </div>
        <div className="w-[90%] lg:w-[85%] ml-32 lg:ml-44 mask-gradient-marquee">
          <div className="bg-white">
            <div className="flex-grow ">
              <InfiniteMovingCards
                items={trustedBrands}
                direction="left"
                speed="slow"
                className="w-full"
              />
            </div>
          </div>
          <div className="bg-white mt-2">
            <div className="flex-grow ">
              <InfiniteMovingCards
                items={trustedBrands}
                direction="right"
                speed="slow"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div className="relative flex flex-col h-[20%] items-center  text-center">
        <p className="text-sm lg:text-2xl mx-4 w-full lg:w-[62%] font-poppins font-regular leading-8">
          Empowering sustainable packaging with advanced paper-based solutions.
          Our innovative machines drive global <span className="text-red-500">CO2</span> reduction, paving the way for
          a greener earth and elevating your packaging capabilities.
        </p>
      </motion.div>
    </div>
  );
}