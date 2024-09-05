import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import { SignupFormDemo } from "./SignupFormDemo";
import { IoClose } from "react-icons/io5"; // Import the close icon
import Link from "next/link";

interface ContactFormProps {
  isContactFormVisible: boolean;
  setContactFormVisible: (visible: boolean) => void;
  isVisible: boolean;
  setIsFlagOpen: (flag: boolean) => void;
  // setOpenSearch: (open: boolean) => void;
  // setProfileOpen: (open: boolean) => void;
  // setAccountOpen: (open: boolean) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({
  isContactFormVisible,
  setContactFormVisible,
  // isVisible,
  setIsFlagOpen,
  // setOpenSearch,
  // setProfileOpen,
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
  }, []); // Ensure effect cleanup

  const pathname = usePathname() || "";
  const countryCode = pathname.split("/")[1]?.toLowerCase();

  const handleMouseEnter = () => {
    setContactFormVisible(true);
    setIsFlagOpen(false);
    // setOpenSearch(false);
    // setProfileOpen(false);
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
        className="cursor-pointer font-poppins text-sm font-regular rounded-full py-1 px-4 text-white bg-[#483d78]"
        onMouseEnter={handleMouseEnter} // Open on hover
        onFocus={handleMouseEnter} // Open on focus for accessibility
      >
        <Link className="" href={`/${countryCode}/contact`}>
          Enquire
        </Link>
      </button>
      <AnimatePresence>
        {isContactFormVisible && (
          <motion.div
            ref={contactRef}
            className="fixed top-14 right-0 z-50 mr-8 mt-0 w-[200px] md:w-[300px] lg:w-[400px] xl:w-[500px] bg-white  rounded-lg overflow-hidden"
            initial={{ y: "-100%", height: 0, opacity: 0 }}
            animate={{ y: 0, height: "35rem", opacity: 1 }}
            exit={{ y: "-100%", height: 0, opacity: 0 }}
            transition={transition}
          >
            {/* Header with text and close icon */}
            <div className="flex justify-between items-center p-4">
              <h2 className="font-montserrat text-xl text-neutral-800 dark:text-neutral-200">
                GET IN TOUCH WITH US
              </h2>
              <button
                onClick={() => setContactFormVisible(false)}
                aria-label="Close contact form"
                className="text-gray-600 hover:text-gray-800"
              >
                <IoClose size={24} />
              </button>
            </div>

            {/* Content */}
            <SignupFormDemo />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;
