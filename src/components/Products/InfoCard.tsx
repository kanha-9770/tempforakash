// components/InfoCard.tsx

import Image from "next/image";
import { FC } from "react";
import { FaBookDead, FaClock } from "react-icons/fa";
import Bowl from "../../../public/assets/bowl.png";
import watch from "../../../public/assets/product/watch.svg";
import { GiGlassShot } from "react-icons/gi";
import { SlSpeedometer } from "react-icons/sl";

interface InfoCardProps {
  sizeRange: string;
  speedRoundShapes: string;
  maxCups: number;
  bmp100Compact: string;
  bmp100Super: string;
}

const InfoCard: FC<InfoCardProps> = ({
  sizeRange,
  speedRoundShapes,
  maxCups,
  bmp100Compact,
  bmp100Super,
}) => {
  return (
    <div className="w-[80%] text-xs p-2 font-poppins grid grid-cols-2 items-center ">
      <div className="flex flex-col font-poppins items-start justif-start h-20 p-0 border-b-2 border-r-2">
        <div className="flex flex-row justify-center items-center space-x-2 ">
          <div className="flex flex-col gap-2">
            <GiGlassShot className="text-2xl" />
            <SlSpeedometer className="text-2xl" />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-black  text-xs font-poppins">
              Size range: {sizeRange}
            </p>
            <p className="text-black text-xs font-poppins">
              Speed round shapes: {speedRoundShapes}
            </p>
          </div>
        </div>
      </div>
      <div className="flex border-b-2 h-20 px-4 flex-row gap-2 items-center">
        <div className="flex items-center justify-center">
          <Image
            src={watch}
            alt="Icon 1"
            width={200}
            height={200}
            className="w-10 h-10"
          />{" "}
        </div>
        <div className="text-4xl font-bold text-gray-500">{maxCups}</div>
      </div>
      <div className="flex justify-center  -mt-4 items-center border-r-2 ">
        <div className="grid grid-cols-2  pt-6 gap-2">
          <div>
            <Image
              src="https://i.pinimg.com/236x/07/47/f0/0747f0e6e43dd8a115015727c50a3807.jpg"
              alt="Icon 1"
              width={100}
              height={100}
              className="w-16  h-16"
            />
          </div>
          <div>
            <Image
              src="https://i.pinimg.com/236x/07/47/f0/0747f0e6e43dd8a115015727c50a3807.jpg"
              alt="Icon 2"
              width={100}
              height={100}
              className="w-16 h-16"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-2 ">
        <div>up to 160 cups per minute ({bmp100Super})</div>
      </div>
    </div>
  );
};

export default InfoCard;
