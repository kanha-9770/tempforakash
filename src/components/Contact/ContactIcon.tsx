import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { BsMessenger } from "react-icons/bs";
import { IoChatboxEllipsesOutline } from "react-icons/io5";

const ContactIcons = () => {
  return (
    <div className="h-full w-full">
      {/* Container for larger screens */}
      <div className="bg-white hidden md:flex flex-col z-[9999] rounded-xl p-1 fixed right-0 top-1/2 transform -translate-y-1/2 space-y-4">
        <a
          href="sms:+123456789"
          className="flex items-center justify-center h-8 w-10 text-black hover:bg-opacity-90 transition duration-300 pb-2 border-b border-gray-300"
        >
          <FaPhoneAlt className="h-6 w-6" />
        </a>
        <a
          href="mailto:info@example.com"
          className="flex items-center justify-center h-8 w-10 text-black hover:bg-opacity-90 transition duration-300 pb-2 border-b border-gray-300"
        >
          <BsMessenger className="h-8 w-8 font-extrabold" />
        </a>
        <a
          href="mailto:info@example.com"
          className="flex items-center justify-center h-8 w-10 text-black hover:bg-opacity-90 transition duration-300 pb-2 border-b border-gray-300"
        >
          <BsMessenger className="h-8 w-8 font-extrabold" />
        </a>
        <a
          href="mailto:info@example.com"
          className="flex items-center justify-center h-8 w-10 text-black hover:bg-opacity-90 transition duration-300 pb-2"
        >
          <IoIosMail className="h-8 w-8 font-extrabold" />
        </a>
      </div>

      {/* Chat Icon */}
      <div className="fixed z-[9999] hidden md:flex  right-4 bottom-4 md:right-8 md:bottom-8 transform hover:scale-110 transition duration-300">
        <div className="flex justify-center items-center text-white rounded-full bg-[#4d3d78] bg-opacity-50 backdrop-blur-sm p-4 md:p-5">
          <IoChatboxEllipsesOutline className="h-6 w-6 md:h-8 md:w-8" />
        </div>
      </div>

      {/* Container for smaller screens */}
      <div className="bg-white md:hidden flex flex-row justify-between items-center z-[9999] fixed bottom-0 w-full pb-4 p-2">
        <a
          href="sms:+123456789"
          className="flex items-center justify-center h-8 w-10 text-black hover:bg-opacity-90 transition duration-300"
        >
          <FaPhoneAlt className="h-6 w-6" />
        </a>
        <a
          href="mailto:info@example.com"
          className="flex items-center justify-center h-8 w-10 text-black hover:bg-opacity-90 transition duration-300"
        >
          <BsMessenger className="h-8 w-8 font-extrabold" />
        </a>

        <div className="relative flex justify-center items-center">
          <div className="absolute -top-14 flex justify-center items-center text-white rounded-full bg-[#4d3d78] bg-opacity-50 backdrop-blur-sm p-6 transform hover:scale-110 transition duration-300">
            <IoChatboxEllipsesOutline className="h-6 w-6" />
          </div>
        </div>
        <a
          href="mailto:info@example.com"
          className="flex items-center justify-center h-8 w-10 text-black hover:bg-opacity-90 transition duration-300"
        >
          <IoIosMail className="h-8 w-8 font-extrabold" />
        </a>
        <a
          href="mailto:info@example.com"
          className="flex items-center justify-center h-8 w-10 text-black hover:bg-opacity-90 transition duration-300"
        >
          <BsMessenger className="h-8 w-8 font-extrabold" />
        </a>
      </div>
    </div>
  );
};

export default ContactIcons;
