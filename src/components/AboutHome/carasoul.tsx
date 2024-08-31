import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export const Carousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: '/assets/about/banner3.jpg', alt: 'Image 1' },
    { src: '/assets/about/nessco-team.webp', alt: 'Image 2' },
    { src: '/assets/about/oldmen.webp', alt: 'Image 3' },
    { src: '/assets/about/oldwomen.jpg', alt: 'Image 4' },
    { src: '/assets/about/banner3.jpg', alt: 'Image 5' },
    { src: '/assets/about/nessco-team.webp', alt: 'Image 6' },
    { src: '/assets/about/oldmen.webp', alt: 'Image 7' },
    { src: '/assets/about/oldwomen.jpg', alt: 'Image 8' }
  ];

  const imagesWithDupes = [
    images[images.length - 1], // Duplicate the last image
    ...images,
    images[0] // Duplicate the first image
  ];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      gsap.to(carousel, {
        x: -currentIndex * 90, // Adjusted width for dynamic resizing
      });
    }
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesWithDupes.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + imagesWithDupes.length) % imagesWithDupes.length);
  };

  return (
    <div className="relative overflow-hidden">
      <IoIosArrowBack 
        className="absolute left-1 top-1/2 transform -translate-y-1/2  text-black shadow-md rounded-full bg-white z-10"
        size={30}
        onClick={handlePrev}
      />
        
      <IoIosArrowForward
        className="absolute right-1 top-1/2 transform -translate-y-1/2 text-black rounded-full bg-white shadow-md z-10"
        size={30}
        onClick={handleNext}
      />

      <div ref={carouselRef} className="flex whitespace-nowrap gap-5 transition-transform duration-1000">
        {imagesWithDupes.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            width={350} // Set width to 0 to make it responsive
            height={350} // Set height to 0 to make it responsive
            className="inline-block rounded-2xl w-[80vw] h-[50vh] object-cover transition-transform duration-1000 ease-in-out"
          />
        ))}
      </div>
    </div>
  );
};
