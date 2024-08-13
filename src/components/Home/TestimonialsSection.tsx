import React from "react";
import { Highlight } from "../ui/hero-highlight";
import { InfiniteMovingCardsDemo } from "../ui/HeroSection";
import { SwipeCarousel } from "./Common/slider";
const HomeTestimonial: React.FC = () => {
  return (
    <div className="flex flex-row py-4 h-screen z-20 max-w-7xl mx-auto relative overflow-hidden">
      <div className="px-2 w-1/3 flex flex-col">
        <h6 className="text-3xl text-red-500 ml-6 lg:text-2xl font-montserrat lg:leading-tight font-bold">
          Testimonials
        </h6>
        <h2 className="text-5xl font-bold ml-4 mt-20">Don&lsquo;t Just Take</h2>
        <h2 className="text-5xl font-bold ml-4 mt-6">
          Our
          <span className="relative ml-1 ">
            <span className="absolute rounded-2xl inset-0" />
            <Highlight className="text-black dark:text-white">
              Word for it
            </Highlight>
          </span>
        </h2>
        <h4 className="mt-20 text-lg text-center font-poppins">
          See What Our Clients Are Saying About Us
        </h4>
        <SwipeCarousel />
      </div>
      <div className="w-2/3 relative h-full">
        <InfiniteMovingCardsDemo />
      </div>
    </div>
  );
};

export default HomeTestimonial;
