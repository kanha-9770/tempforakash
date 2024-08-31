"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Page2Data } from "../Constants/applicationOld/applicationOld_data";

const Page2 = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Function to limit the number of words displayed
  const getDisplayedText = () => {
    const words = Page2Data.description.split(" ");
    if (isExpanded || words.length <= 85) {
      return Page2Data.description;
    }
    return words.slice(0, 85).join(" ") + "...";
  };

  return (
    <>
      <div className="w-full h-[45rem]  mb-[1rem]  flex">
        <div className="w-[50%] h-[35rem] ml-[3.5rem] mt-[2rem]">
          <h1 className="text-[#a6a6a6] font-poppins text-[4rem] font-light">
            {Page2Data.title1}
          </h1>
          <h1 className="text-[#dc0e2a] font-poppins text-[4rem] font-medium -mt-[1.5rem]">
            {Page2Data.title2}
          </h1>
          <div className="h-[16.5rem] w-[40.2rem] mt-[4rem]">
            <div className="border-l-[0.2rem] border-solid border-[#dc0e2a] overflow-auto h-full scrollbar-hide">
              <p className="w-[39rem] font-poppins text-[1.1rem] ml-[0.8rem] h-max ">
                {getDisplayedText()}
              </p>
            </div>
          </div>
          <button
            className="text-[#dc0e2a] font-poppins m-[1rem] hover:font-bold"
            onClick={handleExpand}
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </div>
        <div className="w-[50%] h-[44rem] mt-[1rem] overflow-hidden">
          <div className="bg-white w-[33rem] h-[33rem] rounded-[20rem] mt-[11rem] ml-[13rem] relative">
            <Image
              className="max-w-[40rem] absolute -top-[7.6rem] right-[0rem]"
              src={Page2Data.image}
              alt={""}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page2;
