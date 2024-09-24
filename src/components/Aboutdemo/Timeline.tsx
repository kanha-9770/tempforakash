import Image from "next/image";
import React from "react";
import { Timeline } from "../ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "1998",
      content: (
        <div className="relative lg:bottom-[] bottom-[22vh]">
          <p className="text-white dark:text-neutral-200 text-xs md:text-sm font-regular font-poppins mb-8 lg:w-[31vw] lg:left-[28vw] lg:top-[] top-[43vh] relative  lg:px-8 ">
          Nessco India, founded in 1980, has evolved into a prominent leader in the manufacturing industry. Starting as a small enterprise, the company focused on producing high-quality packaging machinery and equipment. Over the decades, Nessco India has expanded its operations, embracing technological advancements and diversifying its product portfolio to meet the changing needs of the market.
          </p>
          <div className="grid grid-cols-2 gap-4  ">
            <Image
              src="/assets/about/nessco-team.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-36 w-[55vw] md:h-44 lg:h-80 bg-red-300 lg:w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          
          </div>
        </div>
      ),
    },
    {
      title: "1999",
      content: (
        <div className="relative lg: bottom-[22vh]">
          <p className="text-white dark:text-neutral-200 text-xs md:text-sm font-regular font-poppins mb-8 lg:w-[31vw] lg:left-[28vw] lg:top-[] top-[43vh] relative  lg:px-8 ">
          Nessco India, founded in 1980, has evolved into a prominent leader in the manufacturing industry. Starting as a small enterprise, the company focused on producing high-quality packaging machinery and equipment. Over the decades, Nessco India has expanded its operations, embracing technological advancements and diversifying its product portfolio to meet the changing needs of the market.
          </p>
        <div className="grid grid-cols-2 gap-4 ">
          <Image
            src="/assets/about/nessco-team.webp"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-coverh-36 w-[55vw] md:h-44 lg:h-80 bg-red-300 lg:w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        
        </div>
      </div>
      ),
    },
    {
      title: "2000",
      content: (
        <div className="relative lg:bottom-[] bottom-[22vh]">
        <p className="text-white dark:text-neutral-200 text-xs md:text-sm font-regular font-poppins mb-8 lg:w-[31vw] lg:left-[28vw] lg:top-[] top-[43vh] relative  lg:px-8 ">
        Nessco India, founded in 1980, has evolved into a prominent leader in the manufacturing industry. Starting as a small enterprise, the company focused on producing high-quality packaging machinery and equipment. Over the decades, Nessco India has expanded its operations, embracing technological advancements and diversifying its product portfolio to meet the changing needs of the market.
        </p>
          <div className="grid grid-cols-2 gap-4 ">
            <Image
              src="/assets/about/nessco-team.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-36 w-[55vw] md:h-44 lg:h-80 bg-red-300 lg:w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          
          </div>
        </div>
      ),
    },
    {
      title: "2001",
      content: (
        <div className="relative lg:bottom-[] bottom-[22vh]">
          <p className="text-white dark:text-neutral-200 text-xs md:text-sm font-regular font-poppins mb-8 lg:w-[31vw] lg:left-[28vw] lg:top-[] top-[43vh] relative  lg:px-8 ">
          Nessco India, founded in 1980, has evolved into a prominent leader in the manufacturing industry. Starting as a small enterprise, the company focused on producing high-quality packaging machinery and equipment. Over the decades, Nessco India has expanded its operations, embracing technological advancements and diversifying its product portfolio to meet the changing needs of the market.
          </p>
          <div className="grid grid-cols-2 gap-4 ">
            <Image
              src="/assets/about/nessco-team.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-36 w-[55vw] md:h-44 lg:h-80 bg-red-300 lg:w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          
          </div>
        </div>
      ),
    },
    {
      title: "2002",
      content: (
        <div className="relative lg:bottom-[] bottom-[22vh]">
        <p className="text-white dark:text-neutral-200 text-xs md:text-sm font-regular font-poppins mb-8 lg:w-[31vw] lg:left-[28vw] lg:top-[] top-[43vh] relative  lg:px-8 ">
        Nessco India, founded in 1980, has evolved into a prominent leader in the manufacturing industry. Starting as a small enterprise, the company focused on producing high-quality packaging machinery and equipment. Over the decades, Nessco India has expanded its operations, embracing technological advancements and diversifying its product portfolio to meet the changing needs of the market.
        </p>
        <div className="grid grid-cols-2 gap-4 ">
          <Image
            src="/assets/about/nessco-team.webp"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-36 w-[55vw] md:h-44 lg:h-80 bg-red-300 lg:w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        
        </div>
      </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
