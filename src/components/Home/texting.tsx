"use client";
import SupportGrid from "@/components/Layout/Support";
import ResourceGrid from "@/components/Layout/ResourceLayout";
import Image from "next/image";
import Link from "next/link";
import CountryLayout from "../Layout/CountryLayout";

import ContactForm from "../Contact/Contact";
import Logo from "../../../public/assets/Logo.png";
import { Menu, MenuItem } from "./nav-menue";
import { useState, useEffect } from "react";
import {
  DataBankItem,
  ResourcesMobile,
} from "../Constants/Navbar/resources-data";
import AboutLayout from "../Layout/AboutLayout";
import ApplicationPage from "../Layout/ApplicationLayout";
import ProductLayout from "../Layout/ProductLayout";

export default function NavbarDemo() {
  return (
    <div className="relative lg:h-auto lg:mt-0 flex items-center justify-between lg:justify-center">
      <Navbar className="top-0" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [searchValue, setSearchValue] = useState<string>("");
  const [isVisible, setIsVisible] = useState(true);
  const [visibilityState, setVisibilityState] = useState({
    isFlagOpen: false,
    isContactFormVisible: false,
  });

  const toggleMenu = () => setIsOpen(!isOpen);
  const expandItem = (item: string) =>
    setExpandedItem(expandedItem === item ? null : item);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchValue(e.target.value);
  const handleClearSearch = () => setSearchValue("");

  useEffect(() => {
    setIsVisible(!visibilityState.isFlagOpen);
  }, [visibilityState]);

  return (
    <div
      className={`fixed flex w-full bg-white font-poppins lg:mt-0 items-center inset-x-0 mx-auto z-[99999] ${className}`}
    >
      {/* Desktop Menu */}
      <div className="hidden px-8 lg:flex w-full">
        <div className="w-1/5 flex items-center">
          <Link href="/" className="w-full h-full flex items-center">
            <Image
              src={Logo}
              alt="Logo"
              width={500}
              height={500}
              className="h-[1.4rem] w-20"
            />
          </Link>
        </div>

        <div className="w-3/5 flex items-center justify-center">
          <Menu>
            <MenuItem
              setActive={() => {}}
              active={null}
              item="About Us"
              link="about"
              setPosition={function (position: {
                left: number;
                width: number;
                opacity: number;
              }): void {
                throw new Error("Function not implemented.");
              }}
            >
              <AboutLayout
                category={""}
                data={{
                  navLeftData: [],
                  navRightData: [],
                }}
              />
            </MenuItem>

            <MenuItem
              setActive={() => {}}
              active={null}
              item="Products"
              link="Products"
              setPosition={function (position: {
                left: number;
                width: number;
                opacity: number;
              }): void {
                throw new Error("Function not implemented.");
              }}
            >
              <ProductLayout
                setHoveredItem={() => {}}
                setHeading={() => {}}
                setIsVisible={() => {}}
              />
            </MenuItem>

            <MenuItem
              setActive={() => {}}
              active={null}
              item="Application"
              link="application"
              setPosition={function (position: {
                left: number;
                width: number;
                opacity: number;
              }): void {
                throw new Error("Function not implemented.");
              }}
            >
              <ApplicationPage />
            </MenuItem>

            <MenuItem
              setActive={() => {}}
              active={null}
              item="Support"
              link="support"
              setPosition={function (position: {
                left: number;
                width: number;
                opacity: number;
              }): void {
                throw new Error("Function not implemented.");
              }}
            >
              <SupportGrid supportItem={[]} supportMobile={{
                mobileFirst: "",
                mobileSecond: ""
              }} />
            </MenuItem>

            <MenuItem
              setActive={() => {}}
              active={null}
              item="Resources"
              link="resources"
              setPosition={function (position: {
                left: number;
                width: number;
                opacity: number;
              }): void {
                throw new Error("Function not implemented.");
              }}
            >
              <ResourceGrid supporItem={[]} ResourcesMobile={[]} />
            </MenuItem>

            <MenuItem
              setActive={() => {}}
              active={null}
              item="Video"
              link="video"
              setPosition={function (position: {
                left: number;
                width: number;
                opacity: number;
              }): void {
                throw new Error("Function not implemented.");
              }}
            >
              <ResourceGrid supporItem={[]} ResourcesMobile={[]} />
            </MenuItem>

            <MenuItem
              setActive={() => {}}
              active={null}
              item="Contact"
              link="contact"
              setPosition={function (position: {
                left: number;
                width: number;
                opacity: number;
              }): void {
                throw new Error("Function not implemented.");
              }}
            />
          </Menu>
        </div>

        <div className="w-1/5 flex h-14 justify-end items-center gap-4">
          <div className="bg-[#f2f2f2] gap-2 px-2 rounded-3xl">
            <CountryLayout />
          </div>
          <ContactForm
            isContactFormVisible={visibilityState.isContactFormVisible}
            setContactFormVisible={(value) =>
              setVisibilityState((prev) => ({
                ...prev,
                isContactFormVisible: value,
              }))
            }
            isVisible={isVisible}
            setIsFlagOpen={(value) =>
              setVisibilityState((prev) => ({ ...prev, isFlagOpen: value }))
            }
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden flex w-full">
        <div className="w-full flex justify-between items-center -ml-2 p-4">
          <Link href="/" className="h-6 flex items-center">
            <Image
              src={Logo}
              alt="Logo"
              width={500}
              height={500}
              className="h-[1.4rem] w-full"
            />
          </Link>

          <button className="ml-2 text-gray-700" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="absolute top-14 left-0 w-full bg-gray-300/90 h-screen z-[99999] shadow-lg">
            <div className="bg-white h-2/3 p-4 flex-col space-y-3">
              <div
                className="flex justify-between items-center py-2 border-b"
                onClick={() => expandItem("About Us")}
              >
                <span className="text-lg">About Us</span>
                <span className="text-2xl">
                  {expandedItem === "About Us" ? "-" : "+"}
                </span>
              </div>
              {expandedItem === "About Us" && <AboutLayout />}

              {/* Repeat for other items */}
              <div
                className="flex justify-between items-center py-2 border-b"
                onClick={() => expandItem("Products")}
              >
                <span className="text-lg">Products</span>
                <span className="text-2xl">
                  {expandedItem === "Products" ? "-" : "+"}
                </span>
              </div>
              {expandedItem === "Products" && (
                <ProductLayout
                  setHoveredItem={() => {}}
                  setHeading={() => {}}
                  setIsVisible={() => {}}
                />
              )}

              <div
                className="flex justify-between items-center py-2 border-b"
                onClick={() => expandItem("Application")}
              >
                <span className="text-lg">Application</span>
                <span className="text-2xl">
                  {expandedItem === "Application" ? "-" : "+"}
                </span>
              </div>
              {expandedItem === "Application" && <ApplicationPage />}
              <div
                className="flex justify-between items-center py-2 border-b"
                onClick={() => expandItem("Support")}
              >
                <span className="text-lg">Support</span>
                <span className="text-2xl">
                  {expandedItem === "Support" ? "-" : "+"}
                </span>
              </div>
              {expandedItem === "Support" && <SupportGrid />}
              <div
                className="flex justify-between items-center py-2 border-b"
                onClick={() => expandItem("Resources")}
              >
                <span className="text-lg">Resources</span>
                <span className="text-2xl">
                  {expandedItem === "Resources" ? "-" : "+"}
                </span>
              </div>
              {expandedItem === "Resources" && <ResourceGrid />}
              <div
                className="flex justify-between items-center py-2 border-b"
                onClick={() => expandItem("Video")}
              >
                <span className="text-lg">Video</span>
                <span className="text-2xl">
                  {expandedItem === "Video" ? "-" : "+"}
                </span>
              </div>
              {expandedItem === "Video" && <ResourceGrid />}
              <div
                className="flex justify-between items-center py-2 border-b"
                onClick={() => expandItem("Video")}
              >
                <span className="text-lg">Contact</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
