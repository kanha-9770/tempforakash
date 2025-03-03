import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { MdPlayCircleOutline } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import data from "../../Constants/Navbar/index.json";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SupportItem = {
  title: string;
  link: string;
  image: string;
  bgPic: string; // Corrected property name
};
type ResourcesMobile = {
  title: string;
  bgPic: string;
};
interface ResourceGridProps {
  supporItem: SupportItem[];
  ResourcesMobile: ResourcesMobile[];
}
const ITEMS_PER_PAGE = 4;

const ResourceGrid: React.FC<ResourceGridProps> = ({}) => {
  const supportData = data.find((item) => item.category === "Resources")?.data;
  console.log("supportData", supportData);
  const pathname = usePathname() || "";
  const countryCode = pathname.split("/")[1]?.toLowerCase();
  const DataBankItem = supportData?.DataBankItem || [];

  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    checkScrollability();
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

  const imageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: "easeOut",
      },
    }),
  };

  const shouldShowArrows = DataBankItem.length > 5;
  const [currentPage, setCurrentPage] = useState<number>(0);

  const handleNextPage = () => {
    if ((currentPage + 1) * ITEMS_PER_PAGE < DataBankItem.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const chunkItems = (arr: SupportItem[], size: number): SupportItem[][] =>
    arr.length
      ? [arr.slice(0, size), ...chunkItems(arr.slice(size), size)]
      : [];

  const paginatedItems = chunkItems(DataBankItem, 5);
  return (
    <div className="relative flex flex-row items-center mx-auto max-w-screen-2xl justify-center lg:p-4 w-full">
      {/* desktop view */}
      {shouldShowArrows && (
        <button
          className="h-12 w-16 z-30 cursor-pointer rounded-full hidden lg:flex items-center justify-center disabled:opacity-50"
          onClick={scrollLeft}
          disabled={!canScrollLeft}
        >
          <IoIosArrowBack className="text-2xl text-gray-500" />
        </button>
      )}
      <div
        className={`hidden lg:flex overflow-x-auto py-8 ${
          shouldShowArrows ? "scroll-smooth" : ""
        } [scrollbar-width:none] gap-6`}
        ref={carouselRef}
        onScroll={checkScrollability}
      >
        {DataBankItem.map((item, index) => (
          <div key={index} className="flex flex-col space-y-4">
            <Link href={`/${countryCode}/${item.link}`}>
              <motion.div
                className="relative flex-shrink-0 w-56 h-32 rounded-3xl p-4 flex flex-col justify-center items-center"
                initial="hidden"
                animate="visible"
                custom={index}
                variants={imageVariants}
              >
                {/* Pseudo-element for the background image */}
                <div
                  className="absolute inset-0 rounded-xl"
                  style={{
                    backgroundImage: `url(${item.bgPic})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: 0.2, // Adjust this value for desired opacity
                  }}
                ></div>

                <div className="relative w-full h-full flex justify-center items-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={96}
                    height={96}
                    className="object-contain"
                  />
                  <MdPlayCircleOutline className="absolute top-0 right-2 text-3xl text-white" />
                </div>
              </motion.div>
              <p className="relative font-poppins text-center mt-4 invert-0 font-normal hover:text-[#483d78] hover:font-semibold text-base">
                {item.title}
              </p>
            </Link>
          </div>
        ))}
      </div>
      {/* mobile view */}

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
                className="min-w-full p-1 grid grid-cols-2 grid-rows-2 gap-4"
              >
                {group.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    className="relative w-40 h-36 border-[1px] bg-white rounded-xl  flex flex-col justify-start items-center p-2"
                    initial="hidden"
                    animate="visible"
                    custom={itemIndex}
                    variants={imageVariants}
                  >
                    <div className="relative w-32 bg-white rounded-xl border-[1px] h-16 flex justify-center items-center">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={96}
                        height={96}
                        className="object-contain h-16 w-32"
                      />
                      <MdPlayCircleOutline className="absolute top-0 right-0 text-3xl text-gray-200" />
                    </div>
                    <p className="relative font-poppins text-center mt-4 invert-0 font-medium hover:text-[#483d78] hover:font-bold text-16">
                      {item.title}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
        {/* bottom arrow and items */}
        {shouldShowArrows && (
          <div className="flex h-[5%] justify-center  w-full ">
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
        )}
        <div className="h-[50%] w-full">
          <div className="h-full pb-40 overflow-y-auto w-full">
            {DataBankItem.map((item, index) => (
              <div key={index} className="flex flex-col space-y-4">
                <Link
                  href={"/"}
                  className="flex felx-row justify-between items-center border-t-[1px]  p-4"
                >
                  <div className="flex flex-row space-x-3">
                    <div className="h-full w-6 flex items-center">
                      <Image
                        className="h-6 w-6"
                        width={10}
                        height={10}
                        src={item.bgPic}
                        alt={item.title}
                      />
                    </div>
                    <p className="text-base">{item.title}</p>
                  </div>
                  <IoIosArrowForward className="text-2xl" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceGrid;
