// "use client";
// import React, { useState, useCallback, memo, useEffect, useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import Image from "next/image";
// import { aboutData } from "../Constants/About/AboutD-page";
// import PositionAwareButton from "../ui/PositionAwareButton";
// import { IoIosArrowDroprightCircle } from "react-icons/io";

// const Home: React.FC = () => {
//   const [activeLink, setActiveLink] = useState<number>(0);
//   const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false);
//   const videoRef = useRef<HTMLDivElement | null>(null);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     // Check window width and set state
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 1024); // 1024px is the breakpoint for lg
//     };

//     // Initial check
//     handleResize();

//     // Add event listener for resize
//     window.addEventListener("resize", handleResize);

//     // Cleanup the event listener on component unmount
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleMouseEnter = useCallback((index: number) => {
//     setActiveLink(index);
//   }, []);

//   const handleMouseLeave = useCallback(() => {
//     setActiveLink(-1);
//   }, []);

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
//     <div className="relative lg:h-screen h-screen flex flex-col items-center overflow-hidden  w-full top-5">

//      <div className="relative lg:-left-[21.5rem] lg:top-20 lg:text-7xl text-5xl  lg:w-[40vw] w-[60vw] text-center lg:text-center font-poppins text-white z-10 top-80 ">
//   <span className="font-bold">{aboutData.mainHeading.split(' ')[0][0]}</span>
//   {aboutData.mainHeading.split(' ')[0].slice(1)}{' '}
//   <span className="lg:text-red-500 text-white">
//     <span className="font-bold">{aboutData.mainHeading.split(' ')[1][0]}</span>
//     {aboutData.mainHeading.split(' ')[1].slice(1)}
//   </span>
// </div>
//       <div className="relative p-4  lg:px-12 w-full flex-wrap lg:-top-2 -top-14">
//         <motion.div
//           className="md:mt-[3rem] lg:h-[calc(100vh-150px)] flex justify-center items-center  rounded-xl"
//           ref={videoRef}
//           style={{ width: videoWidth, x: videoX, originX: 0.5 }}
//         >
//           {isVideoLoaded ? (
//             <div className="relative w-full lg:h-[66vh] h-[70vh]">
//               <video
//                 id="background-video"
//                 className="w-full h-full object-cover rounded-xl"
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//                 preload="metadata"
//                 onLoadedData={() => setIsVideoLoaded(true)}
//               >
//                 <source src={aboutData.videoSrc} type="video/mp4" />
//               </video>
//               {/* <div className="absolute bottom-0 left-0 w-full h-52 bg-gradient-to-t from-black to-transparent rounded-b-xl"></div> */}
//             </div>
//           ) : (
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="loader"></div>
//             </div>
//           )}
//         </motion.div>
//       </div>
      
//       <Image 
//       src='/assets/about/ourcompany/company.svg'
//       alt='icon'
//       layout="fill"
//       objectFit="cover"
//       className=" lg:scale-75 scale-75 absolute lg:mt-16  items-center  "/>
    

//       <p className="lg:visible invisible   absolute bottom-20 text-center w-[36vw] text-white left-20 font-poppins "> {aboutData.peragraph}</p>
//       <p className="lg:invisible visible   bottom-52 text-center w-[35vw] text-white items-center  font-poppins  "> {aboutData.mobile}</p>

//       {isMobile && (
//           <div className= "bg-white  w-[8rem] h-[2rem] rounded-[1rem] absolute flex items-center bottom-44 ">
//             <button className="text-black text-[0.8rem] absolute left-[1rem]">
//             get a quote 
//             </button>
//             <button className="text-[#483d73] text-[1.6rem] absolute right-[0.1rem]">
//             <IoIosArrowDroprightCircle />
//             </button>
//           </div>
//         )}

//       <div className=" lg:visible invisible absolute right-[3rem] bottom-3 mb-20 text-sm font-montserrat text-white text-center flex flex-col items-center z-10">
//         <div className="flex -space-x-5">
//           {aboutData.iconData.map((icon, index) => (
//             <div key={index} className="flex flex-col items-center">
//               <Image
//                 src={icon.src}
//                 alt={icon.alt}
//                 width={icon.width}
//                 height={icon.height}
//                 className={`ml-${icon.marginLeft}`}
//               />
//               <p className={`w-[${icon.textWidth}] -mt-12`}>{icon.text}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// Home.displayName = "Hero";

// export default memo(Home);
 "use client";
import React, { useState, useCallback, memo, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { aboutData } from "../Constants/About/AboutD-page";
import PositionAwareButton from "../ui/PositionAwareButton";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Home: React.FC = () => {
  const [activeLink, setActiveLink] = useState<number>(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false);
  const videoRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // 1024px is the breakpoint for lg
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseEnter = useCallback((index: number) => {
    setActiveLink(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setActiveLink(-1);
  }, []);

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
    <div className="relative h-screen flex flex-col items-center overflow-hidden w-full">

      <div className="relative lg:text-7xl text-5xl w-[60vw] lg:w-[40vw] text-center font-poppins text-white z-10 top-[22rem] lg:top-0 lg:mt-20 lg:-ml-[43rem] ">
        <span className="font-bold">{aboutData.mainHeading.split(' ')[0][0]}</span>
        {aboutData.mainHeading.split(' ')[0].slice(1)}{" "}
        <span className="lg:text-red-500 text-white">
          <span className="font-bold">{aboutData.mainHeading.split(' ')[1][0]}</span>
          {aboutData.mainHeading.split(' ')[1].slice(1)}
        </span>
      </div>

      <div className="relative p-4 lg:px-12 w-full flex-wrap lg:-top-20 -top-14 ">
        <motion.div
          className="mt-8 lg:mt-[3rem] lg:h-[calc(100vh-150px)]  flex justify-center items-center rounded-xl overflow-hidden"
          ref={videoRef}
          style={{ width: videoWidth, x: videoX, originX: 0.5 }}
        >
          {isVideoLoaded ? (
            <div className="relative w-full h-[70vh] lg:h-[67vh]">
              <video
                id="background-video"
                className="w-full h-full object-cover rounded-xl"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                onLoadedData={() => setIsVideoLoaded(true)}
              >
                <source src={aboutData.videoSrc} type="video/mp4" />
              </video>
                 {/* <div className="absolute bottom-0 left-0 w-full h-52 bg-gradient-to-t from-black to-transparent rounded-b-xl"></div> */}
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="loader"></div>
            </div>
          )}
        </motion.div>
      </div>

      <div className=" absolute lg:w-[75%] w-[75%] lg:h-[30vh] h-auto top-32 lg:top-16">
    <Image
      src="/assets/about/ourcompany/company.svg"
      alt="icon"
      layout="responsive" // Use responsive layout for better control
      width={1000} // Define width and height to maintain aspect ratio
      height={1000}
      objectFit="cover"
      className="lg:scale-80 scale-100   " style={{marginTop:''}}
    />
  </div>

      <p className="hidden lg:block absolute bottom-20 text-center w-[36vw] text-white left-20 font-poppins">
        {aboutData.peragraph}
      </p>
      <p className="lg:hidden relative block -mt-[13rem] text-center w-[35vw] text-white font-poppins z-10">
        {aboutData.mobile}
      </p>

      {isMobile && (
        <div className="bg-white w-[8rem] h-[2rem] rounded-[1rem] relative flex items-center ">
          <button className="text-black text-[0.8rem] ml-4">
            Get a quote
          </button>
          <button className="text-[#483d73] text-[1.6rem] ml-auto mr-2">
            <IoIosArrowDroprightCircle />
          </button>
        </div>
      )}

      <div className="hidden lg:flex absolute right-[3rem] bottom-3 mb-20 text-sm font-montserrat text-white text-center flex-col items-center z-10">
        <div className="flex -space-x-5">
          {aboutData.iconData.map((icon, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={icon.src}
                alt={icon.alt}
                width={icon.width}
                height={icon.height}
                className={`ml-${icon.marginLeft}`}
              />
              <p className={`w-[${icon.textWidth}] -mt-12`}>{icon.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Home.displayName = "Hero";

export default memo(Home);
