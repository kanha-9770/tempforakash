"use client";
import React, { useEffect, useRef } from "react";
import { Page5Data } from "../Constants/applicationOld/applicationOld_data";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page5: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const borderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (borderRef.current) {
      gsap.fromTo(
        borderRef.current,
        { width: "10%" },
        {
          width: "92%",
          ease: "none",
          scrollTrigger: {
            trigger: carouselRef.current,
            start: "-40% 80%",
            end: "80% 85%",
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <>
      <div className="w-full h-full mt-[5rem] mb-[2rem]">
        <div
          ref={borderRef}
          className="border-t-[0.1rem] border-solid border-[#6f6f6f] w-[10%] mx-[3rem]"
        ></div>
        <div className="flex pt-[3rem] pb-[2rem] px-[3.6rem]">
          <h1 className="text-[#a6a6a6] font-poppins text-[3rem] mr-[1rem]">
            {Page5Data.title1}
          </h1>
          <h1 className="text-[#e12d2c] font-poppins text-[3rem]">
            {Page5Data.title2}
          </h1>
        </div>
        <div
          className="w-full h-max flex justify-center items-center px-[4rem]"
          // ref={carouselRef}
        >
          <div className="w-[70%] bg-white mx-[1rem] border-4 border-solid border-[#e8e5e5] h-full rounded-[2rem] flex items-center justify-center py-[0.5rem]">
            <div className="w-[60%] h-[27rem] mr-[0.5rem] overflow-hidden rounded-[1.5rem] ">
              <div className="overflow-auto h-full scrollbar-hide">
                {Page5Data.questions.map((item, idx) => (
                  <div
                    key={idx}
                    className="h-max py-[1rem] border-b-2 border-solid border-[#e8e5e5] flex items-center hover:text-[#e12d2c] hover:font-semibold active:text-[#e12d2c] active:font-semibold text-[#575555]"
                  >
                    <p className="text-[1.2rem] font-poppins w-[75%] mx-[1.5rem] ">
                      {item.title}
                    </p>
                    <p className="text-[2rem] font-poppins  ml-[3rem] mr-[1rem]">
                      {item.questionIcon}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-[40%] h-[27rem] mx-[0.5rem] rounded-[1.5rem] border-2 border-solid border-[#e8e5e5] overflow-hidden">
              <div className="overflow-auto h-full scrollbar-hide">
                {Page5Data.answers.map((item, idx) => (
                  <div key={idx} className="flex justify-center">
                    <p className="my-[2.5rem] w-[16vw] text-[1.2rem] text-center text-[#575555]">
                      {item.ans}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-[30%] mx-[1rem] bg-white h-[28rem] rounded-[1rem] p-[0.5rem]">
            <div className="px-[1rem] py-[0.6rem]">
              <div className="font-poppins mb-[1rem]">
                <div className="flex">
                  <h3 className="text-[1.1rem] font-semibold">
                    {Page5Data.formTitle1}
                  </h3>
                  <h3 className="text-[1.1rem] text-[#483d73] ml-[0.3rem] font-semibold">
                    {Page5Data.formTitle2}
                  </h3>
                </div>
                <p className="text-[#afacac]">{Page5Data.formPara}</p>
              </div>
              <form className="font-poppins">
                <div className="flex">
                  <div className="flex flex-col w-[49%] mr-[0.5rem]">
                    <label htmlFor="firstname">First name</label>
                    <input
                      className=" border-2 py-[0.6rem] px-[0.5rem] text-[0.8rem] rounded-[0.5rem] bg-[#f9fafb]"
                      type="text"
                      name="firstname"
                      id="firstname"
                      placeholder="Tyler"
                    />
                  </div>
                  <div className="flex flex-col w-[49%]">
                    <label htmlFor="lastname">Last name</label>
                    <input
                      className=" border-2 py-[0.6rem] px-[0.5rem] text-[0.8rem] rounded-[0.5rem] bg-[#f9fafb]"
                      type="text"
                      name="lastname"
                      id="lastname"
                      placeholder="Durden"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email">Email Address</label>
                  <input
                    className=" border-2 py-[0.6rem] px-[0.5rem] text-[0.8rem] rounded-[0.5rem] bg-[#f9fafb]"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="projectmayhem@fc.com"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="lastname">Password</label>
                  <input
                    className=" border-2 py-[0.6rem] px-[0.5rem] text-[0.8rem] rounded-[0.5rem] bg-[#f9fafb]"
                    type="password"
                    name="password"
                    id="password"
                    placeholder=""
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="twitterpassword">Your twitter password</label>
                  <input
                    className=" border-2 py-[0.6rem] px-[0.5rem] text-[0.8rem] rounded-[0.5rem] bg-[#f9fafb]"
                    type="password"
                    name="twitterpassword"
                    id="twitterpassword"
                    placeholder=""
                  />
                </div>
                <button className="border-2 py-[0.6rem] px-[0.5rem] text-[0.8rem] rounded-[0.5rem] bg-[#483d73] text-white w-full mt-[1rem]">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page5;
