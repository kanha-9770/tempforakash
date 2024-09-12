import AboutLayout from "../../Layout/AboutLayout";
import ProductLayout from "../../Layout/ProductLayout";
import ApplicationPage from "../../Layout/ApplicationLayout";
import SupportGrid from "@/components/Layout/Support";
import ResourceGrid from "@/components/Layout/ResourceLayout";

export interface NavbarItem {
  name: string;
  link: string;
  component?: React.ReactNode;
  type?: string;
}

export const navbarItems: NavbarItem[] = [
  {
    name: "About Us",
    link: "about",
    component: (
      <AboutLayout
        category={""}
        data={{
          navLeftData: [],
          navRightData: [],
        }}
      />
    ),
  },
  {
    name: "Products",
    link: "Products",
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
    link: "application",
    component: <ApplicationPage />,
  },

  {
    name: "Support",
    link: "support",
    component: (
      <SupportGrid
        supportItem={[]}
        supportMobile={{
          mobileFirst: "",
          mobileSecond: "",
        }}
      />
    ),
  },
  {
    name: "Resources",
    link: "resources",
    component: <ResourceGrid supporItem={[]} ResourcesMobile={[]} />,
  },
  {
    name: "Video",
    link: "video",
    component: <ResourceGrid supporItem={[]} ResourcesMobile={[]} />,
  },
  {
    name: "Contact",
    link: "contact",
  },
];
// for mobile
