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

export default function NavbarDemo() {
  return (
    <div className="relative bg-white lg:h-auto lg:mt-0 max-w-screen-2xl flex items-center justify-between lg:justify-center">
      <Navbar className="top-0 h-16" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [scrolling, setScrolling] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [profileOpen, setProfileOpen] = useState(false);

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

  return (
    <div
      className={cn(
        "fixed flex w-full lg:mt-0 max-w-screen-2xl items-center inset-x-0 mx-auto z-[99999] transition-transform duration-300",
        "translate-y-0",
        className,
        "transition-all duration-500 ease-in-out", // transition
        scrolling
          ? "lg:bg-[#f2f2f2]/70 bg-white rounded-bl-xl lg:rounded-none backdrop-blur-xl"
          : "lg:bg-[#f2f2f2]/70 bg-white rounded-br-xl lg:rounded-none backdrop-blur-xl" // Adjust blur and background color on scroll
      )}
    >
      <div className="w-1/2 lg:w-[15%] lg:ml-8 flex justify-start items-center">
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

      {/* Desktop Menu */}
      <div className="w-[65%] hidden lg:flex items-center justify-center">
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

      {/* Mobile Menu Toggle Button */}
      <div className="w-1/2 lg:w-[23%] flex justify-end items-center lg:hidden">
        {/* Profile Layout in Mobile View */}
        <ProfileLayout
          profileOpen={profileOpen}
          setIsFlagOpen={() => {}}
          setOpenSearch={() => {}}
          setProfileOpen={setProfileOpen}
          setAccountOpen={() => {}}
        />

        <button
          className="ml-4 text-gray-700 focus:outline-none"
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

      {/* Desktop Right Navbar */}
      <div className="w-1/2 lg:w-[23%] hidden lg:flex mr-2 items-center justify-end">
        <RightNavbar />
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg z-50 p-4">
          {navbarItems.map((item) => (
            <div key={item.name}>
              <div
                className="flex justify-between items-center py-3 border-b"
                onClick={() => toggleItem(item.name)}
              >
                <span className="text-lg font-medium text-black">
                  {item.name}
                </span>
                <span className="text-gray-500">
                  {active === item.name ? "-" : "+"}
                </span>
              </div>
              {active === item.name && (
                <div className="py-2 text-sm text-gray-700">
                  {item.component}
                </div>
              )}
            </div>
          ))}

          {/* Mobile Right Navbar */}
          <div className="mt-4">
            <RightNavbar />
          </div>
        </div>
      )}
    </div>
  );
}
