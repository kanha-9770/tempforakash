"use client";

import React, { useRef } from "react";
import KnowMore from "@/components/Home/KnowMore";
import HomeMachine from "@/components/Home/HomeMachine";
import NewsFeature from "@/components/Home/NewsFeature";
import HomeTestimonial from "@/components/Home/TestimonialsSection";
import NavLinksDemo from "@/components/Home/NavLinks";
import { notFound, useParams } from "next/navigation";
import { Machines } from "@/components/Constants/Navbar/product-data";
import Machine from "@/pages/machine/MachineHome";
import ProductDescription from "@/components/Products/ProductDescription";
import CupFormactionProcess from "@/components/Products/CupFormactionProcess";
import { TechnicalSpecifications } from "@/components/Products/TechnicalSpecification";
import MachineCard from "@/components/Products/MachineCard";
import FaqSection from "@/components/Products/FaqSection";

export default function Home() {
  const params = useParams();

  // Always define hooks at the top level
  const machinename =
    typeof params?.id === "string" ? decodeURIComponent(params.id) : "";
  const machine = Machines.find((m) => m.name === machinename);

  // Define all refs at the top level of the component
  const overviewRef = useRef<HTMLDivElement>(null);
  const productDescriptionRef = useRef<HTMLDivElement>(null);
  const applicationsRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const technicalSpecificationsRef = useRef<HTMLDivElement>(null);
  const optionalAddOnsRef = useRef<HTMLDivElement>(null);
  const faqsRef = useRef<HTMLDivElement>(null);
  const relatedProductsRef = useRef<HTMLDivElement>(null);

  // Conditionally check after defining all hooks
  if (!machinename || !machine) {
    return notFound();
  }

  const navLinks = [
    { text: "Overview", ref: overviewRef },
    { text: "Product Description", ref: productDescriptionRef },
    { text: "Process", ref: processRef },
    { text: "Applications", ref: applicationsRef },
    { text: "Technical Specifications", ref: technicalSpecificationsRef },
    { text: "Optional Add-Ons", ref: optionalAddOnsRef },
    { text: "FAQs", ref: faqsRef },
    { text: "Related Products", ref: relatedProductsRef },
  ];

  return (
    <main className="bg-[#f2f2f2] h-full">
      <Machine
        name={machine.name}
        application={machine.application}
        mimage={machine.mimage}
        product_heading={machine.product_heading}
        first_name={machine.first_name}
        second_name={machine.second_name}
        description={machine.product_description}
      />
      <NavLinksDemo navItems={navLinks} />
      <div className="h-full">
        <div className="mx-10 mt-32" ref={productDescriptionRef}>
          <ProductDescription />
        </div>
        <div className="mx-10 mt-32" ref={processRef}>
          <CupFormactionProcess />
        </div>
        <div className="mx-6 mt-32" ref={applicationsRef}>
          {/* <KnowMore /> */}
        </div>

        <div className="mx-6 mt-32" ref={technicalSpecificationsRef}>
          <TechnicalSpecifications />
        </div>

        <div className="mx-6 mt-32" ref={faqsRef}>
          <FaqSection />
        </div>
        <div className="mx-6 mt-32" ref={relatedProductsRef}>
          <MachineCard />
        </div>
      </div>
    </main>
  );
}
