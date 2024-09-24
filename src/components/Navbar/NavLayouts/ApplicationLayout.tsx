import { useState } from "react";
import HandBurgerBox from "../../Icons/HandBurgerBox";
import LunchBox from "../../Icons/LunchBox";
import PaperBlank from "../../Icons/PaperBlank";
import PaperBowl from "../../Icons/PaperBowl";
import PaperCup from "../../Icons/PaperCup";
import PaperCupWithLid from "../../Icons/PaperCupWithLid";
import PaperCupWithSleeve from "../../Icons/PaperCupWithSleeve";
import PaperCutlery from "../../Icons/PaperCutlery";
import PaperPlate from "../../Icons/PaperPlate";
import PaperRoll from "../../Icons/PaperRoll";
import PaperStraw from "../../Icons/PaperStraw";
import PopcornTub from "../../Icons/PopcornTub";
import PositionAwareButton from "../../ui/PositionAwareButton";
import { Button } from "../../ui/button";
import { ArrowRightIcon } from "lucide-react";

interface Product {
  id: string;
  name: string;
  description: string;
}

const componentList = [
  PaperCutlery,
  PaperCupWithSleeve,
  PaperCupWithLid,
  PaperCup,
  PopcornTub,
  LunchBox,
  PaperStraw,
  PaperRoll,
  PaperPlate,
  PaperBowl,
  PaperBlank,
  HandBurgerBox,
];

const products: Product[] = [
  {
    id: "1",
    name: "Paper Cutlery",
    description:
      "High-quality paper cutlery designed for sustainable dining. Perfect for eco-friendly events, offering both durability and convenience in single-use form.",
  },
  {
    id: "2",
    name: "Paper Cup with Sleeve",
    description:
      "Insulated paper cups with a sleeve for hot beverages. Ideal for cafes and takeout services, ensuring hands stay protected while enjoying hot drinks.",
  },
  {
    id: "3",
    name: "Paper Cup with Lid",
    description:
      "Standard paper cups paired with lids, perfect for serving cold beverages. A great solution for takeaways and outdoor events.",
  },
  {
    id: "4",
    name: "Paper Cup",
    description:
      "Durable paper cups, perfect for serving cold drinks. An essential for any cafe or event where disposables are needed.",
  },
  {
    id: "5",
    name: "Popcorn Tub",
    description:
      "Large, durable paper tubs designed for popcorn or other snacks. Perfect for movie theaters and events.",
  },
  {
    id: "6",
    name: "Lunch Box",
    description:
      "Foldable, eco-friendly paper lunch boxes, ideal for takeout meals and catering services. Perfect for maintaining food freshness while being environmentally friendly.",
  },
  {
    id: "7",
    name: "Paper Straw",
    description:
      "Biodegradable paper straws suitable for any beverage. An eco-friendly alternative to plastic straws, perfect for restaurants and cafes.",
  },
  {
    id: "8",
    name: "Paper Roll",
    description:
      "Versatile paper rolls for a wide range of uses, from crafts to packaging. Ideal for commercial and personal applications.",
  },
  {
    id: "9",
    name: "Paper Plate",
    description:
      "Durable, disposable paper plates perfect for parties, picnics, and events. A practical, eco-friendly option for serving food.",
  },
  {
    id: "10",
    name: "Paper Bowl",
    description:
      "Disposable paper bowls designed for serving soups, salads, and other dishes. Ideal for eco-conscious dining.",
  },
  {
    id: "11",
    name: "Paper Blank",
    description:
      "Blank paper sheets perfect for versatile use, including packaging, printing, or crafts. A sustainable choice for all your paper needs.",
  },
  {
    id: "12",
    name: "Hand Burger Box",
    description:
      "Eco-friendly paper boxes designed specifically for burgers. Ideal for takeout and food delivery services, keeping burgers fresh and intact.",
  },
];

export default function ApplicationLayout() {
  const [activeProduct, setActiveProduct] = useState<Product>(products[0]);

  return (
    <div className="flex flex-col md:flex-row w-full h-full p-4">
      <div className="relative md:w-[70%] grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4 mb-4 md:mb-0 md:mr-4">
        {products.map((product, index) => {
          const IconComponent = componentList[index];
          return (
            <div
              key={product.id}
              className="flex flex-col items-center justify-center p-2 invert-0 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              onMouseEnter={() => setActiveProduct(product)}
            >
              <IconComponent />
              <span className="text-xs text-center invert-0">
                {product.name}
              </span>
            </div>
          );
        })}

        <div className="absolute bottom-4 right-4">
          <Button className="rounded-full flex items-center bg-primary text-primary-foreground hover:bg-primary/90 px-1 py-2 text-base font-regular group">
            <span className="flex-grow ml-2 text-center">View All</span>
            <span className="ml-2 bg-white rounded-full p-1 transition-colors duration-200 group-hover:bg-black">
              <ArrowRightIcon className="h-5 w-5 text-primary transition-colors duration-200 group-hover:text-white" />
            </span>
          </Button>
        </div>
      </div>

      <div className="md:w-[30%] border-l p-6 flex flex-col  relative">
        <div className="absolute inset-0 px-8  h-full w-full opacity-5 pointer-events-none">
          {(() => {
            const ActiveIconComponent =
              componentList[
                products.findIndex((p) => p.id === activeProduct.id)
              ];
            return <ActiveIconComponent width={"100%"} />;
          })()}
        </div>
        <div className="relative w-full  z-10">
          <h2 className="w-full text-5xl font-semibold">
            <span className="text-[#9e9c9c]">
              {activeProduct?.name.trim().replace(/\s+\S+$/, "")}
            </span>{" "}
            <span className="text-[#dc0e2a]">
              {activeProduct?.name.trim().match(/\S+$/)}
            </span>
          </h2>

          <p className="pt-6 invert-0 mb-4">{activeProduct.description}</p>
        </div>
        <div className="absolute bottom-6 right-8 z-10">
          <PositionAwareButton text={"Explore More"} icon={true} />
        </div>
      </div>
    </div>
  );
}
