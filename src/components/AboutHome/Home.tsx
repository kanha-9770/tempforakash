"use client";
import React, { useState, useCallback, memo, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { aboutData } from '../Constants/About/aboutus-landingpage'; // Import dynamic content

const Home: React.FC = () => {
  const [activeLink, setActiveLink] = useState<number>(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false);
  const videoRef = useRef<HTMLDivElement | null>(null);

  const handleMouseEnter = useCallback((index: number) => {
    setActiveLink(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setActiveLink(-1);
  }, []);

  const handleClick = (ref: React.RefObject<HTMLDivElement>) => () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVideoLoaded(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  const { scrollY } = useScroll();
  const videoWidth = useTransform(scrollY, [0, 300], ["100%", "150%"]);
  const videoX = useTransform(scrollY, [0, 300], ["0%", "-25%"]);

  return (
    <div className="relative h-screen  flex flex-col items-center min-h-screen w-full top-3 overflow-hidden">
      <div className="relative sm:p-8 md:p-2 lg:px-12 w-full flex-wrap">
        <motion.div
          className="md:mt-[3rem] h-[calc(100vh-150px)] flex justify-center items-center sm:h-[calc(100vh-120px)] rounded-xl"
          ref={videoRef}
          style={{ width: videoWidth, x: videoX, originX: 0.5 }}
        >
          {isVideoLoaded ? (
            <div className="relative w-full h-full">
              <video
                id="background-video"
                className="w-full h-full object-cover rounded-2xl"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                onLoadedData={() => setIsVideoLoaded(true)}
              >
                <source src={aboutData.videoSrc} type="video/mp4" />
              </video>
              <div className="absolute bottom-0 left-0 w-full h-52 bg-gradient-to-t from-black to-transparent rounded-b-xl"></div>
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="loader"></div>
            </div>
          )}
        </motion.div>
      </div>

      <div className="absolute bottom-16 left-28 text-white text-9xl font-alexBrush">
        {aboutData.title}
      </div>

      <div className="absolute left-1/2 bottom-20 transform -translate-x-1/2 h-32 w-px bg-white"></div>

      <div
        className="absolute right-56 bottom-5 mb-24 text-2xl font-montserrat text-white text-center"
        dangerouslySetInnerHTML={{ __html: aboutData.quote }}
      />
    </div>
  );
};

Home.displayName = "Hero";

export default memo(Home);






// "use client";
// import React, { useState, useCallback, memo, useEffect, useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { aboutData } from "../Constants/About/aboutus-landingpage"; // Import dynamic content

// const Home: React.FC = () => {
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
//     <div className="relative flex flex-col items-center lg:min-h-screen  w-full top-3 overflow-hidden bg-red-400 h-[calc(70vh-150px)]">
//       <div className="relative p-4 sm:p-8 md:p-2 lg:px-12 w-full flex-wrap">
//         <motion.div
//           className="h-[calc(50vh-150px)] sm:h-[calc(100vh-120px)] flex justify-center items-center rounded-xl"
//           ref={videoRef}
//           style={{ width: videoWidth, x: videoX, originX: 0.5 }}
//         >
//           {isVideoLoaded ? (
//             <div className="relative w-full h-full">
//               <video
//                 id="background-video"
//                 className="w-full h-full object-cover rounded-2xl"
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//                 preload="metadata"
//                 onLoadedData={() => setIsVideoLoaded(true)}
//               >
//                 <source src={aboutData.videoSrc} type="video/mp4" />
//               </video>
//               <div className="absolute bottom-0 left-0 w-full h-32 sm:h-24 bg-gradient-to-t from-black to-transparent rounded-b-xl"></div>
//             </div>
//           ) : (
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="loader"></div>
//             </div>
//           )}
//         </motion.div>
//       </div>

//       <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-white text-5xl sm:text-6xl lg:text-9xl font-alexBrush text-center">
//         {aboutData.title}
//       </div>

//       <div className="absolute left-1/2 bottom-16 sm:bottom-20 transform -translate-x-1/2 h-24 sm:h-32 w-px bg-white"></div>

//       <div
//         className="absolute right-4 sm:right-10 md:right-16 bottom-4 mb-12 sm:mb-24 text-base sm:text-xl md:text-2xl font-montserrat text-white text-center"
//         dangerouslySetInnerHTML={{ __html: aboutData.quote }}
//       />
//     </div>
//   );
// };

// Home.displayName = "Hero";

// export default memo(Home);
