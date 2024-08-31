
import { AiOutlineProduct } from "react-icons/ai";
import { LiaToolsSolid } from "react-icons/lia";
import { IoBarChartOutline } from "react-icons/io5";
import {
  papercup,
  paperbowl,
  paperlid,
  paperBowlMachineImage,
  paperBagMachineImage,
  paperPlateMachineImage,
  paperFlexoMachineImage,
  fullyAutomaticBagMachineImage,
  PCM110WithPLC,
  paperStrawMachine,
    paperLunchBoxMachine,
    paperbag1,
} from "../../../public/assets";
import KnowYourMachine from "../../../public/assets/Lottiimages/know_your_machine.json"
import KnowYouProduct from "../../../public/assets/Lottiimages/know_your_product.json"
import KnowYoubusiness from "../../../public/assets/Lottiimages/know_your_business.json"
import { StaticImageData } from "next/image";
import KnowMore from "../../../public/assets/KnowMore1.png";
import KnowMore1 from "../../../public/assets/KnowMore2.png";
import NewsFeatureBanner from "../../../public/assets/NewsFeatureBanner.jpg";
import teamunity from "../../../public/assets/teamunity.avif";
import productbox from "../../../public/assets/productbox.avif";
import factory from "../../../public/assets/factory.avif";
interface Images {
  paperBowlMachineImage: StaticImageData;
  paperBagMachineImage: StaticImageData;
  PCM110WithPLC: StaticImageData;
  paperPlateMachineImage: StaticImageData;
  paperFlexoMachineImage: StaticImageData;
  fullyAutomaticBagMachineImage: StaticImageData;
  paperStrawMachine: StaticImageData;
  paperLunchBoxMachine: StaticImageData;
}

export const images: Images = {
  paperBowlMachineImage: paperBowlMachineImage,
  paperBagMachineImage: paperBagMachineImage,
  PCM110WithPLC: PCM110WithPLC,
  paperPlateMachineImage: paperPlateMachineImage,
  paperFlexoMachineImage: paperFlexoMachineImage,
  fullyAutomaticBagMachineImage: fullyAutomaticBagMachineImage,
  paperStrawMachine: paperStrawMachine,
  paperLunchBoxMachine: paperLunchBoxMachine,
};

export interface Item {
  src: string | StaticImageData;
  alt: string;
  name: string;
  description: string;
  bgpic: StaticImageData;
}

