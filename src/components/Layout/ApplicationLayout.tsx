// import React, { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import styles from "./application.module.css";
// import PositionAwareButton from "../ui/PositionAwareButton";
// import { motion } from "framer-motion";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import the icons
// import { StaticImport } from "next/dist/shared/lib/get-img-props";
// import data from "../Constants/Navbar/index.json";
// interface itemDataType {
//   src: string;
//   alt: string;
//   name: string;
//   description: string;
//   bgpic: string;
// }
// const Application: React.FC<{
//   onHover: (item: itemDataType) => void;
//   items: itemDataType[];
// }> = ({ onHover, items }) => {
//     const applicationData = data.find(item => item.category === "Application")?.data;
//     const applications = applicationData?.item|| [];
//     console.log("application",applications);

//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
//   const handleMouseEnter = (index: number, item: itemDataType) => {
//     setHoveredIndex(index);
//     onHover(item);
//   };

//   const handleMouseLeave = () => {
//     setHoveredIndex(null);
//   };

//   const carouselRef = useRef<HTMLDivElement>(null);
//   const [canScrollLeft, setCanScrollLeft] = useState(false);
//   const [canScrollRight, setCanScrollRight] = useState(true);

//   useEffect(() => {
//     if (carouselRef.current) {
//       checkScrollability();
//     }
//   }, []);

//   const checkScrollability = () => {
//     if (carouselRef.current) {
//       const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
//       setCanScrollLeft(scrollLeft > 0);
//       setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
//     }
//   };

//   const scrollLeft = () => {
//     if (carouselRef.current) {
//       carouselRef.current.scrollBy({
//         left: -carouselRef.current.clientWidth,
//         behavior: "smooth",
//       });
//       checkScrollability();
//     }
//   };

//   const scrollRight = () => {
//     if (carouselRef.current) {
//       carouselRef.current.scrollBy({
//         left: carouselRef.current.clientWidth,
//         behavior: "smooth",
//       });
//       checkScrollability();
//     }
//   };

//   const chunkItems = (arr: itemDataType[], size: number): itemDataType[][] =>
//     arr.length
//       ? [arr.slice(0, size), ...chunkItems(arr.slice(size), size)]
//       : [];

//   const paginatedItems = chunkItems(items, 9);
//   console.log(paginatedItems);

//   // const paginatedItems = items.slice(
//   //   currentPage * ITEMS_PER_PAGE,
//   //   (currentPage + 1) * ITEMS_PER_PAGE
//   // );
//   const imageVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: (i: number) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: i * 0.01,
//         duration: 0.1,
//         ease: "easeInOut",
//       },
//     }),
//   };

//   return (
//     <>
//       <div className="hidden lg:grid grid-cols-3  mx-auto max-w-screen-2xl lg:grid-cols-6 pt-2 gap-4 lg:p-6 rounded">
//         {/* desktop view */}
//         {applications.map((item, index) => (
//           <motion.div
//             key={index}
//             className="relative mt-2 h-24 w-32 rounded-lg"
//             onMouseEnter={() => handleMouseEnter(index, item)}
//             onMouseLeave={handleMouseLeave}
//             custom={index}
//             initial="hidden"
//             animate="visible"
//             variants={imageVariants}
//           >
//             <a
//               href={`/application/${item.name
//                 .toLowerCase()
//                 .replace(/ /g, "-")}`}
//               className="relative bg-slate-400 rounded-md h-20 w-28 block"
//             >
//               <Image
//                 src={item.src}
//                 alt={item.alt}
//                 height={400}
//                 width={400}
//                 className={`object-cover w-28 h-20 transition-transform duration-300 ease-in-out rounded-md ${
//                   hoveredIndex === index ? "transform translate-y-[-20%]" : ""
//                 }`}
//               />
//               <p
//                 onMouseEnter={() => onHover(item)}
//                 className={`absolute bottom-0 w-full text-black text-sm text-center transition-opacity duration-300 ease-in-out ${
//                   hoveredIndex === index ? "opacity-100" : "opacity-0"
//                 }`}
//               >
//                 {item.name}
//               </p>
//             </a>
//           </motion.div>
//         ))}
//       </div>
//       {/* mobile view */}

