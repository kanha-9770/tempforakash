
import projects from "../../../../public/assets/about/9.svg"
import sustain from "../../../../public/assets/about/10.svg";
import award from "../../../../public/assets/about/11.svg";
import centreimg from "../../../../public/assets/about/centreimg.svg";
import LeftBorderImg from "../../../../public/assets/about/LeftBorderImg.svg";
import RightBorderImg from "../../../../public/assets/about/RightBorderImg.svg";



export const Page1Data = {
  video: "/assets/about/homevideo.mp4",
  title: "About Us",
  getaQuote: "Get a Quote",
  mainImg: centreimg,
  leftBorderImg: LeftBorderImg,
  rightBorderImg: RightBorderImg,
  description:
    '"Our mission is to provide innovative, high-quality paper cup machines that enable efficient, eco-friendly production. We envision leading the industry in sustainable manufacturing, setting the standard for environmentally responsible packaging solutions."',
  image: [
    {
      img: projects,
      title: "Projects",
    },
    {
      img: sustain,
      title: "Sustainability",
    },
    {
      img: award,
      title: "Awards",
    },
  ],
};