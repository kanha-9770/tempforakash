"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { TfiGallery } from "react-icons/tfi";
import { IoArrowForwardCircleSharp } from "react-icons/io5";

gsap.registerPlugin(ScrollTrigger);

const RelatedProducts: React.FC = () => {
  const RelatedProductsproduct = {
    title: "Product Title",
    description: "This is a description for the product.",
    inquiry: "Inquire Now",
    imageWithDescription: [
      {
        img: "/path/to/image1.jpg",
        description: "Product 1 description",
      },
      {
        img: "/path/to/image2.jpg",
        description: "Product 2 description",
      },
      {
        img: "/path/to/image3.jpg",
        description: "Product 3 description",
      },
      {
        img: "/path/to/image4.jpg",
        description: "Product 4 description",
      },
    ],
  };

  const carouselRef = useRef<HTMLDivElement | null>(null);
  const borderRef = useRef<HTMLDivElement | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [isDesktop, setIsDesktop] = useState<boolean>(true);
  const [checkedItems, setCheckedItems] = useState<boolean[]>(
    new Array(RelatedProductsproduct.imageWithDescription.length).fill(false)
  );

  const handleCheckboxChange = (index: number) => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = !updatedCheckedItems[index];
    setCheckedItems(updatedCheckedItems);
  };

  const itemsPerPage = 4;
  const totalPages = Math.ceil(
    RelatedProductsproduct.imageWithDescription.length / itemsPerPage
  );

  let touchStartX: number = 0;
  let touchEndX: number = 0;

  useEffect(() => {
    const updateView = () => {
      setIsDesktop(window.innerWidth >= 1024); // Adjust for desktop threshold
    };
    window.addEventListener("resize", updateView);

    // Initial check on mount
    updateView();

    // Clean up listener
    return () => window.removeEventListener("resize", updateView);
  }, []);

  const scrollLeft = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const scrollRight = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const scrollbarLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollbarRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    if (touchStartX - touchEndX > 50) {
      scrollRight();
    }

    if (touchEndX - touchStartX > 50) {
      scrollLeft();
    }
  };

  const currentItems = isDesktop
    ? RelatedProductsproduct.imageWithDescription
    : RelatedProductsproduct.imageWithDescription.slice(
        currentPage * itemsPerPage,
        currentPage * itemsPerPage + itemsPerPage
      );

  const handleLeftScroll = () => {
    if (isDesktop) {
      scrollbarLeft();
    } else {
      scrollLeft();
    }
  };

  const handleRightScroll = () => {
    if (isDesktop) {
      scrollbarRight();
    } else {
      scrollRight();
    }
  };

  return (
    <>
      <div className="w-full lg:mt-[4vh] mt-[12vh] font-poppins">
        <div className="flex lg:flex-row flex-col lg:my-[14vh] lg:py-[4vh] lg:mx-[2vw] bg-white rounded-[0.5rem]">
          <div className="lg:w-[22%] lg:pt-[5vh] pt-[3vh] lg:bg-white bg-[#f2f2f2] relative">
            <div className="flex flex-col lg:items-center lg:justify-center">
              <h2 className="lg:text-[2.6rem] text-[1.5rem] lg:mx-0 mx-[1rem] lg:text-center font-semibold mb-[2vh]">
                <span className="text-[#9e9c9c]">
                  {RelatedProductsproduct?.title.trim().replace(/\s+\S+$/, "")}
                </span>{" "}
                <span className="text-[#dc0e2a]">
                  {RelatedProductsproduct?.title.trim().match(/\S+$/)}
                </span>
              </h2>
              <p className="text-[#9e9c9c] w-[68%] text-center mb-[2vh] lg:block hidden">
                {RelatedProductsproduct.description}
              </p>
              <TfiGallery className="text-[#9e9c9c] text-[2.8rem] lg:block hidden" />
            </div>
            <button
              className="text-[#9e9c9c] lg:text-[2rem] lg:bg-transparent bg-white p-1 rounded-full text-[1.2rem] absolute lg:bottom-[5vh] lg:left-[3vw] right-[15vw] -bottom-[60vh] hover:text-[#dc0e2a]"
              onClick={handleLeftScroll}
            >
              <IoIosArrowBack />
            </button>
            <button
              className="text-[#9e9c9c] lg:text-[2rem] text-[1.2rem] lg:bg-transparent bg-white p-1 rounded-full absolute lg:bottom-[5vh] lg:right-[3vw] right-[5vw] -bottom-[60vh] hover:text-[#dc0e2a]"
              onClick={handleRightScroll}
            >
              <IoIosArrowForward />
            </button>
          </div>

          <div
            className="lg:w-[78%] lg:px-[0.6vw] px-[3vw] lg:py-0 py-[2vh] flex items-center overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="w-full overflow-auto scrollbar-hide"
              ref={carouselRef}
            >
              <div className="w-max lg:flex lg:items-center lg:justify-center grid grid-cols-2 grid-rows-2 gap-y-4">
                {currentItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="lg:mx-[0.8vw] mx-[1.5vw] bg-white lg:w-[26vw] w-[44vw] lg:h-[60vh] h-[25vh] lg:rounded-[0.6rem] rounded-[0.4rem] overflow-hidden"
                  >
                    <div className="bg-[#f2f2f2] relative h-[70%] lg:p-0 p-4 flex items-center justify-center">
                      <Image
                        src={item.img}
                        alt={item.description}
                        width={400}
                        height={400}
                        className="h-full w-max"
                      />
                      <div className="bg-gradient-to-t from-white absolute bottom-0 left-0 w-full lg:top-[20vh] top-[8vh]"></div>
                    </div>
                    <div className="flex items-center h-[20%] justify-center relative">
                      <p className="text-center lg:w-[80%] w-[90%] lg:mb-0 mb-[0.5vh] lg:text-[1.3rem] text-[0.7rem] font-medium">
                        {item.description}
                      </p>
                      <IoArrowForwardCircleSharp className="lg:text-[1.4rem] absolute lg:bottom-[1.8vh] bottom-[0.9vh] lg:right-[1.8vw] right-[3vw] hover:text-[#dc0e2a]" />
                    </div>

                    <div className="flex lg:items-center items-start justify-center pt-2 border-[#9e9c9c] lg:text-[1.4rem] text-[0.7rem] lg:text-[#9e9c9c] text-[#9e9c9c]">
                      <input
                        type="checkbox"
                        checked={checkedItems[idx]}
                        onChange={() => handleCheckboxChange(idx)}
                        className="lg:w-[2rem] w-[1rem] lg:h-[2rem] h-[1rem] mr-[0.5rem]"
                      />
                      <label>{RelatedProductsproduct?.inquiry}</label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RelatedProducts;
