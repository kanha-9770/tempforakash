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
  { title: "Book a Service", image: BookServiceImage },
  { title: "Genuine Parts", image: BookServiceImage },
  { title: "User Guide", image: BookServiceImage },
  { title: "Machine Warranty", image: BookServiceImage },
  { title: "Additional Item 1", image: BookServiceImage },
  { title: "Additional Item 2", image: BookServiceImage },
  { title: "Additional Item 3", image: BookServiceImage },
  { title: "Additional Item 4", image: BookServiceImage },
  { title: "Additional Item 5", image: BookServiceImage },
  { title: "Additional Item 6", image: BookServiceImage },
  { title: "Additional Item 7", image: BookServiceImage },
];
