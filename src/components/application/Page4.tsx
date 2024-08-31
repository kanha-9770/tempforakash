import React from 'react';
import { Page4Data } from '../Constants/application/application_data';

const Page4 = () => {
  return (
    <>
      <div className="w-full h-[205vh] mt-[8rem] px-[2rem] font-poppins">
      <div className="px-[1rem] mb-[18vh]">
          <div>
            <h2 className="text-[2.9rem] font-medium">
              <span className="text-[#c6c5c5]">
                {Page4Data.title
                  .trim()
                  .replace(/\s+\S+$/, "")}
              </span>{" "}
              <span className="text-red-500">
                {Page4Data.title.trim().match(/\S+$/)}
              </span>
            </h2>
          </div>
          <div className="border-t-[0.2rem] border-solid border-[#e12d2c] w-[8rem] mt-[1rem]"></div>
          <div className="w-[76vw] mt-[2rem]">
            <p>{Page4Data.paragraph}</p>
          </div>
        </div>
        <div className='w-full h-full'>

        </div>
      </div>
    </>
  )
}

export default Page4;
