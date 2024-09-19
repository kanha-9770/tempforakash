"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// JSON data provided (assuming this is imported or defined above the component)
const mockCategories = [
  {
    name: "Machine Tools",
    images: [
      {
        name: "Grinding Machine",
        src: "https://example.com/images/grinding_machine.jpg",
      },
      {
        name: "Lathe Machine",
        src: "https://example.com/images/lathe_machine.jpg",
      },
      {
        name: "Milling Machine",
        src: "https://example.com/images/milling_machine.jpg",
      },
      {
        name: "Drilling Machine",
        src: "https://example.com/images/drilling_machine.jpg",
      },
    ],
  },
  {
    name: "Industrial Machinery",
    images: [
      {
        name: "CNC Machine",
        src: "https://example.com/images/cnc_machine.jpg",
      },
      {
        name: "Hydraulic Press",
        src: "https://example.com/images/hydraulic_press.jpg",
      },
      {
        name: "Injection Molding",
        src: "https://example.com/images/injection_molding.jpg",
      },
      {
        name: "Textile Machine",
        src: "https://example.com/images/textile_machine.jpg",
      },
    ],
  },
  {
    name: "Construction Equipment",
    images: [
      {
        name: "Excavator",
        src: "https://example.com/images/excavator.jpg",
      },
      {
        name: "Crane",
        src: "https://example.com/images/crane.jpg",
      },
      {
        name: "Bulldozer",
        src: "https://example.com/images/bulldozer.jpg",
      },
      {
        name: "Concrete Mixer",
        src: "https://example.com/images/concrete_mixer.jpg",
      },
    ],
  },
];

export default function ImageGallery() {
  const [currentImages, setCurrentImages] = useState(mockCategories[0].images);
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleCategoryHover = (
    categoryImages: { name: string; src: string }[]
  ) => {
    setCurrentImages(categoryImages);
    setCurrentSlide(0);
  };
  const handleSlideChange = (direction: "left" | "right") => {
    if (direction === "left" && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else if (
      direction === "right" &&
      currentSlide < Math.ceil(currentImages.length / 6) - 1
    ) {
      setCurrentSlide(currentSlide + 1);
    }
  }
  return (
    <div className="flex flex-col md:flex-row h-auto bg-background">
      {/* Left Section: Image Gallery */}
      <div className="w-full md:w-2/3 p-4 relative">
        <div className="grid grid-cols-3 gap-4">
          {currentImages
            .slice(currentSlide * 6, (currentSlide + 1) * 6)
            .map((image, index) => (
              <div
                key={index}
                className="relative aspect-[3/2] overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={image.src}
                  alt={image.name}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 w-full text-center">
                  {image.name}
                </div>
              </div>
            ))}
        </div>
        {currentImages.length > 6 && (
          <>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-6 top-1/2 transform -translate-y-1/2"
              onClick={() => handleSlideChange("left")}
              disabled={currentSlide === 0}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-6 top-1/2 transform -translate-y-1/2"
              onClick={() => handleSlideChange("right")}
              disabled={
                currentSlide === Math.ceil(currentImages.length / 6) - 1
              }
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </>
        )}
      </div>

      {/* Right Section: Machine Categories */}
      <div className="w-full md:w-1/3 p-4 bg-muted rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">Machine Categories</h2>
        <ul className="space-y-2">
          {mockCategories.map((category, index) => (
            <li
              key={index}
              className="p-2 rounded-md hover:bg-accent transition-colors duration-200 cursor-pointer"
              onMouseEnter={() => handleCategoryHover(category.images)}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
