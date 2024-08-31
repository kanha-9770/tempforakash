import Image from "next/image";
import React from "react";

const Reach: React.FC = () => {
  return (
    <>
      <section className="bg-gray-100 py-10 h-screen flex flex-row ">
        <div className="container  h-[90vh] w-[90%] bg-white rounded-[2rem] ">
          <h2 className="text-3xl font-bold text-center mb-3 pt-3 ">
            How To <span className="text-[#f70000]">Reach </span>
          </h2>
          <div className=" flex flex-row ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.6906406902926!2d75.86234927478176!3d26.78612946552013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db577a120875b%3A0x3912582d92baafea!2sNessco%20Paper%20Cup%20Machine!5e0!3m2!1sen!2sin!4v1714119835373!5m2!1sen!2sin"
              width="100%"
              height="490"
              className="border-0"
              loading="lazy"
              title="Google Maps"
            ></iframe>

            <div className="">
                {/* <p className="relative "> Start from mahal road</p>
                <p className="relative ">From a BOMBAY-hospital take a U-Turn </p>
                <p className="relative "> Reach Apparel Park</p>
                <p className="relative "> You Have Reached Nessco</p> */}
              {/* <Image
                src="/assets/contact/arrow.png"
                width={100}
                height={100}
                className=" mb-4 w-72 h-72 mt-28  ml-20 "
                alt="Flag"
              /> */}
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reach;
