import React from "react";
import dynamic from 'next/dynamic';
import { NewSignupFormDemo } from "../Contact/ProductContact";

// Dynamically import components
const ProductApplication = dynamic(() => import("./ProductApplication"), {
  ssr: false, // Disable server-side rendering if not needed
  loading: () => <p>Loading Product Application...</p>, // Optional: a loading component
});



const ProductDescription = () => {
  return (
    <div className="h-screen flex flex-row w-full gap-4">
      <div className="w-[80%] h-[90%] bg-white shadow-lg p-4 rounded-xl flex flex-col">
        {/* heading */}
        <div className="w-full justify-start">
          <span className="text-[#483d78] text-2xl">Product</span>
          <span className="text-red-500 ml-2 text-2xl">Description</span>
          <div className="text-sm text-black mt-6 font-poppins">
            {/* description */}
            Experience unparalleled efficiency with our Servo Driven Paper Cup
            Machine, a marvel of engineering that integrates advanced
            mechanical, electronic, pneumatic, and electrical technologies. This
            high-precision machine is equipped with 13 servos that work in
            perfect sync via PLC, enabling the production of up to 180
            high-quality paper cups per minute, equivalent to 3 cups per second.
            The machine features a two-step curling process, which ensures the
            rim of each cup is curled twice to provide extra rigidity and
            durability. High-quality sealing is guaranteed through the use of
            ultrasonic and hot air mechanisms, minimizing the risk of leakage,
            making it ideal for both hot and cold beverages.
          </div>
        </div>
        <div className="text-[#483d78] text-2xl mt-6">Applications</div>
        <div>
          <ProductApplication />
        </div>
      </div>
      <NewSignupFormDemo />
    </div>
  );
};

export default ProductDescription;
