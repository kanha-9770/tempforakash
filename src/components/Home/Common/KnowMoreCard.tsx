"use client";

import Image, { StaticImageData } from "next/image";
import styles from "../Styles/style.module.css";
import { useTransform, motion } from "framer-motion";
import { useRef, useState } from "react";
import { FaIndustry } from "react-icons/fa";
import Link from "next/link";
import AnimatedText from "@/components/ui/AnimatedText";
import LottieAnimation from "@/components/ui/LottieAnimation";

interface KnowMoreCardProps {
  i: number;
  title: string;
  description: string;
  src: StaticImageData;
  url: string;
  color: string;
  expertiseExperience: string;
  expertiseAbout: string;
  icon: any;
  progress: any;
  range: number[];
  targetScale: number;
}

const KnowMoreCard: React.FC<KnowMoreCardProps> = ({
  i,
  title,
  description,
  src,
  url,
  color,
  icon,
  expertiseExperience,
  expertiseAbout,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef<HTMLDivElement>(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

 

  return (
    <div
      ref={container}
      className={`${styles.KnowMoreCardContainer} -mt-[5rem]`}
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: ``,
        }}
        className={` ${
          styles.KnowMoreCard
        } top-[calc(2vh + ${i}px)] lg:top-[calc(2vh + ${i * 0.5}px)] `}
      >
        <div className={styles.body}>
          <div className={styles.description}>
            <div
              style={{
                backgroundColor: color,
              }}
              className={styles.expertiseContainer}
            >
              <LottieAnimation
                animationData={icon}
                className="h-8 w-8 lg:h-20 lg:w-20" // Example Tailwind CSS classes for size
              />
              <div className={styles.expertiseText}>
                <div className="font-poppins text-white">
                  {expertiseExperience}
                </div>
                <div className="text-white font-bold font-poppins">
                  <AnimatedText className="text-red-500" text={`${expertiseAbout}`} />
                </div>
              </div>
            </div>
            <h2 className="text-center  text-base lg:text-lg font-semibold text-white font-poppins">
              {title}
            </h2>
            <p className="text-sm mt-2 lg:text-base font-regular text-white text-center font-poppins">
              {description}
            </p>
          
            <span className="w-full flex flex-row justify-center items-center">
              <Link
                className="text-base text-[#483d78] font-poppins font-semibold text-center"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                See more
              </Link>
            </span>
          </div>
          <motion.div className={styles.imageContainer}>
            <Image fill src={src} alt="image" className={styles.image} />
          </motion.div>
          <div className={styles.imageCorner}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              viewBox="0 0 20 20"
              fill="none"
              className="svg--ca1"
            >
              <path
                d="M20 20C20 8.95431 11.0457 0 0 0H20V20Z"
                fill={color} // Use the color prop here
              ></path>
            </svg>
          </div>
          <div className={styles.imageCorner_second}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              viewBox="0 0 20 20"
              fill="none"
              className="svg--ca1"
            >
              <path
                d="M20 20C20 8.95431 11.0457 0 0 0H20V20Z"
                fill={color}
              ></path>
            </svg>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default KnowMoreCard;
