import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import { SignupFormDemo } from "./SignupFormDemo";
import { IoClose } from "react-icons/io5"; // Import the close icon
import Link from "next/link";

interface ContactFormProps {
  isContactFormVisible: boolean;
  setContactFormVisible: (visible: boolean) => void;
  setIsFlagOpen: (flag: boolean) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({
  isContactFormVisible,
  setContactFormVisible,
  setIsFlagOpen,
}) => {
  const contactRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const router = useRouter();
  const pathname = usePathname() || "";
  const countryCode = pathname.split("/")[1]?.toLowerCase();

  // Show form when mouse enters the button or the form itself
  const handleMouseEnter = () => {
    setContactFormVisible(true);
    setIsFlagOpen(false);
  };

  // Hide form when the mouse leaves both the button and the form
  const handleMouseLeave = (event: MouseEvent) => {
    if (
      contactRef.current &&
      !contactRef.current.contains(event.relatedTarget as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.relatedTarget as Node)
    ) {
      setContactFormVisible(false);
    }
  };

  useEffect(() => {
    const contactElement = contactRef.current;
    const buttonElement = buttonRef.current;

    // Add event listeners for mouse leave
    contactElement?.addEventListener("mouseleave", handleMouseLeave);
    buttonElement?.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup event listeners
    return () => {
      contactElement?.removeEventListener("mouseleave", handleMouseLeave);
      buttonElement?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const transition = {
    type: "spring",
    mass: 0.5,
    damping: 11.5,
    stiffness: 100,
    restDelta: 0.001,
    restSpeed: 0.001,
  };

  return (
    <div className="">
      <button
        ref={buttonRef}
        type="button"
        className="cursor-pointer font-poppins text-sm font-regular rounded-full py-1 px-4 text-white bg-[#483d78]"
        onMouseEnter={handleMouseEnter} // Show form on mouse enter
        onFocus={handleMouseEnter} // Open on focus for accessibility
      >
        <Link href={`/${countryCode}/contact`}>Enquire</Link>
      </button>

      <AnimatePresence>
        {isContactFormVisible && (
          <motion.div
            ref={contactRef}
            className="fixed top-14 right-0 z-50 mr-8 mt-0 w-[200px] md:w-[300px] lg:w-[400px] xl:w-[500px] bg-white rounded-lg overflow-hidden"
            initial={{ y: "-100%", height: 0, opacity: 0 }}
            animate={{ y: 0, height: "35rem", opacity: 1 }}
            exit={{ y: "-100%", height: 0, opacity: 0 }}
            transition={transition}
            onMouseEnter={handleMouseEnter} // Keep form visible when entering it
            onMouseLeave={handleMouseLeave} // Hide form when leaving it
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
