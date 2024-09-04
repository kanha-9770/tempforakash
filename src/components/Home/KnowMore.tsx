"use client";

import { projects } from "./data";
import KnowMoreCard from "./Common/KnowMoreCard";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

export default function KnowMore() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main ref={container} className="h-full cursor-pointer">
      {projects.map((project, i) => {
        const targetScale =
          i < projects.length - 1 ? 1 - (projects.length - i) * 0.1 : 1;
        return (
          <KnowMoreCard
            url={""}
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </main>
  );
}
