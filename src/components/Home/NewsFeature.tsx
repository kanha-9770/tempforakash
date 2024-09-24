
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaCirclePlus } from "react-icons/fa6";
import { newscardcontent } from "../Constants";
import Modal from "../ui/Modal";
import { FeatureSlider } from "./Common/FeatureSlider";
import Link from "next/link";

const NewsFeature: React.FC = () => {
  const [openModalIndex, setOpenModalIndex] = useState<number | null>(null);

  const handleOpenModal = (index: number) => {
    setOpenModalIndex(index);
  };

  const handleCloseModal = () => {
    setOpenModalIndex(null);
  };

  return (
    <div className="lg:p-4 px-2 lg:px-12 pb-24 lg:pb-32 w-full h-full">
      <div className="text-center">
        <h1 className="text-3xl font-regular font-poppins">
          <span className="text-[#483d73]">Featured</span>
          <span className="text-red-600 font-semibold"> News</span>
        </h1>
      </div>
      <div className="flex h-[80vh] lg:full flex-col lg:flex-row gap-2 mt-12">
        <div className="relative w-full lg:w-[35%] ">
          <div className="relative group h-48 lg:h-full">
            <Image
              src={newscardcontent[0].image.src}
              alt={newscardcontent[0].title}
              layout="fill"
              objectFit="cover"
              className="w-full h-full rounded-3xl"
            />
            <div
              className="absolute top-0 right-0 m-2 cursor-pointer z-20"
              onClick={() => handleOpenModal(0)}
            >
              <FaCirclePlus className="rounded-full text-3xl bg-black text-white icon-invert" />
            </div>
            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent rounded-b-3xl"></div>
            <div className="absolute bottom-2 left-0 w-full p-5">
              <h2 className="absolute text-base lg:text-2xl bottom-0 font-poppins text-white font-medium transition-transform transform  group-hover:-translate-y-36 duration-300">
                {newscardcontent[0].title}
              </h2>
              <p className="mt-2 text-base text-white opacity-0 transition-opacity group-hover:opacity-100 font-regular group-hover:translate-y-[-10px] duration-300">
                {newscardcontent[0].description}
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-[62%] h-full lg:h-full w-full  flex flex-col">
          <div className="flex lg:ml-6 gap-2 w-full h-full lg:h-[70%] lg:space-x-6">
            {newscardcontent.slice(1, 3).map((content, index) => (
              <div key={index + 1} className="relative flex-1">
                <div className="relative group h-full lg:h-full">
                  <Image
                    src={content.image.src}
                    alt={content.title}
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full rounded-3xl"
                  />
                  <div
                    className="absolute top-0 right-0 m-2 cursor-pointer z-20"
                    onClick={() => handleOpenModal(index + 1)}
                  >
                    <FaCirclePlus className="rounded-full bg-black text-3xl text-white icon-invert" />
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent rounded-b-3xl"></div>
                  <div className="absolute bottom-1 left-0 w-full p-2 lg:p-5">
                    <h2 className="absolute bottom-1 text-sm lg:text-2xl font-medium text-white  transition-transform slg:text-justify transform lg:group-hover:-translate-y-36 group-hover:-translate-y-24 duration-300">
                      {content.title}
                    </h2>
                    <p className="mt-2 text-white hidden lg:flex text-base font-regular opacity-0 transition-opacity group-hover:opacity-100 group-hover:translate-y-[-10px] duration-300">
                      {content.description}
                    </p>
                    <p className="mt-2 text-white flex  lg:hidden text-sm opacity-0 transition-opacity group-hover:opacity-100 group-hover:translate-y-[-10px] duration-300">
                      {content.description.slice(0, 60)}
                      <Link
                        className="absolute left-[30%] -mb-4 bottom-0  text-blue-500 hover:underline"
                        href="/next-page"
                      >
                        ...more
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex-grow pt-2 lg:flex">
            <div className="w-full ml-2 lg:ml-6">
              <FeatureSlider />
            </div>
          </div>
        </div>
      </div>
      {openModalIndex !== null && (
        <Modal
          image={newscardcontent[openModalIndex].image}
          title={newscardcontent[openModalIndex].title}
          firstname="First"
          secondname="Last"
          description="This is a description."
          items={[]}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default NewsFeature;
