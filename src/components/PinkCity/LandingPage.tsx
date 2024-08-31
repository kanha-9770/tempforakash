
// import Image from 'next/image';
// import { landingPageContent } from '../Constants/pinkcity/LandingPage'

// const LandingPage = () => {
//   return (
//     <div className="bg-gray-100 flex flex-col items-center h-screen p-6">
//       <div className="relative w-full  p-6 top-12 h-[68vh]">
//         <Image
//           src={landingPageContent.backgroundImg}
//           alt="Jaipur"
//           layout="fill"
//           objectFit="cover"
//           className="rounded-2xl"
//         />
//       </div>
//       <div className="w-full max-w-screen-xl flex flex-col items-center relative">
//         <div className="flex justify-left bottom-0 absolute left-0 -ml-20 -mb-7">
//           <Image 
//             src={landingPageContent.cornerLayerImg}
//             alt="Stroke"
//             width={300}
//             height={300}
//           />
//         </div>
//         <div className="flex w-full items-center ml-5">
//           <div className="flex-1 text-center ml-5 mt-16">
//             <p className="text-black text-sm font-montserrat">
//               {landingPageContent.description}
//             </p>
//           </div>
//           <div className="flex-shrink-0 z-10 -mt-24">
//             <div className="text-white">
//               <Image
//                 src={landingPageContent.stickerImg}
//                 alt="The Pink City"
//                 width={420}
//                 height={180}
//               />
//             </div>
//           </div>
//           <div className="flex-1 text-center mt-9">
//             <h2 className="text-5xl font-poppins">
//               {landingPageContent.title} <span className="font-alexBrush text-8xl text-red-800">{landingPageContent.subtitle}</span>
//             </h2>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;


import Image from 'next/image';
import { landingPageContent } from '../Constants/pinkcity/LandingPage'

const LandingPage = () => {
  return (
    <div className="bg-gray-100 flex flex-col  p-4  min-h-screen lg:p-6 lg:h-screen ">
      {/* Background Image Container */}
      <div className="relative w-full lg:h-[70vh] h-[65vh] lg:mt-10 mt-16 lg:left-0  ">
        <Image
          src={landingPageContent.backgroundImg}
          alt="Jaipur"
          layout="fill"
          objectFit="cover"
          objectPosition="right center"
          className="rounded-lg lg:rounded-2xl"
        />
        {/* Gradient Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-[30rem] bg-gradient-to-t from-black to-transparent rounded-b-lg lg:invisible"></div>
      </div>

      {/* Title */}
      <h2 className=" lg:relative lg:-top-10 lg:left-12 left-16 font-alexBrush text-white text-8xl lg:text-9xl absolute top-80 lg:-mt-52">
        Jaipur
      </h2>

      {/* Content Section */}
      <div className="w-full lg:max-w-screen-xl flex flex-col items-center mt-20 lg:mt-7 relative">
        {/* Corner Image */}
        <div className="absolute lg:left-0 lg:bottom-0 lg:visible invisible -ml-56 lg:-ml-20 lg:-mb-7 lg:mt-0 -mt-20">
          <Image
            src={landingPageContent.cornerLayerImg}
            alt="Stroke"
            width={300}
            height={300}
          />
        </div>

        {/* Description and Sticker Section */}
        <div className="flex flex-col lg:flex-row items-center w-full lg:w-full">
          {/* Description */}
          <div className="flex-1 text-center lg:ml-5 lg:mt-9 absolute -top-56 lg:relative lg:top-0">
            <p className="text-white lg:text-black font-montserrat lg:text-sm text-sm lg:w-[30vw] w-[80vw] ">
              {landingPageContent.description}
            </p>
          </div>

          {/* Sticker Image */}
          <div className="absolute lg:relative bottom-28 flex-shrink-0 lg:-mt-24 lg:top-0  lg:mr-72">
            <div className="lg:w-full lg:h-full h-[30vh] w-[30vw]  lg:ml-0 lg:mt-0">
              <Image
                src={landingPageContent.stickerImg}
                alt="The Pink City"
                width={420}
                height={180}
              />
            </div>
          </div>

          {/* Title & Subtitle */}
          <div className="flex flex-col text-center lg:-mt-24 mt-44  lg:w-[10vw] lg:h-0 h-10  ">
            <h2 className="font-poppins text-xl lg:text-5xl lg:mt-0 -mt-64 lg:w-[30vw] lg:-ml-[18rem]  -ml-1">
              {landingPageContent.title}{' '}
              <span className="font-alexBrush text-red-800 text-3xl lg:text-8xl lg:ml-0 ml-28">
                {landingPageContent.subtitle}
              </span>
            </h2>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LandingPage;
