export const item: Item[] = [
  {
    src:"https://i.pinimg.com/236x/89/09/12/890912f6a1ab514810a94ba215e34d61.jpg",
    alt: "Cups",
    name: "Paper Bowl",
    description:
      "Paper cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for bevrages and food indeustry",
    bgpic:papercup,
  },
  {
    src:"https://i.pinimg.com/564x/f6/4a/e0/f64ae07dac3856af2eab7cc4377fe316.jpg",
    alt: "Item 2",
    name: "Paper Cups",
    description:
      "Set up your paper cup plant with our high-speed machines for efficient, eco-friendly production. Enjoy rapid manufacturing with reduced energy consumption and operational costs. ",
    bgpic:papercup,
  },
  {
    src: "https://i.pinimg.com/564x/48/5d/c4/485dc4b8ff2f0cc046124e4ca7ac2353.jpg",
    alt: "Item 3",
    name: "Paper Bag",
    description:
      "Paper cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for bevrages and food indeustry",
    bgpic:papercup,
  },
  {
    src: "https://i.pinimg.com/564x/6e/97/7a/6e977a19857185cfb86e197fd88c7a73.jpg",
    alt: "Item 2",
    name: "Paper Spoon",
    description:
      "Paper cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for be",
    bgpic:paperbowl,
  },
  {
    src: "https://i.pinimg.com/564x/4b/15/60/4b1560c84ec801ebd70b01ac50e2a8b0.jpg",
    alt: "Cups",
    name: "Paper lid",
    description:
      "Paper cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for bevrages and food indeustry",
    bgpic:paperbag1,
  },
  {
    src: "https://i.pinimg.com/236x/36/24/fa/3624fa6c472029bc35861f90d7443583.jpg",
    alt: "Item 5",
    name: "Paper Cup",
    description:
      "Paper cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for bevrages and food indeustry",
    bgpic: paperbowl,
  },
  {
    src: "https://i.pinimg.com/236x/9f/70/51/9f7051df7290097a7b9442fd3b25a533.jpg",
    alt: "Item 6",
    name: "Paper Straw",
    description:
      "Paper cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage",
    bgpic:  paperbowl,
  },
  {
    src: "https://i.pinimg.com/236x/9f/70/51/9f7051df7290097a7b9442fd3b25a533.jpg",
    alt: "Item 4",
    name: "Paper Cutlry",
    description:
      "Paper cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for be",
    bgpic: paperbowl,
  },
  {
    src: "https://i.pinimg.com/236x/9f/70/51/9f7051df7290097a7b9442fd3b25a533.jpg",
    alt: "Cups",
    name: "Paper Bag",
    description:
      "Paper cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for bevrages and food indeustry",
    bgpic: paperbowl,
  },
  {
    src: "https://i.pinimg.com/236x/9f/70/51/9f7051df7290097a7b9442fd3b25a533.jpg",
    alt: "Item 3",
    name: "Paper Bowl",
    description:
      "Description for Paper bag Paper cups are disposable containers made from the paper and often lined with pplatic or wax to p",
    bgpic: paperbowl,
  },
  {
    src: "https://i.pinimg.com/236x/9f/70/51/9f7051df7290097a7b9442fd3b25a533.jpg",
    alt: "Item 5",
    name: "Paper Bag",
    description:
      "Paper cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for bevrages and food indeustry",
    bgpic: paperbowl,
  },
  {
    src: "https://i.pinimg.com/236x/9f/70/51/9f7051df7290097a7b9442fd3b25a533.jpg",
    alt: "Item 4",
    name: "Paper Spoon",
    description:
      "Paper cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for beper bag",
    bgpic: paperbowl,
  },
  {
    src: "https://i.pinimg.com/564x/6e/97/7a/6e977a19857185cfb86e197fd88c7a73.jpg",
    alt: "Item 3",
    name: "Paper Bag",
    description:
      "Paper cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage",
    bgpic: paperbowl,
  },
  {
    src: "https://i.pinimg.com/564x/6e/97/7a/6e977a19857185cfb86e197fd88c7a73.jpg",
    alt: "Item 2",
    name: "Paper Cup",
    description:
      "Paper cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for bevrages and food indeustry",
    bgpic:  paperbowl,
  },
  {
    src: "https://i.pinimg.com/564x/6e/97/7a/6e977a19857185cfb86e197fd88c7a73.jpg",
    alt: "Cups",
    name: "Paper Bowl",
    description:
      "Paper cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage",
    bgpic:  paperbowl,
  },
  {
    src: "https://i.pinimg.com/564x/6e/97/7a/6e977a19857185cfb86e197fd88c7a73.jpg",
    alt: "Item 2",
    name: "Paper Cup",
    description:
      "Paper cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for bevrages and food indeustry",
    bgpic: paperbowl,
  },
  {
    src: "https://i.pinimg.com/564x/6e/97/7a/6e977a19857185cfb86e197fd88c7a73.jpg",
    alt: "Item 3",
    name: "Paper Plate",
    description:
      "Paper cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage",
    bgpic:  paperbowl,
  },
  {
    src: "https://i.pinimg.com/564x/6e/97/7a/6e977a19857185cfb86e197fd88c7a73.jpg",
    alt: "Cups",
    name: "Paper Bag",
    description:
      "Paper cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage",
    bgpic: paperbowl,
  },
  {
    src: "https://i.pinimg.com/236x/9f/88/92/9f889264d2b4404ebc43d0acd897e36c.jpg",
    alt: "Item 3",
    name: "Paper Cup",
    description:
      "Paper cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage",
    bgpic: paperbowl,
  },
  {
    src: "https://i.pinimg.com/236x/9f/88/92/9f889264d2b4404ebc43d0acd897e36c.jpg",
    alt: "Item 4",
    name: "Paper Spoon",
    description:
      "Paper cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for bevrages and food indeustry",
    bgpic: paperbowl,
  },
  {
    src: "https://i.pinimg.com/236x/9f/88/92/9f889264d2b4404ebc43d0acd897e36c.jpg",
    alt: "Cups",
    name: "Paper Bag",
    description:
      "Paper cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage",
    bgpic: paperbowl,
  },
  {
    src: "https://i.pinimg.com/236x/9f/88/92/9f889264d2b4404ebc43d0acd897e36c.jpg",
    alt: "Item 2",
    name: "Paper Glass",
    description:
      "Paper cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.",
    bgpic: paperbowl,
  },
  {
    src: "https://i.pinimg.com/236x/9f/88/92/9f889264d2b4404ebc43d0acd897e36c.jpg",
    alt: "Item 3",
    name: "Paper Bag",
    description:
      "Paper cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage",
    bgpic: paperbowl,
  },
  {
    src: "https://i.pinimg.com/236x/9f/88/92/9f889264d2b4404ebc43d0acd897e36c.jpg",
    alt: "Item 4",
    name: "Paper Spoon",
    description:
      "Paper cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for bevrages and food indeustry",
    bgpic: paperbowl,
  },
];

