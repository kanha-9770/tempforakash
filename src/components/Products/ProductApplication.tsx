import React, { useState } from "react";
import Image from "next/image";
import { item, Item } from "../Constants/products/index";
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
        delay: i * 0.05,
        duration: 0.2,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <div className="grid grid-cols-5 gap-4 pt-2 p-6 rounded">
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

const ProductApplication: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<Item>(item[0]);

  const handleHover = (item: Item) => {
    setHoveredItem(item);
  };

  return (
    <div className="rounded-3xl flex justify-center items-start max-w-screen-2xl">
      <div className="overflow-hidden relative">
        <div className="flex">
          <div className="pt-4">
            <Application onHover={handleHover} items={item} />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProductApplication;
