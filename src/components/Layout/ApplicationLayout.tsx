import React, { useState } from "react";
import Image from "next/image";
import { item, Item } from "../Constants/index";
import styles from "./application.module.css";
import PositionAwareButton from "../ui/PositionAwareButton";
import { motion } from "framer-motion";
const ITEMS_PER_PAGE = 9;

const Application: React.FC<{
  onHover: (item: Item) => void;
  items: Item[];
}> = ({ onHover, items }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const handleMouseEnter = (index: number, item: Item) => {
    setHoveredIndex(index);
    onHover(item);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  const handleNextPage = () => {
    if ((currentPage + 1) * ITEMS_PER_PAGE < items.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const paginatedItems = items.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );
  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.01,
        duration: 0.1,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <>
      <div className="hidden lg:grid grid-cols-3 lg:grid-cols-6 pt-2 gap-4 lg:p-6 rounded">
        {/* desktop view */}
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="relative mt-2 h-24 w-32 rounded-lg"
            onMouseEnter={() => handleMouseEnter(index, item)}
            onMouseLeave={handleMouseLeave}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            <a
              href={`/application/${item.name
                .toLowerCase()
                .replace(/ /g, "-")}`}
              className="relative bg-slate-400 rounded-md h-24 w-32 block"
            >
              <Image
                src={item.src}
                alt={item.alt}
                height={400}
                width={400}
                className={`object-cover w-full h-full transition-transform duration-300 ease-in-out rounded-md ${
                  hoveredIndex === index ? "transform translate-y-[-20%]" : ""
                }`}
              />
              <p
                onMouseEnter={() => onHover(item)}
                className={`absolute bottom-0 w-full text-black text-sm text-center transition-opacity duration-300 ease-in-out ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                {item.name}
              </p>
            </a>
          </motion.div>
        ))}
      </div>
      {/* mobile view */}

      <div className="lg:hidden -ml-1 flex w-full  flex-col ">
        <div className="grid grid-cols-3  gap-4  rounded">
          {paginatedItems.map((item, index) => (
            <motion.div
              key={index}
              className="relative h-28 w-28 border-2 rounded-3xl p-2"
              custom={index}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
            >
              <a
                href={`/application/${item.name
                  .toLowerCase()
                  .replace(/ /g, "-")}`}
                className="relative bg-slate-400 rounded-md h-20 w-24 block"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  height={400}
                  width={400}
                  className={`object-cover w-full h-full transition-transform duration-300 ease-in-out rounded-md ${
                    hoveredIndex === index ? "transform translate-y-[-20%]" : ""
                  }`}
                />
              </a>
              <p className=" w-full text-black text-sm text-center">
                {item.name}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-between w-full max-w-md mt-4">
          <button
            onClick={handlePreviousPage}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            disabled={currentPage === 0}
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            disabled={(currentPage + 1) * ITEMS_PER_PAGE >= items.length}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

const ApplicationPage: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<Item>(item[0]);

  const handleHover = (item: Item) => {
    setHoveredItem(item);
  };

  const sidebarVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <div className="lg:flex rounded-3xl w-full lg:w-[98vw] h-full hidden justify-start lg:justify-center items-start lg:max-w-screen-2xl">
        {/* desktop view */}
        <div className="overflow-hidden relative">
          <div className="flex">
            <div className="w-full lg:w-[75%] pt-4">
              <Application onHover={handleHover} items={item} />
            </div>
            <div className="hidden lg:flex relative ml-2 p-4 pb-8  items-center">
              <div className="ml-2 hidden w-2 h-full  border-l border-gray-300"></div>
            </div>
            <motion.div
              className="hidden lg:flex w-[35%] ml-3 mt-24 relative"
              initial="hidden"
              animate="visible"
              variants={sidebarVariants}
            >
              <div
                className="absolute inset-0 bg-cover bg-center h-40 w-40 mt-32 opacity-10 transition-opacity duration-300 ease-in-out ml-40"
                style={{ backgroundImage: `url(${hoveredItem.bgpic.src})` }}
              ></div>
              <div className="relative z-10 p-4 -mt-14">
                <h2 className="text-6xl font-montserrat font-extrabold text-[#483d73]">
                  {hoveredItem.name.split(" ")[0]}{" "}
                </h2>
                <h3 className="text-6xl text-red-500 font-montserrat font-extrabold">
                  {hoveredItem.name.split(" ")[1]}
                </h3>
                <p className="text-base mt-8 mr-4 text-justify text-[#483d73]">
                  {hoveredItem.description}
                </p>
              </div>
              <div className={styles.container}>
                <PositionAwareButton
                  text={"Explore More"}
                  borderRadius="100px"
                  iconSize="32px"
                  borderColor="black"
                  icon
                  width="175px"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="flex w-full lg:hidden">
        <Application onHover={handleHover} items={item} />
      </div>
    </>
  );
};

export default ApplicationPage;
