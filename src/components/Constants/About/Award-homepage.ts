interface Award {
    imageSrc: string;
    imageAlt: string;
    imageWidth: number;
    imageHeight: number;
    text: string;
    imageStyle: React.CSSProperties;
    textClassName: string;
    containerClassName: string;
  }
  
  export const awardsData: Award[] = [
    {
      imageSrc: "/assets/about/award/icon6.svg",
      imageAlt: "ISO 9001 Certified",
      imageWidth: 500,
      imageHeight: 500,
      text: "ISO 9001 Certified",
      imageStyle: { height: "18rem", width: "18rem" },
      textClassName: "w-[5rem] text-center -mt-9 font-bold",
      containerClassName: "flex flex-col items-center z-20 text-white ml-14 transform transition-transform duration-300 hover:scale-110",
    },
    {
      imageSrc: "/assets/about/award/icon5.svg",
      imageAlt: "RoHS Certified",
      imageWidth: 450,
      imageHeight: 450,
      text: "RoHS Certified",
      imageStyle: { height: "18rem", width: "18rem" },
      textClassName: "w-[5rem] text-center font-bold -mt-10",
      containerClassName: "flex flex-col items-center mt-10 transform transition-transform duration-300 hover:scale-110 z-20 ml-7",
    },
    {
      imageSrc: "/assets/about/award/icon4.svg",
      imageAlt: "Child Labour Free",
      imageWidth: 450,
      imageHeight: 450,
      text: "Child Labour Free",
      imageStyle: { height: "15rem", width: "20rem" },
      textClassName: "w-[7rem] text-center font-bold -mt-5",
      containerClassName: "flex flex-col items-center mt-32 z-20 ml-14 transform transition-transform duration-300 hover:scale-110",
    },
    {
      imageSrc: "/assets/about/award/icon1.svg",
      imageAlt: "Star Export House",
      imageWidth: 450,
      imageHeight: 450,
      text: "Star Export House",
      imageStyle: { height: "15rem", width: "17rem" },
      textClassName: "w-[6rem] text-center font-bold -mt-7",
      containerClassName: "flex flex-col items-center mt-32 z-20 ml-10 transform transition-transform duration-300 hover:scale-110",
    },
    {
      imageSrc: "/assets/about/award/icon3.svg",
      imageAlt: "CE Certified",
      imageWidth: 450,
      imageHeight: 450,
      text: "CE Certified",
      imageStyle: { height: "17rem", width: "15rem" },
      textClassName: "w-[5rem] text-center font-bold -mt-10 ml-5",
      containerClassName: "flex flex-col items-center mt-28 ml-7 transform transition-transform duration-300 hover:scale-110 z-20",
    },
    {
      imageSrc: "/assets/about/award/icon2.svg",
      imageAlt: "Taxpayers Award",
      imageWidth: 400,
      imageHeight: 400,
      text: "Taxpayers Award",
      imageStyle: { height: "18rem", width: "20rem" },
      textClassName: "w-[5rem] text-center font-bold -mt-7",
      containerClassName: "flex flex-col items-center z-20 ml-7 transform transition-transform duration-300 hover:scale-110",
    },
  ];
  