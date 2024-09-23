import React, { useRef, useState } from "react";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import styles from "./MyButton.module.css";

interface MyButtonProps {
  href?: string;
  className?: string;
  icon?: React.ReactNode;
  text?: string;
}

const MyButton: React.FC<MyButtonProps> = ({
  href = "/",
  className = "",
  icon = <IoIosArrowForward />,
  text = ""
}) => {
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
      className={`${styles.btnPosnawr} h-6 w-6 ${className}`}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {icon}
      
    </Link>
  );
};

export default MyButton;
