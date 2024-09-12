// components/InfoCard.tsx

import Image from "next/image";
import { FC } from "react";
import { FaBookDead, FaClock } from "react-icons/fa";
import Bowl from "../../../public/assets/bowl.png";
import { FaBowlFood } from "react-icons/fa6";
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
    <div className="w-[80%] text-xs font-poppins grid grid-cols-2 items-center  p-4 ">
      <div className="flex flex-col font-poppins items-start justify-center h-24 p-2 border-b-2 border-r-2">
        <div className="flex items-center space-x-2 ">
          <FaBowlFood className="text-2xl"/>
          <span className="text-black font-poppins">Size range: {sizeRange}</span>
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <FaClock className="text-3xl" />
          <span className="text-black font-poppins">Speed round shapes: {speedRoundShapes}</span>
        </div>
      </div>
      <div className="flex border-b-2 h-24 flex-row items-center">
        <div className="flex items-start justify-start">
          <Image
            src={Bowl}
            alt="Icon 1"
            width={200}
            height={200}
            className="w-28 h-28"
          />{" "}
        </div>
        <div className="text-4xl font-black text-gray-800">{maxCups}</div>
      </div>
      <div className="flex -mt-4 items-center border-r-2 ">
        <div className="grid grid-cols-2 pt-8 gap-2">
          <div>
            <Image
              src="https://i.pinimg.com/236x/07/47/f0/0747f0e6e43dd8a115015727c50a3807.jpg"
              alt="Icon 1"
              width={100}
              height={100}
              className="w-28  h-20"
            />
          </div>
          <div>
            <Image
              src="https://i.pinimg.com/236x/07/47/f0/0747f0e6e43dd8a115015727c50a3807.jpg"
              alt="Icon 2"
              width={100}
              height={100}
              className="w-28 h-20"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-2 ">
        <div>
          up to {maxCups} cups per minute ({bmp100Compact})
        </div>
        <div>up to 160 cups per minute ({bmp100Super})</div>
      </div>
    </div>
  );
};

export default InfoCard;
