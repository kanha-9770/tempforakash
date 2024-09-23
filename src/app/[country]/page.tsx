
"use client";
import React, { useRef } from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/Home/Home";
import NavLinksDemo from "@/components/Home/NavLinks";
import { data } from "@/components/Constants/Navbar/about-data";
import { AppleCardsCarouselDemo } from "@/components/AppleCardsCarouselDemo";
import ContactIcons from "@/components/Contact/ContactIcon";
import KnowMachine from "@/components/Home/CanvasRevealEffectDemo";
import FeatureNews from "@/components/Home/FeatureNews";
import Applications from "@/components/Icons/Applications";
import MyButton from "@/components/Layout/MyButton";

const AboutUs = dynamic(() => import("@/components/Home/AboutSection"), {
  ssr: true,
});

const MarqueeSection = dynamic(
  () => import("@/components/Home/MarqueeSection"),
  {
    ssr: true,
  }
);

const KnowMore = dynamic(() => import("@/components/Home/KnowMore"), {
  ssr: true,
});

const HomeMachine = dynamic(() => import("@/components/Home/HomeMachine"), {
  ssr: true,
});

const NewsFeature = dynamic(() => import("@/components/Home/NewsFeature"), {
  ssr: true,
});

const HomeTestimonial = dynamic(
  () => import("@/components/Home/TestimonialsSection"),
  {
    ssr: true,
  }
);

const CanvasRevealEffectDemo = dynamic(
  () =>
    import("@/components/Home/CanvasRevealEffectDemo").then(
      (mod) => mod.default
    ),
  {
    ssr: false,
  }
);

const IotSection = dynamic(
  () => import("@/components/Home/IotSection").then((mod) => mod.default),
  {
    ssr: false,
  }
);

export default function Home() {
  const aboutUsRef = useRef<HTMLDivElement>(null);
  const infiniteCardsRef = useRef<HTMLDivElement>(null);
  const knowMoreRef = useRef<HTMLDivElement>(null);
  const homeMachineRef = useRef<HTMLDivElement>(null);
  const newsFeatureRef = useRef<HTMLDivElement>(null);
  const knowMachineRef = useRef<HTMLDivElement>(null);
  const homeTestimonialRef = useRef<HTMLDivElement>(null);
  const iotRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { text: "Machines", ref: homeMachineRef },
    { text: "About Us", ref: aboutUsRef },
    { text: "Clientele", ref: infiniteCardsRef },
    { text: "KnowMore", ref: knowMoreRef },
    { text: "IoT", ref: iotRef },
    { text: "News", ref: newsFeatureRef },
    { text: "Testimonials", ref: homeTestimonialRef },
  ];

  return (
    <main className="relative  top-14 gap-2 h-full">
      <div className="top-2 relative">
        <Hero />
      </div>
      <ContactIcons />
      <NavLinksDemo navItems={navItems} />
      <MyButton></MyButton>
      <div className="h-full font-poppins py-20">
        <div
          id="machines"
          className="flex space-y-6 flex-col"
          ref={homeMachineRef}
        >
          <h1
            className="text-2xl lg:text-3xl font-regular
           text-[#483d78] text-center"
          >
            Our <span className="text-red-500 font-semibold">Products</span>
          </h1>
          <div className="text-sm w-full lg:w-full flex items-center justify-center">
            <p className="lg:w-[50%] text-sm lg:px-0 px-2 lg:text-base font-regular text-center">
              We are known for manufacturing and globally exporting various
              paper packaging machines including Cups, Glass, Straws and Plate
              Machines.
            </p>
          </div>
          <HomeMachine />
        </div>
        <div className="h-auto max-w-screen-2xl mx-auto lg:py-8">

          <AppleCardsCarouselDemo />
        </div>
        <div id="aboutUs" className="" ref={aboutUsRef}>
          <AboutUs
            heading={data.heading}
            description={data.description}
            stats={data.stats}
            cards={data.cards}
          />
        </div>

        <div id="clientele" className="max-w-screen-2xl mx-auto" ref={infiniteCardsRef}>
          <MarqueeSection />
        </div>
        <div id="knowMore" className="h-auto" ref={knowMoreRef}>
          <KnowMore />
        </div>

        {/* <div id="iot" className=" lg:flex flex-col hidden" ref={iotRef}>
          <h4 className="text-xl text-center lg:text-2xl font-poppins lg:leading-tight text-black dark:text-white">
            IoT <span className="text-red-500 font-bold">System</span>
          </h4>
          <IotSection />
        </div> */}
        <div id="news" className="" ref={newsFeatureRef}>
          {/* <NewsFeature /> */}
          <FeatureNews/>
        </div>
        <div id="knowMachine" className="" ref={knowMachineRef}>
          {/* <CanvasRevealEffectDemo /> */}
          <KnowMachine />
        </div>
        <div
          id="testimonials"
          className="relative  bg-gradient-to-l via-purple-200 to-transparent h-screen overflow-hidden"
          ref={homeTestimonialRef}
        >
          <HomeTestimonial />
        </div>
      </div>
    </main>
  );
}
