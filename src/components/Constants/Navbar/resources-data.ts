import {
  paperBowlMachineImage,
  paperBagMachineImage,
  paperPlateMachineImage,
  paperFlexoMachineImage,
  fullyAutomaticBagMachineImage,
  PCM110WithPLC,
  paperStrawMachine,
  BookServiceImage,
  paperLunchBoxMachine,
  paperbowl,
  papercup,
} from "../../../../public/assets";

import { StaticImageData } from "next/image";

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

export const DataBankItem = [
  { title: "Paper Cup Machine", image: paperBagMachineImage, bgPic: paperbowl },
  {
    title: "Paper Bowl Machine",
    image: paperBowlMachineImage,
    bgPic: papercup,
  },
  {
    title: "Paper Straw Machine",
    image: paperPlateMachineImage,
    bgPic: paperbowl,
  },
  { title: "Paper Bucket Machine", image: paperStrawMachine, bgPic: papercup },
  { title: "Additional Item 4", image: BookServiceImage, bgPic: paperbowl },
  { title: "Additional Item 5", image: BookServiceImage, bgPic: papercup },
];
export const ResourcesMobile = [
  { title: "knowledge Center", bgPic: paperbowl },
  { title: "Media Rooms", bgPic: paperbowl },
  { title: "Blogs", bgPic: paperbowl },
  { title: "clientel", bgPic: paperbowl },
];
