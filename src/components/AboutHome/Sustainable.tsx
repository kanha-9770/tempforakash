import Image from 'next/image';
import { FC } from 'react';
import { sustainableData } from '../Constants/About/sustainable-homepage'; // Adjust the import path as needed

const SustainableLayout: FC = () => {
  const data = sustainableData[0]; // Assuming there's only one item in the array

  return (
    <div className="relative max-w-screen-xl mx-auto bg-white h-screen">
      <h1 className="text-5xl font-bold p-5 font-montserrat text-[#33246e] absolute left-4">Sustainability</h1>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between h-screen  ">
        {/* Left Side: Image */}
        <div className="w-full lg:w-1/2 p-4 h-[31rem] ml-10">
          <Image 
            src={data.imageSrc} 
            alt={data.imageAlt} 
            width={data.imageWidth} 
            height={data.imageHeight} 
            className="w-full h-[29rem] rounded-xl"
          />
          <div className="relative bottom-[20rem] left-[31rem] rounded-full h-[11rem] w-[11rem]">
            <Image 
              src="/assets/about/earth2.svg" 
              alt="Additional Info" 
              width={300} 
              height={300} 
              className='object-cover w-[30rem] h-[30rem] -mt-52 ml-8'
            />
            <div className="inset-0 -mt-52 ml-14 flex items-center justify-center text-black font-bold text-3xl">
              Read<br/> More
            </div>
          </div>
        </div>

        {/* Right Side: Content */} 
        <div className="w-full lg:w-5/12 p-4 mr-14">
          <p className="mb-6 w-[27rem] text-center ml-14">
            {data.paragraph}
          </p>

          {/* Small Images Row */}
          <div className="flex space-x-8 ml-24">
            {data.smallImages.map((img, index) => (
              <div key={index} className="w-16 h-16 rounded-full bg-gradient-to-b from-[#171033] to-[#300675] flex items-center justify-center">
                <Image 
                  src={img.src} 
                  alt={img.alt} 
                  width={img.width} 
                  height={img.height} 
                  className="object-cover w-full h-full" 
                  style={img.style}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainableLayout;
