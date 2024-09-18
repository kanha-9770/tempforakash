"use client";
import React from "react";
import { motion } from "framer-motion";

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`relative flex h-screen flex-col items-center justify-center overflow-hidden w-full rounded-md z-0 ${className}`}
      style={{
        background:
          "radial-gradient(circle at 50% 50%, rgba(24, 17, 51, 1), rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 1))", // Smooth, softer gradient blending
      }}
    >
      <div className="relative flex w-full flex-1 items-center justify-center isolate z-0">
        <motion.div
          initial={{ opacity: 0.5, width: "20rem" }}
          whileInView={{ opacity: 1, width: "50rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 top-[7.7rem] h-full overflow-visible w-[50rem] bg-gradient-conic from-[#39315f] via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "20rem" }}
          whileInView={{ opacity: 1, width: "50rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 top-[7.7rem] h-full w-[10rem] bg-gradient-conic from-transparent via-transparent to-[#372e5e] text-white [--conic-position:from_290deg_at_center_top]"
        ></motion.div>

    

        <motion.div
          initial={{ width: "20rem" }}
          whileInView={{ width: "50rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-full -translate-y-[7rem] bg-[#bca0dd]"
        ></motion.div>
      </div>

      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
