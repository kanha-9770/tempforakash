import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import styles from "../Styles/SwipeCarousel.module.css";

const videos = [
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
    <div className={styles.carouselContainer}>
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x: dragX }}
        animate={{ translateX: `-${videoIndex * 100}%` }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center active:cursor-grabbing"
      >
        {videos.map((video, idx) => (
          <motion.div
            key={idx}
            animate={{ scale: videoIndex === idx ? 0.95 : 0.85 }}
            transition={SPRING_OPTIONS}
            className={styles.videoWrapper}
          >
            <video
              src={video.src}
              autoPlay={videoIndex === idx}
              loop
              muted
              className={styles.video}
            />
            <div className={styles.iconWrapper}>
              <BsBoxArrowUpRight
                onClick={() => openModal(video.youtubeLink)}
                className={styles.icon}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

      <Dots videoIndex={videoIndex} setVideoIndex={setVideoIndex} />

      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <button onClick={closeModal} className={styles.closeButton}>
              <IoClose size={24} />
            </button>
            <div className={styles.iframeWrapper}>
              <iframe
                src={currentVideoLink}
                className={styles.iframe}
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
    <div className={styles.indicators}>
      {videos.map((_, idx) => (
        <button
          key={idx}
          onClick={() => setVideoIndex(idx)}
          className={`${styles.indicator} ${
            idx === videoIndex ? styles.activeIndicator : ""
          }`}
        >
          <span
            className={`${styles.progress} ${
              idx === videoIndex ? styles.activeProgress : ""
            }`}
          ></span>
        </button>
      ))}
    </div>
  );
};
