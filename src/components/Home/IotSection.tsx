import React from "react";
import iotImage from "../../../public/assets/iotImage.png";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
export default function IotSection() {
  return (
    <div className="h-screen">
      <BentoGrid className="w-full  mx-auto md:auto-rows-[25vh]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            type={item.type}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
            // icon={item.icon}
          />
        ))}
      </BentoGrid>
      <BentoGrid className="w-full mt-4 mx-auto md:auto-rows-[55vh]">
        {items1.map((item, i) => (
          <BentoGridItem
            key={i}
            type={item.type}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
            image={item.image}
            // icon={item.icon}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
const Skeleton = () => (
  <>
    <video
      id="background-video"
      className="object-fill h-[23vh] w-[25.5rem] rounded-3xl"
      autoPlay
      loop
      muted
      height={400}
      width={400}
      playsInline
      preload="metadata"
    >
      <source src="video/iotvideo.mp4" type="video/mp4" />
    </video>
  </>
);

const items = [
  {
    type: "one",
    title: "Nessco Remote Control",
    description: "Maintenance System",
    className: "md:col-span-2",
    // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    type: "two",
    header: <Skeleton />,
    className: "md:col-span-1",
  },
];
const items1 = [
  {
    type: "three",
    title:
      "In our Control Maintenance System, we can customize the IOT reports/data according to customer requirement. We can also do integration with customer ERP i.e. SAP, ORACLE, TCS ion and any other ERP.",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    className: "md:col-span-2",
    image: iotImage,
    // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    type: "four",
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    className: "md:col-span-1",
    image: iotImage,
    // icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
];
