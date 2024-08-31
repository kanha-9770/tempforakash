import {
  papercup,
  paperplate2,
  paperbowl,
  paperlid,
  paperstraw,
  paperbag1,
  paperBowlMachineImage,
  paperBagMachineImage,
  paperPlateMachineImage,
  paperFlexoMachineImage,
  fullyAutomaticBagMachineImage,
  PCM110WithPLC,
  paperStrawMachine,
  paperLunchBoxMachine,
} from "../../../../public/assets";

import { StaticImageData } from "next/image";
import placeholder from "../../../../public/assets/image.png"; // Adjust the path to your placeholder image

interface Images {
  paperBowlMachineImage: StaticImageData;
  paperBagMachineImage: StaticImageData;
  PCM110WithPLC: StaticImageData;
  paperPlateMachineImage: StaticImageData;
  paperFlexoMachineImage: StaticImageData;
  fullyAutomaticBagMachineImage: StaticImageData;
  paperStrawMachine: StaticImageData;
  paperLunchBoxMachine: StaticImageData;
  dieCuttingMachineImage: StaticImageData;
  flexoPrintingMachineImage: StaticImageData;
  slittingMachineImage: StaticImageData;
  coatingMachineImage: StaticImageData;
  paperBucketMachineImage: StaticImageData;
  paperLidMachineImage: StaticImageData;
  insulatedCupMachineImage: StaticImageData;
  sleeveMakingMachineImage: StaticImageData;
  corrugationMachineImage: StaticImageData;
  paperHandleCupMachineImage: StaticImageData;
  paperCutleryMachineImage: StaticImageData;
  plasticLidMachineImage: StaticImageData;
  paperFormingMachineImage: StaticImageData;
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
  dieCuttingMachineImage: placeholder, // Use placeholder
  flexoPrintingMachineImage: placeholder, // Use placeholder
  slittingMachineImage: placeholder, // Use placeholder
  coatingMachineImage: placeholder, // Use placeholder
  paperBucketMachineImage: placeholder, // Use placeholder
  paperLidMachineImage: placeholder, // Use placeholder
  insulatedCupMachineImage: placeholder, // Use placeholder
  sleeveMakingMachineImage: placeholder, // Use placeholder
  corrugationMachineImage: placeholder, // Use placeholder
  paperHandleCupMachineImage: placeholder, // Use placeholder
  paperCutleryMachineImage: placeholder, // Use placeholder
  plasticLidMachineImage: placeholder, // Use placeholder
  paperFormingMachineImage: placeholder, // Use placeholder
};

