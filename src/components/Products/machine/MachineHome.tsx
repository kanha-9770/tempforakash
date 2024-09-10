"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import "./machine.css";
import { MdOutlineFileDownload } from "react-icons/md";
import BreadcrumbProduct from "@/components/ui/BreadCrumbProduct";
import { SignupFormDemo } from "@/components/Contact/SignupFormDemo";
import InfoCard from "@/components/Products/InfoCard";
import { NewSignupFormDemo } from "@/components/Contact/ProductContact";

interface MachineProps {
  product_heading: string;
  name: string;
  first_name: string;
  second_name: string;
  application: string;
  mimage: string;
  image: string;
  description: string;
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
}) => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: name, current: true },
  ];
  return (
    <div className="h-full mt-20 flex flex-col pb-8 justify-start ">
      <div className=" mx-10 z-30 flex flex-row">
        <div className="font-poppins w-[70%]">
          <BreadcrumbProduct items={breadcrumbItems} />
          <div className="flex w-full h-full">
            <div className="flex flex-row mt-6 items-start relative">
              <div className="w-[60%] flex flex-col">
                <h1 className="text-4xl font-poppins text-[#483d78] font-black">
                  {name}
                </h1>
                <p className="text-sm text-black  mt-6">{description}</p>
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
        <div className=" w-[30%]">
          <NewSignupFormDemo />
        </div>
      </div>
      <div className="relative -mt-32 border-t-4 border-gray-300">
        <table className="min-w-full divide-y border-separate border-spacing-0">
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
