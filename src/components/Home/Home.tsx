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
import ContactIcons from "../Contact/ContactIcon";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { IoPlaySharp, IoPauseSharp } from "react-icons/io5";

const Home: React.FC = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false);
  const [isSafari, setIsSafari] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Check if the browser is Safari
    const ua = navigator.userAgent.toLowerCase();
    setIsSafari(ua.includes("safari") && !ua.includes("chrome"));

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVideoLoaded(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
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
  const videoTransform = useTransform(scrollY, [0, 300], ["0%", "-25%"]); // Video moves to the left
  const svgTransform = useTransform(scrollY, [0, 100], ["0%", "25%"]); // SVG moves to the right
  const videoWidth = useTransform(scrollY, [0, 300], ["100%", "150%"]);

  return (
    <div className="relative h-screen max-w-screen-2xl flex flex-col items-center overflow-hidden min-h-screen w-full">
      <div className="relative sm:p-8 md:p-2 lg:px-12 w-full flex-wrap">
        <motion.div
          className="md:mt-[3rem] h-[calc(100vh-150px)] flex justify-center items-center sm:h-[calc(100vh-98px)] rounded-xl"
          ref={containerRef}
          style={{ width: videoWidth, x: videoTransform, originX: 0.5 }}
        >
          {isVideoLoaded ? (
            <div className="relative w-full h-full">
              <video
                ref={videoRef}
                id="background-video"
                className="w-full h-full object-cover rounded-3xl"
                autoPlay={!isSafari}
                loop
                muted
                playsInline
                preload="metadata"
              >
                <source src="video/BgHome.mp4" type="video/mp4" />
                <source src="video/bg.webm" type="video/webm" />
                <source src="video/bg.ogv" type="video/ogg" />
              </video>
              <div className="absolute inset-0 bg-black bg-opacity-30 rounded-3xl"></div>
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
          ) : (
            <div
              className="absolute inset-0 flex items-center rounded-3xl justify-center bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://i.pinimg.com/564x/30/b8/be/30b8beaf12dee7ac4ea578c48926f78b.jpg')",
              }}
            >
              <div className=""></div>
            </div>
          )}
        </motion.div>
      </div>

      <div className="absolute top-[45%] left-28 text-7xl text-white font-alexBrush">
        <p className="text-2xl mx-4 md:text-2xl lg:text-5xl font-poppins font-thin">
          FOOD PACKING MACHINES
        </p>
        <div className="ml-4">
          <span className="text-8xl text-[#f2f2f2] font-alexBrush">
            Manufacturing
          </span>
        </div>
      </div>

      <div className="absolute w-[30rem] h-[10rem] rounded-tl-[4rem] right-0 bg-[#f2f2f2] bottom-5 text-3xl font-poppins text-white text-center">
        <motion.div
          className="-mt-6 flex mr-10 justify-end"
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
        <div className="w-full -ml-6 mt-10 flex justify-center">
          <PositionAwareButton
            borderWidth="1px"
            iconSize="50px"
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
        <div className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            viewBox="0 0 20 20"
            fill="none"
            className="-ml-8 mt-[0rem] h-6 w-10"
          >
            <path
              d="M20 20C20 8.95431 11.0457 0 0 0H20V20Z"
              fill="#f2f2f2"
              transform="rotate(90 10 10)"
            ></path>
          </svg>
        </div>
      </div>
      <ContactIcons />
      <div className="font-bold z-[9999] mr-8 text-5xl fixed rounded-full border-2 border-white p-2 mb-4 bottom-0 right-0 bg-[#4d3d78] bg-opacity-50 backdrop-blur-sm transform hover:scale-110 transition duration-300">
        <IoChatboxEllipsesOutline />
      </div>
    </div>
  );
};

Home.displayName = "Hero";

export default React.memo(Home);