//solution page
export interface item {
  id: number;
  img: StaticImageData;
  name: string;
  description: string;
}

export const Items: item[] = [
  {
    id: 1,
    name: "All Solutions",
    img: KnowMore,
    description:
      "Set up your paper cup plant with our high-speed machines for efficient, eco-friendly production. Enjoy rapid manufacturing with reduced energy consumption and operational costs. Invest in advanced technology for sustainable, high-volume output.",
  },
  {
    id: 2,
    name: "Paper Cup Plant setup",
    img: papercup,
    description:
      "Set up your paper cup plant with our high-speed machines for efficient, eco-friendly production.",
  },
  {
    id: 3,
    name: "Raw Material Plant Setup",
    img: paperbowl,
    description:
      "Set up your paper cup plant with our high-speed machines for efficient, eco-friendly production. ",
  },
  {
    id: 4,
    name: "Printing & Die Cutting setup",
    img: paperLunchBoxMachine,
    description:
      "Set up your paper cup plant with our high-speed machines for efficient, eco-friendly production. Enjoy rapid manufacturing with reduced energy consumption and operational costs. Invest in advanced technology for sustainable, high-volume output.",
  },
  {
    id: 5,
    name: "Paper Straw Plant Setup",
    img:paperStrawMachine,
    description:
      "Set up your paper cup plant with our high-speed machines for efficient, eco-friendly production. Enjoy rapid manufacturing with reduced energy consumption and operational costs. Invest in advanced technology for sustainable, high-volume output.",
  },
  {
    id: 6,
    name: "Paper Bag Plant Setup",
    img: paperStrawMachine,
    description: "technology for sustainable, high-volume output.",
  },
  {
    id: 7,
    name: "Paper Plate Plant Setup",
    img: paperPlateMachineImage,
    description:
      "Set up your paper cup plant with our high-speed machines for efficient, eco-friendly production. Enjoy rapid manufacturing with reduced energy consumption and operational costs. ",
  },
  {
    id: 8,
    name: "Molds & Die Solutions",
    img: paperlid,
    description:
      "Set up your paper cup plant with our high-speed machines for efficient, eco-friendly production. Enjoy rapid manufacturing with reduced energy consumption and operational costs. Invest in advanced technology for sustainable, high-volume output.",
  },
  {
    id: 9,
    name: "Sterio Solutions",
    img: paperLunchBoxMachine,
    description:
      "Set up your paper cup plant with our high-speed machines for efficient, eco-friendly production. Enjoy rapid manufacturing with reduced energy consumption and operational costs. Invest in advanced technology for sustainable, high-volume output.",
  },
];
export const newscardcontent = [
  {
    image: KnowMore,
    title: "Revolutionary Speed Unveiled",
    description:
      "Discover the latest advancements in machine speed that are setting new industry benchmarks. Witness how cutting-edge technology is reshaping performance standards.",
  },
  {
    image: NewsFeatureBanner,
    title: "Excellence Showcased at DRUPA",
    description:
      "Experience the pinnacle of innovation as top-tier machines are displayed at DRUPA. See how our solutions are leading the charge in print and packaging technology.",
  },
  {
    image: KnowMore1,
    title: "Excellence Showcased at FOOMA",
    description:
      "Explore groundbreaking machine innovations highlighted at FOOMA. See how our latest developments are making waves in the food manufacturing sector.",
  },
];

interface CardContent {
  title: string;
  image: StaticImageData;
  lottieAnimation: any; // Adjust the type if you want to be more specific
}


export const cardContents: CardContent[] = [
  {
    title: "Know Your Product",
    image: productbox,
    lottieAnimation: KnowYouProduct,
  },
  {
    title: "Know Your Machine",
    image: factory,
    lottieAnimation: KnowYourMachine,
  },
  {
    title: "Know Your Business",
    image: teamunity,
    lottieAnimation:KnowYoubusiness,
  },
];
export const CARDS_DATA = [
  {
    title: "Know Your Product",
    icon: AiOutlineProduct,
    animationSpeed: 5.1,
    containerClassName: "bg-emerald-900",
    colors: undefined,
    dotSize: undefined,
    image: productbox,
  },
  {
    title: "Know Your Machine",
    icon: LiaToolsSolid,
    animationSpeed: 3,
    containerClassName: "bg-black",
    colors: [
      [236, 72, 153],
      [232, 121, 249],
    ],
    dotSize: 2,
    image: factory,
  },
  {
    title: "Know Your Business",
    icon:IoBarChartOutline,
    animationSpeed: 3,
    containerClassName: "bg-sky-600",
    colors: [[125, 211, 252]],
    dotSize: undefined,
    image: teamunity,

  },
];