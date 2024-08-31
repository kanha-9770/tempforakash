"use client";
import React, { useRef, useEffect, useState, useCallback } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { items, titlesWithImages } from "../Constants/Navbar/about-data";
import { motion } from "framer-motion";
import AnimatedContainer from "@/hooks/AnimatedContainer";
import { IoIosArrowForward } from "react-icons/io";
import { useRouter, usePathname } from "next/navigation";

const IoIosArrowDown = dynamic(() =>
  import("react-icons/io").then((mod) => mod.IoIosArrowDown)
);
const IoIosArrowUp = dynamic(() =>
  import("react-icons/io").then((mod) => mod.IoIosArrowUp)
);
const Link = dynamic(() => import("next/link"), { ssr: false });

const AboutLayout = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();
  const pathname = usePathname() || "";
  const countryCode = pathname.split("/")[1]?.toLowerCase();

  const scrollDown = useCallback(() => {
    setCurrentIndex((prev) => (prev < items.length - 2 ? prev + 1 : prev));
  }, []);

  const scrollUp = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  const handleWheel = useCallback(
    (e: WheelEvent) => {
      const isScrollingDown = e.deltaY > 0;
      isScrollingDown ? scrollDown() : scrollUp();
    },
    [scrollDown, scrollUp]
  );

  useEffect(() => {
    const carouselElement = carouselRef.current;
    if (carouselElement) {
      carouselElement.addEventListener("wheel", handleWheel);
    }
    return () => {
      if (carouselElement) {
        carouselElement.removeEventListener("wheel", handleWheel);
      }
    };
  }, [handleWheel]);

  return (
    <div className="flex w-full bg-white p-2 lg:p-2  lg:border-none  lg:px-4 lg:pb-6  mx-auto max-w-screen-2xl flex-col lg:flex-row items-center justify-center lg:rounded-xl h-full">
      <div className="grid grid-cols-2 h-[80%] sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full lg:w-[75vw]">
        {titlesWithImages.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border-2 p-2 rounded-3xl lg:rounded-none lg:p-0 lg:border-none flex flex-col justify-start items-center lg:mt-4"
          >
            <a href={`/${countryCode}/${item.title}`}>
              <Image
                src={item.image}
                alt={item.title}
                className="rounded-2xl cursor-pointer w-44 h-32  lg:w-56 lg:h-56 object-cover transform lg:hover:scale-80 transition-transform duration-200"
                width={224}
                height={224}
                priority={index < 4}
                loading={index < 4 ? "eager" : "lazy"}
              />
              <p className="mt-2 flex items-center justify-center space-x-2 text-center font-poppins text-black hover:text-[#483d78] hover:font-bold text-xs sm:text-sm md:text-base transform lg:hover:scale-80 transition-transform duration-300">
                <span>{item.title}</span>
              </p>
            </a>
          </motion.div>
        ))}
      </div>
      <div className="hidden lg:flex ml-2 w-2 h-72 border-l border-gray-300"></div>
     {/* desktop view */}
     <div className="w-full  lg:w-[20vw] h-32 lg:h-auto hidden  lg:flex flex-col justify-between mt-4 lg:mt-0">
       
       <AnimatedContainer currentIndex={currentIndex}>
         {items.slice(currentIndex, currentIndex + 2).map((item, index) => (
           <a key={index} href={`/${countryCode}/${item.title}`}>
             <div
               className={`${item.color} hidden lg:flex border-t-2 lg:border-none lg:hover:scale-80 transition-transform duration-200 items-center lg:p-4 lg:rounded-3xl lg:mb-2`}
             >
               <div
                 className={`h-12 w-12 mr-4 flex justify-center items-center text-2xl ${item.textcolor}`}
               >
                 <item.icon />
               </div>
               <div>
                 <h3 className="text-sm  sm:text-md text-black font-bold mb-0">
                   {item.title}
                 </h3>
                 <p className="text-xs hidden lg:flex text-black line-clamp-3">
                   {item.description}
                 </p>
               </div>
             </div>
             <div
               className={`flex lg:hidden border-t-[1px] lg:border-none lg:hover:scale-80 transition-transform duration-200  items-center lg:p-4 lg:rounded-3xl lg:mb-2`}
             >
               <div
                 className={`h-12 w-12 mr-4 flex justify-center items-center text-2xl ${item.textcolor}`}
               >
                 <item.icon />
               </div>
               <div className="flex flex-row w-full justify-between">
                 <h3 className="text-sm  sm:text-md text-black font-bold mb-0">
                   {item.title}
                 </h3>
                 <p className="text-xs hidden lg:flex text-black line-clamp-3">
                   {item.description}
                 </p>
                 <IoIosArrowForward className="text-2xl"/>
               </div>
             </div>
           </a>
         ))}
         
       </AnimatedContainer>
       <div className="hidden lg:flex w-full bg-gray-800 justify-center">
         {currentIndex > 0 && (
           <button
             onClick={scrollUp}
             className="absolute text-2xl text-black lg:top-[10%] top-[55%] rounded-full"
           >
             <IoIosArrowUp />
           </button>
         )}
       </div>
       <div className="bottom-4 hidden lg:flex w-full justify-center text-3xl">
         {currentIndex < items.length - 2 && (
           <button
             onClick={scrollDown}
             className="absolute bg-transparent text-black flex justify-center items-center rounded-full"
           >
             <IoIosArrowDown />
           </button>
         )}
       </div>
     </div>
     {/* mobile view */}
     <div className="w-full lg:w-[20vw] h-32 lg:h-auto  flex lg:hidden flex-col justify-between mt-4 lg:mt-0">
       
       <AnimatedContainer currentIndex={currentIndex}>
         {items.slice(currentIndex, currentIndex + 4).map((item, index) => (
           <Link key={index} href={`/${item.title}`} passHref>
             <div
               className={`${item.color} hidden lg:flex border-t-2 lg:border-none lg:hover:scale-80 transition-transform duration-200 items-center lg:p-4 lg:rounded-3xl lg:mb-2`}
             >
               <div
                 className={`h-12 w-12 mr-4 flex justify-center items-center text-2xl ${item.textcolor}`}
               >
                 <item.icon />
               </div>
               <div>
                 <h3 className="text-sm  sm:text-md text-black font-bold mb-0">
                   {item.title}
                 </h3>
                 <p className="text-xs hidden lg:flex text-black line-clamp-3">
                   {item.description}
                 </p>
               </div>
             </div>
             <div
               className={`flex lg:hidden border-t-[1px] lg:border-none lg:hover:scale-80 transition-transform duration-200  items-center lg:p-4 lg:rounded-3xl lg:mb-2`}
             >
               <div
                 className={`h-12 w-12 mr-4 flex justify-center items-center text-2xl ${item.textcolor}`}
               >
                 <item.icon />
               </div>
               <div className="flex flex-row w-full justify-between">
                 <h3 className="text-sm  sm:text-md text-black font-bold mb-0">
                   {item.title}
                 </h3>
                 <p className="text-xs hidden lg:flex text-black line-clamp-3">
                   {item.description}
                 </p>
                 <IoIosArrowForward className="text-2xl"/>
               </div>
             </div>
           </Link>
         ))}
         
       </AnimatedContainer>
       <div className="hidden lg:flex w-full bg-gray-800 justify-center">
         {currentIndex > 0 && (
           <button
             onClick={scrollUp}
             className="absolute text-2xl text-black lg:top-0 top-[55%] rounded-full"
           >
             <IoIosArrowUp />
           </button>
         )}
       </div>
       <div className="bottom-4 hidden lg:flex w-full justify-center text-3xl">
         {currentIndex < items.length - 2 && (
           <button
             onClick={scrollDown}
             className="absolute bg-transparent text-black flex justify-center items-center rounded-full"
           >
             <IoIosArrowDown />
           </button>
         )}
       </div>
     </div>
    </div>
  );
};

export default AboutLayout;
