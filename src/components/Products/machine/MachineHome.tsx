"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import "./machine.css";
import { MdOutlineFileDownload } from "react-icons/md";
import BreadcrumbProduct from "@/components/ui/BreadCrumbProduct";
import InfoCard from "@/components/Products/InfoCard";
import PositionAwareButton from "@/components/ui/PositionAwareButton";

interface SpecificationImage {
  first?: string;
  second?: string;
  third?: string;
  fourth?: string;
  fifth?: string;
}

interface Rating {
  stars: number;
  reviews: number;
}

interface TechnicalSpecifications {
  title: string;
  specifications: string[];
}

interface Advantages {
  title: string;
  items: string[];
}

interface PaperTypes {
  title: string;
  types: {
    type: string;
    image: string;
  }[];
}

interface LottieAnimations {
  speed: string;
  size: string;
}

interface ProductDetails {
  speedDescription: string;
  sizeDescription: string;
  rangeDescription: string;
}

interface MachineProps {
  name: string;
  image: string;
  mimage: string;
  description: string;
  specification_image: SpecificationImage[];
  product_heading: string;
  first_name: string;
  second_name: string;
  category: string;
  icon: string;
  introduction: string;
  parameters: string;
  application: string;
  product_description: string;
  status: string;
  rating: Rating;
  technicalSpecifications: TechnicalSpecifications;
  advantages: Advantages;
  paperTypes: PaperTypes;
  optional_add_ons: string;
  faqs: string;
  related_product: string;
  lottieAnimations: LottieAnimations;
  productDetails: ProductDetails;
}

const Machine: React.FC<MachineProps> = ({
  product_heading,
  description,
  name,
  image,
  application,
  mimage,
  first_name,
  second_name,
  advantages,
}) => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: name, current: true },
  ];
  // Function to render text with bold part before the colon
  const renderTextWithBoldColon = (text: string) => {
    // Split text by the first colon
    const parts = text.split(/:(.+)/);
    if (parts.length > 1) {
      return (
        <>
          <span className="font-medium text-black">{parts[0]}:</span>
          <span>{parts[1]}</span>
        </>
      );
    }
    return text; // If no colon is present, return the text as is
  };

  return (
    <div className="mt-20 h-screen flex flex-col  justify-start">
      <div className="h-[60%] mx-10 z-30 flex flex-row">
        <div className="font-poppins w-[70%]">
          <BreadcrumbProduct items={breadcrumbItems} />
          <div className="flex w-full h-full">
            <div className="flex flex-row mt-6 items-start relative">
              <div className="w-[40%] flex flex-col">
                <h1 className="text-5xl py-6 font-poppins text-[#483d78] font-black">
                  {name}
                </h1>
                <div className="text-gray-600 mb-4">
                  <h3 className="font-bold mb-1">{advantages.title}</h3>
                  <ul className="list-disc text-sm font-regular list-inside">
                    {advantages.items.map((advantage, index) => (
                      <li key={index}>{renderTextWithBoldColon(advantage)}</li>
                    ))}
                  </ul>
                </div>
                {/* <p className="text-sm text-black  mt-6">{description}</p> */}
              </div>
              <div className="w-[40%] h-full flex justify-end relative">
                <div className="w-full h-72 flex justify-end items-end relative">
                  <Image
                    src={image}
                    height={800}
                    width={400}
                    alt="Flexo Printing Machine"
                    className="h-full w-auto"
                  />
                  {/* Small image positioned at the top right corner */}
                  <div className="absolute top-0 right-0 p-2">
                    <Image
                      src={mimage}
                      height={60}
                      width={60}
                      alt="Small Image"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[30%] flex justify-end flex-col items-end">
          <div className="w-[80%] flex justify-center items-center">
            <PositionAwareButton
              text={"Enquire Now"}
              bgColor="white"
              icon={true}
            />
          </div>
          <InfoCard
            sizeRange="3 oz to 32 oz"
            speedRoundShapes="up to 180 cups/min."
            maxCups={180}
            bmp100Compact="BMP 100 COMPACT"
            bmp100Super="BMP 100 SUPER"
          />
        </div>
      </div>
      <div className="relative h-[40%]  border-t-4 border-gray-300">
        <table className="w-full divide-y border-separate border-spacing-0">
          <thead className="border-b border-gray-200">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r w-[50%]"
              >
                <InfoCard
                  sizeRange="3 oz to 32 oz"
                  speedRoundShapes="up to 180 cups/min."
                  maxCups={180}
                  bmp100Compact="BMP 100 COMPACT"
                  bmp100Super="BMP 100 SUPER"
                />
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200 w-[20%]"
              ></th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200 w-[20%]"
              ></th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[20%]"
              ></th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[20%]"
              ></th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[20%]"
              ></th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[20%]"
              ></th>
            </tr>
          </thead>
          <tbody className="bg-white">{/* No rows */}</tbody>
        </table>

        {/* Buttons positioned on the column lines */}
        <div className="absolute z-40 top-40 left-0 w-full h-full pointer-events-none">
          <div className="flex justify-between">
            <div className="relative -ml-10 w-[40%]">
              <button className="absolute flex flex-row right-0 transform text-red-500 font-bold translate-x-[100%] -translate-y-full p-4 px-6 border-2 border-red-500 rounded-xl pointer-events-auto">
                <MdOutlineFileDownload className="text-2xl mr-2 text-red-500 font-bold" />{" "}
                Download Brochure
              </button>
            </div>
            <div className="-ml-8 relative w-[22%]">
              <button className="absolute text-white font-bold right-0 transform translate-x-[100%] -translate-y-full p-4 px-12 bg-[#483d78]  border-2 border-[#483d78] rounded-xl pointer-events-auto">
                Make an Enquiry
              </button>
            </div>
            <div className="relative w-[15%]"></div>
            <div className="relative w-[10%]"></div>
            <div className="relative w-[10%]"></div>
            <div className="relative w-[10%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Machine;
