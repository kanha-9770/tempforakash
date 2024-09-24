import React, { useRef, useState } from "react";
import Link from "next/link";
// Import new arrow icons from react-icons (e.g., BsArrowRight and BsArrowLeft)
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import styles from "./MyButton.module.css";

interface MyButtonProps {
  user?: string; // Make `user` optional
}

const MyButton: React.FC<MyButtonProps> = ({ user = "right" }) => {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (buttonRef.current) {
      const span = buttonRef.current.querySelector("span");
      if (span) {
        const { left, top } = buttonRef.current.getBoundingClientRect();
        const relX = e.clientX - left;
        const relY = e.clientY - top;
        requestAnimationFrame(() => {
          span.style.setProperty("--x", `${relX}px`);
          span.style.setProperty("--y", `${relY}px`);
        });
      }
    }
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <Link
      ref={buttonRef}
      className={`${styles.btnPosnawr} ml-10 h-10 w-10 border border-[#483d78] rounded-full`}
      href="/"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {user === "left" ? (
        <BsArrowLeft className={`${styles.icon} text-6xl`} /> // Display left arrow for "left" user
      ) : (
        <BsArrowRight className={`${styles.icon} text-6xl`} /> // Display right arrow by default or for "right" user
      )}
      <span></span>
    </Link>
  );
};

export default MyButton;
