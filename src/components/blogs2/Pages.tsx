"use client";
import React, { useState } from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page4 from "./Page4";
import Page5 from "./Page5";

const Pages = () => {
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  return (
    <>
      <div className="flex lg:flex-row flex-col">
        <div className="w-full sticky top-0 lg:h-[82vh] hidden -z-30 lg:block">
          <Page1 onCategorySelect={setSelectedCategory} />
        </div>
        <div className="flex flex-col">
          <Page2 selectedCategories={selectedCategory} />
          <Page4 />
          <Page5 />
        </div>
      </div>
    </>
  );
};

export default Pages;