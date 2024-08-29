import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type SupportItem = {
  title: string;
  image: StaticImageData;
};

interface ResourceGridProps {
  supporItem: SupportItem[];
}

const ResourceGrid: React.FC<ResourceGridProps> = ({ supporItem }) => {
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
    <div className="relative flex flex-row items-center mx-auto max-w-screen-2xl justify-center p-4 w-[100vw]">
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
        className={`flex overflow-x-auto py-8 ${shouldShowArrows ? 'scroll-smooth' : ''} [scrollbar-width:none] gap-8`}
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
    </div>
  );
};

export default ResourceGrid;
