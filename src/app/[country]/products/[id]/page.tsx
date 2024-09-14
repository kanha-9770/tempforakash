"use client";
import React, { useRef } from "react";
import NavLinksDemo from "@/components/Home/NavLinks";
import { notFound, useParams } from "next/navigation";
import Machine from "@/components/Products/machine/MachineHome";
import ProductDescription from "@/components/Products/ProductDescription";
import CupFormactionProcess from "@/components/Products/CupFormactionProcess";
import { TechnicalSpecifications } from "@/components/Products/TechnicalSpecification";
import MachineCard from "@/components/Products/MachineCard";
import { SignupFormDemoProduct } from "@/components/Contact/CustomProductForm";
import NewMachine from "@/components/Products/machine/NewMachine"; // Ensure this is correct
import machineData from "../../../../components/Products/machine.json"; // Import the machine.json file
import { ProductApplication } from "@/components/Products/ProductApplication";
import FaqProducts from "@/components/Faq/FaqProduct";
import RelatedProducts from "@/components/Products/RelatedProducts";

export default function Home() {
  const params = useParams();

  const machinename =
    typeof params?.id === "string" ? decodeURIComponent(params.id) : "";

  const product = machineData.find((m) => m.category === "Product");

  // Optional chaining to safely access Machines array
  const machine = product?.data?.Machines?.find((m) => m.name === machinename);

  const overviewRef = useRef<HTMLDivElement>(null);
  const productDescriptionRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const applicationRef = useRef<HTMLDivElement>(null);
  const technicalSpecificationsRef = useRef<HTMLDivElement>(null);
  const optionalAddOnsRef = useRef<HTMLDivElement>(null);
  const faqsRef = useRef<HTMLDivElement>(null);
  const relatedProductsRef = useRef<HTMLDivElement>(null);

  if (!machinename || !machine) {
    return notFound();
  }

  const navLinks = [
    { text: "Overview", ref: overviewRef },
    { text: "Product Description", ref: productDescriptionRef },
    { text: "Process", ref: processRef },
    { text: "Application", ref: applicationRef },
    { text: "Technical Specifications", ref: technicalSpecificationsRef },
    { text: "Optional Add-Ons", ref: optionalAddOnsRef },
    { text: "FAQs", ref: faqsRef },
    { text: "Related Products", ref: relatedProductsRef },
  ];

  return (
    <main className="bg-[#f2f2f2] w-full h-full">
      <Machine
        name={machine.name}
        image={machine.image}
        application={machine.application}
        mimage={machine.mimage}
        product_heading={machine.product_heading}
        first_name={machine.first_name}
        second_name={machine.second_name}
        description={machine.product_description}
        specification_image={machine.specification_image}
        advantages={machine.advantages}
        category={""}
        icon={""}
        introduction={machine.introduction}
        parameters={""}
        product_description={""}
        status={""}
        optional_add_ons={""}
        faqs={""}
        related_product={""}
      />
      <NavLinksDemo type="product" navItems={navLinks} />
      {/* <NewMachine
        name={machine.name}
        status={machine.status}
        rating={machine.rating}
        technicalSpecifications={machine.technicalSpecifications}
        advantages={machine.advantages}
        paperTypes={machine.paperTypes}
        application={machine.application}
        image={machine.image}
        mimage={machine.mimage}
        product_heading={machine.product_heading}
        first_name={machine.first_name}
        second_name={machine.second_name}
        description={machine.product_description}
        specification_image={machine.specification_image}
      /> */}
      <div className="h-full px-10 mt-24 gap-4 flex flex-row w-full">
        <div className="w-[66.2%] ">
          <div className=" " ref={productDescriptionRef}>
            <ProductDescription machine={machine} />
          </div>
          <div className=" mt-32" ref={processRef}>
            <CupFormactionProcess />
          </div>
          <div className=" mt-32" ref={applicationRef}>
            <ProductApplication />
          </div>

          <div className="mt-32" ref={technicalSpecificationsRef}>
            <TechnicalSpecifications />
          </div>
          <div className="mt-32" ref={faqsRef}>
            <FaqProducts />
          </div>
        </div>
        <div className="w-[33%] sticky">
          <SignupFormDemoProduct />
        </div>
      </div>
      <div className="mt-32" ref={relatedProductsRef}>
        <RelatedProducts />
      </div>
    </main>
  );
}
