"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./secondpage.module.css";
import DashedLineWithImage from "./Elephant";
import { secondPageContent } from "../Constants/pinkcity/second-page";

const SecondPage = () => {
  const mandalaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mandala = mandalaRef.current;

    if (mandala) {
      ScrollTrigger.create({
        trigger: mandala,
        start: "top 80%",
        end: "top 20%",
        onEnter: () => {
          mandala.classList.add(styles["scale-up"]);
        },
        onLeaveBack: () => {
          mandala.classList.remove(styles["scale-up"]);
          void mandala.offsetWidth; // Trigger a reflow
          mandala.classList.add(styles["scale-up"]);
        },
      });
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center lg:h-screen h-screen bg-gray-100 p-6 mt-44 w-full  ">
      <DashedLineWithImage />

      <div className="relative w-full  flex items-center ">
        <div className="relative flex w-2/5 h-full lg:-mt-0 -mt-[60rem] ">
          <div className="absolute inset-0 flex justify-center items-center lg:h-[65vh] lg:top-5  lg:-left-5  lg:w-[40vw] h-[50vh] w-[91vw]  -top-20 ">
            <Image
              src={secondPageContent.mandalaImg}
              alt="Mandala Design"
              layout="fill"
              objectFit="cover"
              ref={mandalaRef}
              className="object-contain  " style={{left:'-11%'}}
            />


            
          <div className="relative flex justify-center items-center w-[57vw] h-[29vh] lg:-left-8 lg:w-[23vw] lg:h-[42vh] -left-5 lg:mt-0 bg-red-500">
           
              <Image
                src={secondPageContent.topImg}
                alt="Jaipur"
                layout="fill"
                objectFit="cover"
                className="shadow-lg rounded-xl object-cover "
                style={{ aspectRatio: "2 / 2" }} // Adjust aspect ratio if needed
              />
            
          </div>
          </div>

          {/* <div className="relative flex justify-center items-center w-[25vw] h-[45vh] left-28 top-20">
           
              <Image
                src={secondPageContent.topImg}
                alt="Jaipur"
                layout="fill"
                objectFit="cover"
                className="shadow-lg rounded-xl object-cover "
                style={{ aspectRatio: "2 / 2" }} // Adjust aspect ratio if needed
              />
            
          </div> */}
        </div>

        <div className="flex-1 relative -top-64 lg:top-5 lg:right-16 h-full w-3/4 lg:mt-10  lg:ml-0 -ml-[10rem]  ">
          <div className="absolute inset-0 flex justify-end items-start lg:h-full lg:w-[50rem] h-[55vh] w-[98vw]   ">
            <Image
              src={secondPageContent.strokeImg}
              alt="Stroke"
              layout="fill"
              objectFit="cover"
              className="object-contain opacity-40 "
            />
          </div>

          <div className="relative z-10 lg:top-8 w-[90vw] text-justify lg:w-[60vw] top-40 lg:p-0 px-5">
            <p className="text-gray-700 lg:text-lg text-sm lg:p-20 text-center  font-montserrat">
              {secondPageContent.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
