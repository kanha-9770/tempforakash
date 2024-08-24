// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import { FaCirclePlus } from "react-icons/gr";
// import Carousel from "./Common/Carousel";
// import { newscardcontent } from "../Constants/index";
// import Modal from "../ui/Modal";

// const NewsFeature: React.FC = () => {
// const [openModalIndex, setOpenModalIndex] = useState<number | null>(null);

// const handleOpenModal = (index: number) => {
//   setOpenModalIndex(index);
// };

// const handleCloseModal = () => {
//   setOpenModalIndex(null);
// };

//   return (
//     <div className="h-screen bg-black p-6 mt-40 w-full max-w-screen-2xl">
//       <div className="text-center mt-10">
//         <h1 className="text-3xl font-montserrat">
//           <span className="text-[#483d73]">Featured</span>{" "}
//           <span className="text-red-600">News</span>
//         </h1>
//       </div>
//       <div className="flex mt-10 h-full">
//         <div className="relative w-1/3 flex flex-col h-auto group">
//           <Image
//             src={newscardcontent[0].image.src}
//             alt={newscardcontent[0].title}
//             height={200}
//             width={400}
//             className="w-full h-auto rounded-3xl"
//           />
//           <div
//             className="absolute top-2 right-2 z-50 p-2 rounded-full cursor-pointer"
//             onClick={() => handleOpenModal(0)}
//           >
//             <FaCirclePlus size={30} className="text-white" />
//           </div>
//           <h2 className="absolute bottom-28 w-full transition-transform transform group-hover:-translate-y-5 duration-300 text-2xl text-white font-bold text-center py-2">
//             {newscardcontent[0].title}
//           </h2>
//         </div>
//         <div className="w-2/3 flex flex-col">
//           <div className="flex mb-4 ml-6">
//             {newscardcontent.slice(1).map((content, index) => (
//               <div
//                 key={index + 1}
//                 className={`relative ${index === 0 ? "w-1/2 h-full" : "w-1/2 bg-red-600 h-full ml-6"}`}
//               >
//                 <div className="relative group h-full">
//                   <Image
//                     src={content.image.src}
//                     alt={content.title}
//                     height={100}
//                     width={100}
//                     className="w-full h-full rounded-3xl"
//                   />
//                   <div
//                     className="absolute top-0 right-0 m-2"
//                     onClick={() => handleOpenModal(index + 1)}
//                   >
//                     <FaCirclePlus className="text-white text-3xl" />
//                   </div>
//                   <h2 className="absolute bottom-24 left-5 text-xl font-bold text-white transition-transform transform group-hover:-translate-y-5 duration-300">
//                     {content.title}
//                   </h2>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="relative">
//             <div className="p-4">
//               <Carousel />
//             </div>
//           </div>
//         </div>
//       </div>
// {openModalIndex !== null && (
//   <Modal
//     image={newscardcontent[openModalIndex].image}
//     title={newscardcontent[openModalIndex].title}
//     firstname="First"
//     secondname="Last"
//     description="This is a description."
//     items={[]}
//     onClose={handleCloseModal}
//   />
// )}
//     </div>
//   );
// };

// export default NewsFeature;
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaCirclePlus } from "react-icons/fa6";
import { newscardcontent } from "../Constants";
import Modal from "../ui/Modal";
import FeatureCaraousel from "./Common/FeatureCaraousel";
import { FeatureSlider } from "./Common/FeatureSlider";

const NewsFeature: React.FC = () => {
  const [openModalIndex, setOpenModalIndex] = useState<number | null>(null);

  const handleOpenModal = (index: number) => {
    setOpenModalIndex(index);
  };

  const handleCloseModal = () => {
    setOpenModalIndex(null);
  };

  return (
    <div className="p-4 px-8 h-screen relative">
      <div className="text-center">
        <h1 className="text-3xl font-montserrat">
          <span className="text-[#483d73]">Featured</span>
          <span className="text-red-600"> News</span>
        </h1>
      </div>
      <div className="flex gap-2 mt-4 h-full">
        <div className="relative w-[36%] ml-2">
          <div className="relative group h-[83vh]">
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
            <div className="absolute bottom-0 left-0 w-full p-5">
              <h2 className="text-2xl font-montserrat text-white font-bold -mb-20 transition-transform transform group-hover:-translate-y-20 duration-300">
                {newscardcontent[0].title}
              </h2>
              <p className="mt-2 text-base text-white opacity-0 transition-opacity group-hover:opacity-100 group-hover:translate-y-[-10px] duration-300">
                {newscardcontent[0].description}
              </p>
            </div>
          </div>
        </div>
        <div className="w-[64%]  flex flex-col">
          <div className="flex ml-6 gap-2 h-[62%] space-x-6">
            {newscardcontent.slice(1, 3).map((content, index) => (
              <div key={index + 1} className="relative flex-1">
                <div className="relative group h-full">
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
                  <div className="absolute bottom-0 left-0 w-full p-5">
                    <h2 className="text-2xl font-bold text-white -mb-20 transition-transform transform group-hover:-translate-y-20 duration-300">
                      {content.title}
                    </h2>
                    <p className="mt-2 text-white text-base opacity-0 transition-opacity group-hover:opacity-100 group-hover:translate-y-[-10px] duration-300">
                      {content.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex-grow  pt-2 flex">
            <div className="w-full ml-6">
              <FeatureSlider/>
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
