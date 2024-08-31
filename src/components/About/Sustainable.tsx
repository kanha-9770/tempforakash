"use client";

import Head from 'next/head';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { SlArrowRight } from 'react-icons/sl';
import { gsap } from 'gsap/gsap-core';
import styles from '../About/about.module.css';
import bg from '../../../public/assets/about/sustainable.jpeg';
import { sustainableContent } from '../Constants/About/Sustainable-page'; // Import the dynamic content

const Sustainable = () => {
  const { heading, highlight, description, buttonText } = sustainableContent;

  return (
    <>
      <div className="relative h-full">
        <div className="absolute inset-0">
          <Image 
            src={bg} 
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-75"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white min-h-screen">
          <h1 className="text-5xl font-montserrat -mt-[14%]">
            {heading} <span className="text-red-600">{highlight}</span>
          </h1>
          <p className="mt-10 text-sm font-montserrat px-4 md:px-32 text-center">
            {description}
          </p>
          <div className={`${styles.container}`}>
            <button className={styles.button}>
              {buttonText}
              <SlArrowRight className={styles.icon} /> 
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sustainable;
