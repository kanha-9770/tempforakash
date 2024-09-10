import React, { useState, useEffect, useRef, useCallback } from "react";

import data from "../Constants/Navbar/index.json";

import Image, { StaticImageData } from "next/image";
import {
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";
import { BlurImage } from "../ui/BlurImage";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { usePathname } from "next/navigation";

interface ProductLayoutProps {
  setHoveredItem: (item: string | null) => void;
  setHeading: (heading: string | null) => void;
  setIsVisible: (visible: boolean) => void;
}

interface Images {
  [key: string]: StaticImageData;
}

const ProductLayout: React.FC<ProductLayoutProps> = ({
  setHoveredItem,
  setHeading,
  setIsVisible,
}) => {
  const productData = data.find(item => item.category === "Product")?.data;
  // Provide fallback values if aboutData is undefined
  const navLeftData = productData?.Machines || [];
  const navRightData = productData?.SidebarLinks || [];
  
  const [hoveredCategory, setHoveredCategory] = useState<string>(
    navRightData[0].name
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  const [sidebarIndex, setSidebarIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const filteredMachines = navLeftData.filter((machine) =>
    hoveredCategory ? machine.category.includes(hoveredCategory) : false
  ).map((machine) => ({
    ...machine,
  }));

  const totalVisible = 6;

  const handleNext = () => {
    if (currentIndex + totalVisible < filteredMachines.length) {
      setCurrentIndex((prevIndex) => prevIndex + totalVisible);
    }
  };
  const mobilehandleNext = () => {
    if (currentIndex + (totalVisible - 2) < filteredMachines.length) {
      setCurrentIndex((prevIndex) => prevIndex + (totalVisible - 2));
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - totalVisible);
      console.log("Filtered Machines Length:", filteredMachines.length);
      console.log("Current Index:", currentIndex);
    }
  };
  const mobilehandlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - (totalVisible - 2));
      console.log("Filtered Machines Length:", filteredMachines.length);
      console.log("Current Index:", currentIndex);
    }
  };

  const handleSidebarNext = () => {
    setSidebarIndex((prevIndex) => prevIndex + 1);
  };

  const handleSidebarPrev = () => {
    setSidebarIndex((prevIndex) => prevIndex - 1);
  };

  const handleMouseLeave = useCallback(() => {
    setHoveredCategory("");
    setCurrentIndex(0);
    setHoveredItem(null);
    setHeading(null);
    setIsVisible(true);
  }, [setHoveredItem, setHeading, setIsVisible]);

  useEffect(() => {
    const containerElement = containerRef.current;
    if (containerElement) {
      containerElement.addEventListener("mouseleave", handleMouseLeave);
    }
    return () => {
      if (containerElement) {
        containerElement.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [handleMouseLeave]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [hoveredCategory]);

  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.2,
        ease: "easeInOut",
      },
    }),
  };
  const handleCategoryClick = (linkName: string, heading: string) => {
    setHoveredCategory(linkName);
    setHoveredItem(linkName);
    setHeading(heading);
    setIsVisible(false);
  };

  const sidebarVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.02,
        duration: 0.2,
        ease: "easeOut",
      },
    }),
  };
  // expand feature for mobile
  const [expandedItem, setExpandedItem] = useState<string | null>(null);


  const expandItem = (item: string) => {
    setExpandedItem(expandedItem === item ? null : item);
  };
  const pathname = usePathname() || "";
  const countryCode = pathname.split("/")[1]?.toLowerCase();
  return (
    <div
      ref={containerRef}
      className="w-full lg:w-screen  z-30 h-full  flex max-w-screen-2xl mx-auto  items-start justify-center font-light"
    >
      {/* desktop view condition */}
      <div className="w-full hidden lg:flex flex-col lg:flex-row rounded-lg overflow-hidden">
        <div className="flex  justify-center items-center w-full md:w-3/4 relative">
          {filteredMachines.length > totalVisible && (
            <button
              onClick={handlePrev}
              className={`absolute text-black left-2 z-30 p-0 text-4xl border-2 rounded-full overflow-hidden transition-all ${
                currentIndex === 0 ? "opacity-20" : "opacity-100"
              }`}
              style={{ top: "50%", transform: "translateY(-50%)" }}
              disabled={currentIndex === 0}
            >
              <MdKeyboardArrowLeft />
            </button>
          )}

          <div className="flex flex-wrap justify-start items-start overflow-hidden w-full">
            {filteredMachines.length <= totalVisible
              ? filteredMachines.map((machine, index) => (
                  <motion.div
                    key={`${machine.name}-${index}`}
                    className="text-center relative w-1/3 p-1"
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={imageVariants}
                  >
                    <a href={`/${countryCode}/products/${machine.name}`}>
                      <Image
                        src={machine.image}
                        alt={machine.name}
                        className="object-contain transform  transition-transform duration-200 rounded-3xl relative z-10 h-32 w-full"
                        width={200}
                        height={150}
                      />
                      <h3 className="text-lg text-black hover:font-bold hover:text-[#483d78] mt-2 relative z-20">
                        {machine.name}
                      </h3>
                    </a>
                  </motion.div>
                ))
              : filteredMachines
                  .slice(currentIndex, currentIndex + totalVisible)
                  .map((machine, index) => (
                    <motion.div
                      key={`${machine.name}-${index}`}
                      className="text-center relative w-1/3 p-2"
                      custom={index}
                      initial="hidden"
                      animate="visible"
                      variants={imageVariants}
                        >
                      <a href={`/${countryCode}/products/${machine.name}`}>
                        <Image
                          src={machine.image}
                          alt={machine.name}
                          className="object-contain transform  transition-transform duration-200 rounded-3xl relative z-10 h-32 w-full"
                          width={200}
                          height={150}
                        />
                        <h3 className="text-base font-normal text-black mt-2 hover:font-semibold hover:text-[#483d78] relative z-20">
                          {machine.name}
                        </h3>
                      </a>
                    </motion.div>
                  ))}
          </div>
          {filteredMachines.length > totalVisible && (
            <button
              onClick={handleNext}
              className={`absolute text-black border-2 text-3xl rounded-full right-2 z-10 h-10 w-10 animated-button-right ${
                currentIndex + totalVisible >= filteredMachines.length
                  ? "opacity-20"
                  : "opacity-100"
              }`}
              style={{ top: "50%", transform: "translateY(-50%)" }}
              disabled={currentIndex + totalVisible >= filteredMachines.length}
            >
              <MdKeyboardArrowRight />
            </button>
          )}
        </div>
        <div className="w-full lg:w-1/4  lg:h-[26rem] flex flex-col ">
          <div className="w-full  h-full flex justify-center items-center border-l overflow-y-hidden border-gray-300 relative">
            {sidebarIndex > 0 && (
              <button
                onClick={handleSidebarPrev}
                className="absolute top-0 left-1/2 text-4xl transform p-0 text-black"
              >
                <MdKeyboardArrowUp />
              </button>
            )}
            <div className="space-y-4 pt-6 h-[24rem]">
              {navRightData.slice(sidebarIndex, sidebarIndex + 8).map(
                (link, index) => (
                  <motion.div
                    key={link.name}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={sidebarVariants}
                    onMouseEnter={() => {
                      setHoveredCategory(link.name);
                      setCurrentIndex(0);
                    }}
                    onClick={() => handleCategoryClick(link.name, link.name)}
                    className={`flex items-center space-x-4 text-base font-normal  transition-colors duration-300 cursor-pointer ${
                      hoveredCategory === link.name
                        ? "font-poppins hover:font-semibold text-[#483d78]"
                        : "font-poppins text-black"
                    }`}
                  >
                    <a
                      className="flex w-full gap-2 flex-row"
                      href={`${countryCode}/products/${link.name}`}
                    >
                      <div className="flex items-center justify-center cursor-pointer">
                        <BlurImage
                          className="rounded-full h-6 w-6 transform  transition-transform duration-200 object-cover"
                          src={link.icon}
                          alt={link.name}
                          width={24}
                          height={24}
                          loading="lazy"
                        />
                      </div>
                      <p className="w-60">{link.name}</p>
                    </a>
                  </motion.div>
                )
              )}
            </div>
            {sidebarIndex + 8 < navRightData.length && (
              <button
                onClick={handleSidebarNext}
                className="absolute bottom-0 left-1/2 text-4xl text-black"
              >
                <MdKeyboardArrowDown />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* Mobile View */}
      <div className="absolute w-full h-screen p-2 -mt-2 flex lg:hidden flex-col rounded-lg overflow-hidden">
        <div className="flex flex-col h-full w-full relative">
          <div className="absolute w-full h-full flex flex-col">
            <div className="w-full flex justify-start items-start overflow-y-hidden relative">
              <div className="space-y-4 pb-32 h-full stopscrollProduct overflow-y-auto w-full">
                {navRightData.slice(sidebarIndex, navRightData.length).map(
                  (link, index) => (
                    <motion.div
                      key={index}
                      initial={{
                        height: expandedItem === link.name ? "auto" : "3rem",
                      }}
                      animate={{
                        height: expandedItem === link.name ? "auto" : "3rem",
                      }}
                      transition={{ duration: 0 }}
                      onClick={() => handleCategoryClick(link.name, link.name)}
                      className="flex flex-col border-b-[1px]  justify-between text-lg transition-colors duration-300 cursor-pointer font-poppins text-[#483d78] font-semimedium overflow-hidden"
                    >
                      <div
                        onClick={() => expandItem(link.name)}
                        className="flex items-center justify-between"
                      >
                        <div className="flex flex-row space-x-3 cursor-pointer">
                          <div className="flex items-center justify-center">
                            <BlurImage
                              className="rounded-full h-6 w-6  ml-1  duration-200 object-cover"
                              src={link.icon}
                              alt={link.name}
                              width={24}
                              height={24}
                              loading="lazy"
                            />
                          </div>
                          <p
                            className={`${
                              expandedItem === link.name
                                ? "text-[#483d73]"
                                : "text-gray-500 "
                            }`}
                          >
                            {link.name}
                          </p>
                        </div>
                        <span
                          className={`text-gray-500 ${
                            expandedItem === link.name ? "" : ""
                          } pr-[0.7rem] text-2xl`}
                        >
                          {expandedItem === link.name ? "-" : "+"}
                        </span>
                      </div>

                      {expandedItem === link.name && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          className="inset-0 w-full bg-white h-full z-50 flex flex-col overflow-hidden"
                        >
                          <div className="py-4 px-2 h-full flex-grow overflow-y-auto">
                            <div className="text-sm text-gray-700">
                              <div className=" grid h-[22rem] border-t-[1px] grid-cols-2 py-4 gap-4 w-full">
                                {filteredMachines.length <= totalVisible - 2
                                  ? filteredMachines.map((machine, index) => (
                                      <motion.div
                                        key={`${machine.name}-${index}`}
                                        className="text-center h-40 rounded-2xl border-2 p-2"
                                        custom={index}
                                        initial="hidden"
                                        animate="visible"
                                        variants={imageVariants}
                                      >
                                        <Image
                                          src={machine.image}
                                          alt={machine.name}
                                          className="object-contain transform transition-transform duration-200 rounded-xl h-24 bg-white border-[1px] w-full"
                                          width={200}
                                          height={150}
                                        />
                                        <h3 className="text-sm text-black mt-2 w-full font-bold">
                                          {machine.name}
                                        </h3>
                                      </motion.div>
                                    ))
                                  : filteredMachines
                                      .slice(
                                        currentIndex,
                                        currentIndex + (totalVisible - 2)
                                      )
                                      .map((machine, index) => (
                                        <motion.div
                                          key={`${machine.name}-${index}`}
                                          className="text-center h-40 rounded-xl p-2 border-2"
                                          custom={index}
                                          initial="hidden"
                                          animate="visible"
                                          variants={imageVariants}
                                         
                                        >
                                          <BlurImage
                                            src={machine.image}
                                            alt={machine.name}
                                            className="object-contain transform transition-transform duration-200 border-[1px] rounded-xl h-24 w-full"
                                            width={200}
                                            height={150}
                                            loading="lazy"
                                          />
                                          <h1 className="text-sm text-black font-bold mt-2">
                                            {machine.name}
                                          </h1>
                                        </motion.div>
                                      ))}
                              </div>
                              <div className="relative w-full space-x-4 flex z-30 h-[5%] justify-center items-center">
                                {filteredMachines.length > totalVisible - 2 && (
                                  <button
                                    onClick={mobilehandlePrev}
                                    className={`text-black text-3xl transition-all ${
                                      currentIndex === 0
                                        ? "opacity-20"
                                        : "opacity-100"
                                    }`}
                                    disabled={currentIndex === 0}
                                  >
                                    <FaArrowLeftLong />
                                  </button>
                                )}
                                {filteredMachines.length > totalVisible - 2 && (
                                  <button
                                    onClick={mobilehandleNext}
                                    className={`text-black z-30 text-3xl transition-all ${
                                      currentIndex + (totalVisible - 2) >=
                                      filteredMachines.length
                                        ? "opacity-20"
                                        : "opacity-100"
                                    }`}
                                    disabled={
                                      currentIndex + (totalVisible - 2) >=
                                      filteredMachines.length
                                    }
                                  >
                                    <FaArrowRightLong />
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductLayout;
