// components/Gallery.tsx

import Image from 'next/image';
import { galleryfour } from '../Constants/About/pinkcity-homepage';
const PinkCity = () => {
  return (
    <div className="relative mx-auto max-h-screen bg-white w-screen">
      <h1 className="text-5xl font-bold text-left relative top-5 font-montserrat text-[#312465] ml-10">The Pink City</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-6 mb-5 p-5 mr-2 mt-5">
        {galleryfour.galleryImages.map((item, index) => (
          <div key={index} className="relative" style={{ height: '58vh', width: 'calc(100vw / 4 - 1.25rem)' }}>
            <div className="group relative h-full w-full overflow-hidden rounded-2xl">
              <Image 
                src={item.src} 
                alt={`Gallery image ${index + 1}`} 
                layout="fill" 
                objectFit="cover" 
                className="rounded-2xl"
              />
              <div className="absolute inset-0 bg-black transition-transform duration-300 transform translate-y-full group-hover:translate-y-0 group-hover:bg-gradient-to-t from-black to-transparent bg-opacity-0"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-transform duration-300 transform translate-y-full group-hover:translate-y-0">
                <Image 
                  src="/assets/about/flower.svg" 
                  alt="Overlay Icon" 
                  width={100} 
                  height={50} 
                  className="w-[16rem] h[5rem] -mt-28"
                />
                <p className="text-white -mt-20 text-sm font-bold w-[15rem] text-center">{item.paragraph}</p>
                <Image 
                  src="/assets/about/bottomlayer.svg" 
                  alt="Overlay Icon" 
                  width={100} 
                  height={50} 
                  className="w-[16rem] h[5rem] -mt-36"
                />
                <p className='text-white font-montserrat underline decoration-white -mt-16'>Read More</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center mt-12 relative">
  <div className="relative p-3 text-[#312465] text-center font-poppins text-4xl font-bold">
    <p>Read More</p>
  </div>
  <div className="relative">
    <Image 
      src="/assets/about/layers.svg" 
      alt="Overlay Icon" 
      width={100} 
      height={50} 
      className="relative w-[16rem] h-auto z-10 -mt-44"
    />
  </div>
</div>

    </div>
  );
};

export default PinkCity;
