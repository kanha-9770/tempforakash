import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa6";
import one from "../../../../public/assets/ApplicationOld/1.svg";
import two from "../../../../public/assets/ApplicationOld/2.svg";
import three from "../../../../public/assets/ApplicationOld/3.svg";
import four from "../../../../public/assets/ApplicationOld/4.svg";
import five from "../../../../public/assets/ApplicationOld/5.svg";
import six from "../../../../public/assets/ApplicationOld/6.svg";
import seven from "../../../../public/assets/ApplicationOld/7.svg";
import eight from "../../../../public/assets/ApplicationOld/8.svg";
import PaperCup from "../../../../public/assets/ApplicationOld/PaperCup.svg";
import PaperCup1 from "../../../../public/assets/ApplicationOld/PaperCup1.png";
import PaperCup2 from "../../../../public/assets/ApplicationOld/PaperCup2.png";
import PaperCup3 from "../../../../public/assets/ApplicationOld/PaperCup3.png";
import MachineImg1 from "../../../../public/assets/ApplicationOld/MachineImg1.png";
import MachineImg2 from "../../../../public/assets/ApplicationOld/MachineImg2.png";

export const Page1Data = {
  leftIcon: <IoIosArrowBack />,
  rightIcon: <IoIosArrowForward />,
  icons: [
    {
      image: one,
      title: "Paper Cup with Lid",
    },
    {
      image: two,
      title: "Paper Cup",
    },
    {
      image: three,
      title: "Paper Bowl",
    },
    {
      image: four,
      title: "Paper Bucket",
    },
    {
      image: five,
      title: "Paper Cup with Handle",
    },
    {
      image: six,
      title: "Paper Straw",
    },
    {
      image: seven,
      title: "Paper Lunch Box",
    },
    {
      image: eight,
      title: "Paper Roll",
    },
    {
      image: five,
      title: "Paper Cup with Handle",
    },
    {
      image: six,
      title: "Paper Straw",
    },
    {
      image: seven,
      title: "Paper Lunch Box",
    },
    {
      image: eight,
      title: "Paper Roll",
    },
  ],
};

export const Page2Data = {
  title1: "Paper",
  title2: "Cup",
  description:
    "Paper cups have a wide range of applications due to their convenience, disposability, and environmental benefits compared to plastic alternatives. They are commonly used in the food and beverage industry for serving hot and cold drinks in cafes, restaurants, and takeaways. Additionally, paper cups are frequently utilized in events and gatherings for serving beverages, ensuring hygiene and ease of clean-up. They are also popular in offices, vending machines, and educational institutions where quick and easy access to disposable cups is needed. Their versatility and recyclability make them an increasingly preferred choice in various settings. Paper cups have a wide range of applications due to their convenience, disposability, and environmental benefits compared to plastic alternatives. They are commonly used in the food and beverage industry for serving hot and cold drinks in cafes, restaurants, and takeaways. Additionally, paper cups are frequently utilized in events and gatherings for serving beverages, ensuring hygiene and ease of clean-up. They are also popular in offices, vending machines, and educational institutions where quick and easy access to disposable cups is needed. Their versatility and recyclability make them an increasingly preferred choice in various settings.",
  image: PaperCup,
  button: "Read More",
};

export const Page3Data = {
  title1: "Finished",
  title2: "Products",
  img1: PaperCup1,
  img2: PaperCup2,
  img3: PaperCup3,
  leftIcon: <IoIosArrowBack />,
  rightIcon: <IoIosArrowForward />,
};

export const Page4Data = {
  title1: "Related",
  title2: "Machines",
  img1: MachineImg1,
  img2: MachineImg2,
  description1: "Servo High speed Paper cup Machine",
  description2: "Servo High speed Paper cup Machine",
  rightIcon: <FaLongArrowAltRight />,
  iconDescription: "View All",
};

export const Page5Data = {
  title1: "Frequently Asked",
  title2: "Questions",
  questions: [
    {
      title: "Is it possible to use renewable paperIs it possible to use renewable paperIs it possible to use renewable paper",
      questionIcon: <FaQuestion />,
    },
    {
      title: "Can the surface be printed and embossed?",
      questionIcon: <FaQuestion />,
    },
    {
      title: "What is the main paper material for the cup",
      questionIcon: <FaQuestion />,
    },
  ],
  answers: [
    {
      ans: "No need to customize to have a large inventory; you need to open the mold if you customize, no need to open the mold for 1-2 weeks!",
    },
  ],
  formTitle1: "Welcome to",
  formTitle2: "Nessco",
  formPara: "Login to aceternity if you canbecause we don't have a login flow yet",
};
