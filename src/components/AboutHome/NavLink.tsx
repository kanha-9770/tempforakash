
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
      href="#"
      scroll={false}
      className={`text-black pt-2 hover:font-bold hover:text-[#3a2a79] custome-scale-90 ${
        activeLink === index ? "border-b-2 border-blue-900" : ""
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
  const navRef = useRef<HTMLDivElement | null>(null);

  const handleMouseEnter = useCallback((index: number) => {
    setActiveLink(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setActiveLink(-1);
  }, []);

  const handleClick = (ref: React.RefObject<HTMLDivElement>) => () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = navItems.findIndex((item) => item.ref.current === entry.target);
          console.log(`Intersecting section: ${entry.target.id}, index: ${index}`);
          setActiveLink(index);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    navItems.forEach((item) => {
      if (item.ref.current) {
        console.log(`Observing section: ${item.ref.current.id}`);
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
      if (navRef.current) {
        const navTop = navRef.current.getBoundingClientRect().top;
        if (navTop <= 0) {
          navRef.current.classList.add("sticky-nav");
        } else {
          navRef.current.classList.remove("sticky-nav");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={navRef} className="sticky bg-white z-30 top-[17vh]">
      <nav className="left-0 mb-[4rem] -mt-9 ml-[1.2rem] flex flex-row flex-wrap text-16 font-poppins space-x-2 sm:space-x-5 text-black px-1 sm:px-2">
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



// "use client";
// import React, { memo, useCallback, useRef, useState, useEffect } from "react";
// import Link from "next/link";
// import { useRouter } from "next/router";

// interface NavLinkProps {
//   text: string;
//   index: number;
//   activeLink: number;
//   handleMouseEnter: (index: number) => void;
//   handleMouseLeave: () => void;
//   handleClick: () => void;
// }

// const NavLink: React.FC<NavLinkProps> = memo(
//   ({
//     text,
//     index,
//     activeLink,
//     handleMouseEnter,
//     handleMouseLeave,
//     handleClick,
//   }) => (
//     <Link
//       href="#"
//       scroll={false}
//       className={`text-black pt-2 hover:font-bold hover:text-[#3a2a79] custome-scale-90 ${
//         activeLink === index ? "border-b-2 border-blue-900" : ""
//       }`}
//       onMouseEnter={() => handleMouseEnter(index)}
//       onMouseLeave={handleMouseLeave}
//       onClick={handleClick}
//     >
//       {text}
//     </Link>
//   )
// );

// NavLink.displayName = "NavLink";

// interface NavLinksDemoProps {
//   navItems: { text: string; ref: React.RefObject<HTMLDivElement> }[];
// }

// const NavLinksDemo: React.FC<NavLinksDemoProps> = ({ navItems }) => {
//   const [activeLink, setActiveLink] = useState<number>(-1);
//   const navRef = useRef<HTMLDivElement | null>(null);
//   const router = useRouter(); // Ensure this is used only in client-side code

//   const handleMouseEnter = useCallback((index: number) => {
//     setActiveLink(index);
//   }, []);

//   const handleMouseLeave = useCallback(() => {
//     setActiveLink(-1);
//   }, []);

//   const handleClick = (ref: React.RefObject<HTMLDivElement>, id: string) => () => {
//     if (ref.current) {
//       ref.current.scrollIntoView({ behavior: "smooth" });
//       router.push(`/about#${id}`, undefined, { shallow: true });
//     }
//   };

//   useEffect(() => {
//     const observerCallback = (entries: IntersectionObserverEntry[]) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           const index = navItems.findIndex((item) => item.ref.current === entry.target);
//           setActiveLink(index);
//         }
//       });
//     };

//     const observerOptions = {
//       root: null,
//       rootMargin: "0px",
//       threshold: 0.5,
//     };

//     const observer = new IntersectionObserver(observerCallback, observerOptions);
//     navItems.forEach((item) => {
//       if (item.ref.current) {
//         observer.observe(item.ref.current);
//       }
//     });

//     return () => {
//       navItems.forEach((item) => {
//         if (item.ref.current) {
//           observer.unobserve(item.ref.current);
//         }
//       });
//     };
//   }, [navItems]);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (navRef.current) {
//         const navTop = navRef.current.getBoundingClientRect().top;
//         if (navTop <= 0) {
//           navRef.current.classList.add("sticky-nav");
//         } else {
//           navRef.current.classList.remove("sticky-nav");
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div ref={navRef} className="sticky bg-white z-30 top-14">
//       <nav className="left-0 mb-[4rem] -mt-9 ml-[2.5rem] flex flex-row flex-wrap text-16 font-poppins space-x-2 sm:space-x-5 text-black px-1 sm:px-2">
//         {navItems.map((item, index) => (
//           <NavLink
//             key={index}
//             text={item.text}
//             index={index}
//             activeLink={activeLink}
//             handleMouseEnter={handleMouseEnter}
//             handleMouseLeave={handleMouseLeave}
//             handleClick={handleClick(item.ref, item.text.toLowerCase().replace(/ & /g, "").replace(/ /g, ""))}
//           />
//         ))}
//       </nav>
//     </div>
//   );
// };

// export default NavLinksDemo;