export const Machines = [
  {
    name: "NS-015",
    image: "PCM110WithPLC",

    mimage: PCM110WithPLC,
    product_heading: "food packaging machine",
    first_name: "first name",
    second_name: "second_name",
    category: "Paper Cup Machine, All Products",
    icon: "papercup",
    introduction:
      "The NS-015 is a high-performance paper cup machine designed for efficient production in medium to large scale enterprises. It combines reliability with speed, capable of producing up to 100 cups per minute.",
    parameters: "Voltage: 220V, Power: 1500W",
    application:
      "Ideal for producing paper cups of various sizes, from 6oz to 16oz, suitable for hot and cold beverages.",
    product_description:
      "This machine features a robust stainless steel construction that ensures durability and hygiene standards are met. It includes PLC control for precise operation and minimal wastage.",
    technical_specification: "Material: Stainless steel, Weight: 500kg",
    optional_add_ons: "Custom cup size molds available upon request.",
    faqs: "Q: What is the warranty period? A: 1-year warranty provided for parts and service.",
    related_product: "NS-016, NS-017",
  },
  {
    name: "NS-016",
    image: "PCM110WithPLC",
    mimage: PCM110WithPLC,
    product_heading: "food packaging machine",
    first_name: "first name",
    second_name: "second_name",
    category: "Paper Cup Machine, All Products",
    icon: "papercup",
    introduction:
      "The NS-016 paper cup machine is designed for versatility and efficiency, catering to small to medium-scale enterprises. It offers reliable performance and ease of operation.",
    parameters: "Voltage: 220V, Power: 1500W",
    application:
      "Suitable for producing a variety of paper cup sizes, ranging from 4oz to 12oz, for both hot and cold beverages.",
    product_description:
      "This machine is crafted from lightweight aluminum alloy, making it easy to transport and install. It features a user-friendly interface and low maintenance requirements.",
    technical_specification: "Material: Aluminum alloy, Weight: 450kg",
    optional_add_ons:
      "Automatic cup stacking unit available as an optional accessory.",
    faqs: "Q: How many cups can it produce per minute? A: This machine can produce up to 80 cups per minute.",
    related_product: "NS-015, NS-017",
  },
  {
    name: "NS-017",
    image: "PCM110WithPLC",
    mimage: PCM110WithPLC,
    product_heading: "food packaging machine",
    first_name: "first name",
    second_name: "second_name",
    category: "Paper Cup Machine, All Products",
    icon: "papercup",
    introduction:
      "The NS-017 paper cup machine is known for its precision and high-speed production capabilities, suitable for large-scale operations requiring consistent quality.",
    parameters: "Voltage: 220V, Power: 1800W",
    application:
      "Designed to produce paper cups with sizes ranging from 8oz to 20oz, catering to a wide range of beverage serving needs.",
    product_description:
      "Built with durable components and advanced PLC control, this machine ensures minimal downtime and optimal output. It includes features for custom mold adjustments and easy maintenance.",
    technical_specification: "Material: Stainless steel, Weight: 600kg",
    optional_add_ons:
      "Additional molds for special cup designs available upon request.",
    faqs: "Q: What material can this machine handle? A: It is capable of handling both single and double PE coated paper.",
    related_product: "NS-015, NS-016",
  },
  {
    name: "NS-018",
    image: "PCM110WithPLC",
    mimage: PCM110WithPLC,
    product_heading: "food packaging machine",
    first_name: "first name",
    second_name: "second_name",
    category: "Paper Cup Machine, All Products",
    icon: "papercup",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    parameters:
      "Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    application:
      "Experience unmatched efficiency with our Servo Driven Paper Cup Machine, producing up to 180 cups per minute with superior rigidity and leak-proof sealing",
    product_description:
      "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
    technical_specification:
      "Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    optional_add_ons:
      "Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    faqs: "Experience unmatched efficiency with our Servo Driven Paper Cup Machine, producing up to 180 cups per minute with superior rigidity and leak-proof sealing",
    related_product:
      "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
  },
  {
    name: "NS-019",
    image: "PCM110WithPLC",
    mimage: PCM110WithPLC,

    product_heading: "food packaging machine",
    first_name: "first name",
    second_name: "second_name",
    category: "Paper Cup Machine, All Products",
    icon: "papercup",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    parameters:
      "Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    application:
      "Experience unmatched efficiency with our Servo Driven Paper Cup Machine, producing up to 180 cups per minute with superior rigidity and leak-proof sealing",
    product_description:
      "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
    technical_specification:
      "Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    optional_add_ons:
      "Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    faqs: "Experience unmatched efficiency with our Servo Driven Paper Cup Machine, producing up to 180 cups per minute with superior rigidity and leak-proof sealing",
    related_product:
      "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
  },
  {
    name: "NS-020",
    image: "PCM110WithPLC",
    mimage: PCM110WithPLC,

    product_heading: "food packaging machine",
    first_name: "first name",
    second_name: "second_name",
    category: "Paper Cup Machine, All Products",
    icon: "papercup",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    parameters:
      "Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    application:
      "Experience unmatched efficiency with our Servo Driven Paper Cup Machine, producing up to 180 cups per minute with superior rigidity and leak-proof sealing",
    product_description:
      "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
    technical_specification:
      "Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    optional_add_ons:
      "Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    faqs: "Experience unmatched efficiency with our Servo Driven Paper Cup Machine, producing up to 180 cups per minute with superior rigidity and leak-proof sealing",
    related_product:
      "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
  },
  {
    name: "NS-021",
    image: "PCM110WithPLC",
    mimage: PCM110WithPLC,

    product_heading: "food packaging machine",
    first_name: "first name",
    second_name: "second_name",
    category: "Paper Cup Machine, All Products",
    icon: "papercup",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    parameters:
      "Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    application:
      "Experience unmatched efficiency with our Servo Driven Paper Cup Machine, producing up to 180 cups per minute with superior rigidity and leak-proof sealing",
    product_description:
      "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
    technical_specification:
      "Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    optional_add_ons:
      "Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    faqs: "Experience unmatched efficiency with our Servo Driven Paper Cup Machine, producing up to 180 cups per minute with superior rigidity and leak-proof sealing",
    related_product:
      "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
  },
  {
    name: "NS-022",
    image: "PCM110WithPLC",
    mimage: PCM110WithPLC,

    product_heading: "food packaging machine",
    first_name: "first name",
    second_name: "second_name",
    category: "Paper Cup Machine, All Products",
    icon: "papercup",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    parameters:
      "Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    application:
      "Experience unmatched efficiency with our Servo Driven Paper Cup Machine, producing up to 180 cups per minute with superior rigidity and leak-proof sealing",
    product_description:
      "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
    technical_specification:
      "Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    optional_add_ons:
      "Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    faqs: "Experience unmatched efficiency with our Servo Driven Paper Cup Machine, producing up to 180 cups per minute with superior rigidity and leak-proof sealing",
    related_product:
      "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
  },
  {
    name: "NS-023",
    image: "PCM110WithPLC",
    mimage: PCM110WithPLC,

    product_heading: "food packaging machine",
    first_name: "first name",
    second_name: "second_name",
    category: "Paper Cup Machine, All Products",
    icon: "papercup",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    parameters:
      "Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    application:
      "Experience unmatched efficiency with our Servo Driven Paper Cup Machine, producing up to 180 cups per minute with superior rigidity and leak-proof sealing",
    product_description:
      "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
    technical_specification:
      "Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    optional_add_ons:
      "Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    faqs: "Experience unmatched efficiency with our Servo Driven Paper Cup Machine, producing up to 180 cups per minute with superior rigidity and leak-proof sealing",
    related_product:
      "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
  },
  {
    name: "Paper Bowl Machine 01",
    image: "paperBowlMachineImage",
    mimage: paperBowlMachineImage,
    product_heading: "food packaging machine",
    first_name: "first name",
    second_name: "second_name",
    category: "Paper Bowl Machine, All Products",
    icon: "paperbowl",
    introduction:
      "The Paper Bowl Machine 01 is designed for high-volume production of paper bowls, offering precision and efficiency.",
    parameters: "Voltage: 240V, Power: 1800W",
    application:
      "Suitable for producing various sizes of paper bowls, ideal for both hot and cold food items.",
    product_description:
      "This machine is equipped with advanced features for precise bowl forming and stacking, ensuring consistent quality output.",
    technical_specification: "Material: Stainless steel, Weight: 700kg",
    optional_add_ons:
      "Customizable bowl depth and diameter settings available.",
    faqs: "Q: What is the production capacity of this machine? A: It can produce up to 120 bowls per minute.",
    related_product: "Paper Bowl Machine 02, Paper Bowl Machine 03",
  },
  {
    name: "Paper Bowl Machine 02",
    image: "paperBowlMachineImage",
    mimage: paperBowlMachineImage,
    product_heading: "food packaging machine",
    first_name: "first name",
    second_name: "second_name",
    category: "Paper Bowl Machine, mimage: paperBowlMachineImage,All Products",
    icon: "paperbowl",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    parameters:
      "Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    application:
      "Experience unmatched efficiency with our Servo Driven Paper Cup Machine, producing up to 180 cups per minute with superior rigidity and leak-proof sealing",
    product_description:
      "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
    technical_specification:
      "Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    optional_add_ons:
      "Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    faqs: "Experience unmatched efficiency with our Servo Driven Paper Cup Machine, producing up to 180 cups per minute with superior rigidity and leak-proof sealing",
    related_product:
      "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
  },
  {
    name: "Paper Bowl Machine 03",
    image: "paperBowlMachineImage",
    mimage: paperBowlMachineImage,
    product_heading: "food packaging machine",
    first_name: "first name",
    second_name: "second_name",
    category: "Paper Bowl Machine, mimage: paperBowlMachineImage,All Products",
    icon: "paperbowl",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    parameters:
      "Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    application:
      "Experience unmatched efficiency with our Servo Driven Paper Cup Machine, producing up to 180 cups per minute with superior rigidity and leak-proof sealing",
    product_description:
      "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
    technical_specification:
      "Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    optional_add_ons:
      "Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    faqs: "Experience unmatched efficiency with our Servo Driven Paper Cup Machine, producing up to 180 cups per minute with superior rigidity and leak-proof sealing",
    related_product:
      "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
  },
  {
    name: "Paper Bowl Machine 04",
    image: "paperBowlMachineImage",
    mimage: paperBowlMachineImage,
    product_heading: "food packaging machine",
    first_name: "first name",
    second_name: "second_name",
    category: "Paper Bowl Machine, mimage: paperBowlMachineImage,All Products",
    icon: "paperbowl",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    parameters:
      "Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    application:
      "Experience unmatched efficiency with our Servo Driven Paper Cup Machine, producing up to 180 cups per minute with superior rigidity and leak-proof sealing",
    product_description:
      "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
    technical_specification:
      "Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    optional_add_ons:
      "Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    faqs: "Experience unmatched efficiency with our Servo Driven Paper Cup Machine, producing up to 180 cups per minute with superior rigidity and leak-proof sealing",
    related_product:
      "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
  },
  {
    name: "NS-021",
    image: "paperPlateMachineImage",
    mimage: paperPlateMachineImage,

    product_heading: "food packaging machine",
    first_name: "first name",
    second_name: "second_name",
    category: "Paper Plate Machine, All Products",
    icon: "paperplate2",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    parameters:
      "Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    application:
      "Experience unmatched efficiency with our Servo Driven Paper Cup Machine, producing up to 180 cups per minute with superior rigidity and leak-proof sealing",
    product_description:
      "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
    technical_specification:
      "Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    optional_add_ons:
      "Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    faqs: "Experience unmatched efficiency with our Servo Driven Paper Cup Machine, producing up to 180 cups per minute with superior rigidity and leak-proof sealing",
    related_product:
      "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
  },
  {
    name: "NS-022",
    image: "paperPlateMachineImage",
    mimage: paperPlateMachineImage,

    product_heading: "food packaging machine",
    first_name: "first name",
    second_name: "second_name",
    category: "Paper Plate Machine, All Products",
    icon: "paperplate2",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    parameters:
      "Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    application:
      "Experience unmatched efficiency with our Servo Driven Paper Cup Machine, producing up to 180 cups per minute with superior rigidity and leak-proof sealing",
    product_description:
      "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
    technical_specification:
      "Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    optional_add_ons:
      "Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    faqs: "Experience unmatched efficiency with our Servo Driven Paper Cup Machine, producing up to 180 cups per minute with superior rigidity and leak-proof sealing",
    related_product:
      "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
  },
  {
    name: "Cybertruck",
    image: "paperPlateMachineImage",
    mimage: paperPlateMachineImage,

    product_heading: "food packaging machine",
    first_name: "first name",
    second_name: "second_name",
    category: "Paper Plate Machine, All Products",
    icon: "paperplate2",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    parameters:
      "Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    application:
      "Experience unmatched efficiency with our Servo Driven Paper Cup Machine, producing up to 180 cups per minute with superior rigidity and leak-proof sealing",
    product_description:
      "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
    technical_specification:
      "Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    optional_add_ons:
      "Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    faqs: "Experience unmatched efficiency with our Servo Driven Paper Cup Machine, producing up to 180 cups per minute with superior rigidity and leak-proof sealing",
    related_product:
      "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
  },
  {
    name: "Cybertruck2",
    image: "paperPlateMachineImage",
    mimage: paperPlateMachineImage,

    product_heading: "food packaging machine",
    first_name: "first name",
    second_name: "second_name",
    category: "Paper Plate Machine, All Products",
    icon: "paperplate2",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    parameters:
      "Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    application:
      "Experience unmatched efficiency with our Servo Driven Paper Cup Machine, producing up to 180 cups per minute with superior rigidity and leak-proof sealing",
    product_description:
      "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
    technical_specification:
      "Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    optional_add_ons:
      "Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    faqs: "Experience unmatched efficiency with our Servo Driven Paper Cup Machine, producing up to 180 cups per minute with superior rigidity and leak-proof sealing",
    related_product:
      "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
  },
  {
    name: "Paper Flexo Machine",
    image: "paperFlexoMachineImage",
    mimage: paperFlexoMachineImage,
    product_heading: "food packaging machine",
    first_name: "first name",
    second_name: "second_name",
    category: "Paper Flexo Machine, All Products",
    icon: "paperlid",
    introduction:
      "The Paper Flexo Machine is designed for printing on various paper surfaces, offering high-quality print results and flexibility.",
    parameters: "Voltage: 220V, Power: 2000W",
    application:
      "Ideal for printing logos, designs, and labels on paper cups, bowls, and plates.",
    product_description:
      "This paper container machine or paper bowl making machine from Nessco is designed with high level of accuracy and international standards. This machine makes paper containers and bowls for food packaging and serving. The machines runs a whole procedure of paper feeding, bowl-fan wall sealing, oil lubrication, bottom punching, heating, rolling, rimming, rounding, and discharge as well.",
    technical_specification: "Material: Aluminum alloy, Weight: 800kg",
    optional_add_ons:
      "Additional color printing units available for multi-color designs.",
    faqs: "Q: What is the printing speed of this machine? A: It can print up to 150 meters per minute.",
    related_product: "Paper Flexo Machine 2, Paper Flexo Machine 3",
  },
  {
    name: "Paper Flexo Machine",
    image: "paperFlexoMachineImage",
    mimage: paperFlexoMachineImage,
    product_heading: "food packaging machine",
    first_name: "first name",
    second_name: "second_name",
    category: "Paper Flexo Machine, All Products",
    icon: "paperlid",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    parameters:
      "Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    application:
      "Experience unmatched efficiency with our Servo Driven Paper Cup Machine, producing up to 180 cups per minute with superior rigidity and leak-proof sealing",
    product_description:
      "This paper container machine or paper bowl making machine from Nessco is designed with high level of accuracy and international standards. This machine makes paper containers and bowls for food packaging and serving. The machines runs a whole procedure of paper feeding, bowl-fan wall sealing, oil lubrication, bottom punching, heating, rolling, rimming, rounding, and discharge as well.",
    technical_specification:
      "Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    optional_add_ons:
      "Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    faqs: "Experience unmatched efficiency with our Servo Driven Paper Cup Machine, producing up to 180 cups per minute with superior rigidity and leak-proof sealing",
    related_product:
      "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
  },

  {
    name: "Paper Flexo Machine2",
    image: "paperFlexoMachineImage",
    mimage: paperFlexoMachineImage,
    product_heading: "food packaging machine",
    first_name: "first name",
    second_name: "second_name",
    category: "Paper Flexo Machine, All Products",
    icon: "paperlid",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    parameters:
      "Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    application:
      "Experience unmatched efficiency with our Servo Driven Paper Cup Machine, producing up to 180 cups per minute with superior rigidity and leak-proof sealing",
    product_description:
      "This paper container machine or paper bowl making machine from Nessco is designed with high level of accuracy and international standards. This machine makes paper containers and bowls for food packaging and serving. The machines runs a whole procedure of paper feeding, bowl-fan wall sealing, oil lubrication, bottom punching, heating, rolling, rimming, rounding, and discharge as well.",
    technical_specification:
      "Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    optional_add_ons:
      "Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    faqs: "Experience unmatched efficiency with our Servo Driven Paper Cup Machine, producing up to 180 cups per minute with superior rigidity and leak-proof sealing",
    related_product:
      "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
  },
  {
    name: "Paper Flexo Machine3",
    image: "paperFlexoMachineImage",
    mimage: paperFlexoMachineImage,

    product_heading: "food packaging machine",
    first_name: "first name",
    second_name: "second_name",
    category: "Paper Flexo Machine, All Products",
    icon: "paperlid",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    parameters:
      "Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    application:
      "Experience unmatched efficiency with our Servo Driven Paper Cup Machine, producing up to 180 cups per minute with superior rigidity and leak-proof sealing",
    product_description:
      "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
    technical_specification:
      "Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    optional_add_ons:
      "Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    faqs: "Experience unmatched efficiency with our Servo Driven Paper Cup Machine, producing up to 180 cups per minute with superior rigidity and leak-proof sealing",
    related_product:
      "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
  },
  {
    name: "Paper Bag Machine new",
    image: "fullyAutomaticBagMachineImage",
    mimage: fullyAutomaticBagMachineImage,
    product_heading: "food packaging machine",
    first_name: "first name",
    second_name: "second_name",
    category: "Paper Bag Machine, All Products",
    icon: "paperbag1",
    introduction:
      "The Paper Bag Machine new offers enhanced automation and efficiency for high-volume production of paper bags.",
    parameters: "Voltage: 240V, Power: 2500W",
    application:
      "Ideal for producing grocery bags, shopping bags, and custom-printed promotional bags.",
    product_description:
      "This machine features PLC control for precise operation and real-time monitoring. It includes automated folding and gluing units for seamless bag production.",
    technical_specification: "Material: Stainless steel, Weight: 1000kg",
    optional_add_ons:
      "Handle attachment and printing units available as optional accessories.",
    faqs: "Q: What is the speed of this machine? A: It can produce up to 200 bags per minute.",
    related_product: "Paper Bag Machine1, Paper Bag Machine new2",
  },
  {
    name: "Paper Bag Machine1",
    image: "fullyAutomaticBagMachineImage",
    mimage: fullyAutomaticBagMachineImage,
    product_heading: "food packaging machine",
    first_name: "first name",
    second_name: "second_name",
    category: "Paper Bag Machine, All Products",
    icon: "paperbag1",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    parameters:
      "Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    application:
      "Experience unmatched efficiency with our Servo Driven Paper Cup Machine, producing up to 180 cups per minute with superior rigidity and leak-proof sealing",
    product_description:
      "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
    technical_specification:
      "Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    optional_add_ons:
      "Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    faqs: "Experience unmatched efficiency with our Servo Driven Paper Cup Machine, producing up to 180 cups per minute with superior rigidity and leak-proof sealing",
    related_product:
      "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
  },
  {
    name: "Paper Bag Machine new2",
    image: "fullyAutomaticBagMachineImage",
    mimage: fullyAutomaticBagMachineImage,
    product_heading: "food packaging machine",
    first_name: "first name",
    second_name: "second_name",
    category: "Paper Bag Machine, All Products",
    icon: "paperbag1",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    parameters:
      "Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    application:
      "Experience unmatched efficiency with our Servo Driven Paper Cup Machine, producing up to 180 cups per minute with superior rigidity and leak-proof sealing",
    product_description:
      "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
    technical_specification:
      "Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    optional_add_ons:
      "Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    faqs: "Experience unmatched efficiency with our Servo Driven Paper Cup Machine, producing up to 180 cups per minute with superior rigidity and leak-proof sealing",
    related_product:
      "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
  },
  {
    name: "Paper Bag Machine new2",
    image: "fullyAutomaticBagMachineImage",
    mimage: fullyAutomaticBagMachineImage,
    product_heading: "food packaging machine",
    first_name: "first name",
    second_name: "second_name",
    category: "Paper Bag Machine, All Products",
    icon: "paperbag1",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    parameters:
      "Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    application:
      "Experience unmatched efficiency with our Servo Driven Paper Cup Machine, producing up to 180 cups per minute with superior rigidity and leak-proof sealing",
    product_description:
      "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
    technical_specification:
      "Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    optional_add_ons:
      "Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    faqs: "Experience unmatched efficiency with our Servo Driven Paper Cup Machine, producing up to 180 cups per minute with superior rigidity and leak-proof sealing",
    related_product:
      "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
  },
  {
    name: "Die Cutting Machine X1",
    image: "dieCuttingMachineImage",
    mimage: placeholder,
    product_heading: "food packaging machine",
    first_name: "first name",
    second_name: "second_name",
    category: "Die Cutting Machines, All Products",
    icon: "diecutting",
    introduction:
      "The Die Cutting Machine X1 is designed for precise cutting of paper and other materials. It is suitable for various industrial applications and ensures high efficiency and accuracy.",
    parameters: "Voltage: 220V, Power: 2000W",
    application:
      "Ideal for producing custom shapes and sizes in paper, cardboard, and other materials.",
    product_description:
      "This die cutting machine features an advanced cutting mechanism and robust build, making it perfect for high-volume production runs.",
    technical_specification: "Material: Heavy-duty steel, Weight: 800kg",
    optional_add_ons: "Custom die sets available upon request.",
    faqs: "Q: Can this machine cut materials other than paper? A: Yes, it can also cut cardboard and some plastics.",
    related_product: "Die Cutting Machine X2, Die Cutting Machine X3",
  },
  {
    name: "Flexo Printing Machine Y1",
    image: "flexoPrintingMachineImage",
    mimage: placeholder,
    product_heading: "food packaging machine",
    first_name: "first name",
    second_name: "second_name",
    category: "Printing Machines, All Products",
    icon: "flexoprinting",
    introduction:
      "The Flexo Printing Machine Y1 offers high-quality printing for various packaging needs. It ensures sharp and vibrant prints on flexible packaging materials.",
    parameters: "Voltage: 220V, Power: 2500W",
    application:
      "Suitable for printing on flexible films, paper, and other substrates used in packaging.",
    product_description:
      "This machine provides high-speed printing with excellent color reproduction and minimal waste, making it ideal for large production runs.",
    technical_specification: "Material: Aluminum and steel, Weight: 600kg",
    optional_add_ons: "Additional print heads and color stations available.",
    faqs: "Q: What is the maximum print width? A: The maximum print width is 1.5 meters.",
    related_product: "Flexo Printing Machine Y2, Flexo Printing Machine Y3",
  },
  {
    name: "Slitting Machine Z1",
    image: "slittingMachineImage",
    mimage: placeholder,
    product_heading: "food packaging machine",
    first_name: "first name",
    second_name: "second_name",
    category: "Slitting Machines, All Products",
    icon: "slitting",
    introduction:
      "The Slitting Machine Z1 is designed for precise slitting of wide rolls into smaller rolls or sheets. It offers versatility and precision for various materials.",
    parameters: "Voltage: 220V, Power: 1800W",
    application:
      "Ideal for slitting paper, film, and other flexible materials into desired widths.",
    product_description:
      "This machine features adjustable slitting blades and a robust build, ensuring consistent performance and high-quality results.",
    technical_specification: "Material: Stainless steel, Weight: 700kg",
    optional_add_ons: "Custom blade configurations available.",
    faqs: "Q: Can this machine handle different material thicknesses? A: Yes, it can handle a range of material thicknesses with adjustable settings.",
    related_product: "Slitting Machine Z2, Slitting Machine Z3",
  },
  {
    name: "Coating Machine A1",
    image: "coatingMachineImage",
    mimage: placeholder,
    product_heading: "food packaging machine",
    first_name: "first name",
    second_name: "second_name",
    category: "Coating Machines, All Products",
    icon: "coating",
    introduction:
      "The Coating Machine A1 is designed for applying coatings to various substrates. It offers precise control over coating thickness and uniformity.",
    parameters: "Voltage: 220V, Power: 1500W",
    application:
      "Suitable for applying coatings to paper, film, and other materials in packaging and printing industries.",
    product_description:
      "This machine features advanced coating technology for even application and high-quality finishes.",
    technical_specification: "Material: Alloy steel, Weight: 650kg",
    optional_add_ons: "Custom coating solutions available.",
    faqs: "Q: What types of coatings can be used? A: It supports various coatings including varnishes and laminates.",
    related_product: "Coating Machine A2, Coating Machine A3",
  },
  {
    name: "Paper Bucket Machine B1",
    image: "paperBucketMachineImage",
    mimage: placeholder,
    product_heading: "food packaging machine",
    first_name: "first name",
    second_name: "second_name",
    category: "Paper Bucket Machines, All Products",
    icon: "paperbucket",
    introduction:
      "The Paper Bucket Machine B1 is designed for efficient production of paper buckets. It combines high speed with precision for various sizes and applications.",
    parameters: "Voltage: 220V, Power: 2200W",
    application:
      "Ideal for producing paper buckets for food packaging, waste disposal, and other uses.",
    product_description:
      "This machine features an automatic feed system and adjustable settings for different bucket sizes.",
    technical_specification: "Material: Stainless steel, Weight: 900kg",
    optional_add_ons: "Custom bucket molds available upon request.",
    faqs: "Q: What is the maximum bucket capacity? A: The machine can produce buckets up to 10 liters in capacity.",
    related_product: "Paper Bucket Machine B2, Paper Bucket Machine B3",
  },
  {
    name: "Paper Lid Machine C1",
    image: "paperLidMachineImage",
    mimage: placeholder,
    product_heading: "food packaging machine",
    first_name: "first name",
    second_name: "second_name",
    category: "Paper Lid Machines, All Products",
    icon: "paperlid",
    introduction:
      "The Paper Lid Machine C1 is designed for high-speed production of paper lids for various container types. It ensures precise cutting and forming.",
    parameters: "Voltage: 220V, Power: 2000W",
    application:
      "Suitable for producing paper lids for cups, bowls, and other containers.",
    product_description:
      "This machine features an advanced forming mechanism and high-speed operation for efficient production.",
    technical_specification: "Material: Heavy-duty steel, Weight: 750kg",
    optional_add_ons: "Custom lid molds available.",
    faqs: "Q: Can the machine handle different lid sizes? A: Yes, it can be adjusted for various lid sizes.",
    related_product: "Paper Lid Machine C2, Paper Lid Machine C3",
  },
  {
    name: "Insulated Cup Machine D1",
    image: "insulatedCupMachineImage",
    mimage: placeholder,
    product_heading: "food packaging machine",
    first_name: "first name",
    second_name: "second_name",
    category: "Insulated Cup Machines, All Products",
    icon: "insulatedcup",
    introduction:
      "The Insulated Cup Machine D1 produces high-quality insulated cups with excellent thermal retention. It’s designed for both small and large-scale production.",
    parameters: "Voltage: 220V, Power: 2500W",
    application:
      "Ideal for producing insulated cups for hot and cold beverages.",
    product_description:
      "This machine ensures high precision in cup formation and features energy-efficient technology.",
    technical_specification: "Material: Stainless steel, Weight: 800kg",
    optional_add_ons: "Custom cup sizes and insulation options available.",
    faqs: "Q: What types of insulation are available? A: Options include double-wall and foam insulation.",
    related_product: "Insulated Cup Machine D2, Insulated Cup Machine D3",
  },
  {
    name: "Sleeve Making Machine E1",
    image: "sleeveMakingMachineImage",
    mimage: placeholder,
    product_heading: "food packaging machine",
    first_name: "first name",
    second_name: "second_name",
    category: "Sleeve Making Machines, All Products",
    icon: "sleeve",
    introduction:
      "The Sleeve Making Machine E1 is designed for efficient production of paper sleeves. It ensures precise cutting and application for various sizes.",
    parameters: "Voltage: 220V, Power: 1800W",
    application:
      "Suitable for making sleeves for cups, containers, and other products.",
    product_description:
      "This machine features a high-speed operation and adjustable settings for different sleeve sizes.",
    technical_specification: "Material: Aluminum and steel, Weight: 700kg",
    optional_add_ons: "Custom sleeve sizes and designs available.",
    faqs: "Q: Can the machine handle different materials? A: Yes, it can work with various types of paper and film.",
    related_product: "Sleeve Making Machine E2, Sleeve Making Machine E3",
  },
  {
    name: "Corrugation Machine F1",
    image: "corrugationMachineImage",
    mimage: placeholder,
    product_heading: "food packaging machine",
    first_name: "first name",
    second_name: "second_name",
    category: "Corrugation Machines, All Products",
    icon: "corrugation",
    introduction:
      "The Corrugation Machine F1 is designed for producing corrugated paper for packaging and other applications. It provides high efficiency and quality.",
    parameters: "Voltage: 220V, Power: 3000W",
    application:
      "Ideal for producing corrugated paper used in boxes, packaging, and protective materials.",
    product_description:
      "This machine features robust construction and advanced technology for consistent performance.",
    technical_specification: "Material: Steel, Weight: 1000kg",
    optional_add_ons: "Custom corrugation patterns available.",
    faqs: "Q: What is the maximum paper width? A: The maximum paper width is 2 meters.",
    related_product: "Corrugation Machine F2, Corrugation Machine F3",
  },
  {
    name: "Paper Handle Cup Machine G1",
    image: "paperHandleCupMachineImage",
    mimage: placeholder,
    product_heading: "food packaging machine",
    first_name: "first name",
    second_name: "second_name",
    category: "Paper Handle Cup Machines, All Products",
    icon: "paperhandle",
    introduction:
      "The Paper Handle Cup Machine G1 produces cups with paper handles for added convenience. It combines speed and precision for high-quality results.",
    parameters: "Voltage: 220V, Power: 2300W",
    application:
      "Suitable for producing paper cups with handles for beverages.",
    product_description:
      "This machine features automatic handle attachment and precise cup forming.",
    technical_specification: "Material: Stainless steel, Weight: 850kg",
    optional_add_ons: "Custom cup sizes and handle designs available.",
    faqs: "Q: Can it handle different handle sizes? A: Yes, it supports various handle sizes and shapes.",
    related_product: "Paper Handle Cup Machine G2, Paper Handle Cup Machine G3",
  },
  {
    name: "Paper Cutlery Machine H1",
    image: "paperCutleryMachineImage",
    mimage: placeholder,
    product_heading: "food packaging machine",
    first_name: "first name",
    second_name: "second_name",
    category: "Paper Cutlery Machines, All Products",
    icon: "cutlery",
    introduction:
      "The Paper Cutlery Machine H1 is designed for the production of eco-friendly paper cutlery. It offers high-speed operation and precision.",
    parameters: "Voltage: 220V, Power: 2000W",
    application:
      "Ideal for producing paper cutlery including forks, spoons, and knives.",
    product_description:
      "This machine features advanced forming technology and efficient production capabilities.",
    technical_specification: "Material: Steel and plastic, Weight: 750kg",
    optional_add_ons: "Custom cutlery sizes and shapes available.",
    faqs: "Q: What types of paper can be used? A: The machine supports various types of paper suitable for cutlery.",
    related_product: "Paper Cutlery Machine H2, Paper Cutlery Machine H3",
  },
  {
    name: "Plastic Lid Machine I1",
    image: "plasticLidMachineImage",
    mimage: placeholder,
    product_heading: "food packaging machine",
    first_name: "first name",
    second_name: "second_name",
    category: "Plastic Lid Machines, All Products",
    icon: "plasticlid",
    introduction:
      "The Plastic Lid Machine I1 is designed for the production of plastic lids for various containers. It ensures precision and speed.",
    parameters: "Voltage: 220V, Power: 2100W",
    application:
      "Suitable for producing plastic lids for cups, containers, and other packaging solutions.",
    product_description:
      "This machine features precise lid forming technology and efficient operation.",
    technical_specification:
      "Material: Durable plastic and steel, Weight: 700kg",
    optional_add_ons: "Custom lid molds and sizes available.",
    faqs: "Q: What types of plastic can be used? A: The machine supports various types of plastic materials.",
    related_product: "Plastic Lid Machine I2, Plastic Lid Machine I3",
  },
  {
    name: "Paper Forming Machine J1",
    image: "paperFormingMachineImage",
    mimage: placeholder,
    product_heading: "food packaging machine",
    first_name: "first name",
    second_name: "second_name",
    category: "Paper Forming Machines, All Products",
    icon: "paperforming",
    introduction:
      "The Paper Forming Machine J1 is designed for efficient and precise paper forming. It is suitable for various paper products and applications.",
    parameters: "Voltage: 220V, Power: 2400W",
    application:
      "Ideal for forming paper products such as cups, plates, and containers.",
    product_description:
      "This machine features advanced forming technology and high-speed operation for efficient production.",
    technical_specification: "Material: Stainless steel, Weight: 800kg",
    optional_add_ons: "Custom forming molds available.",
    faqs: "Q: Can it form different paper products? A: Yes, it supports various paper products and shapes.",
    related_product: "Paper Forming Machine J2, Paper Forming Machine J3",
  },
];
export const SidebarLinks = [
  {
    name: "Paper Cup Machine",
    link: "/Paper Cup Machine",
    icon: papercup,
  },
  {
    name: "Paper Bowl Machine",
    link: "/Paper Bowl Machine",
    icon: paperbowl,
  },
  {
    name: "Paper Plate Machine",
    link: "/Paper Plate Machine",
    icon: paperplate2,
  },
  {
    name: "Paper Flexo Machine",
    link: "/Paper Flexo Machine",
    icon: paperlid,
  },
  {
    name: "Paper Bag Machine",
    link: "/Paper Bag Machine",
    icon: paperbag1,
  },
  {
    name: "Paper Straw Machine",
    link: "/Paper Straw Machine",
    icon: paperstraw,
  },
  {
    name: "Paper Lunch Box Machine",
    link: "/Lunch Box Machine",
    icon: paperbag1,
  },
  {
    name: "Paper Cutting Machine",
    link: "/Paper Cutting Machine",
    icon: paperbag1,
  },
  {
    name: "Slitting Machine",
    link: "/Slitting Machine",
    icon: paperbag1,
  },
  {
    name: "Coating Machine",
    link: "/Coating Machine",
    icon: paperbag1,
  },
  {
    name: "Corrugation Machine",
    link: "/Corrugation Machine",
    icon: paperbag1,
  },
  {
    name: "Paper Handle Cup Machine",
    link: "/Paper Handle Cup Machine",
    icon: paperbag1,
  },
  {
    name: "Die Cutting Machine",
    link: "/Die Cutting Machine",
    icon: paperbag1,
  },
  {
    name: "Insulated Cup Machine",
    link: "/Insulated Cup Machine",
    icon: paperbag1,
  },
  {
    name: "Sleeve Making Machine",
    link: "/Sleeve Making Machine",
    icon: paperbag1,
  },
  {
    name: "Paper Cutlery Machine",
    link: "/Paper Cutlery Machine",
    icon: paperbag1,
  },
  {
    name: "Paper Bucket Machine",
    link: "/Paper Bucket Machine",
    icon: paperbag1,
  },
  {
    name: "Paper Lid Machine",
    link: "/Paper Lid Machine",
    icon: paperbag1,
  },
  {
    name: "Carton Erecting Machine",
    link: "/Carton Erecting Machine",
    icon: paperbag1,
  },
  {
    name: "Rectangular Flat Bottom Bowl Machine",
    link: "/Rectangular Flat Bottom Bowl Machine",
    icon: paperbag1,
  },
];
