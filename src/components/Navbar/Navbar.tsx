"use client";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { navbarItems } from "@/components/Constants/Navbar/navbarData";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/assets/Logo.png";
import RightNavbar from "./RightNavbar";
import ProfileLayout from "../Layout/ProfileLayout";
import { Menu, MenuItem } from "./nav-menue";
import { BiMinus } from "react-icons/bi";

export default function NavbarDemo() {
  return (
    <div className="relative  bg-white lg:h-auto lg:mt-0 max-w-screen-2xl flex items-center justify-between lg:justify-center">
      <Navbar className="top-0 " />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [scrolling, setScrolling] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [profileOpen, setProfileOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleItem = (item: string) => {
    setActive(active === item ? null : item);
  };

  const expandItem = (item: string) => {
    setExpandedItem(expandedItem === item ? null : item);
  };

  return (
    <div
      className={cn(
        "fixed flex w-full font-poppins lg:mt-0 max-w-screen-2xl items-center inset-x-0 mx-auto z-[99999] transition-transform duration-300",
        "translate-y-0",
        className,
        "transition-all duration-500 ease-in-out",
        scrolling
          ? "bg-[#f2f2f2]/70  lg:rounded-none backdrop-blur-xl"
          : "bg-[#f2f2f2]/70 lg:rounded-none backdrop-blur-xl"
      )}
    >
      {/* Desktop Menu */}
      <div className="hidden lg:flex w-full">
        <div className="w-[15%] lg:ml-8 flex justify-start items-center">
          <Link
            href="/"
            className="h-6 rounded-2xl lg:ml-2 flex justify-center items-center"
          >
            <Image
              src={Logo}
              alt="Logo"
              width={500}
              height={500}
              className="h-[1.4rem] w-full"
            />
          </Link>
        </div>

        <div className="w-[65%] flex items-center justify-center">
          <Menu>
            {navbarItems.map((item) => (
              <MenuItem
                key={item.name}
                setActive={setActive}
                active={active}
                item={item.name}
                setPosition={() => {}}
              >
                {item.component}
              </MenuItem>
            ))}
          </Menu>
        </div>

        <div className="w-[23%] flex mr-2 items-center justify-end">
          <RightNavbar />
        </div>
      </div>

      {/* Mobile Menu */}
      <div className=" lg:hidden border-b-2 flex w-full bg-white">
      <div className="lg:hidden w-full flex justify-between items-center -ml-2 p-4">
        <Link href="/" className="h-6 flex items-center">
          <Image
            src={Logo}
            alt="Logo"
            width={500}
            height={500}
            className="h-[1.4rem] w-full"
          />
        </Link>

        <button
          className="ml-2 text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
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
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg z-[99999] p-4">
          <div className="flex flex-col space-y-3">
            {navbarItems.map((item) => (
              <div key={item.name}>
                <div
                  className="flex -mt-3 justify-between items-center py-2 border-b"
                  onClick={() => expandItem(item.name)}
                >
                  <span className="text-lg font-semimedium text-black">
                    {item.name}
                  </span>
                  <span className="text-gray-500 pr-2 text-2xl">
                    {expandedItem === item.name ? "-" : "+"}
                  </span>
                </div>
                {expandedItem === item.name && (
                  <div className="absolute h-screen inset-0 bg-white z-50 flex flex-col">
                    <div className="flex border-b-2 justify-between items-center">
                      <span className="text-lg pl-4  font-medium text-black">
                        {item.name}
                      </span>
                      <button
                        className="text-gray-700 p-4"
                        onClick={() => expandItem(item.name)}
                      >
                        <BiMinus className="text-2xl" />
                      </button>
                    </div>
                    <div className="py-4 p-2 flex-grow">
                      <div className="text-sm text-gray-700">
                        {item.component}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-4">
            <RightNavbar />
          </div>
        </div>
      )}
      </div>
    </div>
  );
}
