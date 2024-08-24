"use client";
import React, { memo, useCallback, useRef, useState, useEffect } from "react";
import Link from "next/link";

interface NavLinkProps {
  text: string;
  index: number;
  activeLink: number;
  handleMouseEnter: (index: number) => void;
  handleMouseLeave: () => void;
  handleClick: () => void;
}

const NavLink: React.FC<NavLinkProps> = memo(
  ({
    text,
    index,
    activeLink,
    handleMouseEnter,
    handleMouseLeave,
    handleClick,
  }) => (
    <Link
      href={`#${text}`}
      scroll={false}
      className={`text-black font-poppins ml-[2.5rem] pt-1  ${
        activeLink === index ? "border-b-2 border-red-600" : ""
      }`}
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {text}
    </Link>
  )
);

NavLink.displayName = "NavLink";

interface NavLinksDemoProps {
  navItems: { text: string; ref: React.RefObject<HTMLDivElement> }[];
}

const NavLinksDemo: React.FC<NavLinksDemoProps> = ({ navItems }) => {
  const [activeLink, setActiveLink] = useState<number>(-1);
  const [scrolling, setScrolling] = useState(false);

  const navRef = useRef<HTMLDivElement | null>(null);

  const handleMouseEnter = useCallback((index: number) => {
    setActiveLink(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setActiveLink(-1);
  }, []);

  const handleClick = (ref: React.RefObject<HTMLDivElement>) => () => {
    const offsetTop = ref.current?.offsetTop || 0;
    window.scrollTo({
      top: offsetTop - 98, // Adjust the offset value to achieve top-14
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = navItems.findIndex(
            (item) => item.ref.current === entry.target
          );
          setActiveLink(index);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    navItems.forEach((item) => {
      if (item.ref.current) {
        observer.observe(item.ref.current);
      }
    });

    return () => {
      navItems.forEach((item) => {
        if (item.ref.current) {
          observer.unobserve(item.ref.current);
        }
      });
    };
  }, [navItems]);

  useEffect(() => {
    const handleScroll = () => {
      const navTop = navRef.current?.getBoundingClientRect().top || 0;

      // Check if the nav is sticky (top of viewport)
      if (navTop <= 14) {
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
      ref={navRef}
      className={`sticky top-14 z-30 transition-all duration-300 ${
        scrolling
          ? "bg-[#f2f2f2]/70 backdrop-blur-xl"
          : "bg-[#f2f2f2]/70 backdrop-blur-xl"
      }`}
    >
      <nav className="left-0 mb-[4rem] -mt-10 flex flex-row flex-wrap text-16 font-poppins space-x-2 sm:space-x-6 text-black px-1 sm:px-2">
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            text={item.text}
            index={index}
            activeLink={activeLink}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            handleClick={handleClick(item.ref)}
          />
        ))}
      </nav>
    </div>
  );
};

export default NavLinksDemo;
