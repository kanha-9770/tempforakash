"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import PositionAwareButton from "../ui/PositionAwareButton";

import { IoPlaySharp, IoPauseSharp } from "react-icons/io5";
import "@fontsource/poppins/400-italic.css"; // Specify weight and style

import Image from "next/image";
import homeimg from "../../../public/video/BgHomeimg.webp";
const Home: React.FC = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false);
  const [isSafari, setIsSafari] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Check if the browser is Safari
    const ua = navigator.userAgent.toLowerCase();
    setIsSafari(ua.includes("safari") && !ua.includes("chrome"));

    // Check for larger screens on the client-side
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    setIsLargeScreen(mediaQuery.matches);

    const handleResize = () => setIsLargeScreen(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVideoLoaded(true);
          observer.disconnect();
        }
      },
      { threshold: 0 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const { scrollY } = useScroll();

  // Always call the hook
  const defaultVideoTransform = useTransform(scrollY, [0, 300], ["0%", "-25%"]);
  const defaultVideoWidth = useTransform(scrollY, [0, 300], ["100%", "150%"]);
  const defaultSvgTransform = useTransform(scrollY, [0, 100], ["0%", "25%"]);

  // Conditionally apply the transform based on the screen size
  const videoTransform = isLargeScreen ? defaultVideoTransform : "0%";
  const videoWidth = isLargeScreen ? defaultVideoWidth : "100%";
  const svgTransform = isLargeScreen ? defaultSvgTransform : "0%";

  return (
    <div className="relative h-full p-0   flex flex-col items-center overflow-hidden  w-full">
      <div className="relative px-4  lg:px-10 w-full flex-wrap">
        <motion.div
          className=" w-full  flex justify-center items-center h-[calc(100vh-220px)] lg:h-[calc(100vh-110px)] rounded-3xl"
          ref={containerRef}
          style={{ width: videoWidth, x: videoTransform, originX: 0.5 }}
        >
          {isVideoLoaded ? (
            <div className="relative w-full h-full">
              <video
                ref={videoRef}
                id="background-video"
                className="w-full h-full object-cover rounded-2xl lg:rounded-3xl"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
              >
                <source src="video/BgHome.mp4" type="video/mp4" />
                <source src="video/bg.webm" type="video/webm" />
                <source src="video/bg.ogv" type="video/ogg" />
              </video>
              <div className="absolute inset-0 bg-black bg-opacity-30 rounded-2xl lg:rounded-3xl"></div>
              
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                className="w-full h-full object-cover rounded-2xl lg:rounded-3xl"
                src={homeimg}
                alt={"home"}
              />
            </div>
          )}
        </motion.div>
      </div>

      <div className="absolute h-full w-[80%] lg:w-full  left-8 top-1/3 lg:top-[38%] lg:left-28 flex-col text-7xl text-white font-alexBrush">
        <p className="text-3xl text-center lg:text-justify mx-4 md:text-2xl lg:text-5xl font-poppins font-thin">
          Quality Food Packaging
        </p>
        <div className="lg:ml-2  text-center lg:text-justify">
          <span className="text-3xl  lg:text-6xl text-[#f2f2f2] font-poppins italic ">
            Machinery & <span className="text-[#df1f27]">Solutions</span>
          </span>
        </div>
      </div>

      <div className="absolute flex flex-col w-1/2  lg:w-[30rem] lg:h-[10rem] lg:rounded-tl-[4rem] rounded-tl-[1.5rem] right-0 bg-[#f2f2f2] lg:bottom-0 bottom-0 text-3xl font-poppins text-white text-center">
        <motion.div
          className="-mt-4 lg:-mt-6 flex mr-2 lg:mr-8 justify-end"
          style={{ x: svgTransform }} // SVG moves to the right
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            viewBox="0 0 20 20"
            fill="none"
            className="flex  right-1/2 h-4 w-8 lg:h-6 lg:w-10"
          >
            <path
              d="M20 20C20 8.95431 11.0457 0 0 0H20V20Z"
              fill="#f2f2f2"
              transform="rotate(90 10 10)"
            ></path>
          </svg>
        </motion.div>
        <div className="w-full mt-10 hidden lg:flex justify-center">
          <PositionAwareButton
            borderWidth="1px"
            iconSize="50"
            icon
            height="75px"
            padding="20px"
            width="330px"
            fontSize="35px"
            borderRadius="100px"
            borderColor="black"
            text={"Get a Quote"}
          />
        </div>
        <div className=" lg:hidden mt-2 -ml-2 items-center flex justify-center">
          <PositionAwareButton
            borderWidth="1px"
            iconSize="30px"
            icon
            height="40px"
            padding="5px"
            width="150px"
            fontSize="16px"
            borderRadius="100px"
            borderColor="black"
            text={"Get a Quote"}
          />
        </div>
        <div className="lg:mt-[1.3rem] -mt-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            viewBox="0 0 20 20"
            fill="none"
            className="lg:-ml-[2rem] -ml-6 h-4 w-8  lg:h-6 lg:w-10"
          >
            <path
              d="M20 20C20 8.95431 11.0457 0 0 0H20V20Z"
              fill="#f2f2f2"
              transform="rotate(90 10 10)"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

Home.displayName = "Hero";

export default React.memo(Home);