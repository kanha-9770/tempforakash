"use client";
import React, {
  useState,
  useEffect,
  useRef,
  SetStateAction,
  Dispatch,
} from "react";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import PositionAwareButton from "../ui/PositionAwareButton";
import "@fontsource/poppins/400-italic.css"; // Specify weight and style
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
const Images = ({ imgIndex }: { imgIndex: number }) => {
  return (
    <>
      {imgs.map((imgSrc, idx) => {
        return (
          <motion.div
            key={idx}
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            animate={{
              scale: imgIndex === idx ? 0.95 : 0.85,
            }}
            transition={SPRING_OPTIONS}
            className="aspect-video  flex justify-center items-center h-[calc(100vh-200px)] lg:h-[calc(100vh-90px)] rounded-3xl shrink-0 w-full bg-neutral-800 object-cover"
          />
        );
      })}
    </>
  );
};

const Dots = ({
  imgIndex,
  setImgIndex,
}: {
  imgIndex: number;
  setImgIndex: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div className="absolute bottom-4 z-30 flex w-full justify-center gap-2">
      {imgs.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`h-2 w-2 rounded-full transition-colors ${
              idx === imgIndex ? "bg-neutral-50" : "bg-neutral-500"
            }`}
          />
        );
      })}
    </div>
  );
};

const Home: React.FC = () => {
 
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
 
    // Check for larger screens on the client-side
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    setIsLargeScreen(mediaQuery.matches);

    const handleResize = () => setIsLargeScreen(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);



  const { scrollY } = useScroll();

  // Always call the hook
  const defaultVideoTransform = useTransform(scrollY, [0, 300], ["0%", "-25%"]);
  const defaultVideoWidth = useTransform(scrollY, [0, 300], ["100%", "150%"]);
  const defaultSvgTransform = useTransform(scrollY, [0, 100], ["0%", "25%"]);

  // Conditionally apply the transform based on the screen size
  const videoTransform = isLargeScreen ? defaultVideoTransform : "0%";
  const videoWidth = isLargeScreen ? defaultVideoWidth : "100%";
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

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };
  const videoStyle = {
    transform: `translateX(${dragX}px) ${videoTransform}`,
    width: videoWidth,
    transformOrigin: "50% 0%", // this sets originX to 0.5
  };
  return (
    <div className="relative h-full p-0   flex flex-col items-center overflow-hidden  w-full">
      <div className="relative px-4  lg:px-10 w-full flex-wrap">
        <motion.div className=" flex justify-center items-center h-[calc(100vh-220px)] lg:h-[calc(100vh-110px)] rounded-3xl">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="overflow-hidden py-8">
              <motion.div
                ref={containerRef}
                style={{
                  // x: dragX,
                  width: videoWidth,
                  x: videoTransform,
                  originX: 0.5,
                }}
                drag="x"
                dragConstraints={{
                  left: 0,
                  right: 0,
                }}
                animate={{
                  translateX: `-${imgIndex * 100}%`,
                }}
                transition={SPRING_OPTIONS}
                onDragEnd={onDragEnd}
                className="flex cursor-grab items-center active:cursor-grabbing"
              >
                <Images imgIndex={imgIndex} />
              </motion.div>

              <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
            </div>
          </div>
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

      <div className="absolute flex flex-col w-1/2  lg:w-[30rem] lg:h-[10rem] lg:rounded-tl-[4rem] rounded-tl-[1.5rem] right-0 bg-[#f2f2f2] lg:bottom-0 bottom-0 text-3xl font-poppins text-white text-center">
        <motion.div
          className="-mt-4 lg:-mt-6 flex mr-0 lg:mr-6 justify-end"
          style={{ x: svgTransform }} // SVG moves to the right
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            viewBox="0 0 20 20"
            fill="none"
            className="flex  right-1/2 h-4 w-8 lg:h-6 lg:w-10"
          >
            <path
              d="M20 20C20 8.95431 11.0457 0 0 0H20V20Z"
              fill="#f2f2f2"
              transform="rotate(90 10 10)"
            ></path>
          </svg>
        </motion.div>
        <div className="w-full mt-10 hidden lg:flex justify-center">
          <PositionAwareButton
            borderWidth="1px"
            iconSize="50"
            icon
            height="75px"
            padding="20px"
            width="330px"
            fontSize="35px"
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
        <div className="lg:mt-[1.3rem] -mt-2 ">
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
  );
};

Home.displayName = "Hero";

export default React.memo(Home);
