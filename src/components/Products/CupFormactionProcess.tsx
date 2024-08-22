import Image from "next/image";
import React from "react";
import AboutUs from "../../../public/assets/AboutUs.png";
import DetaillProcess from "./DetaillProcess";
const CupFormactionProcess = () => {
  return (
    <div className="h-full">
      <div className="h-[80%] p-4 flex rounded-3xl flex-col bg-white shadow-lg w-full">
        <div className="z-20 text-base font-poppins">
          {" "}
          <span className="z-20">Process of</span>{" "}
          <span className="text-red-500 font-semibold">Cup Formation</span>
        </div>
        <Image
          className="w-full h-full -mt-6 rounded-3xl"
          height={800}
          width={800}
          src={AboutUs}
          alt={""}
        />
      </div>
      <DetaillProcess/>
    </div>
  );
};

export default CupFormactionProcess;
