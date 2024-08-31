import React from "react";
import Image from "next/image";
import { Page3Data } from "../Constants/application/application_data";

const Page3 = () => {
  return (
    <>
      <div className="w-full h-[205vh] mt-[8rem] px-[2rem] font-poppins">
        <div className="px-[1rem] mb-[18vh]">
          <div>
            <h2 className="text-[2.9rem] font-medium">
              <span className="text-[#c6c5c5]">
                {Page3Data.craftsmanshipTechnology
                  .trim()
                  .replace(/\s+\S+$/, "")}
              </span>{" "}
              <span className="text-red-500">
                {Page3Data.craftsmanshipTechnology.trim().match(/\S+$/)}
              </span>
            </h2>
          </div>
          <div className="border-t-[0.2rem] border-solid border-[#e12d2c] w-[8rem] mt-[1rem]"></div>
          <div className="w-[54vw] mt-[2rem]">
            <p>{Page3Data.paragraph}</p>
          </div>
        </div>
        {Page3Data.container.map((item, idx) => (
          <div key={idx} className="w-full h-[45vh] mt-[8vh] flex">
            <div className="w-[70%] h-full bg-white mr-[0.5rem] rounded-[1rem] p-[0.5rem]">
              <div className="flex">
                <div>
                  <h2 className="bg-[#483d73] w-[2.5rem] h-[2.5rem] rounded-[0.5rem] mr-[1rem] text-white flex items-center justify-center text-[1.5rem]">
                    {item.number}
                  </h2>
                </div>
                <h2 className="text-[#483d73] font-semibold text-[1.8rem]">
                  {item.title}
                </h2>
              </div>
              <div className="h-[35vh] w-full flex items-center justify-center">
                <p className="text-[1.2rem] w-[83.5%]">{item.description}</p>
              </div>
            </div>
            <div className="w-[30%] h-full rounded-[1rem] overflow-hidden">
              <Image
                className="h-[45vh]"
                src={item.craftsmanshipImg}
                alt={""}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Page3;
