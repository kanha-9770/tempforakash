"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { BlurImage } from "../../ui/BlurImage";
import data from "../../Constants/Navbar/index.json";

interface ProductLayoutProps {
  setHoveredItem: (item: string | null) => void;
  setHeading: (heading: string | null) => void;
  setIsVisible: (visible: boolean) => void;
}

const ProductLayout: React.FC<ProductLayoutProps> = ({
  setHoveredItem,
  setHeading,
  setIsVisible,
}) => {
  const productData = data.find((item) => item.category === "Product")?.data;
  const navLeftData = productData?.Machines || [];
  const navRightData = productData?.SidebarLinks || [];

  const [hoveredCategory, setHoveredCategory] = useState<string>(
    navRightData[0]?.name || ""
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sidebarIndex, setSidebarIndex] = useState(0);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname() || "";
  const countryCode = pathname.split("/")[1]?.toLowerCase();
  const componentCode = pathname.split("/")[2]?.toLowerCase();

  const filteredMachines = navLeftData.filter((machine) =>
    hoveredCategory ? machine.category.includes(hoveredCategory) : false
  );

  const totalVisible = 6;
  const mobileVisibleItems = totalVisible - 2;

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + totalVisible, filteredMachines.length - totalVisible)
    );
  }, [filteredMachines.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - totalVisible, 0));
  }, []);

  const handleSidebarNext = useCallback(() => {
    setSidebarIndex((prevIndex) =>
      Math.min(prevIndex + 1, navRightData.length - 8)
    );
  }, [navRightData.length]);

  const handleSidebarPrev = useCallback(() => {
    setSidebarIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredCategory("");
    setCurrentIndex(0);
    setHoveredItem(null);
    setHeading(null);
    setIsVisible(true);
  }, [setHoveredItem, setHeading, setIsVisible]);

  const handleCategoryClick = useCallback(
    (linkName: string, heading: string) => {
      setHoveredCategory(linkName);
      setHoveredItem(linkName);
      setHeading(heading);
      setIsVisible(false);
    },
    [setHoveredItem, setHeading, setIsVisible]
  );

  const expandItem = useCallback((item: string) => {
    setExpandedItem((prev) => (prev === item ? null : item));
  }, []);

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
      transition: { delay: i * 0.05, duration: 0.2, ease: "easeInOut" },
    }),
  };

  const sidebarVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.02, duration: 0.2, ease: "easeOut" },
    }),
  };

  const renderMachineItem = useCallback(
    (machine: any, index: number) => (
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
            className="object-contain transform transition-transform duration-200 rounded-3xl relative z-10 h-32 w-full"
            width={200}
            height={150}
          />
          <h3
            className={`${
              componentCode === "knowledge-center"
                ? "hover:text-[#bfb3f0]"
                : "hover:text-[#483d78]"
            } text-base font-normal mt-2 hover:font-semibold  invert-0 relative z-20`}
          >
            {machine.name}
          </h3>
        </a>
      </motion.div>
    ),
    [countryCode, imageVariants]
  );

  const renderSidebarItem = useCallback(
    (link: any, index: number) => (
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
        className={`flex items-center space-x-4 text-base font-normal transition-colors duration-300 cursor-pointer ${
          componentCode === "knowledge-center"
            ? "hover:text-[#bfb3f0] hover:font-semibold"
            : "hover:text-[#483d78] hover:font-semibold"
        } `}
      >
        <a
          className="flex w-full gap-2 flex-row"
          href={`${countryCode}/products/${link.name}`}
        >
          <div className="flex items-center justify-center cursor-pointer">
            <BlurImage
              className="rounded-full h-6 w-6 transform transition-transform duration-200 object-cover"
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
    ),
    [countryCode, handleCategoryClick, hoveredCategory, sidebarVariants]
  );

  return (
    <div
      ref={containerRef}
      className="w-full z-30 h-full flex max-w-screen-2xl mx-auto items-start justify-center font-light"
    >
      {/* Desktop View */}
      <div className="w-full hidden lg:flex flex-col gap-10 lg:flex-row rounded-lg overflow-hidden">
        <div className="flex justify-center  w-full md:w-[75%]  relative">
          {filteredMachines.length > totalVisible && (
            <button
              onClick={handlePrev}
              className={`absolute invert-0 left-0 z-30 p-0 text-4xl border-2 rounded-full overflow-hidden transition-all ${
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
              ? filteredMachines.map(renderMachineItem)
              : filteredMachines
                  .slice(currentIndex, currentIndex + totalVisible)
                  .map(renderMachineItem)}
          </div>

          {filteredMachines.length > totalVisible && (
            <button
              onClick={handleNext}
              className={`absolute invert-0 border-2 text-3xl rounded-full right-0 z-10 h-10 w-10 animated-button-right ${
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
        <div className="w-full lg:w-[25%]  border-l lg:h-[26rem] flex flex-col">
          <div className="w-full h-full flex justify-center items-center  overflow-y-hidden border-gray-300 relative">
            {sidebarIndex > 0 && (
              <button
                onClick={handleSidebarPrev}
                className="absolute top-0 left-1/2 text-4xl transform p-0 invert-0"
              >
                <MdKeyboardArrowUp />
              </button>
            )}
            <div className="space-y-4 flex flex-col ml-8  invert-0 pt-6 h-[24rem]">
              {navRightData
                .slice(sidebarIndex, sidebarIndex + 8)
                .map(renderSidebarItem)}
            </div>
            {sidebarIndex + 8 < navRightData.length && (
              <button
                onClick={handleSidebarNext}
                className="absolute bottom-4 left-1/2 text-4xl invert-0"
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
                {navRightData
                  .slice(sidebarIndex, navRightData.length)
                  .map((link, index) => (
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
                      className="flex flex-col border-b-[1px] justify-between text-lg transition-colors duration-300 cursor-pointer font-poppins text-[#483d78] font-semimedium overflow-hidden"
                    >
                      <div
                        onClick={() => expandItem(link.name)}
                        className="flex items-center justify-between"
                      >
                        <div className="flex flex-row space-x-3 cursor-pointer">
                          <div className="flex items-center justify-center">
                            <BlurImage
                              className="rounded-full h-6 w-6 ml-1 duration-200 object-cover"
                              src={link.icon}
                              alt={link.name}
                              width={24}
                              height={24}
                              loading="lazy"
                            />
                          </div>
                          <p
                            className={
                              expandedItem === link.name
                                ? "text-[#483d73]"
                                : "text-gray-500"
                            }
                          >
                            {link.name}
                          </p>
                        </div>
                        <span className={`text-gray-500 pr-[0.7rem] text-2xl`}>
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
                              <div className="grid h-[22rem] border-t-[1px] grid-cols-2 py-4 gap-4 w-full">
                                {filteredMachines.length <= mobileVisibleItems
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
                                        <h3 className="text-sm invert-0 mt-2 w-full font-bold">
                                          {machine.name}
                                        </h3>
                                      </motion.div>
                                    ))
                                  : filteredMachines
                                      .slice(
                                        currentIndex,
                                        currentIndex + mobileVisibleItems
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
                                          <h1 className="text-sm invert-0 font-bold mt-2">
                                            {machine.name}
                                          </h1>
                                        </motion.div>
                                      ))}
                              </div>
                              <div className="relative w-full space-x-4 flex z-30 h-[5%] justify-center items-center">
                                {filteredMachines.length >
                                  mobileVisibleItems && (
                                  <>
                                    <button
                                      onClick={handlePrev}
                                      className={`invert-0 text-3xl transition-all ${
                                        currentIndex === 0
                                          ? "opacity-20"
                                          : "opacity-100"
                                      }`}
                                      disabled={currentIndex === 0}
                                    >
                                      <FaArrowLeftLong />
                                    </button>
                                    <button
                                      onClick={handleNext}
                                      className={`invert-0 z-30 text-3xl transition-all ${
                                        currentIndex + mobileVisibleItems >=
                                        filteredMachines.length
                                          ? "opacity-20"
                                          : "opacity-100"
                                      }`}
                                      disabled={
                                        currentIndex + mobileVisibleItems >=
                                        filteredMachines.length
                                      }
                                    >
                                      <FaArrowRightLong />
                                    </button>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductLayout;
