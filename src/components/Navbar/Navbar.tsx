"use client";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { navbarItems } from "@/components/Constants/Navbar/navbarData";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/assets/Logo.png";
import RightNavbar from "./RightNavbar";
import { Menu, MenuItem } from "./nav-menue";

export default function NavbarDemo() {
  return (
    <div className="relative  max-w-screen-2xl flex items-center justify-center">
      <Navbar className="top-0" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [scrolling, setScrolling] = useState(false);
  const [active, setActive] = useState<string | null>(null);

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

  return (
    <div
      className={cn(
        "fixed flex w-full max-w-screen-2xl items-center inset-x-0 mx-auto z-[99999] transition-transform duration-300",
        "translate-y-0",
        className,
        "transition-all  duration-500 ease-in-out", //  transition
        scrolling
          ? "bg-[#f2f2f2]/70 backdrop-blur-xl"
          : "bg-[#f2f2f2]/70 backdrop-blur-xl" // Adjust blur and background color on scroll
      )}
    >
      <div className="w-[15%] ml-8 flex justify-start items-center">
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
      <div className="w-[23%] mr-2 flex items-center justify-end">
        <RightNavbar />
      </div>
    </div>
  );
}
