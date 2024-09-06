"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/HomeMachine-cards-carousel";
import image from "../../../../public/assets/image.png";
import PositionAwareButton from "../../ui/PositionAwareButton";
import Breadcrumb from "../../ui/Breadcrumb";
import { FaCircleNotch } from "react-icons/fa";
import {
  papercup,
  paperbowl,
 
} from "../../../../public/assets";
import {
  DisposablePaperCupMakingMachine,
 
  FullyAutomaticPaperCupMakingMachine,
  
  PaperGlassMachine,
  
  ServoDrivenMachine,
} from "../../../../public/assets/machine";
import { BlurImage } from "@/components/ui/BlurImage";
// Define the type for card data
interface CardData {
  content: React.ReactNode;
  category: string;
  firstname: string;
  secondname: string;
  description: string;
  image: StaticImageData;
  title: string;
  speed: number;
  unit: string;
  icon: StaticImageData;
}

interface HomeMachineCarouselProps {
  filteredCardsData: CardData[];
}

export function HomeMachineCarousel({
  filteredCardsData,
}: HomeMachineCarouselProps) {
  const cards = filteredCardsData.map((card: CardData, index: number) => (
    <Card key={card.title} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full -mt-14">
      <Carousel items={cards} />
    </div>
  );
}

interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

interface DummyContentProps {
  image: StaticImageData;
  title: string;
  description: string;
  breadcrumbItems: BreadcrumbItem[];
  buttons: { text: string; icon: boolean }[];
  items: { className: string; text: string }[];
  firstname: string;
  secondname: string;
}

const DummyContent: React.FC<DummyContentProps> = ({
  image,
  title,
  description,
  breadcrumbItems,
  buttons,
  items,
  firstname,
  secondname,
}) => {
  return (
    <>
      <div className="bg-[#F5F5F7] z-[99999] dark:bg-neutral-800 p-8 font-poppins font-regular md:p-14 h-80 rounded-3xl mb-4">
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm"></div>
          <div className="relative w-full max-w-[78rem] h-[90vh] bg-white rounded-xl p-6 transform transition-transform overflow-y-auto z-50">
            <Breadcrumb items={breadcrumbItems} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="flex flex-col items-center">
                <BlurImage
                  src={image}
                  alt={title}
                  width={600}
                  height={400}
                  className="rounded-2xl object-fill lg:object-cover h-[400px]"
                />
                <div className="flex w-[60%] lg:-ml-14 space-x-2 lg:space-x-8 justify-center mt-8">
                  {buttons.map((button, index) => (
                    <div key={index} className="ml-1">
                      <PositionAwareButton
                        key={index}
                        text={button.text}
                        icon={button.icon}
                        width={
                          button.text === "Know Machine" ? "180px" : "160px"
                        }
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h1 className="text-xl lg:text-3xl font-semibold lg:font-bold mb-4">
                  <span className="text-red-600">{firstname}</span>
                  <span className="text-[#483d78] ml-2">{secondname}</span>
                </h1>
                <p className="text-gray-700 text-sm font-regular mb-4">{description}</p>
                <ul className="list-none grid grid-cols-2 gap-4 text-gray-700">
                  {items.map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <FaCircleNotch className={item.className} />
                      <span className="text-sm font-regular">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DummyContent;

export const cardsData: CardData[] = [
  {
    content: (
      <DummyContent
        image={ServoDrivenMachine}
        title="Servo Driven Paper Cup Machine"
        description="Experience unparalleled efficiency with our Servo Driven Paper Cup Machine, a marvel of engineering that integrates advanced mechanical, electronic, pneumatic, and electrical technologies. This high-precision machine is equipped with 13 servos that work in perfect sync via PLC, enabling the production of up to 180 high-quality paper cups per minute, equivalent to 3 cups per second. The machine features a two-step curling process, which ensures the rim of each cup is curled twice to provide extra rigidity and durability & High-quality sealing is guaranteed through the use of ultrasonic and hot air mechanisms, minimizing the risk of leakage, making it ideal for both hot and cold beverages"
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Servo Driven Paper Cup Machine", current: true },
        ]}
        buttons={[
          { text: "Know Machine", icon: true },
          { text: "Get a Quote", icon: true },
        ]}
        items={[
          {
            className: "text-gray-400 text-3xl",
            text: "High-Speed Synchronized Servos",
          },
          {
            className: "text-gray-400 text-3xl",
            text: "Advanced Sealing Technology",
          },
          {
            className: "text-gray-400 text-3xl",
            text: "Two-Step Curling Process",
          },
          {
            className: "text-gray-400 text-3xl",
            text: "Comprehensive Control System ",
          },
        ]}
        firstname="Servo Driven "
        secondname="Paper Cup Machine"
      />
    ),
    category: "cup",
    firstname: "Servo Driven",
    secondname: "Paper Cup Machine",
    description:
      "Experience unparalleled efficiency with our Paper Cup Machine...",
    image: ServoDrivenMachine,
    title: "Servo Driven Machine",
    speed: 100,
    unit: "PCS/MIN",
    icon: paperbowl,
  },
  {
    content: (
      <DummyContent
        image={PaperGlassMachine}
        title="Paper Glass Making Machine"
        description="Paper Glass Making Machine is manufactured using latest technology and high tech equipment which are reliable as well as durable. This machine has two-layer system for movement of Paper fans which then wrapped around mother mold to form a cone shape. It is designed using Single Turn Plate Technology and Direct Bottom Technology which reduces wastage of paper and rotations during the process of bottom feeding, bottom knurling and top curling as well."
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Paper Glass Making Machine", current: true },
        ]}
        buttons={[
          { text: "Know Machine", icon: true },
          { text: "Get a Quote", icon: true },
        ]}
        items={[
          {
            className: "text-gray-400 text-3xl",
            text: "High-Speed Synchronized Servos",
          },
          {
            className: "text-gray-400 text-3xl",
            text: "Advanced Sealing Technology",
          },
          {
            className: "text-gray-400 text-3xl",
            text: "Two-Step Curling Process",
          },
          {
            className: "text-gray-400 text-3xl",
            text: "Comprehensive Control System ",
          },
        ]}
        firstname="Paper"
        secondname="Glass Making Machine"
      />
    ),
    category: "Cup",
    firstname: "Paper",
    secondname: "Glass Making Machine",
    description:
      "Paper Glass Making Machine is manufactured using latest technology and high tech equipment which are reliable as well as durable. This machine has two-layer system for movement of Paper fans which then wrapped around mother mold to form a cone shape. It is designed using Single Turn Plate Technology and Direct Bottom Technology which reduces wastage of paper and rotations during the process of bottom feeding, bottom knurling and top curling as well.",
    image:PaperGlassMachine,
    title: "Glass Making Machine",
    speed: 120,
    unit: "PCS/MIN",
    icon: paperbowl,
  },
  {
    content: (
      <DummyContent
        image={DisposablePaperCupMakingMachine}
        title="Disposable Cup Making Machine"
        description="Experience unparalleled efficiency with our Die Cutting Machine..."
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Disposable Cup Making Machine", current: true },
        ]}
        buttons={[
          { text: "Know Machine", icon: true },
          { text: "Get a Quote", icon: true },
        ]}
        items={[
          {
            className: "text-gray-400 text-3xl",
            text: "High-Speed Synchronized Servos",
          },
          {
            className: "text-gray-400 text-3xl",
            text: "Advanced Sealing Technology",
          },
          {
            className: "text-gray-400 text-3xl",
            text: "Two-Step Curling Process",
          },
          {
            className: "text-gray-400 text-3xl",
            text: "Comprehensive Control System ",
          },
        ]}
        firstname="Disposable"
        secondname="Cup Making Machine"
      />
    ),
    category: "cup",
    firstname: "Disposable",
    secondname: "Cup Making Machine",
    description:
      "NS-200 Disposable Cup making Machine is manufactured using latest technology and high tech equipment which are reliable as well as durable. This is the best Disposable cup making machine which has two-layer system for movement of Paper fans which is formed by a kind of arm arrangement for cup cone tracker. Robotic Arm plays a vital role in transferring cup cone to Moulds for further process of Bottom heating, knurling and Top curling. Moreover, this machine has certain additional features like photoelectric sensors for paper feeding and cup counting.",
    image:DisposablePaperCupMakingMachine,
    title: "Disposable Cup Making Machine",
    speed: 150,
    unit: "PCS/MIN",
    icon: papercup,
  },
  {
    content: (
      <DummyContent
        image={ServoDrivenMachine}
        title="High Speed Paper Cup Machine"
        description="Leading manufacturer and supplier of paper cup machines. We offer a wide range of paper cup machines from 90 cups per min to 160 cups per min. We have paper cup machine (90 speed), Automatic paper cup making machine (110 speed), High speed paper cup machine (130 speed), Fully automatic paper cup machine (160 speed)."
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "High Speed Paper Cup Machine", current: true },
        ]}
        buttons={[
          { text: "Know Machine", icon: true },
          { text: "Get a Quote", icon: true },
        ]}
        items={[
          {
            className: "text-gray-400 text-3xl",
            text: "High-Speed Synchronized Servos",
          },
          {
            className: "text-gray-400 text-3xl",
            text: "Advanced Sealing Technology",
          },
          {
            className: "text-gray-400 text-3xl",
            text: "Two-Step Curling Process",
          },
          {
            className: "text-gray-400 text-3xl",
            text: "Comprehensive Control System ",
          },
        ]}
        firstname="High Speed"
        secondname="Paper Cup Machine"
      />
    ),
    category: "paper",
    firstname: "High Speed",
    secondname: "Paper Cup Machine",
    description:
      "Leading manufacturer and supplier of paper cup machines. We offer a wide range of paper cup machines from 90 cups per min to 160 cups per min. We have paper cup machine (90 speed), Automatic paper cup making machine (110 speed), High speed paper cup machine (130 speed), Fully automatic paper cup machine (160 speed).",
    image:FullyAutomaticPaperCupMakingMachine,
    title: "High Speed Paper Cup Machine",
    speed: 160,
    unit: "PCS/MIN",
    icon: paperbowl,
  },
  {
    content: (
      <DummyContent
        image={ServoDrivenMachine}
        title="Slitting Machine"
        description="Experience unparalleled efficiency with our Slitting Machine..."
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Slitting Machine", current: true },
        ]}
        buttons={[
          { text: "Know Machine", icon: true },
          { text: "Get a Quote", icon: true },
        ]}
        items={[
          {
            className: "text-gray-400 text-3xl",
            text: "High-Speed Synchronized Servos",
          },
          {
            className: "text-gray-400 text-3xl",
            text: "Advanced Sealing Technology",
          },
          {
            className: "text-gray-400 text-3xl",
            text: "Two-Step Curling Process",
          },
          {
            className: "text-gray-400 text-3xl",
            text: "Comprehensive Control System ",
          },
        ]}
        firstname="Slitting"
        secondname="Machine"
      />
    ),
    category: "bowl",
    firstname: "Slitting",
    secondname: "Machine",
    description:
      "Experience unparalleled efficiency with our Slitting Machine...",
    image:ServoDrivenMachine,
    title: "Slitting Machine",
    speed: 140,
    unit: "PCS/MIN",
    icon: paperbowl,
  },
  {
    content: (
      <DummyContent
        image={ServoDrivenMachine}
        title="Coating Machine"
        description="Experience unparalleled efficiency with our Coating Machine..."
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Coating Machine", current: true },
        ]}
        buttons={[
          { text: "Know Machine", icon: true },
          { text: "Get a Quote", icon: true },
        ]}
        items={[
          {
            className: "text-gray-400 text-3xl",
            text: "High-Speed Synchronized Servos",
          },
          {
            className: "text-gray-400 text-3xl",
            text: "Advanced Sealing Technology",
          },
          {
            className: "text-gray-400 text-3xl",
            text: "Two-Step Curling Process",
          },
          {
            className: "text-gray-400 text-3xl",
            text: "Comprehensive Control System ",
          },
        ]}
        firstname="Coating"
        secondname="Machine"
      />
    ),
    category: "coating",
    firstname: "Coating",
    secondname: "Machine",
    description:
      "Experience unparalleled efficiency with our Coating Machine...",
    image:ServoDrivenMachine,
    title: "Coating Machine",
    speed: 180,
    unit: "PCS/MIN",
    icon: paperbowl,
  },
  {
    content: (
      <DummyContent
        image={ServoDrivenMachine}
        title="Paper Bucket Machine"
        description="Experience unparalleled efficiency with our Paper Bucket Machine..."
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Paper Bucket Machine", current: true },
        ]}
        buttons={[
          { text: "Know Machine", icon: true },
          { text: "Get a Quote", icon: true },
        ]}
        items={[
          {
            className: "text-gray-400 text-3xl",
            text: "High-Speed Synchronized Servos",
          },
          {
            className: "text-gray-400 text-3xl",
            text: "Advanced Sealing Technology",
          },
          {
            className: "text-gray-400 text-3xl",
            text: "Two-Step Curling Process",
          },
          {
            className: "text-gray-400 text-3xl",
            text: "Comprehensive Control System ",
          },
        ]}
        firstname="Paper"
        secondname="Bucket Machine"
      />
    ),
    category: "bucket",
    firstname: "Paper",
    secondname: "Bucket Machine",
    description:
      "Experience unparalleled efficiency with our Paper Bucket Machine...",
    image:ServoDrivenMachine,
    title: "Paper Bucket Machine",
    speed: 190,
    unit: "PCS/MIN",
    icon: paperbowl,
  },
  {
    content: (
      <DummyContent
        image={ServoDrivenMachine}
        title="Paper Lid Machine"
        description="Experience unparalleled efficiency with our Paper Lid Machine..."
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Paper Lid Machine", current: true },
        ]}
        buttons={[
          { text: "Know Machine", icon: true },
          { text: "Get a Quote", icon: true },
        ]}
        items={[
          {
            className: "text-gray-400 text-3xl",
            text: "High-Speed Synchronized Servos",
          },
          {
            className: "text-gray-400 text-3xl",
            text: "Advanced Sealing Technology",
          },
          {
            className: "text-gray-400 text-3xl",
            text: "Two-Step Curling Process",
          },
          {
            className: "text-gray-400 text-3xl",
            text: "Comprehensive Control System ",
          },
        ]}
        firstname="Paper"
        secondname="Lid Machine"
      />
    ),
    category: "lid",
    firstname: "Paper",
    secondname: "Lid Machine",
    description:
      "Experience unparalleled efficiency with our Paper Lid Machine...",
    image:ServoDrivenMachine,
    title: "Paper Lid Machine",
    speed: 110,
    unit: "PCS/MIN",
    icon: paperbowl,
  },
  {
    content: (
      <DummyContent
        image={ServoDrivenMachine}
        title="Insulated Cup Machine"
        description="Experience unparalleled efficiency with our Insulated Cup Machine..."
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Insulated Cup Machine", current: true },
        ]}
        buttons={[
          { text: "Know Machine", icon: true },
          { text: "Get a Quote", icon: true },
        ]}
        items={[
          {
            className: "text-gray-400 text-3xl",
            text: "High-Speed Synchronized Servos",
          },
          {
            className: "text-gray-400 text-3xl",
            text: "Advanced Sealing Technology",
          },
          {
            className: "text-gray-400 text-3xl",
            text: "Two-Step Curling Process",
          },
          {
            className: "text-gray-400 text-3xl",
            text: "Comprehensive Control System ",
          },
        ]}
        firstname="Insulated"
        secondname="Cup Machine"
      />
    ),
    category: "cup",
    firstname: "Insulated",
    secondname: "Cup Machine",
    description:
      "Experience unparalleled efficiency with our Insulated Cup Machine...",
    image:ServoDrivenMachine,
    title: "Insulated Cup Machine",
    speed: 130,
    unit: "PCS/MIN",
    icon: paperbowl,
  },
  {
    content: (
      <DummyContent
        image={ServoDrivenMachine}
        title="Sleeve Making Machine"
        description="Experience unparalleled efficiency with our Sleeve Making Machine..."
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Sleeve Making Machine", current: true },
        ]}
        buttons={[
          { text: "Know Machine", icon: true },
          { text: "Get a Quote", icon: true },
        ]}
        items={[
          {
            className: "text-gray-400 text-3xl",
            text: "High-Speed Synchronized Servos",
          },
          {
            className: "text-gray-400 text-3xl",
            text: "Advanced Sealing Technology",
          },
          {
            className: "text-gray-400 text-3xl",
            text: "Two-Step Curling Process",
          },
          {
            className: "text-gray-400 text-3xl",
            text: "Comprehensive Control System ",
          },
        ]}
        firstname="Sleeve"
        secondname="Making Machine"
      />
    ),
    category: "sleeve",
    firstname: "Sleeve",
    secondname: "Making Machine",
    description:
      "Experience unparalleled efficiency with our Sleeve Making Machine...",
    image:ServoDrivenMachine,
    title: "Sleeve Making Machine",
    speed: 125,
    unit: "PCS/MIN",
    icon: paperbowl,
  },
  {
    content: (
      <DummyContent
        image={ServoDrivenMachine}
        title="Corrugation Machine"
        description="Experience unparalleled efficiency with our Corrugation Machine..."
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Corrugation Machine", current: true },
        ]}
        buttons={[
          { text: "Know Machine", icon: true },
          { text: "Get a Quote", icon: true },
        ]}
        items={[
          {
            className: "text-gray-400 text-3xl",
            text: "High-Speed Synchronized Servos",
          },
          {
            className: "text-gray-400 text-3xl",
            text: "Advanced Sealing Technology",
          },
          {
            className: "text-gray-400 text-3xl",
            text: "Two-Step Curling Process",
          },
          {
            className: "text-gray-400 text-3xl",
            text: "Comprehensive Control System ",
          },
        ]}
        firstname="Corrugation"
        secondname="Machine"
      />
    ),
    category: "corrugation",
    firstname: "Corrugation",
    secondname: "Machine",
    description:
      "Experience unparalleled efficiency with our Corrugation Machine...",
    image:ServoDrivenMachine,
    title: "Corrugation Machine",
    speed: 135,
    unit: "PCS/MIN",
    icon: paperbowl,
  },
  {
    content: (
      <DummyContent
        image={ServoDrivenMachine}
        title="Paper Handle Cup Machine"
        description="Experience unparalleled efficiency with our Paper Handle Cup Machine..."
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Paper Handle Cup Machine", current: true },
        ]}
        buttons={[
          { text: "Know Machine", icon: true },
          { text: "Get a Quote", icon: true },
        ]}
        items={[
          {
            className: "text-gray-400 text-3xl",
            text: "High-Speed Synchronized Servos",
          },
          {
            className: "text-gray-400 text-3xl",
            text: "Advanced Sealing Technology",
          },
          {
            className: "text-gray-400 text-3xl",
            text: "Two-Step Curling Process",
          },
          {
            className: "text-gray-400 text-3xl",
            text: "Comprehensive Control System ",
          },
        ]}
        firstname="Paper Handle"
        secondname="Cup Machine"
      />
    ),
    category: "cup",
    firstname: "Paper Handle",
    secondname: "Cup Machine",
    description:
      "Experience unparalleled efficiency with our Paper Handle Cup Machine...",
    image:ServoDrivenMachine,
    title: "Paper Handle Cup Machine",
    speed: 145,
    unit: "PCS/MIN",
    icon: paperbowl,
  },
  {
    content: (
      <DummyContent
        image={ServoDrivenMachine}
        title="Paper Bag Machine"
        description="Experience unparalleled efficiency with our Paper Bag Machine..."
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Paper Bag Machine", current: true },
        ]}
        buttons={[
          { text: "Know Machine", icon: true },
          { text: "Get a Quote", icon: true },
        ]}
        items={[
          {
            className: "text-gray-400 text-3xl",
            text: "High-Speed Synchronized Servos",
          },
          {
            className: "text-gray-400 text-3xl",
            text: "Advanced Sealing Technology",
          },
          {
            className: "text-gray-400 text-3xl",
            text: "Two-Step Curling Process",
          },
          {
            className: "text-gray-400 text-3xl",
            text: "Comprehensive Control System ",
          },
        ]}
        firstname="Paper"
        secondname="Bag Machine"
      />
    ),
    category: "bag",
    firstname: "Paper",
    secondname: "Bag Machine",
    description:
      "Experience unparalleled efficiency with our Paper Bag Machine...",
    image:ServoDrivenMachine,
    title: "Paper Bag Machine",
    speed: 150,
    unit: "PCS/MIN",
    icon: paperbowl,
  },
  {
    content: (
      <DummyContent
        image={ServoDrivenMachine}
        title="Paper Straw Machine"
        description="Experience unparalleled efficiency with our Paper Straw Machine..."
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Paper Straw Machine", current: true },
        ]}
        buttons={[
          { text: "Know Machine", icon: true },
          { text: "Get a Quote", icon: true },
        ]}
        items={[
          {
            className: "text-gray-400 text-3xl",
            text: "High-Speed Synchronized Servos",
          },
          {
            className: "text-gray-400 text-3xl",
            text: "Advanced Sealing Technology",
          },
          {
            className: "text-gray-400 text-3xl",
            text: "Two-Step Curling Process",
          },
          {
            className: "text-gray-400 text-3xl",
            text: "Comprehensive Control System ",
          },
        ]}
        firstname="Paper"
        secondname="Straw Machine"
      />
    ),
    category: "straw",
    firstname: "Paper",
    secondname: "Straw Machine",
    description:
      "Experience unparalleled efficiency with our Paper Straw Machine...",
    image:ServoDrivenMachine,
    title: "Paper Straw Machine",
    speed: 160,
    unit: "PCS/MIN",
    icon: paperbowl,
  },
  {
    content: (
      <DummyContent
        image={ServoDrivenMachine}
        title="Paper Cutlery Machine"
        description="Experience unparalleled efficiency with our Paper Cutlery Machine..."
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Paper Cutlery Machine", current: true },
        ]}
        buttons={[
          { text: "Know Machine", icon: true },
          { text: "Get a Quote", icon: true },
        ]}
        items={[
          {
            className: "text-gray-400 text-3xl",
            text: "High-Speed Synchronized Servos",
          },
          {
            className: "text-gray-400 text-3xl",
            text: "Advanced Sealing Technology",
          },
          {
            className: "text-gray-400 text-3xl",
            text: "Two-Step Curling Process",
          },
          {
            className: "text-gray-400 text-3xl",
            text: "Comprehensive Control System ",
          },
        ]}
        firstname="Paper"
        secondname="Cutlery Machine"
      />
    ),
    category: "cutlery",
    firstname: "Paper",
    secondname: "Cutlery Machine",
    description:
      "Experience unparalleled efficiency with our Paper Cutlery Machine...",
    image:ServoDrivenMachine,
    title: "Paper Cutlery Machine",
    speed: 165,
    unit: "PCS/MIN",
    icon: paperbowl,
  },
  {
    content: (
      <DummyContent
        image={ServoDrivenMachine}
        title="Plastic Lid Machine"
        description="Experience unparalleled efficiency with our Plastic Lid Machine..."
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Plastic Lid Machine", current: true },
        ]}
        buttons={[
          { text: "Know Machine", icon: true },
          { text: "Get a Quote", icon: true },
        ]}
        items={[
          {
            className: "text-gray-400 text-3xl",
            text: "High-Speed Synchronized Servos",
          },
          {
            className: "text-gray-400 text-3xl",
            text: "Advanced Sealing Technology",
          },
          {
            className: "text-gray-400 text-3xl",
            text: "Two-Step Curling Process",
          },
          {
            className: "text-gray-400 text-3xl",
            text: "Comprehensive Control System ",
          },
        ]}
        firstname="Plastic"
        secondname="Lid Machine"
      />
    ),
    category: "lid",
    firstname: "Plastic",
    secondname: "Lid Machine",
    description:
      "Experience unparalleled efficiency with our Plastic Lid Machine...",
    image:ServoDrivenMachine,
    title: "Plastic Lid Machine",
    speed: 170,
    unit: "PCS/MIN",
    icon: paperbowl,
  },
  {
    content: (
      <DummyContent
        image={ServoDrivenMachine}
        title="Paper Forming Machine"
        description="Experience unparalleled efficiency with our Paper Forming Machine..."
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Paper Forming Machine", current: true },
        ]}
        buttons={[
          { text: "Know Machine", icon: true },
          { text: "Get a Quote", icon: true },
        ]}
        items={[
          {
            className: "text-gray-400 text-3xl",
            text: "High-Speed Synchronized Servos",
          },
          {
            className: "text-gray-400 text-3xl",
            text: "Advanced Sealing Technology",
          },
          {
            className: "text-gray-400 text-3xl",
            text: "Two-Step Curling Process",
          },
          {
            className: "text-gray-400 text-3xl",
            text: "Comprehensive Control System ",
          },
        ]}
        firstname="Paper"
        secondname="Forming Machine"
      />
    ),
    category: "forming",
    firstname: "Paper",
    secondname: "Forming Machine",
    description:
      "Experience unparalleled efficiency with our Paper Forming Machine...",
    image:ServoDrivenMachine,
    title: "Paper Forming Machine",
    speed: 175,
    unit: "PCS/MIN",
    icon: paperbowl,
  },
  {
    content: (
      <DummyContent
        image={ServoDrivenMachine}
        title="Lunch Box Machine"
        description="Experience unparalleled efficiency with our Lunch Box Machine..."
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Lunch Box Machine", current: true },
        ]}
        buttons={[
          { text: "Know Machine", icon: true },
          { text: "Get a Quote", icon: true },
        ]}
        items={[
          {
            className: "text-gray-400 text-3xl",
            text: "High-Speed Synchronized Servos",
          },
          {
            className: "text-gray-400 text-3xl",
            text: "Advanced Sealing Technology",
          },
          {
            className: "text-gray-400 text-3xl",
            text: "Two-Step Curling Process",
          },
          {
            className: "text-gray-400 text-3xl",
            text: "Comprehensive Control System ",
          },
        ]}
        firstname="Lunch"
        secondname="Box Machine"
      />
    ),
    category: "box",
    firstname: "Lunch",
    secondname: "Box Machine",
    description:
      "Experience unparalleled efficiency with our Lunch Box Machine...",
    image:ServoDrivenMachine,
    title: "Lunch Box Machine",
    speed: 180,
    unit: "PCS/MIN",
    icon: paperbowl,
  },
  {
    content: (
      <DummyContent
        image={ServoDrivenMachine}
        title="Paper Plate Machine"
        description="Experience unparalleled efficiency with our Paper Plate Machine..."
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Paper Plate Machine", current: true },
        ]}
        buttons={[
          { text: "Know Machine", icon: true },
          { text: "Get a Quote", icon: true },
        ]}
        items={[
          {
            className: "text-gray-400 text-3xl",
            text: "High-Speed Synchronized Servos",
          },
          {
            className: "text-gray-400 text-3xl",
            text: "Advanced Sealing Technology",
          },
          {
            className: "text-gray-400 text-3xl",
            text: "Two-Step Curling Process",
          },
          {
            className: "text-gray-400 text-3xl",
            text: "Comprehensive Control System ",
          },
        ]}
        firstname="Paper"
        secondname="Plate Machine"
      />
    ),
    category: "plate",
    firstname: "Paper",
    secondname: "Plate Machine",
    description:
      "Experience unparalleled efficiency with our Paper Plate Machine...",
    image:ServoDrivenMachine,
    title: "Paper Plate Machine",
    speed: 185,
    unit: "PCS/MIN",
    icon: paperbowl,
  },
  {
    content: (
      <DummyContent
        image={ServoDrivenMachine}
        title="Carton Erecting Machine"
        description="Experience unparalleled efficiency with our Carton Erecting Machine..."
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Carton Erecting Machine", current: true },
        ]}
        buttons={[
          { text: "Know Machine", icon: true },
          { text: "Get a Quote", icon: true },
        ]}
        items={[
          {
            className: "text-gray-400 text-3xl",
            text: "High-Speed Synchronized Servos",
          },
          {
            className: "text-gray-400 text-3xl",
            text: "Advanced Sealing Technology",
          },
          {
            className: "text-gray-400 text-3xl",
            text: "Two-Step Curling Process",
          },
          {
            className: "text-gray-400 text-3xl",
            text: "Comprehensive Control System ",
          },
        ]}
        firstname="Carton"
        secondname="Erecting Machine"
      />
    ),
    category: "carton",
    firstname: "Carton",
    secondname: "Erecting Machine",
    description:
      "Experience unparalleled efficiency with our Carton Erecting Machine...",
    image:ServoDrivenMachine,
    title: "Carton Erecting Machine",
    speed: 200,
    unit: "PCS/MIN",
    icon: paperbowl,
  },
];
