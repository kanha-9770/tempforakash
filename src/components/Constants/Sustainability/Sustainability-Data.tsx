import { title } from "process"
import Image from "next/image"
import Trees from "../../../../public/assets/sustainability/Trees.png"
import Butterfly from "../../../../public/assets/sustainability/Butterfly.png"
import Grass from "../../../../public/assets/sustainability/Grass.png"
import LeftFootprint from "../../../../public/assets/sustainability/LeftFootprint.png"
import RightFootprint from "../../../../public/assets/sustainability/RightFootprint.png"
import Cup from "../../../../public/assets/sustainability/Cup.png"
import Leafs from "../../../../public/assets/sustainability/Leafs.png"
import BranchLeaves from "../../../../public/assets/sustainability/BranchLeaves.png";
import Globe from "../../../../public/assets/sustainability/Globe.gif";


export const Page1Data = {
    title: "Sustainability",
    description : "\"Going green is the way we roll\"",
    butterfly : Butterfly,
    grass : Grass,
    trees : Trees,
}

export const Page2Data = {
    title1 : "Reduced",
    title2 : "Carbon Footprint",
    description : "At Nessco India, our machines are designed with advanced energy-efficient technologies that significantly reduce carbon emissions. By integrating eco-friendly materials and innovative engineering, we ensure that our machinery operates with minimal environmental impact. Our commitment to sustainability is reflected in our continuous efforts to optimize performance while conserving energy and resources. This approach not only helps in reducing the carbon footprint but also supports our clients in achieving their own environmental goals, contributing to a greener and more sustainable future.",
    leftFootprint : LeftFootprint,
    rightFootprint : RightFootprint,
    leafs : Leafs,
    cup : Cup,
    bgGarden : "/assets/sustainability/BgGarden.mp4",
}

export const Page3Data = {
    titleWhite: "Sustainable",
    titleBlack: "Manufacturing Practices",
    description:
      "At Nessco India, our commitment to sustainable manufacturing practices is at the core of our operations.We employ cutting-edge technologies and processes that prioritize energy efficiency and waste reduction. By utilizing renewable energy sources and optimizing resource use, we minimize our environmental impact. Our manufacturing units are designed to adhere to the highest environmental standards, ensuring that emissions are kept to a minimum and recycling is maximized. Additionally, we continuously innovateour production methods to further reduce our carbon footprint and promote a circular economy. Thesepractices not only enhance the sustainability of our products but also support our mission to contribute positively to the environment and society.",
    branchLeaves: BranchLeaves,
    globe: Globe,
  };