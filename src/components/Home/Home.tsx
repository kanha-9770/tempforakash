// "use client";
// import React, { useState, useCallback, memo, useEffect, useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import Carousel from "./Common/HomeCarousel";
// import Link from "next/link";
// import PositionAwareButton from "../ui/PositionAwareButton";

// interface NavLinkProps {
//   text: string;
//   index: number;
//   activeLink: number;
//   handleMouseEnter: (index: number) => void;
//   handleMouseLeave: () => void;
//   handleClick: () => void;
// }

// const NavLink: React.FC<NavLinkProps> = memo(
//   ({
//     text,
//     index,
//     activeLink,
//     handleMouseEnter,
//     handleMouseLeave,
//     handleClick,
//   }) => (
//     <Link
//       href=""
//       scroll={false}
//       className={`text-black hover:font-bold custome-scale-90 ${
//         activeLink === index ? "border-b-2 border-red-600" : ""
//       }`}
//       onMouseEnter={() => handleMouseEnter(index)}
//       onMouseLeave={handleMouseLeave}
//       onClick={handleClick}
//     >
//       {text}
//     </Link>
//   )
// );

// NavLink.displayName = "NavLink";

// const Hero: React.FC = () => {
//   const [activeLink, setActiveLink] = useState<number>(0);
//   const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false);
//   const videoRef = useRef<HTMLDivElement | null>(null);

//   const handleMouseEnter = useCallback((index: number) => {
//     setActiveLink(index);
//   }, []);

//   const handleMouseLeave = useCallback(() => {
//     setActiveLink(-1);
//   }, []);

//   const handleClick = (ref: React.RefObject<HTMLDivElement>) => () => {
//     ref.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVideoLoaded(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.5 }
//     );

//     if (videoRef.current) {
//       observer.observe(videoRef.current);
//     }

//     return () => {
//       if (observer) {
//         observer.disconnect();
//       }
//     };
//   }, []);
//   const { scrollY } = useScroll();
//   const videoWidth = useTransform(scrollY, [0, 300], ["100%", "150%"]);
//   const videoX = useTransform(scrollY, [0, 300], ["0%", "-25%"]);
//   return (
//     <div className="relative h-screen max-w-screen-2xl flex flex-col items-center overflow-hidden min-h-screen w-full">
//       <div className="relative sm:p-8 md:p-2 lg:px-12 w-full flex-wrap">
//         <motion.div
//           className="md:mt-[3rem] h-[calc(100vh-150px)] flex justify-center items-center sm:h-[calc(100vh-250px)] rounded-xl"
//           ref={videoRef}
//           style={{ width: videoWidth, x: videoX, originX: 0.5 }}
//         >
//           {isVideoLoaded ? (
//             <video
//               id="background-video"
//               className="w-full h-full object-cover rounded-2xl"
//               autoPlay
//               loop
//               muted
//               playsInline
//               preload="metadata"
//             >
//               <source src="video/BgHome.mp4" type="video/mp4" />
//               <source src="video/bg.webm" type="video/webm" />
//               <source src="video/bg.ogv" type="video/ogg" />
//             </video>
//           ) : (
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="loader"></div>
//             </div>
//           )}
//         </motion.div>
//         <div className="absolute px-8 h-full text-white w-full flex flex-col justify-end items-start bottom-0 left-8 sm:bottom-5 sm:left-10 md:bottom-10 md:left-20">
//           <div className="mb-4">
//             {" "}
//             <PositionAwareButton
//               text={"Get a Quote"}
//               icon={true}
//               bgColor="white"
//               width="155px"
//             />
//           </div>
//         </div>
//       </div>
//       <div className="flex my-4 mx-14 flex-col md:flex-row px-10 w-full">
//         <div className="w-full md:w-2/5 mx-1 flex flex-col mb-4 md:mb-2">
//           <p className="text-2xl mx-4 md:text-2xl lg:text-4xl font-poppins font-thin">
//             FOOD PACKING MACHINES
//           </p>
//           <div className="ml-4">
//             <span className="text-7xl text-[#524c42] font-alexBrush">
//               Manufacturing
//             </span>
//           </div>
//         </div>
//         <div className="w-full px-4 md:w-3/5">
//           <Carousel/>
//         </div>
//       </div>
//     </div>
//   );
// };

// Hero.displayName = "Hero";

// export default memo(Hero);
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
    <div className="relative h-full  lg:bg-[#f2f2f2] p-0 -top-2 lg:top-12  flex flex-col items-center overflow-hidden  w-full">
      <div className="relative px-4  lg:px-10 w-full flex-wrap">
        <motion.div
          className=" w-full  flex justify-center items-center h-[calc(100vh-220px)] lg:h-[calc(100vh-110px)] rounded-3xl"
          ref={containerRef}
          style={{ width: videoWidth, x: videoTransform, originX: 0.5 }}
        >
          <div className="relative w-full h-full">
            <Image
              className="w-full h-full object-cover rounded-2xl lg:rounded-3xl"
              src={homeimg}
              alt={"home"}
            />

            <div className="absolute inset-0 bg-black bg-opacity-30 rounded-2xl lg:rounded-3xl"></div>
            {isSafari && (
              <div className="absolute top-4 right-4 z-[9999]">
                <button
                  onClick={handlePlayPause}
                  className="text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition"
                >
                  {isPlaying ? (
                    <IoPauseSharp size={24} />
                  ) : (
                    <IoPlaySharp size={24} />
                  )}
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      <div className="absolute h-full w-[80%] lg:w-full  left-8 top-1/3 lg:top-[38%] lg:left-28 flex-col text-7xl text-white font-alexBrush">
        <p className="text-3xl text-center lg:text-justify mx-4 md:text-2xl lg:text-5xl font-poppins font-thin">
          FOOD PACKING MACHINES
        </p>
        <div className="lg:ml-2  text-center lg:text-justify">
          <span className="text-3xl  lg:text-6xl text-[#f2f2f2] font-poppins italic ">
            Manufacturing
          </span>
        </div>
      </div>

      <div className="absolute flex flex-col w-1/2  lg:w-[30rem] lg:h-[10rem] lg:rounded-tl-[4rem] rounded-tl-[1.5rem] right-0 bg-[#f2f2f2] lg:bottom-0 bottom-0 text-3xl font-poppins text-white text-center">
        <motion.div
          className="-mt-6 flex mr-2 lg:mr-8 justify-end"
          style={{ x: svgTransform }} // SVG moves to the right
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            viewBox="0 0 20 20"
            fill="none"
            className="flex right-1/2 h-6 w-10"
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
            className="-ml-[2rem]   h-6 w-10"
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
