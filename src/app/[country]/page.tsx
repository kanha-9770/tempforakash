// "use client";
// import React, { useRef } from "react";
// import dynamic from "next/dynamic";
// import Hero from "@/components/Home/Home";
// import NavLinksDemo from "@/components/Home/NavLinks";
// import { data } from "@/components/Constants/Navbar/about-data";
// import { AppleCardsCarouselDemo } from "@/components/AppleCardsCarouselDemo";
// import ContactIcons from "@/components/Contact/ContactIcon";
// import KnowMachine from "@/components/Home/CanvasRevealEffectDemo";

// const AboutUs = dynamic(() => import("@/components/Home/AboutSection"), {
//   ssr: true,
// });

// const MarqueeSection = dynamic(
//   () => import("@/components/Home/MarqueeSection"),
//   {
//     ssr: true,
//   }
// );

// const KnowMore = dynamic(() => import("@/components/Home/KnowMore"), {
//   ssr: true,
// });

// const HomeMachine = dynamic(() => import("@/components/Home/HomeMachine"), {
//   ssr: true,
// });

// const NewsFeature = dynamic(() => import("@/components/Home/NewsFeature"), {
//   ssr: true,
// });

// const HomeTestimonial = dynamic(
//   () => import("@/components/Home/TestimonialsSection"),
//   {
//     ssr: true,
//   }
// );

// const CanvasRevealEffectDemo = dynamic(
//   () =>
//     import("@/components/Home/CanvasRevealEffectDemo").then(
//       (mod) => mod.default
//     ),
//   {
//     ssr: false,
//   }
// );

// const IotSection = dynamic(
//   () => import("@/components/Home/IotSection").then((mod) => mod.default),
//   {
//     ssr: false,
//   }
// );

// export default function Home() {
//   const aboutUsRef = useRef<HTMLDivElement>(null);
//   const infiniteCardsRef = useRef<HTMLDivElement>(null);
//   const knowMoreRef = useRef<HTMLDivElement>(null);
//   const homeMachineRef = useRef<HTMLDivElement>(null);
//   const newsFeatureRef = useRef<HTMLDivElement>(null);
//   const knowMachineRef = useRef<HTMLDivElement>(null);
//   const homeTestimonialRef = useRef<HTMLDivElement>(null);
//   const iotRef = useRef<HTMLDivElement>(null);

//   const navItems = [
//     { text: "Machines", ref: homeMachineRef },
//     { text: "About Us", ref: aboutUsRef },
//     { text: "Clientele", ref: infiniteCardsRef },
//     { text: "KnowMore", ref: knowMoreRef },
//     { text: "IoT", ref: iotRef },
//     { text: "News", ref: newsFeatureRef },
//     { text: "Testimonials", ref: homeTestimonialRef },
//   ];

//   return (
//     <main className="bg-[#f2f2f2]">
//       <div className=" mt-[4.5rem] lg:mt-4 ">
//         <Hero />
//       </div>
//       <ContactIcons />
//       <NavLinksDemo navItems={navItems} />
//       <div className="h-full">
//         <div id="machines" className="flex flex-col justify-center items-center mt-32" ref={homeMachineRef}>
//           <h1 className="text-2xl lg:text-3xl font-semibold text-[#483d78] text-center">
//             Our <span className="text-red-500">Products</span>
//           </h1>
//           <p className="text-sm w-full px-2 lg:w-[50%] lg:text-base pt-4 text-center font-poppins font-medium">
//             We are known for manufacturing and globally exporting various paper
//             packaging machines including Cups, Glass, Straws and Plate Machines.
//           </p>
//           <HomeMachine />
//         </div>
//         <div className="lg:mx-4 mt-8">
//           <AppleCardsCarouselDemo />
//         </div>
//         <div id="aboutUs" className="mx-4 mt-32" ref={aboutUsRef}>
//           <AboutUs
//             heading={data.heading}
//             description={data.description}
//             stats={data.stats}
//             cards={data.cards}
//           />
//         </div>

//         <div
//           id="clientele"
//           className="ml-2 lg:mx-4 mt-[45rem] lg:mt-32"
//           ref={infiniteCardsRef}
//         >
//           <MarqueeSection />
//         </div>
//         <div id="knowMore" className="mx-1 lg:mx-4 mt-32" ref={knowMoreRef}>
//           <KnowMore />
//         </div>

//         <div
//           id="iot"
//           className="mx-6 lg:flex flex-col hidden mt-32"
//           ref={iotRef}
//         >
//           <h4 className="text-xl text-center lg:text-2xl font-poppins lg:leading-tight text-black dark:text-white">
//             IoT <span className="text-red-500 font-bold">System</span>
//           </h4>
//           <IotSection />
//         </div>
//         <div
//           id="news"
//           className="lg:mx-4 flex  mt-32"
//           ref={newsFeatureRef}
//         >
//           <NewsFeature />
//         </div>
//         <div id="knowMachine" className="lg:mt-32" ref={knowMachineRef}>
//           {/* <CanvasRevealEffectDemo /> */}
//           <KnowMachine />
//         </div>
//         <div
//           id="testimonials"
//           className="relative mt-32 bg-gradient-to-l via-purple-200 to-transparent h-screen overflow-hidden"
//           ref={homeTestimonialRef}
//         >
//           <div className="absolute"></div>
//           <div className="relative lg:mx-8 z-20">
//             <HomeTestimonial />
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }
"use client";
import React, { useRef } from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/Home/Home";
import NavLinksDemo from "@/components/Home/NavLinks";
import { data } from "@/components/Constants/Navbar/about-data";
import { AppleCardsCarouselDemo } from "@/components/AppleCardsCarouselDemo";
import ContactIcons from "@/components/Contact/ContactIcon";
import KnowMachine from "@/components/Home/CanvasRevealEffectDemo";

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
    <main className="relative bg-white top-16 h-full">
      <div className="">
        <Hero />
      </div>
      <ContactIcons />
      <NavLinksDemo navItems={navItems} />
      <div className="h-full py-14">
        <div id="machines" className="flex space-y-6 flex-col" ref={homeMachineRef}>
          <h1 className="text-2xl lg:text-3xl font-regular
           text-[#483d78] text-center">
            Our <span className="text-red-500 font-semibold">Products</span>
          </h1>
          <div className="text-sm w-full lg:w-full flex items-center justify-center">
            <p className="w-[50%] text-base font-regular text-center">
              We are known for manufacturing and globally exporting various
              paper packaging machines including Cups, Glass, Straws and Plate
              Machines.
            </p>
          </div>
          <HomeMachine />
        </div>
        <div className="">
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

        <div id="clientele" className="" ref={infiniteCardsRef}>
          <MarqueeSection />
        </div>
        <div id="knowMore" className="h-auto" ref={knowMoreRef}>
          <KnowMore />
        </div>

        <div id="iot" className=" lg:flex flex-col hidden" ref={iotRef}>
          <h4 className="text-xl text-center lg:text-2xl font-poppins lg:leading-tight text-black dark:text-white">
            IoT <span className="text-red-500 font-bold">System</span>
          </h4>
          <IotSection />
        </div>
        <div id="news" className="" ref={newsFeatureRef}>
          <NewsFeature />
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
          <div className="absolute"></div>
          <div className="relative ">
            <HomeTestimonial />
          </div>
        </div>
      </div>
    </main>
  );
}
