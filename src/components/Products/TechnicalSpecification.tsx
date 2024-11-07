import React from "react";
import SpecificationTable from "./SpecificationTable";
import Image from "next/image";
import SpeciGlass from "../../../public/assets/product/Specificationglass.png";
export function TechnicalSpecifications() {
  return (
    <div className="w-full h-full flex flex-row font-poppins">
      {/* Left Side: Specification and Image */}
      <div className="flex-grow bg-white p-4 rounded-2xl flex flex-col justify-between">
        <div className="mb-4">
          <h1 className="font-poppins text-3xl font-semibold text-[#483d73]">
            Technical
            <span className="text-red-700 font-bold ml-2 text-3xl">
              Specifications
            </span>
          </h1>
        </div>
        <div className="flex flex-row items-start">
          <SpecificationTable />
          <div className="w-[40%] h-full">
            <Image
              src={SpeciGlass}
              width={400}
              height={400}
              alt="Specification Glass"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