//       {/* Mobile view */}
//       <div className="relative p-1 h-screen  flex lg:hidden flex-col items-center">
//         <div
//           className="w-full h-[50%] py-2 overflow-x-scroll scroll-smooth [scrollbar-width:none]"
//           ref={carouselRef}
//           onScroll={checkScrollability}
//         >
//           <div className="flex flex-row gap-2">
//             {paginatedItems.map((group, groupIndex) => (
//               <motion.div
//                 key={`slide-${groupIndex}`}
//                 className="min-w-full grid grid-cols-3 grid-rows-3 gap-2"
//               >
//                 {group.map(
//                   (
//                     item: {
//                       name:
//                         | string
//                         | number
//                         | bigint
//                         | boolean
//                         | React.ReactElement<string>
//                         | Iterable<React.ReactNode>
//                         | Promise<React.AwaitedReactNode>
//                         | null
//                         | undefined;
//                       src: string | StaticImport;
//                       alt: string;
//                     },
//                     itemIndex: number
//                   ) => (
//                     <motion.div
//                       key={`item-${itemIndex}`}
//                       className="h-28 w-28 border-2 rounded-xl p-2 bg-white "
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{
//                         opacity: 1,
//                         y: 0,
//                         transition: {
//                           duration: 0.5,
//                           delay: 0.1 * itemIndex,
//                           ease: "easeOut",
//                         },
//                       }}
//                     >
//                       <a className="relative bg-white border-[1px] p-1 rounded-md h-16 w-24 block">
//                         <Image
//                           src={item.src}
//                           alt={item.alt}
//                           height={400}
//                           width={400}
//                           className="object-cover w-full h-full transition-transform duration-300 ease-in-out rounded-md"
//                         />
//                       </a>
//                       <p className="w-full text-black font-medium text-sm text-center mt-2">
//                         {item.name}
//                       </p>
//                     </motion.div>
//                   )
//                 )}
//               </motion.div>
//             ))}
//           </div>
//         </div>
//         <div className="flex h-[5%] justify-center w-full ">
//           <button
//             className="h-12 w-12 rounded-full flex items-start justify-center disabled:opacity-50"
//             onClick={scrollLeft}
//             disabled={!canScrollLeft}
//           >
//             <FaArrowLeft className="text-xl text-gray-500" />
//           </button>
//           <button
//             className="h-12 w-12 rounded-full flex items-start justify-center disabled:opacity-50"
//             onClick={scrollRight}
//             disabled={!canScrollRight}
//           >
//             <FaArrowRight className="text-xl text-gray-500" />
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// const ApplicationPage: React.FC = () => {
//   const applicationData = data.find(item => item.category === "Application")?.data;
//   // Provide fallback values if aboutData is undefined
//   const applications = applicationData?.item|| [];
//   console.log("application",applications);
//   const [hoveredItem, setHoveredItem] = useState<itemDataType>(
//     applications[0]
//   );

//   const handleHover = (item: itemDataType) => {
//     setHoveredItem(item);
//   };

//   const sidebarVariants = {
//     hidden: { opacity: 0, x: -30 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         duration: 0.4,
//         ease: "easeOut",
//       },
//     },
//   };

//   return (
//     <>
//       <div className="lg:flex mx-auto max-w-screen-2xl w-full lg:w-[100vw] h-full hidden justify-start lg:justify-center items-start lg:max-w-screen-2xl">
//         {/* desktop view */}
//         <div className="overflow-hidden relative">
//           <div className="flex">
//             <div className="w-full lg:w-[75%] pt-4">
//               <Application onHover={handleHover} items={applications} />
//             </div>
//             <div className="hidden lg:flex relative ml-2 p-4 pb-8  items-center">
//               <div className="ml-2 hidden lg:flex w-2 h-full  border-l border-gray-300"></div>
//             </div>
//             <motion.div
//               className="hidden lg:flex w-[35%] ml-3 mt-24 relative"
//               initial="hidden"
//               animate="visible"
//               variants={sidebarVariants}
//             >
//               <div
//                 className="absolute inset-0 bg-cover bg-center h-40 w-40 mt-32 opacity-5 transition-opacity duration-300 ease-in-out ml-40"
//                 style={{ backgroundImage: `url(${hoveredItem.bgpic})` }}
//               ></div>
//               <div className="relative z-10 p-4 -mt-14">
//                 <h2 className="text-6xl font-poppins font-extrabold text-[#483d73]">
//                   {hoveredItem.name.split(" ")[0]}{" "}
//                 </h2>
//                 <h3 className="text-6xl text-red-500 font-poppins font-extrabold">
//                   {hoveredItem.name.split(" ")[1]}
//                 </h3>
//                 <p className="text-base font-regular mt-8 mr-4 text-justify text-black">
//                   {hoveredItem.description}
//                 </p>
//               </div>
//               <div className={`${styles.container} z-20 `}>
//                 <PositionAwareButton
//                   text={"Explore More"}
//                   borderRadius="100px"
//                   iconSize="32px"
//                   borderColor="black"
//                   icon
//                   width="175px"
//                 />
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//       <div className="flex w-screen lg:hidden">
//         <Application onHover={handleHover} items={applications} />
//       </div>
//     </>
//   );
// };

// export default ApplicationPage;
import { useState } from "react";
import HandBurgerBox from "../Icons/HandBurgerBox";
import LunchBox from "../Icons/LunchBox";
import PaperBlank from "../Icons/PaperBlank";
import PaperBowl from "../Icons/PaperBowl";
import PaperCup from "../Icons/PaperCup";
import PaperCupWithLid from "../Icons/PaperCupWithLid";
import PaperCupWithSleeve from "../Icons/PaperCupWithSleeve";
import PaperCutlery from "../Icons/PaperCutlery";
import PaperPlate from "../Icons/PaperPlate";
import PaperRoll from "../Icons/PaperRoll";
import PaperStraw from "../Icons/PaperStraw";
import PopcornTub from "../Icons/PopcornTub";
import PositionAwareButton from "../ui/PositionAwareButton";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "lucide-react";

interface Product {
  id: string;
  name: string;
  description: string;
}

const componentList = [
  PaperCutlery,
  PaperCupWithSleeve,
  PaperCupWithLid,
  PaperCup,
  PopcornTub,
  LunchBox,
  PaperStraw,
  PaperRoll,
  PaperPlate,
  PaperBowl,
  PaperBlank,
  HandBurgerBox,
];

const products: Product[] = [
  {
    id: "1",
    name: "Paper Cutlery",
    description:
      "High-quality paper cutlery designed for sustainable dining. Perfect for eco-friendly events, offering both durability and convenience in single-use form.",
  },
  {
    id: "2",
    name: "Paper Cup with Sleeve",
    description:
      "Insulated paper cups with a sleeve for hot beverages. Ideal for cafes and takeout services, ensuring hands stay protected while enjoying hot drinks.",
  },
  {
    id: "3",
    name: "Paper Cup with Lid",
    description:
      "Standard paper cups paired with lids, perfect for serving cold beverages. A great solution for takeaways and outdoor events.",
  },
  {
    id: "4",
    name: "Paper Cup",
    description:
      "Durable paper cups, perfect for serving cold drinks. An essential for any cafe or event where disposables are needed.",
  },
  {
    id: "5",
    name: "Popcorn Tub",
    description:
      "Large, durable paper tubs designed for popcorn or other snacks. Perfect for movie theaters and events.",
  },
  {
    id: "6",
    name: "Lunch Box",
    description:
      "Foldable, eco-friendly paper lunch boxes, ideal for takeout meals and catering services. Perfect for maintaining food freshness while being environmentally friendly.",
  },
  {
    id: "7",
    name: "Paper Straw",
    description:
      "Biodegradable paper straws suitable for any beverage. An eco-friendly alternative to plastic straws, perfect for restaurants and cafes.",
  },
  {
    id: "8",
    name: "Paper Roll",
    description:
      "Versatile paper rolls for a wide range of uses, from crafts to packaging. Ideal for commercial and personal applications.",
  },
  {
    id: "9",
    name: "Paper Plate",
    description:
      "Durable, disposable paper plates perfect for parties, picnics, and events. A practical, eco-friendly option for serving food.",
  },
  {
    id: "10",
    name: "Paper Bowl",
    description:
      "Disposable paper bowls designed for serving soups, salads, and other dishes. Ideal for eco-conscious dining.",
  },
  {
    id: "11",
    name: "Paper Blank",
    description:
      "Blank paper sheets perfect for versatile use, including packaging, printing, or crafts. A sustainable choice for all your paper needs.",
  },
  {
    id: "12",
    name: "Hand Burger Box",
    description:
      "Eco-friendly paper boxes designed specifically for burgers. Ideal for takeout and food delivery services, keeping burgers fresh and intact.",
  },
];

export default function ApplicationLayout() {
  const [activeProduct, setActiveProduct] = useState<Product>(products[0]);

  return (
    <div className="flex flex-col md:flex-row w-full h-full p-4">
      <div className="relative md:w-[70%] grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4 mb-4 md:mb-0 md:mr-4">
        {products.map((product, index) => {
          const IconComponent = componentList[index];
          return (
            <div
              key={product.id}
              className="flex flex-col items-center justify-center p-2 invert-0 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              onMouseEnter={() => setActiveProduct(product)}
            >
              <IconComponent />
              <span className="text-xs text-center invert-0">
                {product.name}
              </span>
            </div>
          );
        })}

        <div className="absolute bottom-4 right-4">
          <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2 text-lg font-semibold group">
            View All
            <span className="ml-2 bg-white rounded-full p-1 transition-colors duration-200 group-hover:bg-black">
              <ArrowRightIcon className="h-5 w-5 text-primary transition-colors duration-200 group-hover:text-white" />
            </span>
          </Button>
        </div>
      </div>

      <div className="md:w-[30%] border-l p-6 flex flex-col  relative">
        <div className="absolute inset-0 px-8  h-full w-full opacity-5 pointer-events-none">
          {(() => {
            const ActiveIconComponent =
              componentList[
                products.findIndex((p) => p.id === activeProduct.id)
              ];
            return <ActiveIconComponent width={"100%"} />;
          })()}
        </div>
        <div className="relative w-full  z-10">
          <h2 className="w-full text-5xl font-semibold">
            <span className="text-[#9e9c9c]">
              {activeProduct?.name.trim().replace(/\s+\S+$/, "")}
            </span>{" "}
            <span className="text-[#dc0e2a]">
              {activeProduct?.name.trim().match(/\S+$/)}
            </span>
          </h2>

          <p className="pt-6 invert-0 mb-4">
            {activeProduct.description}
          </p>
        </div>
        <div className="absolute bottom-6 right-8 z-10">
          <PositionAwareButton text={"Explore More"} icon={true} />
        </div>
      </div>
    </div>
  );
}
