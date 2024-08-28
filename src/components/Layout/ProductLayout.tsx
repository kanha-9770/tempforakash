import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Machines,
  SidebarLinks,
  images,
} from "../Constants/Navbar/product-data";
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
import { BiMinus } from "react-icons/bi";

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
  const [hoveredCategory, setHoveredCategory] = useState<string>(
    SidebarLinks[0].name
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredImageIndex, setHoveredImageIndex] = useState<number | null>(
    null
  );
  const [sidebarIndex, setSidebarIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const filteredMachines = Machines.filter((machine) =>
    hoveredCategory ? machine.category.includes(hoveredCategory) : false
  ).map((machine) => ({
    ...machine,
    image: (images as unknown as Images)[machine.image],
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
  const handleImageClick = (linkName: number) => {
    setHoveredImageIndex(linkName);
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
  const [active, setActive] = useState<string | null>(null);
  const toggleItem = (item: string) => {
    setActive(active === item ? null : item);
  };

  const expandItem = (item: string) => {
    setExpandedItem(expandedItem === item ? null : item);
  };
  return (
    <div
      ref={containerRef}
      className="w-full lg:w-[98vw] lg:py-4 max-w-screen-2xl z-30 h-full lg:pb-8 rounded-xl flex  items-start justify-center font-medium"
    >
      {/* desktop view condition */}
      <div className="w-full hidden lg:flex flex-col lg:flex-row rounded-lg overflow-hidden">
        <div className="flex  justify-center items-center w-full md:w-[72%] relative">
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

          <div className="flex flex-wrap  justify-start items-start overflow-hidden w-full">
            {filteredMachines.length <= totalVisible
              ? filteredMachines.map((machine, index) => (
                  <motion.div
                    key={`${machine.name}-${index}`}
                    className="text-center relative w-1/3 p-1"
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={imageVariants}
                    onMouseEnter={() => setHoveredImageIndex(index)}
                    onMouseLeave={() => setHoveredImageIndex(null)}
                  >
                    <Image
                      src={machine.image}
                      alt={machine.name}
                      className="object-contain transform hover:scale-90 transition-transform duration-200 rounded-3xl relative z-10 h-32 w-full"
                      width={200}
                      height={150}
                    />
                    <h3 className="text-lg text-black mt-2 font-bold relative z-20">
                      {machine.name}
                    </h3>
                    <div className="flex justify-center mt-2 space-x-2">
                      <a
                        href={`/products/${machine.name}`}
                        onClick={() => handleMouseLeave()}
                        className="relative text-white bg-red-500 rounded-3xl px-8 p-1 z-20 transform hover:scale-90 transition-transform duration-300"
                      >
                        Book Now
                      </a>
                    </div>
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
                      onMouseEnter={() => setHoveredImageIndex(index)}
                      onMouseLeave={() => setHoveredImageIndex(null)}
                    >
                      <BlurImage
                        src={machine.image}
                        alt={machine.name}
                        className="object-contain transform hover:scale-90 transition-transform duration-200 rounded-3xl relative z-10 h-32 w-full"
                        width={200}
                        height={150}
                        loading="lazy"
                      />
                      <h1 className="text-lg text-black font-bold pt-0 relative z-20">
                        {machine.name}
                      </h1>
                      <div className="flex justify-center mt-2 space-x-2">
                        <a
                          href={`/products/${machine.name}`}
                          onClick={() => handleMouseLeave()}
                          className="relative text-white bg-red-500 rounded-3xl px-8 p-1 z-20 transform hover:scale-90 transition-transform duration-300"
                        >
                          Book Now
                        </a>
                      </div>
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
        <div className="w-full lg:w-[28%] lg:h-[28rem] flex flex-col ">
          <div className="w-full  h-[28rem] flex justify-center items-center border-l overflow-y-hidden border-gray-300 relative">
            {sidebarIndex > 0 && (
              <button
                onClick={handleSidebarPrev}
                className="absolute top-0 left-1/2 text-4xl transform p-0 text-black"
              >
                <MdKeyboardArrowUp />
              </button>
            )}
            <div className="space-y-5 ">
              {SidebarLinks.slice(sidebarIndex, sidebarIndex + 8).map(
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
                    className={`flex items-center space-x-4 text-lg transition-colors duration-300 cursor-pointer ${
                      hoveredCategory === link.name
                        ? "font-poppins text-[#483d78] font-bold"
                        : "font-poppins text-black"
                    }`}
                  >
                    <div className="flex items-center justify-center cursor-pointer">
                      <BlurImage
                        className="rounded-full h-6 w-6 transform hover:scale-105 transition-transform duration-200 object-cover"
                        src={link.icon}
                        alt={link.name}
                        width={24}
                        height={24}
                        loading="lazy"
                      />
                    </div>
                    <p>{link.name}</p>
                  </motion.div>
                )
              )}
            </div>
            {sidebarIndex + 8 < SidebarLinks.length && (
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
        {/* Main content area */}
        <div className="flex flex-col h-full w-full relative">
          {/* Sidebar section */}
          <div className="absolute w-full h-full flex flex-col">
            <div className="w-full flex justify-start items-start  overflow-y-hidden relative">
              
              <div className="space-y-4  pb-32 h-full stopscrollProduct overflow-y-auto w-full">
                {SidebarLinks.slice(sidebarIndex,SidebarLinks.length).map(
                  (link, index) => (
                    <motion.div
                      key={link.name}
                      custom={index}
                      initial="hidden"
                      animate="visible"
                      variants={sidebarVariants}
                      onClick={() => handleCategoryClick(link.name, link.name)}
                      className={`flex items-center border-b-[1px] pb-[0.7rem] justify-between  text-lg transition-colors duration-300 cursor-pointer font-poppins text-[#483d78] font-semimedium`}
                    >
                      <div
                        className="flex flex-row space-x-3"
                        onClick={() => expandItem(link.name)}
                      >
                        <div className="flex items-center justify-center cursor-pointer">
                          <BlurImage
                            className="rounded-full h-6 w-6 transform  ml-1 transition-transform duration-200 object-cover"
                            src={link.icon}
                            alt={link.name}
                            width={24}
                            height={24}
                            loading="lazy"
                          />
                        </div>
                        <p>{link.name}</p>
                      </div>
                      <span
                        onClick={() => expandItem(link.name)}
                        className="text-gray-500  pr-[0.7rem] text-2xl"
                      >
                        {expandedItem === link.name ? "-" : "+"}
                      </span>

                      {expandedItem === link.name && (
                        <div className="absolute -mt-2 inset-0 h-full w-full bg-white z-50 flex flex-col overflow-hidden">
                          <div className="flex border-b-[1px] justify-between items-center p-2">
                            <span className="text-lg font-medium text-black">
                              {link.name}
                            </span>
                            <button
                              className="text-gray-700 "
                              onClick={() => expandItem(link.name)}
                            >
                              <BiMinus className="text-2xl" />
                            </button>
                          </div>
                          <div className="py-4 px-2 flex-grow overflow-y-auto">
                            <div className="text-sm text-gray-700">
                              <div className="grid grid-cols-2 gap-4 w-full">
                                {filteredMachines.length <= totalVisible - 2
                                  ? filteredMachines.map((machine, index) => (
                                      <motion.div
                                        key={`${machine.name}-${index}`}
                                        className="text-center rounded-3xl border-2 p-2"
                                        custom={index}
                                        initial="hidden"
                                        animate="visible"
                                        variants={imageVariants}
                                        onClick={() => handleImageClick(index)}
                                      >
                                        <Image
                                          src={machine.image}
                                          alt={machine.name}
                                          className="object-contain transform  transition-transform duration-200 rounded-3xl h-32 w-full"
                                          width={200}
                                          height={150}
                                        />
                                        <h3 className="text-sm text-black mt-2 font-bold">
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
                                          className="text-center rounded-3xl p-2 border-2"
                                          custom={index}
                                          initial="hidden"
                                          animate="visible"
                                          variants={imageVariants}
                                          onClick={() =>
                                            handleImageClick(index)
                                          }
                                        >
                                          <BlurImage
                                            src={machine.image}
                                            alt={machine.name}
                                            className="object-contain transform  transition-transform duration-200 rounded-3xl h-32 w-full"
                                            width={200}
                                            height={150}
                                            loading="lazy"
                                          />
                                          <h1 className="text-sm text-black font-bold pt-0">
                                            {machine.name}
                                          </h1>
                                        </motion.div>
                                      ))}
                              </div>
                            </div>
                            {/* arrows */}
                            <div className="absolute w-full space-x-4 top-[60%] flex z-30 h-[5%] justify-center items-center bottom-0">
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
                                    currentIndex + totalVisible >=
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
