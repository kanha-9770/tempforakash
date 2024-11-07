"use client";
import React from "react";
import dynamic from "next/dynamic";
import LottieAnimation from "../ui/LottieAnimation";
import speed from "../../../public/assets/product/speed.json";
import size from "../../../public/assets/product/size.json";

interface MachineData {
  name: string;
  image: string;
  application: string;
  mimage: string;
  product_heading: string;
  first_name: string;
  second_name: string;
  descriptionHeading:string;
  descriptionSubHeading:string;
  product_description: string;
  specification_image: Array<{
    first?: string;
    second?: string;
    third?: string;
    fourth?: string;
    fifth?: string;
  }>;
  status: string;
  rating: {
    stars: number;
    reviews: number;
  };
  technicalSpecifications: {
    title: string;
    specifications: string[];
  };
  advantages: {
    title: string;
    items: string[];
  };
  paperTypes: {
    title: string;
    types: Array<{ type: string; image: string }>;
  };
}

interface ProductDescriptionProps {
  machine: MachineData;
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({ machine }) => {
  return (
    <div className="h-full bg-white rounded-xl">
      <div className="h-full p-4 rounded-xl flex flex-col">
        {/* heading */}
        <div className="w-full h-auto justify-start mb-2">
          <span className="text-[#483d73] font-semibold text-3xl">{machine?.descriptionHeading}</span>
          <span className="text-red-700 ml-2 font-bold text-3xl">
            {machine?.descriptionSubHeading}
          </span>
          <div className="text-sm text-black  p-4 font-poppins">
            {machine.product_description}
          </div>
        </div>
        <div className="relative items-center p-4 h-auto flex flex-row justify-center">
          <div className="h-48 flex flex-col w-64">
            <LottieAnimation className="h-20 w-20" animationData={speed} />
            <p className="text-[#483d78] text-center text-2xl">Speed</p>
            <p className="text-base justify-center px-6 mt-8 text-center font-regular">
              {machine.technicalSpecifications.specifications[0]}
            </p>
          </div>
          <div className="h-48 w-64 flex flex-col border-l-2 border-gray-300 border-r-2">
            <LottieAnimation
              className="h-20 -rotate-45 w-20"
              animationData={size}
            />
            <p className="text-[#483d78] text-center text-2xl">Size</p>
            <p className="text-base mt-8 px-6 text-center font-regular">
              {machine.technicalSpecifications.specifications[1]}
            </p>
          </div>
          <div className="h-48 w-64 flex flex-col ">
            <LottieAnimation className="h-20 w-20" animationData={speed} />
            <p className="text-[#483d78] text-center text-2xl">Range</p>
            <p className="text-base mt-8 px-6 text-center font-regular">
              {machine.technicalSpecifications.specifications[2]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
