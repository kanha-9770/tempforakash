import AboutLayout from "../../Layout/AboutLayout";
import SupportLayout from "../../Layout/SupportLayout";
import ProductLayout from "../../Layout/ProductLayout";
import ApplicationPage from "../../Layout/ApplicationLayout";
import SolutionLayout from "../../Layout/Solution";
import { supporItem, supportMobile } from "./support-data";
import { DataBankItem } from "./resources-data";
import SupportGrid from "@/components/Layout/Support";
import { StaticImageData } from "next/image";
import ResourceGrid from "@/components/Layout/ResourceLayout";

export interface NavbarItem {
  name: string;
  component: React.ReactNode;
  type?: string;
}

export const navbarItems: NavbarItem[] = [
  {
    name: "About Us",
    component: <AboutLayout />,
  },
  {
    name: "Products",
    component: (
      <ProductLayout
        setHoveredItem={() => {}}
        setHeading={() => {}}
        setIsVisible={() => {}}
      />
    ),
  },
  {
    name: "Application",
    component: <ApplicationPage />,
  },
  {
    name: "Solution",
    component: <SolutionLayout />,
  },
  {
    name: "Support",
    component: (
      <SupportGrid supporItem={supporItem} supportMobile={supportMobile} />
    ),
  },
  {
    name: "Resources",
    component: <ResourceGrid supporItem={DataBankItem} supportMobile={supportMobile} />,
  },
];
