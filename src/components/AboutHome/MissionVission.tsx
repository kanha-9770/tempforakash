"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { GiDjedPillar } from "react-icons/gi";
import styles from './featureproject.module.css';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/about/carousel";
import Image from "next/image";

// Import TypeScript content object
import { missionvissionContent } from '../Constants/About/mission-page';

const Missionvission: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);

  const images = [
    "/assets/about/wave.svg", // Image for the first slide
    "/assets/about/3.svg", // Image for the second slide
    "/assets/about/4.svg", // Image for the third slide
  ];

  const imageClasses = [
    styles["image-slide-0"], // Class for the first slide
    styles["image-slide-1"], // Class for the second slide
    styles["image-slide-2"], // Class for the third slide
  ];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (carouselApi) {
      carouselApi.scrollTo(currentSlide);
    }
  }, [currentSlide, carouselApi]);

  return (
    <div className="relative min-h-screen w-full  p-8 bg-white h-screen overflow-hidden">
      <h2 className="text-5xl font-bold text-[#3a2a79] mb-8 mt-10 font-montserrat">
        Mission & Vision
      </h2>
      <Carousel className="w-full max-w-screen-md" setApi={setCarouselApi}>
        <CarouselContent>
          {missionvissionContent.slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <div className="flex flex-col mb-[20rem]">
                      <h3 className="text-4xl font-montserrat font-bold text-left -mt-[4rem] ml-3">
                        {slide.title}
                      </h3>
                      <div className="flex items-center justify-center space-x-20 mr-10 mt-11 ">
                        <div className="flex-shrink-0">
                          <img
                            src={slide.imageSrc}
                            alt={`${slide.title} Icon`}
                            className="w-48 h-48 object-cover"
                            style={{ height: '15rem', width: '15rem' }}
                          />
                        </div>
                        <p className="text-16 font-regular text-center w-[26rem] font-poppins mb-5">
                          {slide.description}
                        </p>
                      </div>
                      {slide.points && (
                        <div className="flex flex-row text-sm w-[45rem] -ml-6 font-bold ">
                          {slide.points.map((point, pointIndex) => (
                            <div key={pointIndex} className="flex ">
                              <div className="w-7 h-7 rounded-full bg-[#312465] text-white flex items-center justify-center font-bold mr-2">
                                {pointIndex + 1}.
                              </div>
                              <p className="w-[9rem] text-center">{point}</p>
                            </div>
                          ))}
                        </div>
                      )}
                      {slide.values && (
                        <div className="flex flex-row text-sm w-[49rem] text-center font-bold -ml-5 ">
                          {slide.values.map((value, valueIndex) => (
                            <div key={valueIndex} className="flex">
                              <Image
                                src={value.imageSrc}
                                alt={`Value ${valueIndex + 1}`}
                                width={100}
                                height={100}
                                className="w-6 h-7 object-cover -mt-6"
                                style={{ height: '5rem', width: '5rem' }}
                              />
                              <span className="w-[14rem] -ml-7 items-center">{value.text}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious onClick={handlePrevious} />
        <CarouselNext onClick={handleNext} />
      </Carousel>
      <div className="absolute -right-0 top-24 overflow-hidden">
        <img
          src={images[currentSlide]}
          alt="Graphic"
          className={`${imageClasses[currentSlide]} transition-all duration-500`}
        />
      </div>
    </div>
  );
};

export default Missionvission;
