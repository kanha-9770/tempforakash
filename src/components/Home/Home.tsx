"use client";
import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import PositionAwareButton from "../ui/PositionAwareButton";
import ImageSlider from "../ui/ImageSlider";
import RelatedProduct from "../Products/RelatedProducts";
import relatedProductData from "./Feature.json";
import FeatureProducts from "./FeatureProjects";
const imgs = [
  "https://i.pinimg.com/236x/07/46/92/0746927691f85ff34910e34db6e37437.jpg",
  "https://i.pinimg.com/236x/07/46/92/0746927691f85ff34910e34db6e37437.jpg",
  "https://i.pinimg.com/236x/07/46/92/0746927691f85ff34910e34db6e37437.jpg",
  "https://i.pinimg.com/236x/07/46/92/0746927691f85ff34910e34db6e37437.jpg",
  "https://i.pinimg.com/236x/07/46/92/0746927691f85ff34910e34db6e37437.jpg",
  "https://i.pinimg.com/236x/07/46/92/0746927691f85ff34910e34db6e37437.jpg",
  "https://i.pinimg.com/236x/07/46/92/0746927691f85ff34910e34db6e37437.jpg",
];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;
const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

const Home: React.FC = () => {
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);

  useEffect(() => {
    // Check for larger screens on the client-side
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    setIsLargeScreen(mediaQuery.matches);

    const handleResize = () => setIsLargeScreen(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  const { scrollY } = useScroll();
  const defaultSvgTransform = useTransform(scrollY, [0, 100], ["0%", "25%"]);

  const svgTransform = isLargeScreen ? defaultSvgTransform : "0%";
  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === imgs.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  return (
    <>
      <div className="relative  bg-red h-full p-0   flex flex-col items-center overflow-hidden  w-screen">
        <div className="relative px-4 lg:px-10 w-full flex-wrap">
          <motion.div className=" w-full flex justify-center items-center h-[calc(100vh-100px)] lg:h-[calc(100vh-350px)] rounded-3xl">
            <ImageSlider />
          </motion.div>
        </div>

        <div className="absolute h-auto w-[80%] lg:w-auto  left-8 top-1/3 lg:top-[38%] lg:left-28 flex-col text-7xl text-white font-alexBrush">
          <p className="text-3xl text-center lg:text-justify mx-4 md:text-2xl lg:text-5xl font-poppins font-thin">
            Quality Food Packaging
          </p>
          <div className="lg:ml-2  text-center lg:text-justify">
            <span className="text-3xl  lg:text-6xl text-[#f2f2f2] font-poppins italic ">
              Machinery & <span className="text-[#df1f27]">Solutions</span>
            </span>
          </div>
        </div>

        <div className="absolute flex flex-col w-1/2  lg:w-[20rem] lg:h-[5rem] lg:rounded-tl-[4rem] rounded-tl-[1.5rem] right-0 bg-[#f2f2f2] lg:bottom-0 bottom-0 text-3xl font-poppins text-white text-center">
          <motion.div
            className="-mt-4 lg:-mt-6 flex mr-2 lg:mr-8 justify-end"
            style={{ x: svgTransform }} // SVG moves to the right
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              viewBox="0 0 20 20"
              fill="none"
              className="flex  h-4 w-8 lg:h-6 lg:w-10"
            >
              <path
                d="M20 20C20 8.95431 11.0457 0 0 0H20V20Z"
                fill="#f2f2f2"
                transform="rotate(90 10 10)"
              ></path>
            </svg>
          </motion.div>
          <div className="w-full mt-4 ml-8 hidden lg:flex  justify-start">
            <PositionAwareButton
              borderWidth="1px"
              iconSize="50"
              icon
              height="55px"
              padding="2px"
              width="230px"
              fontSize="22px"
              borderRadius="100px"
              borderColor="black"
              text={"Get a Quote"}
            />
          </div>
          <div className=" lg:hidden mt-2 -ml-2 items-center flex justify-center">
            <PositionAwareButton
              borderWidth="1px"
              iconSize="30px"
              icon
              height="40px"
              padding="5px"
              width="150px"
              fontSize="16px"
              borderRadius="100px"
              borderColor="black"
              text={"Get a Quote"}
            />
          </div>
          <div className=" z-50 -mt-[0.95rem] ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              viewBox="0 0 20 20"
              fill="none"
              className="lg:-ml-[2rem] -ml-6 h-4 w-8  lg:h-6 lg:w-10"
            >
              <path
                d="M20 20C20 8.95431 11.0457 0 0 0H20V20Z"
                fill="#f2f2f2"
                transform="rotate(90 10 10)"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <FeatureProducts  page4product={relatedProductData.related_product} />
    </>
  );
};

Home.displayName = "Hero";

export default React.memo(Home);
