import Image from 'next/image';
import { images } from '../Constants/About/Gallery-page'; // Update the path as needed
import Style from './about.module.css';

const Grid = () => {
  return (
    <div className="relative h-screen bg-black">
      <div className="absolute inset-0 grid grid-cols-10 p-14 -ml-16 overflow-hidden">
        <div className="border border-gray-400 mt-16"></div>
        <div className="border border-gray-400 mt-16 col-span-3"></div>
        <div className="border border-gray-400 mt-16 col-span-3"></div>
        <div className="border border-gray-400 mt-16 col-span-2 -mr-10"></div>
        <div className="border border-gray-400 mt-16 ml-10 lg:-mr-[47%] -mr-[4rem]"></div>
      </div>
      <h1 className='relative lg:text-6xl text-5xl z-30 lg:top-72 top-[23.5rem] lg:ml-20  font-poppins justify-center text-center flex flex-col text-white font-bold'>Gallery</h1>
      <button className="relative z-30 bg-black font-poppins lg:top-72 top-[24rem] text-white px-2 py-2 text-lg rounded-2xl ml-[38%] lg:ml-[49%] mt-2 hover:text-black hover:bg-white">
        View Gallery
      </button>
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute ${img.style} z-20 ${img.style.includes('image-scale-up') ? Style.imageScaleUp : ''} ${img.style.includes('image-translate-up') ? Style.imageTranslateUp : ''}`}
        >
          <Image
            src={img.src}
            alt={img.alt}
            layout="fill"
            objectFit="cover"
            className="duration-100 rounded-2xl"
          />
        </div>
      ))}
    </div>
  );
}

export default Grid;
