"use client";
import React, { useRef } from "react";
import KnowMore from "@/components/Home/KnowMore";
import HomeMachine from "@/components/Home/HomeMachine";
import NewsFeature from "@/components/Home/NewsFeature";
import HomeTestimonial from "@/components/Home/TestimonialsSection";
import { data } from "@/components/Constants/Navbar/about-data";
import NavLinksDemo from "@/components/Home/NavLinks";
import { notFound, useParams } from "next/navigation";
import { Machines } from "@/components/Constants/Navbar/product-data";
import Machine from "@/pages/machine/MachineHome";
// import { TechnicalSpecifications } from "@/components/OurMachine/TechnicalSpecification";
// import { Process } from "@/components/OurMachine/Process";

export default function Home() {
  const params = useParams();
  const machinename =
    typeof params?.id === "string" ? decodeURIComponent(params.id) : "";

  // Check if machinename is valid
  if (!machinename) {
    return notFound(); // Handle the case where machinename is not available
  }

  // Find the machine that matches the machinename
  const machine = Machines.find((m) => m.name === machinename);

  if (!machine) {
    return notFound(); // Handle the case where no matching machine is found
  }
  const overviewRef = useRef<HTMLDivElement>(null);
  const productDescriptionRef = useRef<HTMLDivElement>(null);
  const applicationsRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const technicalSpecificationsRef = useRef<HTMLDivElement>(null);
  const optionalAddOnsRef = useRef<HTMLDivElement>(null);
  const faqsRef = useRef<HTMLDivElement>(null);
  const relatedProductsRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { text: "Overview", ref: overviewRef },
    { text: "Product Description", ref: productDescriptionRef },
    { text: "Applications", ref: applicationsRef },
    { text: "Process", ref: processRef },
    { text: "Technical Specifications", ref: technicalSpecificationsRef },
    { text: "Optional Add-Ons", ref: optionalAddOnsRef },
    { text: "FAQs", ref: faqsRef },
    { text: "Related Products", ref: relatedProductsRef },
  ];

  return (
    <main className="bg-[#f2f2f2]">
      <Machine
        product_heading={machine.product_heading}
        name={machine.name}
        application={machine.application}
        mimage={machine.mimage}
      />{" "}
      <div className="mt-0 "></div>
      <NavLinksDemo navItems={navLinks} />
      <div className="h-full">
        {/* <div className="mx-10 mt-4" ref={overviewRef}>
          <TechnicalSpecifications/>
        </div> */}
        {/* <div className="mx-10 mt-0" ref={productDescriptionRef}>
          <Process/>
        </div> */}
        <div className="mx-6 mt-32" ref={applicationsRef}>
          <KnowMore />
        </div>
        <div className="mx-6 mt-32" ref={processRef}>
          <HomeMachine />
        </div>
        <div className="mx-6 mt-32" ref={technicalSpecificationsRef}>
          <NewsFeature />
        </div>

        <div className="mx-6 mt-32" ref={faqsRef}>
          <HomeTestimonial />
        </div>
      </div>
    </main>
  );
}
