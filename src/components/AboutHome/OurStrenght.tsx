import Image from 'next/image';
import { FC } from 'react';
import { strengthsContent } from '../Constants/About/OurStrenght'; // Adjust path as needed
import styles from './featureproject.module.css';

const lineClasses = [
  styles["line-style-0"], // Class for the first line
  styles["line-style-1"], // Class for the second line
  styles["line-style-2"], // Class for the third line
  // Add more classes if needed
];

const OurStrength: FC = () => {
  const { paragraphs, images, icons } = strengthsContent;

  return (
    <div className="relative w-full  bg-white min-h-screen">
      <div className="relative max-w-screen-xl mx-auto ">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-bold text-[#3a2a79] top-5 absolute ml-8">
          Our Strength
        </h1>

        {/* Container for Paragraphs and Images */}
        <div className="flex flex-col  md:space-y-0 md:flex-row md:space-x-8 items-center justify-between relative top-28">
          {paragraphs.map((paragraph, index) => (
            <div key={index} className="relative flex flex-col items-center text-center">
              {/* Line between Paragraph and Image */}
              {index < paragraphs.length - 1 && (
                <div
                  className={`absolute top-0 left-[105%] transform -translate-x-1/2 h-[17.3rem] border-r-2 border-[#000088] ${lineClasses[index]}`}
                />
              )}

              {/* Paragraph */}
              <p className={`${styles[`customParagraphStyle${index}`]} text-lg`}>
                <span className="text-[#3a2a79] font-bold">{paragraph.title}:</span> {paragraph.content}
              </p>

              {/* Icon */}
              <div className="mt-4">
                <Image src={icons[index]} alt={`Icon ${index + 1}`} width={70} height={70} className='opacity-50' />
              </div>

              {/* Image */}
              <div className="mt-4 transform transition-transform duration-300 hover:scale-105 p-1">
                <Image src={images[index].src} alt={images[index].alt} width={300} height={200} className="object-cover rounded-2xl" />
              </div>
            </div>
          ))}
        </div>

        {/* Horizontal Line */}
        <div className="-mt-20 w-full border-t-2 border-[#000088]" />

        {/* Read More Section */}
        <div className="mt-52 p-6 bg-[#1e1542] text-white text-center font-poppins text-2xl md:text-4xl font-bold">
          <h1>Read More</h1>
        </div>
      </div>
    </div>
  );
};

export default OurStrength;
