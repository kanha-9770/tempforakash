"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function TeamPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;

    if (video && container) {
      gsap.registerPlugin(ScrollTrigger);

      const updateVideoTime = () => {
        const duration = video.duration;
        const scrollY = window.scrollY;
        const maxScroll =
          document.documentElement.scrollHeight - window.innerHeight;
        const scrollFraction = scrollY / maxScroll;
        const videoTime = duration * scrollFraction;
        video.currentTime = videoTime;
      };

      window.addEventListener("scroll", updateVideoTime);

      return () => {
        window.removeEventListener("scroll", updateVideoTime);
      };
    }
  }, []);

  return (
    <div
      className="relative h-screen w-screen overflow-hidden lg:top-0 top-10"
      ref={containerRef}
    >
      <video
        ref={videoRef}
        className="absolute lg:top-0 top-28 left-0 lg:w-full lg:h-4/5 mt-8 object-cover w-full "
        src="/assets/about/team.mp4"
        muted
        playsInline
      />
      <div className="absolute top-12 w-full text-center z-10 mt-5">
        <h1 className="text-4xl font-montserrat text-white">
          Meet The <span className="text-rose-500">Team </span>
        </h1>
      </div>
      <div className="relative text-white flex flex-col items-center  h-full lg:top-44  top-[23rem] ">
        <h1 className="lg:text-4xl text-3xl font-poppins lg:mt-[24rem]  ">
          &quot;Build with Unity &amp; Trust&quot;
        </h1>
        <p className="text-center font-poppins px-5 mt-5 lg:invisible  ">At our company, the team is built on the foundations of unity and trust, creating a cohesive and supportive work environment. Each member brings unique skills and perspectives, contributing to a culture where collaboration and mutual respect are paramount. </p>
      </div>
    </div>
  );
}
