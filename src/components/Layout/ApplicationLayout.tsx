import React, { useState } from "react";
import Image from "next/image";
import { item, Item } from "../Constants/index";
import styles from "./application.module.css";
import PositionAwareButton from "../ui/PositionAwareButton";
import { motion } from "framer-motion";

const Application: React.FC<{
  onHover: (item: Item) => void;
  items: Item[];
}> = ({ onHover, items }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number, item: Item) => {
    setHoveredIndex(index);
    onHover(item);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

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
    <div className="grid grid-cols-6 pt-2 gap-4 p-6 rounded">
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
            href={`/application/${item.name.toLowerCase().replace(/ /g, "-")}`}
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
    <div className="rounded-3xl w-[98vw] h-full flex justify-center items-start max-w-screen-2xl">
      <div className="overflow-hidden relative">
        <div className="flex">
          <div className="w-[75%] pt-4">
            <Application onHover={handleHover} items={item} />
          </div>
          <div className="relative ml-2 p-4 pb-8 flex items-center">
          <div className="ml-2 w-2 h-full  border-l border-gray-300"></div>
          </div>
          <motion.div
            className="w-[35%] ml-3 mt-24 relative"
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
              <PositionAwareButton text={"Explore More"} borderRadius="100px"  iconSize="32px" borderColor="black" icon width="175px" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationPage;
