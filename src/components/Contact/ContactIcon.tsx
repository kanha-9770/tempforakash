import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { BsMessenger } from "react-icons/bs";

const ContactIcons = () => {
  return (
    <div className="bg-white hidden md:flex flex-col z-[9999] rounded-xl p-2 fixed right-0 top-[40%] transform -translate-y-1/2 space-y-4">
      <a href="sms:+123456789" className="flex items-center justify-center h-8 w-10 text-black hover:bg-opacity-90 transition duration-300 pb-2 border-b border-gray-300">
        <FaPhoneAlt className="h-6 w-6" />
      </a>
      <a href="mailto:info@example.com" className="flex items-center justify-center h-8 w-10 text-black hover:bg-opacity-90 transition duration-300 pb-2 border-b border-gray-300">
        <BsMessenger className="h-8 w-8 font-extrabold" />
      </a>
      <a href="mailto:info@example.com" className="flex items-center justify-center h-8 w-10 text-black hover:bg-opacity-90 transition duration-300 pb-2 border-b border-gray-300">
        <BsMessenger className="h-8 w-8 font-extrabold" />
      </a>
      <a href="mailto:info@example.com" className="flex items-center justify-center h-8 w-10 text-black hover:bg-opacity-90 transition duration-300 pb-2">
        <IoIosMail className="h-8 w-8 font-extrabold" />
      </a>
    </div>
  );
};

export default ContactIcons;
