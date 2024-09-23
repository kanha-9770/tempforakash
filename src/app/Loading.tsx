"use client";

import { AnimatePresence } from "framer-motion";

import Preloader from "@/components/ui/preloader";
import { useEffect } from "react";

export default function Loading() {
  const [isLoading, setIsLoading] = useState(true);

  // Introduce delay for loading
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout); // Clean up the timeout if component unmounts
  }, []);

  return (
    <div className="flex flex-col items-center">
     <AnimatePresence mode="wait">
        {/* Display preloader if isLoading is true */}
        {isLoading && <Preloader />}
      </AnimatePresence>
    </div>
  );
}
function useState(arg0: boolean): [any, any] {
  throw new Error("Function not implemented.");
}

