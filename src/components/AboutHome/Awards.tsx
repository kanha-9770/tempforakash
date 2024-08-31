// import React from "react";
// import { FC } from "react";
// import Image from "next/image";

// const Awards: FC = () => {
//   return (
//     <div className="relative max-h-screen w-full  bg-white mx-auto ">
//       <h1 className="text-5xl font-bold p-5 font-montserrat text-[#33246e] ml-10 -mt-12">
//         Awards
//       </h1>
//       <div className=" ml-16 mt-10 ">
//         <p className="text-lg -mt-5 text-black font-montserrat">
//           Recognition affirms our purpose, and shows us we’re on the right
//           track. <br />
//           Look through the awards we’ve accumulated, and the certifications that
//           mark the checkpoints ensuring our progress.
//         </p>
//       </div>

//       <div className=" flex text-white  bg-red-400 ">
//         <div className="flex flex-col items-center z-20 text-white ml-14 transform transition-transform duration-300 hover:scale-110 bg-yellow-500">
//           <div
//             className=" flex items-center justify-center font-bold  -mt-[2vh]
//           "
//           >
//             <Image
//               src="/assets/about/award/icon6.svg" // Replace with the path to your image
//               alt="Icon"
//               width={500} // Adjust the width according to your design
//               height={500} // Adjust the height according to your design
//               className="object-cover "
//               style={{ height: "18vh", width: "18vw" }}
//             />
//           </div>
//           <p className="w-[6vw] text-center mt-7 font-bold">
//             ISO 9001 Certified
//           </p>
//         </div>

//         <div className="flex flex-col items-center mt-32 transform transition-transform duration-300 hover:scale-110 z-20  ml-7">
//           <div className="flex items-center justify-center font-bold  -mt-[8vh] ">
//             <Image
//               src="/assets/about/award/icon5.svg" // Replace with the path to your image
//               alt="Icon"
//               width={450} // Adjust the width according to your design
//               height={450} // Adjust the height according to your design
//               className="object-cover  "
//               style={{ height: "18vh", width: "18vw" }}
//             />
//           </div>
//           <p className="w-[6vw] text-center font-bold">
//             RoHS Certified
//           </p>
//         </div>

//         <div className="flex flex-col items-center mt-32 z-20  ml-14  transform transition-transform duration-300 hover:scale-110">
//           <div className="flex items-center justify-center font-bold  -mt-[12vh]">
//             <Image
//               src="/assets/about/award/icon4.svg" // Replace with the path to your image
//               alt="Icon"
//               width={450} // Adjust the width according to your design
//               height={450} // Adjust the height according to your design
//               className="object-cover"
//               style={{ height: "15vh", width: "20vw" }}
//             />
//           </div>
//           <p className="w-[10vw] text-center font-bold  ">
//             Child Labour Free
//           </p>
//         </div>

//         <div className="flex flex-col items-center mt-32 z-20 ml-10 transform transition-transform duration-300 hover:scale-110">
//           <div className=" text-white flex items-center justify-center font-bold -mt-[7vh] ">
//             <Image
//               src="/assets/about/award/icon1.svg"
//               // Replace with the path to your image
//               alt="Icon"
//               width={450} // Adjust the width according to your design
//               height={450} // Adjust the height according to your design
//               className="object-cover"
//               style={{ height: "15vh", width: "17vw" }}
//             />
//           </div>
//           <p className="w-[7vw] text-center font-bold ">
//             Star Export House{" "}
//           </p>
//         </div>

//         <div className="flex flex-col items-center mt-32 ml-7 transform transition-transform duration-300 hover:scale-110 z-20">
//           <div className=" text-white flex items-center justify-center font-bold -mt-[20vh] ">
//             <Image
//               src="/assets/about/award/icon3.svg" // Replace with the path to your image
//               alt="Icon"
//               width={450}
//               height={450} // Adjust the height according to your design
//               className="object-cover"
//               style={{ height: "17vh", width: "15vw" }}
//             />
//           </div>
//           <p className="w-[6vw] text-center font-bold  ml-5 ">
//             CE Certified
//           </p>
//         </div>

//         <div className="flex flex-col items-center mt-10 z-20  ml-7 transform transition-transform duration-300 hover:scale-110">
//           <div className=" text-white flex items-center justify-center font-bold -mt-[14vh] ">
//             <Image
//               src="/assets/about/award/icon2.svg" // Replace with the path to your image
//               alt="Icon"
//               width={400} // Adjust the width according to your design
//               height={400} // Adjust the height according to your design
//               className=""
//               style={{ height: "18vh", width: "20vw" }}
//             />
//           </div>
//           <p className="w-[5vw] text-center font-bold">Taxpayers Award</p>
//         </div>
//       </div>

