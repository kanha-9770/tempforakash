import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

type SupportItem = {
  title: string;
  image: StaticImageData;
};
type supportMobile = {
  mobileFirst: string;
  mobileSecond: string;
};
interface SupportGridProps {
  supporItem: SupportItem[];
  supportMobile: supportMobile;
}

const SupportGrid: React.FC<SupportGridProps> = ({
  supporItem,
  supportMobile,
}) => {
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

  const shouldShowArrows = supporItem.length > 4;

  return (
    <div className="relative flex flex-row items-center mx-auto max-w-screen-2xl justify-center lg:p-4 w-[100vw]">
      {/* desktop view */}
      {shouldShowArrows && (
        <button
          className="h-12 w-20 rounded-full flex items-center justify-center disabled:opacity-50"
          onClick={scrollLeft}
          disabled={!canScrollLeft}
        >
          <FaArrowLeft className="text-xl text-gray-500" />
        </button>
      )}
      <div
        className={`hidden lg:flex overflow-x-auto py-8 ${
          shouldShowArrows ? "scroll-smooth" : ""
        } [scrollbar-width:none] gap-8`}
        ref={carouselRef}
        onScroll={checkScrollability}
      >
        {supporItem.map((item, index) => (
          <div key={index} className="flex flex-col space-y-4">
            <motion.div
              className="flex-shrink-0 w-72 h-40 bg-[#f2f2f2] rounded-3xl p-4 flex flex-col justify-center items-center"
              initial="hidden"
              animate="visible"
              custom={index}
              variants={imageVariants}
            >
              <Image
                src={item.image.src}
                alt={item.title}
                width={96}
                height={96}
                className="object-contain"
              />
            </motion.div>
            <p className="relative font-poppins text-center mt-4 text-black font-medium hover:text-[#483d78] hover:font-bold text-16">
              {item.title}
            </p>
          </div>
        ))}
      </div>
      {shouldShowArrows && (
        <button
          className="h-12 w-20 rounded-full flex items-center justify-center disabled:opacity-50"
          onClick={scrollRight}
          disabled={!canScrollRight}
        >
          <FaArrowRight className="text-xl text-gray-500" />
        </button>
      )}
      {/* mobile view */}

      <div className="flex lg:hidden flex-col">
        <div
          className={`grid grid-rows-2  pb-4 grid-cols-2 border-b-[1px] lg:hidden overflow-x-auto  ${
            shouldShowArrows ? "scroll-smooth" : ""
          } [scrollbar-width:none] gap-4`}
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          {supporItem.map((item, index) => (
            <div key={index} className="flex flex-col">
              <motion.div
                className="flex-shrink-0 w-40 h-40 bg-white border-[1px]  rounded-3xl p-4 flex flex-col justify-center items-center"
                initial="hidden"
                animate="visible"
                custom={index}
                variants={imageVariants}
              >
                <Image
                  src={item.image.src}
                  alt={item.title}
                  width={96}
                  height={96}
                  className="object-contain h-32 w-32"
                />
                <p className="relative w-40 font-poppins text-center  text-black font-medium hover:text-[#483d78] text-sm">
                  {item.title}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
        <div className="flex lg:hidden flex-col  w-full mt-4">
          <p className="text-black pl-4 text-lg font-poppins font-medium">
            Give us a Call:
          </p>
          <div className="flex justify-around p-10 items-center border-b-2 h-32 flex-row pt-6">
            <p
              className="text-black flex flex-row items-center gap-2 text-center"
              style={{
                backgroundImage: "url('https://i.pinimg.com/236x/76/c8/c0/76c8c0172ba662b6fb6d0c095c1158fe.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <FaPhone/>
              {supportMobile.mobileFirst}
            </p>
            <div className="w-1 h-24  border-l-2"></div>
            <p
              className="text-black text-center"
              style={{
                backgroundImage: "url('https://i.pinimg.com/236x/76/c8/c0/76c8c0172ba662b6fb6d0c095c1158fe.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {supportMobile.mobileSecond}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportGrid;
