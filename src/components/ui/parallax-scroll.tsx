"use client";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";

interface ImageData {
  src: string;
  username: string;
  profile: string;
  country: string;
  quote: string;
  flag: string;
}

interface ParallaxScrollProps {
  images: ImageData[];
  className?: string;
}

export const ParallaxScroll: React.FC<ParallaxScrollProps> = ({
  images,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const columnRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  const third = Math.ceil(images.length / 3);
  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  useEffect(() => {
    const container = containerRef.current;
    const columns = columnRefs.map((ref) => ref.current);

    if (container) {
      const timelines = gsap.context(() => {
        const createTimeline = (column: HTMLDivElement, duration: number) => {
          return gsap
            .timeline({
              repeat: -1,
              onRepeat: () => {
                const firstChild = column.children[0];
                if (firstChild) {
                  column.appendChild(firstChild); // Move the first child to the bottom
                  gsap.set(column, { y: 0 }); // Reset the scroll position
                }
              },
            })
            .to(column, {
              y: `-${column.scrollHeight / column.children.length}px`,
              duration,
              ease: "none",
            });
        };

        const timeline1 = createTimeline(columns[0]!, 5); // Adjusted duration for faster animation
        const timeline2 = createTimeline(columns[1]!, 10);
        const timeline3 = createTimeline(columns[2]!, 5);

        const timelinesArray = [timeline1, timeline2, timeline3];

        const handleMouseEnter = () =>
          timelinesArray.forEach((tl) => tl.pause());
        const handleMouseLeave = () =>
          timelinesArray.forEach((tl) => tl.resume());

        container.addEventListener("mouseenter", handleMouseEnter, true);
        container.addEventListener("mouseleave", handleMouseLeave, true);

        timelinesArray.forEach((tl) => tl.play());

        return () => {
          container.removeEventListener("mouseenter", handleMouseEnter, true);
          container.removeEventListener("mouseleave", handleMouseLeave, true);
          timelinesArray.forEach((tl) => tl.kill());
        };
      }, container);
    }
  }, []);

  const renderCard = (el: ImageData, idx: number, columnClass: string) => (
    <motion.div key={`${columnClass}-${idx}`} className={`card ${columnClass}`}>
      <div className="p-1 rounded-3xl w-[15.8rem] border-2 bg-gradient-to-t from-blue-500 to-transparent">
        <div className="p-4 h-[18rem] w-[15rem] bg-white rounded-3xl">
          <div className="flex flex-col">
            <div className="flex flex-row justify-between">
              <Image
                src={el.src}
                className="h-12 w-12 rounded-full object-cover"
                height="48"
                width="48"
                alt={el.username}
              />
              <div className="flex justify-end mr-2 mt-0">
                <Image
                  height={200}
                  width={200}
                  src={el.flag}
                  alt={`${el.country} flag`}
                  className="w-8 h-8"
                />
              </div>
            </div>
            <p className="text-center text-4xl">❝</p>
            <p className="text-gray-700 mt-4 text-center">{el.quote}</p>
            <div className="ml-2 mt-2 flex flex-row justify-start items-start">
              <div className="relative mt-10 h-10 w-1 bg-[#483d78]"></div>
              <div className="flex ml-2 mt-8 flex-col">
                <h3 className="text-lg font-bold">{el.username}</h3>
                <p className="text-sm text-gray-500">{el.profile}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderColumn = (columnPart: ImageData[], columnIndex: number) => {
    return (
      <div
        className={`grid w-[15rem] gap-2 column-${columnIndex + 1}`}
        ref={columnRefs[columnIndex]}
      >
        {columnPart.map((el, idx) =>
          renderCard(el, idx, `column-${columnIndex + 1}`)
        )}
      </div>
    );
  };

  return (
    <div
      className={`h-[60rem] w-full overflow-hidden relative ${className}`}
      ref={containerRef}
    >
      <div className="absolute top-0 bottom-0 left-0 right-0 pointer-events-none"></div>
      <div className="absolute top-0 bottom-0 left-0 right-0  pointer-events-none"></div>
      <div className="grid ml-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start">
        {renderColumn(firstPart, 0)}
        {renderColumn(secondPart, 1)}
        {renderColumn(thirdPart, 2)}
      </div>
    </div>
  );
};
