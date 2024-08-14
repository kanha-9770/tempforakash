"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import "./machine.css";

interface MachineProps {
  product_heading: string;
  name: string;
  application: string;
  mimage: StaticImageData;
}

const Machine: React.FC<MachineProps> = ({
  product_heading,
  name,
  application,
  mimage,
}) => {
  return (
    <div className="h-screen  flex items-center justify-start mx-10 bg-gray-50">
      <div className="font-montserrat w-[80%]">
        <div className="flex flex-col w-full h-full">
          <div className="flex flex-row items-start">
            <div className="w-[60%] flex flex-col">
              <h1 className="text-6xl mb-2">Food Packaging Machines</h1>
              <h2 className="text-6xl font-bold italic mt-2" style={{ color: "#483D73" }}>
                Flexo <span className="text-red-500">Printing</span>
              </h2>
              <p className="text-lg mt-4">{application}</p>
              <button
                className="mt-5 px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800"
                style={{ backgroundColor: "#483D73" }}
              >
                Book Now
              </button>
            </div>
            <div className="w-[40%] flex justify-end relative">
              <div className="w-full h-96 bg-white mt-20 flex justify-end items-end">
                <Image
                  src={mimage}
                  height={800}
                  width={400}
                  alt="Flexo Printing Machine"
                  className="h-full w-auto"
                />
              </div>
              <svg
                className="connector-svg absolute"
                width="100"
                height="100"
                viewBox="0 0 100 100"
                style={{ top: "50%", left: "-10%", transform: "translateY(-50%)" }}
              >
                <path
                  id="connector-path"
                  d="M10,10 L30,30 L80,30 L100,50"
                  fill="transparent"
                  stroke="#374C68"
                  strokeWidth="2"
                />
                <circle
                  cx="100"
                  cy="50"
                  r="4"
                  fill="black"
                  stroke="#374C68"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Machine;
