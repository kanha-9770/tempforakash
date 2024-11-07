import React from 'react';
import Image from 'next/image';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css'; // Import CSS for styling
import AboutUs from '../../../public/assets/AboutUs.png';

const CupFormactionProcess = () => {
  return (
    <div className="h-auto ">
      <div className="h-full p-4 flex rounded-xl flex-col bg-white w-full">
        <div className="z-20 text-3xl font-poppins">
          <span className="z-20 text-[#483d73] font-semibold">Machine</span>{' '}
          <span className="text-red-700 font-bold">Drawing</span>
        </div>

        <div className="relative w-full h-full rounded-2xl">
          <Zoom>
            <Image
              className="w-full h-full rounded-2xl"
              height={800}
              width={800}
              src={AboutUs}
              alt="Cup Formation"
              
            />
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default CupFormactionProcess;
