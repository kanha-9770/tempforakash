"use client";
import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import { navbarItems } from "@/components/Constants/Navbar/navbarData";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/assets/Logo.png";
// import RightNavbar from "./RightNavbar";
// import ProfileLayout from "../Layout/ProfileLayout";
import { Menu, MenuItem } from "./nav-menue";
// import { BiMinus } from "react-icons/bi";
import { HiMiniMinusCircle } from "react-icons/hi2";
import CountryLayout from "../Layout/CountryLayout";
import { VscAccount } from "react-icons/vsc";
import { TfiSearch } from "react-icons/tfi";
import { IoClose } from "react-icons/io5";
import { useRouter, usePathname } from "next/navigation";
import ContactForm from "../Contact/Contact";

export default function NavbarDemo() {
  return (
    <div className="relative lg:h-auto lg:mt-0  flex items-center justify-between lg:justify-center">
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
  // for mobile bottom i.e right navbar
  const [searchValue, setSearchValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchValue("");
  };

  const [expandedSearch, setExpandedSearch] = useState(false);
  const [expandedCountry, setExpandedCountry] = useState(false);
  const [expandedAccount, setExpandedAccount] = useState(false);
  const router = useRouter();
  const pathname = usePathname() || "";
  const countryCode = pathname.split("/")[3]?.toLowerCase();
  console.log("countryCode,", countryCode);

  // Function to handle expansion
  const handleExpand = (item: string) => {
    // Close other expanded items when one is opened
    setExpandedSearch(item === "search");
    setExpandedCountry(item === "country");
    setExpandedAccount(item === "account");
  };
  const [isVisible, setIsVisible] = useState(true);
  const [visibilityState, setVisibilityState] = useState({
    isFlagOpen: false,

    isContactFormVisible: false,
  });
  useEffect(() => {
    const { isFlagOpen } = visibilityState;
    setIsVisible(!isFlagOpen);
  }, [visibilityState]);
  const searchRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "fixed flex w-full font-poppins lg:mt-0 items-center inset-x-0 mx-auto z-[99999] transition-transform duration-300",
        "translate-y-0",
        className,
        "transition-all duration-500 ease-in-out",
        countryCode === "ourcompany" ? "bg-black text-white" : "bg-white "
      )}
    >
      {/* Desktop Menu */}
      <div className="hidden px-8 lg:flex w-full">
        <div className="w-1/5 flex items-center">
          <Link href="/" className="w-full h-full flex items-center ">
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
            {navbarItems.map((item) => (
              <MenuItem
                key={item.name}
                setActive={setActive}
                active={active}
                item={item.name}
                link={item.link}
                setPosition={() => {}}
              >
                {item.component}
              </MenuItem>
            ))}
          </Menu>
        </div>

        <div className="w-1/5 flex h-14 justify-end items-center flex-row gap-4 ">
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
      <div className=" lg:hidden  flex w-full ">
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
          <div className="lg:hidden absolute top-14 border-b-[1px]  left-0 w-full bg-gray-300/90 backdrop-blur-[80px] h-screen  shadow-lg z-[99999]">
            <div className="flex bg-white h-2/3 p-4 flex-col space-y-3">
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
                      <div className="flex border-b-2  justify-between items-center">
                        <span className="text-lg pl-4  text-[#483d73] font-semibold ">
                          {item.name}
                        </span>
                        <button
                          className=" invert-0 p-4"
                          onClick={() => expandItem(item.name)}
                        >
                          <HiMiniMinusCircle className="text-2xl" />
                        </button>
                      </div>
                      <div className="py-4 flex-grow">
                        <div className="text-sm text-gray-700">
                          {item.component}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <div className="w-full">
                <div className="relative -mt-3 h-full flex flex-col w-full  lg:hidden">
                  <div className="relative max-w-screen-2xl p-1 flex w-full mx-auto">
                    <div className="justify-center items-center w-full rounded-xl">
                      <form className="flex justify-start  ">
                        <div className="relative w-full border-gray-300">
                          <input
                            type="text"
                            id="search-dropdown"
                            value={searchValue}
                            onChange={handleInputChange}
                            className="block p-[0.6rem] w-full z-20 text-sm bg-gray-100 rounded-3xl border-slate-100 font-poppins pr-10 focus:outline-none focus:ring-2 focus:ring-transparent"
                            placeholder="Search Product Name..."
                            required
                          />
                          {searchValue ? (
                            <IoClose
                              onClick={handleClearSearch}
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer text-18"
                            />
                          ) : (
                            <TfiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer text-18" />
                          )}
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="flex felx-row justify-between items-center gap-2 border-t-[1px] border-b-[1px]  w-full p-2">
                    <div className="relative ">
                      <CountryLayout />
                    </div>
                    <div className="relative ">
                      <VscAccount className="text-xl cursor-pointer" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
