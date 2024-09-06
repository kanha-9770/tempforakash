"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import NavLinksDemo from "@/components/Home/NavLinks";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    left?: React.ReactNode;
    right?: React.ReactNode;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  // Update activeCard based on scroll position
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "var(--slate-900)",
    "var(--black)",
    "var(--neutral-900)",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  const hasLeftContent = content[activeCard]?.left;
  const hasRightContent = content[activeCard]?.right;
  
  // Define all refs at the top level of the component
  const overviewRef = useRef<HTMLDivElement>(null);
  const productDescriptionRef = useRef<HTMLDivElement>(null);
  const applicationsRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const technicalSpecificationsRef = useRef<HTMLDivElement>(null);
  const optionalAddOnsRef = useRef<HTMLDivElement>(null);
  const faqsRef = useRef<HTMLDivElement>(null);
  const relatedProductsRef = useRef<HTMLDivElement>(null);
  const navLinks = [
    { text: "Overview", ref: overviewRef },
    { text: "Product Description", ref: productDescriptionRef },
    { text: "Process", ref: processRef },
    { text: "Applications", ref: applicationsRef },
    { text: "Technical Specifications", ref: technicalSpecificationsRef },
    { text: "Optional Add-Ons", ref: optionalAddOnsRef },
    { text: "FAQs", ref: faqsRef },
    { text: "Related Products", ref: relatedProductsRef },
  ];
  return (
    <div
      
      className="h-screen w-full overflow-auto scrollbar-hide flex justify-around relative rounded-md p-4"
      ref={ref}
    >

      {/* Left Part */}
      {hasLeftContent && (
        <div
          className={cn(
            "relative flex flex-col items-start px-4",
            hasRightContent ? "w-2/3" : "w-full"
          )}
        >
          {content.map((item, index) => (
            <div key={index} className="my-20 w-full">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
              >
                {item.left}
              </motion.div>
            </div>
          ))}
        </div>
      )}

      {/* Right Part */}
      {hasRightContent && (
        <div
          className={cn(
            "flex-1 h-[80%] w-1/3 rounded-lg bg-white sticky top-0 overflow-hidden p-10",
            contentClassName
          )}
        >
          {/* Display the right content without animation */}
          {content[activeCard]?.right}
        </div>
      )}
    </div>
  );
};
