import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "../ui/canvas-reveal-effect";
import { CARDS_DATA } from "../Constants/index";
import Modal from "../ui/Modal";
import { FaCirclePlus } from "react-icons/fa6";
export default function CanvasRevealEffectDemo() {
  return (
    <div className="py-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4 mx-auto px-8">
      {CARDS_DATA.map((card, index) => (
        <Card key={index} title={card.title} icon={<card.icon />} index={index}>
          <CanvasRevealEffect
            animationSpeed={card.animationSpeed}
            containerClassName={card.containerClassName}
            colors={card.colors}
            dotSize={card.dotSize ?? 1}
          />
          {index === 1 && (
            <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
          )}
        </Card>
      ))}
    </div>
  );
}
const Card = ({
  title,
  icon,
  children,
  index,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  index: number;
}) => {
  const [hovered, setHovered] = React.useState(false);
  const [openModalIndex, setOpenModalIndex] = useState<number | null>(null);
  const handleOpenModal = (index: number) => {
    setOpenModalIndex(index);
  };
  const handleCloseModal = () => {
    setOpenModalIndex(null);
  };
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center max-w-sm w-full mx-auto p-4 h-[30rem] relative"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
      <div
        className="absolute cursor-pointer top-0 right-0 m-4 z-20"
        onClick={() => handleOpenModal(index)}
      >
        <FaCirclePlus
          size={30}
          className="text-white bg-black text-3xl rounded-full"
        />
      </div>
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative z-20">
        <div className="text-center text-8xl group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-5xl text-center mx-4 opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black -mt-20 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
      </div>
      {openModalIndex !== null && (
        <Modal
          image={CARDS_DATA[openModalIndex].image}
          title={CARDS_DATA[openModalIndex].title}
          firstname="First"
          secondname="Last"
          description="This is a description."
          items={[]}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className={className}
    {...rest}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
  </svg>
);
