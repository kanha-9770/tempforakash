'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const images: string[] = [
  'https://assets.nesscoindustries.com/public/video/home.webp',
  'https://assets.nesscoindustries.com/public/video/home.webp',
  'https://assets.nesscoindustries.com/public/home.webp',
  'https://assets.nesscoindustries.com/public/video/home.webp',
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const prevSlide = (): void => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = (): void => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    setIsLargeScreen(mediaQuery.matches);

    const handleResize = () => setIsLargeScreen(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);
  const { scrollY } = useScroll();
  const defaultVideoTransform = useTransform(scrollY, [0, 300], ["0%", "-25%"]);
  const defaultVideoWidth = useTransform(scrollY, [0, 300], ["100%", "150%"]);

  const videoTransform = isLargeScreen ? defaultVideoTransform : "0%";
  const videoWidth = isLargeScreen ? defaultVideoWidth : "100%";

  return (
    <div className="relative w-full  mx-auto h-full group">
      <motion.div
       ref={containerRef}
       style={{
         width: videoWidth,
         originX: 0.5,
       }}
        className="w-full bg-white h-full rounded-3xl bg-center "
      >
        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          width={600}
          height={400}
          className="w-full z-50 h-full object-cover  rounded-2xl"
        />
      </motion.div>
      <div
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
        onClick={prevSlide}
      >
        <ChevronLeft size={30} />
      </div>
      <div
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
        onClick={nextSlide}
      >
        <ChevronRight size={30} />
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            } cursor-pointer`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
