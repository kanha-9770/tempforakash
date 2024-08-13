import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { IoClose } from "react-icons/io5"; // Import close icon
import "../Styles/slider.css";

const videos: { src: string; youtubeLink: string }[] = [
  {
    src: "/video/bg.mp4",
    youtubeLink: "https://www.youtube.com/embed/UxPkK8gW0hs?rel=0",
  },
  {
    src: "/video/Homebg.mp4",
    youtubeLink: "https://www.youtube.com/embed/UxPkK8gW0hs?rel=0",
  },
  {
    src: "/video/iotvideo.mp4",
    youtubeLink: "https://www.youtube.com/embed/UxPkK8gW0hs?rel=0",
  },
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

export const SwipeCarousel: React.FC = () => {
  const [videoIndex, setVideoIndex] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentVideoLink, setCurrentVideoLink] = useState<string>("");

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setVideoIndex((pv) => (pv === videos.length - 1 ? 0 : pv + 1));
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, [dragX]);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && videoIndex < videos.length - 1) {
      setVideoIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && videoIndex > 0) {
      setVideoIndex((pv) => pv - 1);
    }
  };

  const openModal = (youtubeLink: string) => {
    setCurrentVideoLink(youtubeLink);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentVideoLink("");
  };

  return (
    <div className="relative h-full w-auto overflow-hidden">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{ x: dragX }}
        animate={{ translateX: `-${videoIndex * 100}%` }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center active:cursor-grabbing"
      >
        {videos.map((video, idx) => (
          <motion.div
            key={idx}
            style={{ background: "black" }}
            animate={{ scale: videoIndex === idx ? 0.95 : 0.85 }}
            transition={SPRING_OPTIONS}
            className="relative h-full w-full shrink-0 rounded-xl"
          >
            <video
              src={video.src}
              autoPlay={videoIndex === idx}
              loop
              muted
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute bottom-4 right-0 transform -translate-x-1/2">
              <BsBoxArrowUpRight
                onClick={() => openModal(video.youtubeLink)}
                className="text-white font-bold text-3xl cursor-pointer transition-transform transform hover:scale-110"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

      <Dots videoIndex={videoIndex} setVideoIndex={setVideoIndex} />

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[9995]">
          <div className="bg-white rounded-xl overflow-hidden max-w-3xl w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-0 z-50 right-0 bg-white p-1 rounded-full text-black"
            >
              <IoClose size={24} />
            </button>
            <div className="relative w-full pt-[56.25%]">
              <iframe
                src={currentVideoLink}
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube Video"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

type DotsProps = {
  videoIndex: number;
  setVideoIndex: React.Dispatch<React.SetStateAction<number>>;
};

const Dots: React.FC<DotsProps> = ({ videoIndex, setVideoIndex }) => {
  return (
    <div className="indicators absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
      {videos.map((_, idx) => (
        <button
          key={idx}
          onClick={() => setVideoIndex(idx)}
          className={`indicator relative block h-1.5 rounded-full transition-all duration-300 ease-in-out overflow-hidden ${
            idx === videoIndex ? "active w-10" : "w-1.5 bg-neutral-500"
          }`}
        >
          <span
            className={`progress absolute top-0 left-0 h-full w-full bg-neutral-50 transform scale-x-0 transform-origin-left ${
              idx === videoIndex ? "animate-progress" : ""
            }`}
          ></span>
        </button>
      ))}
    </div>
  );
};
