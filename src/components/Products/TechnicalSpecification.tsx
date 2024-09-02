import React from "react";
import SpecificationTable from "./SpecificationTable";
import Image from "next/image";
import SpeciGlass from "../../../public/assets/product/Specificationglass.png";
import { BiSolidFilePdf } from "react-icons/bi";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const categories = [
  "Paper Cup Machines",
  "Paper Bowl Machines",
  "Paper Bag Machines",
  "Paper Straw Machines",
  "Flexo Printing Machines",
  "Die Cutting Machines",
];

export function TechnicalSpecifications() {
  return (
    <div className="w-full h-full flex flex-row p-4 ">
      {/* Left Side: Specification and Image */}
      <div className="flex-grow bg-white p-6 rounded-3xl flex flex-col justify-between">
        <div className="mb-4">
          <h1 className="font-poppins text-xl font-semibold">
            Technical{" "}
            <span className="text-red-600 font-extrabold ml-2">
              Specifications
            </span>
          </h1>
        </div>
        <div className="flex flex-row items-start">
          <SpecificationTable />
          <div className="ml-8  w-[50%]">
            <Image
              src={SpeciGlass}
              width={400}
              height={400}
              alt="Specification Glass"
              className="w-full  h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Right Side: Categories and Download */}
      <div className="w-1/4 py-14 ml-12 flex flex-col ">
        <div>
          <div className="p-4 ">
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex items-center font-poppins  p-2 mb-2 bg-white rounded-xl hover:bg-gray-200 transition duration-200"
              >
                <MdKeyboardDoubleArrowRight className="text-[#483d78] text-xl" />

                <span className="text-base ml-2  text-justify font-montserrat text-[#483d78]">
                  {category}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4">
          <h2 className="text-xl font-poppins mb-2">
            Download{" "}
            <span className="text-[#483d78] italic font-bold">Brochures</span>
          </h2>
          <p className="text-gray-500 mb-4">
            Download our catalogue to learn more about our machines.
          </p>
          <a
            href="/path-to-your-catalogue.pdf"
            className="flex px-2 gap-2 items-center text-wrap bg-white text-[#483d78]  rounded-lg transition duration-200"
          >
            <BiSolidFilePdf className="text-6xl" />
            <p className=" font-bold text-sm font-poppins">
              Nessco India Catalogue Download Now
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}