import React, { useEffect } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { Item } from "../../type"; // Adjust the path according to your file structure
import Breadcrumb from "./Breadcrumb";
import { MdKeyboardArrowRight } from "react-icons/md";
import PositionAwareButton from "./PositionAwareButton";

interface ModalProps {
  image: StaticImageData;
  title?: string; // Optional
  firstname?: string; // Optional
  secondname?: string; // Optional
  description?: string; // Optional
  items?: Item[]; // Optional
  onClose: () => void;
}

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.1, duration: 0.3 } },
};

const imageVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { delay: 0.1, duration: 0.3 } },
};

const Modal: React.FC<ModalProps> = ({
  image,
  title = "Default Title", // Provide default values
  firstname = "John",
  secondname = "Doe",
  description = "Default description",
  items = [], // Default to an empty array
  onClose,
}) => {
  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: title, current: true },
  ];

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center">
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm"></div>
      <motion.div
        className="relative w-full max-w-[78rem] h-[90vh] bg-white rounded-xl p-6 transform transition-transform overflow-y-auto z-10"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl font-bold text-gray-700"
        >
          &times;
        </button>
        <Breadcrumb items={breadcrumbItems} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <motion.div
            className="flex flex-col items-center"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <Image
              src={image}
              alt={title}
              width={600}
              height={400}
              className="rounded-lg object-contain h-[400px]"
            />
            <div className="flex w-[60%] -ml-14 gap-4 justify-center mt-0">
              <PositionAwareButton text={"Know Machine"} icon={true} width="180px" />
              <PositionAwareButton text={"Get a Quote"} icon={true} width="160px" />
            </div>
          </motion.div>
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-3xl font-bold mb-4">
              <span className="text-red-600">{firstname}</span>
              <span className="text-[#483d78] ml-2">{secondname}</span>
            </h1>
            <p className="text-gray-700 text-base font-regular mb-4">{description}</p>
            <ul className="list-none grid grid-cols-2 gap-4 text-gray-700">
              {items.map((item, index) => (
                <li key={index} className="flex text-base font-regular items-center space-x-2">
                  {item.icon}
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Modal;
