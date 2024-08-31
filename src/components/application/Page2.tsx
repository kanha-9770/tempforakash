"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { Page2Data } from "../Constants/application/application_data";

const Page2 = () => {
  return (
    <>
      <div className="w-full h-[90vh] mb-[2rem] mt-[32vh] px-[1rem] font-poppins flex items-center justify-center">
        <div className="w-[50%] mx-[1rem] h-[85vh] bg-white rounded-[1rem] p-[1rem] flex flex-col items-center justify-center">
          <div className="flex w-full">
            <div className="flex w-[60%] h-[6.5vh] rounded-[2rem] bg-[#f2f2f2] border-2 border-solid border-[#f2f2f2] overflow-hidden hover:border-[#d9d9d8] mr-[1rem] text-[#6f6f6f] items-center">
              <button className="ml-[0.5rem] text-black text-[1.4rem] ">
                {Page2Data.searchIcon}
              </button>
              <input
                type="search"
                placeholder={Page2Data.placeholder}
                className="w-full px-[0.5rem] outline-none bg-transparent text-[#6f6f6f]"
              />
            </div>
            <div className="w-[40%] h-[6.5vh] rounded-[2rem] bg-[#f2f2f2] border-2 border-solid border-[#f2f2f2] overflow-hidden hover:border-[#d9d9d8] px-[0.5rem] flex items-center">
              <select
                id="Category"
                name="Category"
                className="w-full outline-none bg-transparent text-[#6f6f6f]"
              >
                <option value="" disabled selected>
                  Category
                </option>
                <option value="item1">Paper Cup</option>
                <option value="item2">Paper Bowl</option>
                <option value="item3">Paper Roll</option>
              </select>
            </div>
          </div>

          <div className="w-full h-[62vh] my-[1rem] overflow-hidden">
            <div className="h-full overflow-auto py-2 px-2 scrollbar-hide">
              <div className="grid grid-cols-4 gap-2">
                {Page2Data.products.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-[#f2f2f2] rounded-[1rem] hover:bg-[#483d73]"
                  >
                    <Image className="h-[18.9vh]" src={item.img} alt={""} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full h-[7vh] rounded-[2rem] bg-[#f2f2f2] border-2 border-solid border-[#f2f2f2] overflow-hidden hover:border-[#483d73] flex items-center justify-center">
            <h2 className="text-[#483d73] text-[1.5rem]">
              {Page2Data.paperCup}
            </h2>
          </div>
        </div>
        <div className="w-[50%] mx-[1rem] h-[85vh] px-[2rem]">
          <div className="h-[15vh]">
            <div>
              <h2 className="text-[2.2rem] font-semibold">
                <span className="text-[#c6c5c5]">
                  {Page2Data.paperBowl.trim().replace(/\s+\S+$/, "")}
                </span>{" "}
                <span className="text-[#e12d2c]">
                  {Page2Data.paperBowl.trim().match(/\S+$/)}
                </span>
              </h2>
            </div>
            <div className="border-t-[0.2rem] border-solid border-[#e12d2c] w-[5rem] mt-[1rem]"></div>
          </div>
          <div className="h-[40vh] flex items-center justify-center">
            <Image className="w-[80%]" src={Page2Data.paperBowlImg} alt={""} />
          </div>
          <div className="h-[21vh] flex items-center justify-center">
            <p>{Page2Data.description}</p>
          </div>

          <div className="bg-[#483d73] w-[14.2vw] relative h-[6.5vh] rounded-[2rem] flex items-center">
            <button className="text-white text-[1.4rem] absolute left-5 whitespace-nowrap">
              {Page2Data.viewMore}
            </button>
            <button className="text-white text-[2.6rem] absolute right-[0.1rem]">
              {Page2Data.rightIcon}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page2;
