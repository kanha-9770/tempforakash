import Image from "next/image";
import React, { useState } from "react";
import AboutUs from "../../../public/assets/AboutUs.png";
import { PiMagnifyingGlassPlusLight, PiMagnifyingGlassMinusLight } from "react-icons/pi";

const CupFormactionProcess = () => {
  const [zoomLevel, setZoomLevel] = useState(100); // Initial zoom level is 100%

  // Function to handle zooming in
  const handleZoomIn = () => {
    if (zoomLevel < 300) { // Allow zoom up to 300%
      setZoomLevel(zoomLevel + 20); // Increment zoom by 20%
    }
  };

  // Function to handle zooming out
  const handleZoomOut = () => {
    if (zoomLevel > 20) { // Allow zoom out to 20%
      setZoomLevel(zoomLevel - 20); // Decrement zoom by 20%
    }
  };

  return (
    <div className="h-full">
      <div className="h-[80vh] p-4 flex rounded-xl flex-col bg-white shadow-lg w-full">
        <div className="z-20 text-3xl font-poppins">
          <span className="z-20">Process of</span>{" "}
          <span className="text-red-500 font-semibold">Cup Formation</span>
        </div>

        <div
          className="relative w-full h-full -mt-12 rounded-2xl overflow-hidden"
          style={{
            transform: `scale(${zoomLevel / 100})`, // Apply zoom level
            transition: "transform 0.3s ease-in-out", // Smooth transition
          }}
        >
          <Image
            className="w-full h-full rounded-2xl"
            height={800}
            width={800}
            src={AboutUs}
            alt="Cup Formation"
          />
        </div>

        <div className="w-full flex z-50 justify-end mt-4">
          <div className="bg-gray-100 rounded-full w-28 items-center justify-between flex flex-row">
            <div
              className="border-2 bg-gray-200 rounded-full p-1 cursor-pointer"
              onClick={handleZoomIn}
            >
              <PiMagnifyingGlassPlusLight className="text-2xl" />
            </div>

            <div
              className="border-2 bg-gray-200 rounded-full p-1 cursor-pointer"
              onClick={handleZoomOut}
            >
              <PiMagnifyingGlassMinusLight className="text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CupFormactionProcess;
