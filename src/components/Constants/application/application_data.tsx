import { GrSearch } from "react-icons/gr";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import one from "../../../../public/assets/application/1.svg";
import two from "../../../../public/assets/application/2.svg";
import three from "../../../../public/assets/application/3.svg";
import four from "../../../../public/assets/application/4.svg";
import five from "../../../../public/assets/application/5.svg";
import six from "../../../../public/assets/application/6.svg";
import seven from "../../../../public/assets/application/7.svg";
import eight from "../../../../public/assets/application/8.svg";
import PaperBowlImg from "../../../../public/assets/application/PaperBowlImg.png";
import CraftsmanshipImg1 from "../../../../public/assets/application/CraftsmanshipImg1.png";
import CraftsmanshipImg2 from "../../../../public/assets/application/CraftsmanshipImg2.png";
import CraftsmanshipImg3 from "../../../../public/assets/application/CraftsmanshipImg3.png";

export const Page1Data = {
  applicaion: "Application",
  title: "Find the right solution for you",
  paragraph:
    "Nessco can provide a wide range of feasibility and solutions. Our paper cup machine series has world-leading technology to help you make a variety of different paper cup products. These products will enable our customers to be ahead of their peers in terms of their product quality, materials and specifications.",
};

export const Page2Data = {
  searchIcon: <GrSearch />,
  placeholder: "Search Product",
  paperCup: "Paper Cup",
  paperBowl: "Paper Bowl",
  description:
    "Single-layer paper mugs and bowls are commonly used for serving hot and cold beverages or food items in a convenient and eco-friendly manner. They are lightweight yet sturdy, offering a practical solution for takeaway meals or refreshments",
  paperBowlImg: PaperBowlImg,
  viewMore: "View More",
  rightIcon: <IoIosArrowDroprightCircle />,
  products: [
    {
      img: one,
    },
    {
      img: two,
    },
    {
      img: three,
    },
    {
      img: four,
    },
    {
      img: five,
    },
    {
      img: six,
    },
    {
      img: seven,
    },
    {
      img: eight,
    },
    {
      img: one,
    },
    {
      img: two,
    },
    {
      img: three,
    },
    {
      img: four,
    },
    {
      img: five,
    },
    {
      img: six,
    },
    {
      img: seven,
    },
    {
      img: eight,
    },
  ],
};

export const Page3Data = {
  craftsmanshipTechnology: "Craftsmanship and technology",
  paragraph:
    "With world-leading technology and control of craftsmanship details, you can find Ruida's unique advantages:",
  container: [
    {
      number: "1.",
      title: "The machine can be applied to a wide range of sizes.",
      description:
        "One machine on the market can only make paper cups 4-9oz/4-12oz, we can make from 2-16oz/16-22oz/22-32oz, and the maximum mouth of paper bowl can reach 300mm.",
      craftsmanshipImg: CraftsmanshipImg1,
    },
    {
      number: "2.",
      title:
        "The craftsmanship and detail of the finished product is far superior to other manufacturers",
      description:
        "We have detail requirements for the rolled edge, folded bottom or knurling of paper cups. Often the first choice of some big brands or chain brands OEM factories, such as Starbucks, McDonald's, etc.",
      craftsmanshipImg: CraftsmanshipImg2,
    },
    {
      number: "3.",
      title: "Wide range of paper types available on the machine",
      description:
        "Compared to other brand machines which can only produce PE coated paper, our machine issuitable for a wider range of paper materials, such as PLA/non-plastic coated paper etc. inaddition, the paper thickness we can make is also wider.",
      craftsmanshipImg: CraftsmanshipImg3,
    },
  ],
};

export const Page4Data = {
  title: "Start your customized project",
  paragraph:
    "There are many details to consider when designing the finished size, of which market acceptance is the most important. Our team of professional designers will work with you to confirm the specifications and produce a prototype for mould design approval",
  container: [
    {
      title: "1. Paper Roll",
      description:
        "The process begins with the sourcing of large paper rolls, typically made from food-grade paper that has been coated with a thin layer of polyethylene to make it waterproof. These rolls are the raw material that will be transformed into paper cups. ",
      craftsmanshipImg: CraftsmanshipImg1,
    },
    {
      title:
        "2. Printing",
      description:
        "In the printing stage, the paper is fed into a high-speed printing machine that applies custom designs, logos, and other branding elements to the paper. This step is essential for creating branded cups that can be used for promotional purposes in cafes, restaurants, and events.",
      craftsmanshipImg: CraftsmanshipImg2,
    },
    {
      title: "3. Cutting",
      description:
        "After printing, the paper rolls are sent to the cutting machine, where they are precisely cut into flat, fan-shaped pieces known as blanks. These blanks will form the body of the paper cup. Accurate cutting is critical to ensure that the pieces fit together perfectly during the forming stage, avoiding any gaps or misalignment.",
      craftsmanshipImg: CraftsmanshipImg3,
    },
    {
      title: "4. Paper Fan",
      description:
        "The cut blanks are then shaped into a fan-like structure, ready to be formed into the cylindrical body of the cup. This step is important as it begins to give the paper its cup-like shape. The fan-shaped blanks are designed to make it easier to form a tight seam when the edges are joined together in the next stage.",
      craftsmanshipImg: CraftsmanshipImg1,
    },
    {
      title: "5. Forming",
      description:
        "In the forming stage, the fan-shaped blanks are rolled and sealed to form the cylindrical body of the cup, and the bottom piece is attached to complete the structure. Special forming machines apply heat and pressure to ensure that the seams are secure and leak-proof.",
      craftsmanshipImg: CraftsmanshipImg2,
    },
    {
      title: "6. Final Paper Cup Product",
      description:
        "The final product is a fully formed, printed, and durable paper cup, ready for use in various settings. These cups are then inspected for quality, packaged, and shipped to retailers or directly to end-users. ",
      craftsmanshipImg: CraftsmanshipImg3,
    },
  ],
};
