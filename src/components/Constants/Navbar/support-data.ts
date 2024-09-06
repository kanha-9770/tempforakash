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
} from "../../../../public/assets";

import { StaticImageData } from "next/image";
import support from "../../../../public/assets/nav_support/support-animation.json"
import geniune from "../../../../public/assets/nav_support/geniune-animation.json"
import guide from "../../../../public/assets/nav_support/user-guide.json"
import warranty from "../../../../public/assets/nav_support/warantee.json"
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
// support itemm
export const supporItem = [
  { title: "Book a Service", image: guide},
  { title: "Genuine Parts", image: geniune },
  { title: "User Guide", image: guide },
  { title: "Machine Warranty", image:warranty },
  // { title: "Additional Item 1", image: BookServiceImage },
  // { title: "Additional Item 2", image: BookServiceImage },
  // { title: "Additional Item 3", image: BookServiceImage },
  // { title: "Additional Item 4", image: BookServiceImage },
  // { title: "Additional Item 5", image: BookServiceImage },
  // { title: "Additional Item 6", image: BookServiceImage },
  // { title: "Additional Item 7", image: BookServiceImage },
];
// support-data.ts
export const supportMobile = {
  mobileFirst: "123-456-7890",
  mobileSecond: "098-765-4321",
};
