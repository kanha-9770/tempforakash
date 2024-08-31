import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import { SignupFormDemo } from "./SignupFormDemo";
import Link from "next/link";

interface ContactFormProps {
  isContactFormVisible: boolean;
  setContactFormVisible: (visible: boolean) => void;
  isVisible: boolean;
  setIsFlagOpen: (flag: boolean) => void;
  setOpenSearch: (open: boolean) => void;
  setProfileOpen: (open: boolean) => void;
  setAccountOpen: (open: boolean) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({
  isContactFormVisible,
  setContactFormVisible,
  isVisible,
  setIsFlagOpen,
  setOpenSearch,
  setProfileOpen,
}) => {
  const contactRef = useRef<HTMLDivElement>(null);
  const router = useRouter(); // Initialize useRouter

  const handleClickOutside = (event: MouseEvent) => {
    if (
      contactRef.current &&
      !contactRef.current.contains(event.target as Node)
    ) {
      setContactFormVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleMouseEnter = () => {
    setContactFormVisible(true);
    setIsFlagOpen(false);
    setOpenSearch(false);
    setProfileOpen(false);
   
    // Get country code from pathname or default to 'in'

    // Navigate to the contact page with the correct URL
  };

  const transition = {
    type: "spring",
    mass: 0.5,
    damping: 11.5,
    stiffness: 100,
    restDelta: 0.001,
    restSpeed: 0.001,
  };

  return (
    <div>
      <button
        type="button"
        className="cursor-pointer font-poppins text-16 font-thin rounded-full px-2 text-white bg-[#483d78]"
        onMouseEnter={handleMouseEnter} // Open on hover
        onFocus={handleMouseEnter} // Open on focus for accessibility
      >
        <Link href={"/contact"}>Contact</Link>
      </button>
      <AnimatePresence>
        {isContactFormVisible && (
          <motion.div
            ref={contactRef}
            className="fixed top-14 right-0 z-50 mr-12 mt-0 w-[200px] md:w-[300px] lg:w-[400px] xl:w-[500px]"
            initial={{ y: "-100%", height: 0, opacity: 0 }}
            animate={{ y: 0, height: "35rem", opacity: 1 }}
            exit={{ y: "-100%", height: 0, opacity: 0 }}
            transition={transition}
          >
            <SignupFormDemo />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;