//       {/* <div className="absolute bottom-0 w-full  ">
//         <Image
//           src="/assets/about/bluelayer.svg"
//           alt="Machine 3"
//           width={400}
//           height={100}
//           className=" object-cover w-full min-h-full md:h-[46rem] lg:h-[42rem] sm:h-[48rem]"
//         />
//       </div> */}
//       <div className="absolute bottom-0 w-full h-[90vh]">
//   <Image
//     src="/assets/about/bluelayer.svg"
//     alt="Background Layer"
//     layout="fill"
//     objectFit="cover"
//     className="w-full h-full"
//   />
// </div>
//     </div>
//   );
// };

// export default Awards;

import React from "react";
import { FC } from "react";
import Image from "next/image";

const Awards: FC = () => {
  return(
   <div className="relative w-full  bg-white min-h-svh ">
<h1 className="text-5xl font-bold p-5 font-montserrat text-[#33246e] ml-10 -mt-12">
        Awards
     </h1>
     <div className=" ml-16 mt-10 ">
         <p className="text-lg -mt-5 text-black font-montserrat">
           Recognition affirms our purpose, and shows us we’re on the right
           track. <br />
           Look through the awards we’ve accumulated, and the certifications that
           mark the checkpoints ensuring our progress.
         </p>
       </div>


 <div className="flex   mt-20 p-2 ">

  <div className="flex flex-col items-center transform transition-transform duration-300 hover:scale-110 hover:text-red-500 -mt-2 ">
    <div className="flex items-center justify-center font-bold ">
      <Image
        src="/assets/about/award/icon6.svg"
        alt="Icon"
        width={500}
        height={500}
        className="object-cover "
        style={{ height: "20vh", width: "20vw" }}
      />
    </div>
    <p className="w-[10vw]  mt-4 text-center font-bold">
      ISO 9001 Certified
    </p>
  </div>

  <div className="flex flex-col items-center  transform transition-transform duration-300 hover:scale-110 -mt-5 hover:text-red-500 ">
    <div className="text-white flex items-center justify-center font-bold ">
      <Image
        src="/assets/about/award/icon2.svg"
        alt="Icon"
        width={450}
        height={450}
        className="object-cover rounded-md"
        style={{ height: "25vh", width: "20vw" }}
      />
    </div>
    <p className="w-[20vw] md:w-[10vw] lg:w-[5vw] text-center font-bold">
      Taxpayers Award
    </p>
  </div>

  

  <div className="flex flex-col items-center  transform transition-transform duration-300 hover:scale-110 hover:text-red-500 -mt-1">
    <div className="flex items-center justify-center font-bold  ">
      <Image
        src="/assets/about/award/icon4.svg"
        alt="Icon"
        width={450}
        height={450}
        className="object-cover"
        style={{ height: "17vh", width: "20vw" }}
      />
    </div>
    <p className="w-[20vw] md:w-[10vw] lg:w-[8vw] mt-9 text-center font-bold ">
      Child Labour Free
    </p>
  </div>

  <div className="flex flex-col items-center transform transition-transform duration-300 hover:scale-110 hover:text-red-500 -mt-2">
    <div className="text-white flex items-center justify-center font-bold ">
      <Image
        src="/assets/about/award/icon1.svg"
        alt="Icon"
        width={450}
        height={450}
        className="object-cover "
        style={{ height: "19vh", width: "18vw" }}
      />
    </div>
    <p className="w-[20vw] md:w-[10vw] lg:w-[7vw] mt-5 text-center font-bold ">
      Star Export House
    </p>
  </div>


  <div className="flex flex-col items-center  transform transition-transform duration-300 hover:scale-110 -mt-6 hover:text-red-500 ">
    <div className="text-white flex items-center justify-center font-bold  ">
      <Image
        src="/assets/about/award/icon3.svg"
        alt="Icon"
        width={450}
        height={450}
        className="object-cover "
        style={{ height: "19vh", width: "16vw" }}
      />
    </div>
    <p className="w-[5rem]  mt-8 text-center font-bold ">
      CE Certified
    </p>
  </div>

  <div className="flex flex-col items-center  transform transition-transform duration-300 hover:scale-110 hover:text-red-500 -mt-7">
    <div className="flex items-center justify-center font-bold ">
      <Image
        src="/assets/about/award/icon5.svg"
        alt="Icon"
        width={450}
        height={450}
        className="object-cover"
        style={{ height: "18vh", width: "18vw" }}
      />
    </div>
    <p className="w-[20vw] md:w-[10vw] lg:w-[7vw] mt-10 text-center font-bold">
      RoHS Certified
    </p>
  </div>
</div>




  </div>
  )
};
export default Awards;
