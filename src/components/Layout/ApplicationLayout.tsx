import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { item, Item } from "../Constants/index";
import styles from "./application.module.css";
import PositionAwareButton from "../ui/PositionAwareButton";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import the icons
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { IoIosArrowForward } from "react-icons/io";

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
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    if (carouselRef.current) {
      checkScrollability();
    }
  }, []);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.clientWidth,
        behavior: "smooth",
      });
      checkScrollability();
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.clientWidth,
        behavior: "smooth",
      });
      checkScrollability();
    }
  };

  const chunkItems = (arr: Item[], size: number): Item[][] =>
    arr.length
      ? [arr.slice(0, size), ...chunkItems(arr.slice(size), size)]
      : [];

  const paginatedItems = chunkItems(items, 9); // Chunk the items into groups of 9

  // const paginatedItems = items.slice(
  //   currentPage * ITEMS_PER_PAGE,
  //   (currentPage + 1) * ITEMS_PER_PAGE
  // );
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
      <div className="hidden lg:grid grid-cols-3  mx-auto max-w-screen-2xl lg:grid-cols-6 pt-2 gap-4 lg:p-6 rounded">
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

      {/* Mobile view */}
      <div className="relative p-1 h-screen  flex lg:hidden flex-col items-center">
        <div
          className="w-full h-[50%] py-2 overflow-x-scroll scroll-smooth [scrollbar-width:none]"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div className="flex flex-row gap-2">
            {paginatedItems.map((group, groupIndex) => (
              <motion.div
                key={`slide-${groupIndex}`}
                className="min-w-full grid grid-cols-3 grid-rows-3 gap-2"
              >
                {group.map(
                  (
                    item: {
                      name:
                        | string
                        | number
                        | bigint
                        | boolean
                        | React.ReactElement<
                            any,
                            string | React.JSXElementConstructor<any>
                          >
                        | Iterable<React.ReactNode>
                        | Promise<React.AwaitedReactNode>
                        | null
                        | undefined;
                      src: string | StaticImport;
                      alt: string;
                    },
                    itemIndex: number
                  ) => (
                    <motion.div
                      key={`item-${itemIndex}`}
                      className="h-28 w-28 border-2 rounded-xl p-2 bg-white "
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.5,
                          delay: 0.1 * itemIndex,
                          ease: "easeOut",
                        },
                      }}
                    >
                      <a className="relative bg-white border-[1px] p-1 rounded-md h-16 w-24 block">
                        <Image
                          src={item.src}
                          alt={item.alt}
                          height={400}
                          width={400}
                          className="object-cover w-full h-full transition-transform duration-300 ease-in-out rounded-md"
                        />
                      </a>
                      <p className="w-full text-black font-semimedium text-sm text-center mt-2">
                        {item.name}
                      </p>
                    </motion.div>
                  )
                )}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex h-[5%] justify-center w-full ">
          <button
            className="h-12 w-12 rounded-full flex items-start justify-center disabled:opacity-50"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <FaArrowLeft className="text-xl text-gray-500" />
          </button>
          <button
            className="h-12 w-12 rounded-full flex items-start justify-center disabled:opacity-50"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <FaArrowRight className="text-xl text-gray-500" />
          </button>
        </div>
        <div className="w-full font-poppins font-semimedium overflow-y-auto h-[45%]">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="relative "
              custom={index}
              initial="hidden"
              animate="visible"
              variants={imageVariants}
            >
              <a
                // href={`/application/${item.name
                //   .toLowerCase()
                //   .replace(/ /g, "-")}`}
                className="flex border-t-[1px] justify-between p-4 flex-row"
              >
                <div className="flex flex-row space-x-3">
                  <div className="h-full w-6 flex items-center">
                    
                    <Image
                      className="h-6 w-6"
                      src={item.bgpic}
                      alt={item.name}
                    />
                  </div>
                  <p className="text-base">{item.name}</p>
                </div>

                <IoIosArrowForward className="text-2xl" />
              </a>
            </motion.div>
          ))}
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
      <div className="lg:flex rounded-3xl mx-auto max-w-screen-2xl w-full lg:w-[100vw] h-full hidden justify-start lg:justify-center items-start lg:max-w-screen-2xl">
        {/* desktop view */}
        <div className="overflow-hidden relative">
          <div className="flex">
            <div className="w-full lg:w-[75%] pt-4">
              <Application onHover={handleHover} items={item} />
            </div>
            <div className="hidden lg:flex relative ml-2 p-4 pb-8  items-center">
              <div className="ml-2 hidden lg:flex w-2 h-full  border-l border-gray-300"></div>
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
                <h2 className="text-6xl font-poppins font-extrabold text-[#483d73]">
                  {hoveredItem.name.split(" ")[0]}{" "}
                </h2>
                <h3 className="text-6xl text-red-500 font-poppins font-extrabold">
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
      <div className="flex w-screen lg:hidden">
        <Application onHover={handleHover} items={item} />
      </div>
    </>
  );
};

export default ApplicationPage;
