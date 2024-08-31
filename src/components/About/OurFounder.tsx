"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GrAddCircle } from "react-icons/gr";
import { ImCross } from "react-icons/im";
import styles from "./about.module.css";
import { founders } from "../Constants/About/OurFounders-page"; // Import the dynamic content
import { FaQuoteLeft } from "react-icons/fa";

interface FounderProps {
  name: string;
  title: string;
  description: string;
  imageSrc: string;
  linkedInUrl: string;
}

interface CardProps {
  handleCloseModal: () => void;
  founderData: FounderProps;
}

const FounderCard: React.FC<FounderProps & { onOpenModal: () => void }> = ({
  name,
  title,
  imageSrc,
  linkedInUrl,
  description,
  onOpenModal,
}) => (
  <div
    className={`${styles.card} lg:w-[35%] w-full mb-8 lg:mb-0 flex lg:flex-col  `}
  >
    {/* Image container */}
    <div className={`  h-full p-4 w-full`}>
      <Image
        className="transform 0.3 ease-in-out  lg:rounded-t-lg w-full rounded-lg lg:rounded-none "
        src={imageSrc}
        alt={name}
        width={400}
        height={400}
      />
    </div>

    {/* Content */}
    <div className="relative bg-red-400 justify-center ">
      <h3 className={`${styles.nameTitle} px-4`}>
        {name}
        <a
          href={linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkedinIcon}
        >
          <Image
            src="/assets/about/linkedin.png"
            alt="LinkedIn"
            width={20}
            height={20}
            className="inline-block"
          />
        </a>
      </h3>
      <p className="px-4">{title}</p>
      <FaQuoteLeft className="lg:invisible visible ml-14 " />
      <p className="lg:invisible visible  ">
        “The work we do reflect who we are”
      </p>

      {/* Hidden box for description */}
      <div
        className={`${styles.descriptionContainer} space-y-4 px-4 h-full lg:visible invisible`}
      >
        <div className="flex flex-col">
          <h3 className="font-bold font-poppins text-lg">{name}</h3>
          <p className="font-poppins">{title}</p>
        </div>
        <p className="text-black font-montserrat leading-5">{description}</p>
      </div>
    </div>
  </div>
);

const Card: React.FC<CardProps> = ({ handleCloseModal, founderData }) => {
  return (
    <div className="p-1 top-6 bg-white h-[88%] w-[95%] rounded-xl shadow-md relative bottom-5 text-black ">
      {/* Display founder data */}
      <div className="p-4">
        <h3 className="text-xl font-bold">{founderData.name}</h3>
        <p className="text-lg">{founderData.title}</p>
        <p>{founderData.description}</p>
      </div>
    </div>
  );
};

const Founders = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFounder, setSelectedFounder] = useState<FounderProps | null>(
    null
  );

  const openModal = (founder: FounderProps) => {
    setSelectedFounder(founder);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedFounder(null);
  };

  return (
    <div className="bg-black text-white space-y-8 lg:w-full lg:h-full p-16 min-h-screen">
      <h2 className="text-center text-5xl font-montserrat  mt-24">
        Our Founders
      </h2>
      <div className="lg:flex justify-center lg:space-x-8  w-[90vw] lg:w-full mx-5 lg:mx-0">
        {founders.map((founder, index) => (
          <FounderCard
            key={index}
            {...founder}
            onOpenModal={() => openModal(founder)}
          />
        ))}
      </div>
    </div>
  );
};

export default Founders;
