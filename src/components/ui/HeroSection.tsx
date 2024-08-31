"use client";
import React, { useEffect, useState } from "react";
import { Testing } from "@/components/ui/Testing";
export function InfiniteMovingCardsDemo() {
  return (
    <div className="ml-0 lg:ml-14 h-screen mask-gradient rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <Testing items={testimonials} speed="slow" />
    </div>
  );
}

const testimonials = [
  {
    src: "https://i.pinimg.com/236x/36/a2/e2/36a2e242bfe3ac039e0618fbaaef7596.jpg",
    username: "Alice Johnson",
    profile: "Software Developer",
    country: "USA",
    quote: "Innovate and elevate. Embrace the future with bold ideas.",
    flag: "https://flagcdn.com/us.svg",
  },
  {
    src: "https://i.pinimg.com/236x/b9/e4/5d/b9e45d2667c272dfb56e22fc0e1fbc64.jpg",
    username: "Michael Brown",
    profile: "Graphic Designer",
    country: "Canada",
    quote: "Design is intelligence made visible. Creativity transforms.",
    flag: "https://flagcdn.com/ca.svg",
  },
  {
    src: "https://i.pinimg.com/236x/05/3f/86/053f86bf19f82e5488b518bcfed17c64.jpg",
    username: "Sophia Lee",
    profile: "Product Manager",
    country: "UK",
    quote: "Innovate and elevate. Embrace the future with bold ideas.",
    flag: "https://flagcdn.com/gb.svg",
  },
  {
    src: "https://i.pinimg.com/236x/b4/0a/81/b40a81ccb4e3b2cac2748622d4929d03.jpg",
    username: "David Miller",
    profile: "Marketing Specialist",
    country: "Australia",
    quote: "Design is intelligence made visible. Creativity transforms.",
    flag: "https://flagcdn.com/at.svg",
  },
  {
    src: "https://i.pinimg.com/236x/81/ac/9e/81ac9ef6456e8eccbf651fc368e83e4a.jpg",
    username: "Emily Davis",
    profile: "UX Researcher",
    country: "Germany",
    quote: "Innovate and elevate. Embrace the future with bold ideas.",
    flag: "https://flagcdn.com/de.svg",
  },
  {
    src: "https://i.pinimg.com/236x/4d/9c/34/4d9c34104c98b22ea66bf6b8f64ff5b6.jpg",
    username: "Oliver Martinez",
    profile: "Data Scientist",
    country: "Spain",
    quote: "Design is intelligence made visible. Creativity transforms.",
    flag: "https://flagcdn.com/es.svg",
  },
  {
    src: "https://i.pinimg.com/236x/bc/61/97/bc61979451b11263cab4f49e21ffc131.jpg",
    username: "Charlotte Garcia",
    profile: "Business Analyst",
    country: "France",
    quote: "Innovate and elevate. Embrace the future with bold ideas.",
    flag: "https://flagcdn.com/fr.svg",
  },
  {
    src: "https://i.pinimg.com/564x/5a/2a/89/5a2a89a9c7962e026a8572b701586500.jpg",
    username: "William Robinson",
    profile: "SEO Specialist",
    country: "Italy",
    quote: "Design is intelligence made visible. Creativity transforms.",
    flag: "https://flagcdn.com/it.svg",
  },
  {
    src: "https://i.pinimg.com/736x/ff/b3/1e/ffb31e98ffb84717ead291e69a3488ee.jpg",
    username: "Amelia Martinez",
    profile: "Web Developer",
    country: "Mexico",
    quote: "Innovate and elevate. Embrace the future with bold ideas.",
    flag: "https://flagcdn.com/fr.svg",
  },
  {
    src: "https://i.pinimg.com/564x/16/af/25/16af2524bc4a0704adcb18eb9bd92b24.jpg",
    username: "Liam Johnson",
    profile: "Content Writer",
    country: "Japan",
    quote: "Design is intelligence made visible. Creativity transforms.",
    flag: "https://flagcdn.com/me.svg",
  },
  {
    src: "https://i.pinimg.com/564x/d0/cb/d1/d0cbd1380c72ddf3750c896433b2dea1.jpg",
    username: "Evelyn Moore",
    profile: "Project Manager",
    country: "Brazil",
    quote: "Innovate and elevate. Embrace the future with bold ideas.",
    flag: "https://flagcdn.com/br.svg",
  },
  {
    src: "https://i.pinimg.com/736x/b8/82/83/b882836fa749f501aefa935d19e19977.jpg",
    username: "Lucas Taylor",
    profile: "Social Media Manager",
    country: "South Africa",
    quote: "Design is intelligence made visible. Creativity transforms.",
    flag: "https://flagcdn.com/za.svg",
  },
  {
    src: "https://i.pinimg.com/564x/c1/4b/88/c14b8848983ccd7fc28850c3e2caf656.jpg",
    username: "Mia Clark",
    profile: "Quality Assurance",
    country: "India",
    quote: "Innovate and elevate. Embrace the future with bold ideas.",
    flag: "https://flagcdn.com/in.svg",
  },
  {
    src: "https://i.pinimg.com/564x/90/42/44/90424430eaa5793ac1e893f074b456f2.jpg",
    username: "Henry Anderson",
    profile: "Digital Marketer",
    country: "New Zealand",
    quote: "Design is intelligence made visible. Creativity transforms.",
    flag: "https://flagcdn.com/fr.svg",
  },
];
