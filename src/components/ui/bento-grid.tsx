import { cn } from "@/lib/utils";
import PositionAwareButton from "./PositionAwareButton";
import Image, { StaticImageData } from "next/image";
import { GlareCard } from "./glare-card";
import { HeroHighlight } from "./hero-highlight";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  type,
  title,
  description,
  header,
  icon,
  image,
}: {
  className?: string;
  type?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  image?: string | StaticImageData; // Updated type
}) => {
  return (
    <>
      {type === "one" && (
        <div
          className={cn(
            "rounded-3xl hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-0",
            className
          )}
        >
          <div className="top-0 text-red-700 mt-4 text-5xl font-poppins text-justify font-bold">
            {title}
            <p className="text-[#483d78]"> {description}</p>
          </div>
        </div>
      )}
      {type === "two" && (
        <div
          className={cn(
            "row-span-1 rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-1 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col",
            className
          )}
        >
          <GlareCard className="flex flex-col bg-transparent items-center justify-center">
            <div className="">{header}</div>
          </GlareCard>
        </div>
      )}
      {type === "three" && (
        <div
          className={cn(
            "row-span-1 rounded-3xl w-full md:w-[90%] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
            className
          )}
        >
          <div className="w-full md:w-[90%]">
            <div className="font-poppins text-justify px-8 font-semibold text-lg text-black dark:text-neutral-200 mb-2 mt-2">
              {title}
            </div>
            <div className="font-poppins font-normal text-neutral-600 text-xs dark:text-neutral-300">
              <div className="grid grid-cols-2 gap-y-4">
                <div>
                  <ul className="list-disc text-base pl-5 ml-8 space-y-2">
                    <li>Monitor Production Reports</li>
                    <li>Production Target Analysis</li>
                    <li>Production Setup Data</li>
                    <li>Machine Alarm Monitoring</li>
                  </ul>
                </div>
                <div>
                  <ul className="list-disc text-base pl-0 space-y-2">
                    <li>Monitor Machine Efficiency</li>
                    <li>Machine Problem Analysis</li>
                    <li>Machine Element Monitoring</li>
                    <li>Machine Performance Overview</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-36 ml-10 bottom-0 py-4">
              <PositionAwareButton text={"Get Details"} width="150px" icon={true} />
            </div>
          </div>
        </div>
      )}
      {type === "four" && (
        <div
          className={cn(
            "row-span-1 rounded-3xl group/bento hover:shadow-xl -ml-20 transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 md:col-span-3",
            className
          )}
        >
          <HeroHighlight>
            {image && (
              <Image
                src={image}
                className=""
                height={600}
                width={800}
                alt={"image"}
              />
            )}
          </HeroHighlight>
        </div>
      )}
    </>
  );
};
