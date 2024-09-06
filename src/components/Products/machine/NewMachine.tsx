"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import "./machine.css";
import { MdOutlineFileDownload } from "react-icons/md";
import BreadcrumbProduct from "@/components/ui/BreadCrumbProduct";
import { SignupFormDemo } from "@/components/Contact/SignupFormDemo";
import InfoCard from "@/components/Products/InfoCard";
import { NewSignupFormDemo } from "@/components/Contact/ProductContact";
import ResourceGrid from "@/components/Layout/ResourceLayout";
import {
  DataBankItem,
  ResourcesMobile,
} from "@/components/Constants/Navbar/resources-data";
import MachineGrid from "./GridCarousel";

interface MachineProps {
  product_heading: string;
  name: string;
  first_name: string;
  second_name: string;
  application: string;
  mimage: StaticImageData;
  description: string;
}

const NewMachine: React.FC<MachineProps> = ({
  product_heading,
  description,
  name,
  application,
  mimage,
  first_name,
  second_name,
}) => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: name, current: true },
  ];
  return (
    <div className="h-screen mt-20 px-6">
      <div className=" flex flex-row">
        <div className="font-poppins  bg-white rounded-xl shadow-lg  w-[70%]">
          <div className="p-2 pl-4">
            <BreadcrumbProduct items={breadcrumbItems} />
          </div>
          <div className="flex h-[75vh]  w-full">
            <div className="w-full h-full flex justify-center relative">
              <div className="w-full h-full flex flex-col justify-center items-ceneter relative">
                <div className="h-2/3 p-4 flex justify-center items-center">
                  <Image
                    src={mimage}
                    height={800}
                    width={400}
                    alt="Flexo Printing Machine"
                    className="h-full w-auto"
                  />
                  {/* Small image positioned at the top right corner */}
                  <div className="absolute top-0 right-8 p-2">
                    <Image
                      src={mimage}
                      height={60}
                      width={60}
                      alt="Small Image"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="h-1/3 grid grid-rows-1 gap-2 grid-cols-4">
                  <MachineGrid supporItem={DataBankItem} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="z-30 w-[30%]">
          <NewSignupFormDemo />
        </div>
      </div>
    </div>
  );
};

export default NewMachine;
