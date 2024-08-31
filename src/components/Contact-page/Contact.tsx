"use client";

import { useState } from 'react';
import Image from 'next/image';
import { IoIosArrowForward } from "react-icons/io";
import styles from './contact.module.css';
import { contactContent } from '../Constants/contact/Contact';

interface FormData {
  SingleLine: string;
  Email: string;
  PhoneNumber_countrycode: string;
  SingleLine1: string;
  MultiLine: string;
}

interface Errors {
  phoneNumber: string;
  email: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    SingleLine: '',
    Email: '',
    PhoneNumber_countrycode: '',
    SingleLine1: '',
    MultiLine: '',
  });

  const [errors, setErrors] = useState<Errors>({ phoneNumber: '', email: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission with validation
  };

  return (
    <section className={`${styles.contact} left-9 mt-[7rem] bottom-10 rounded-[2rem]`}>
      <div className={`${styles.contactshape}`}></div>
      <div className="container mx-auto p-6">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2">
            <p className="text-3xl font-poppins font-bold text-black mt-3">
              {contactContent.heading}
            </p>
            <h1 className="text-3xl text-black font-poppins mt-5">
              {contactContent.subheading}
            </h1>
            <div className="mt-8">
              <div className="flex items-start mb-6">
                <Image
                  src='/assets/contact/location.png'
                  alt="Marker"
                  width={80}
                  height={80}
                  className="w-10 h-10 mr-4 mt-10"
                />
                <div className='ml-2'>
                  <h2 className="text-xl font-bold font-poppins text-[#3a2a79] mb-1">
                    {contactContent.office.title}
                  </h2>
                  <a href={contactContent.office.mapLink} className="text-black">
  {contactContent.office.address.split('\n').map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ))}
</a>
                </div>
              </div>
              <hr className="border-gray-400 border-[0.10rem] -ml-6 w-[35rem]" />
              <div className="flex items-start mb-6">
                <Image
                  src='/assets/contact/email.png'
                  alt="Email"
                  width={80}
                  height={80}
                  className="w-10 h-10 mr-4 mt-7"
                />
                <div className=''>
                  <h2 className="text-xl font-bold font-poppins text-[#3a2a79] mt-5 mb-1 ml-2">
                    {contactContent.email.title}
                  </h2>
                  <a href={contactContent.email.emailLink} className="text-black ml-2">
                    {contactContent.email.address}
                  </a>
                </div>
              </div>
              <hr className="border-gray-400 border-[0.10rem] -ml-6 w-[35rem]" />
              <div className="flex items-start">
                <Image
                  src='/assets/contact/call.png'
                  alt="Phone"
                  width={80}
                  height={80}
                  className="w-10 h-10 mr-4 mt-10"
                />
                <div className='ml-2'>
                  <h2 className="text-xl font-bold font-poppins text-[#3a2a79] mt-3 mb-1">
                    {contactContent.phone.title}
                  </h2>
                  {contactContent.phone.numbers.map((number, index) => (
                    <a href={`tel:${number}`} className="text-black" key={index}>
                      {number}<br/>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 mt-10">
            <form onSubmit={handleSubmit} className="bg-white p-8">
              <div className="grid grid-cols-1 gap-4">
                {/* First row */}
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="SingleLine"
                    value={formData.SingleLine}
                    onChange={handleChange}
                    placeholder={contactContent.form.placeholders.name}
                    className="p-2  border-none rounded-xl h-[5rem] bg-[#f5f5f5] placeholder-black "
                  />
                  <input
                    type="text"
                    name="Email"
                    value={formData.Email}
                    onChange={handleChange}
                    placeholder={contactContent.form.placeholders.email}
                    className="p-2 border-none rounded-xl bg-[#f5f5f5] placeholder-black"
                  />
                </div>

                {/* Second row */}
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="PhoneNumber_countrycode"
                    value={formData.PhoneNumber_countrycode}
                    onChange={handleChange}
                    placeholder={contactContent.form.placeholders.phone}
                    className="p-2 border-none rounded-xl h-[5rem] bg-[#f5f5f5] placeholder-black"
                  />
                  <input
                    type="text"
                    name="SingleLine1"
                    value={formData.SingleLine1}
                    onChange={handleChange}
                    placeholder={contactContent.form.placeholders.subject}
                    className="p-2 border-none rounded-xl bg-[#f5f5f5] placeholder-black placeholder-top"
                  />
                </div>

                {/* Third row */}
                <input
                  type="text"
                  name="MultiLine"
                  value={formData.MultiLine}
                  onChange={handleChange}
                  placeholder={contactContent.form.placeholders.message}
                  className="p-2 border-none rounded-xl w-full h-[10rem] bg-[#f5f5f5] placeholder-black"
                />
              </div>
              <button
                aria-label="Send Message"
                type="submit"
                className="mt-6 text-xl flex items-center text-white py-4 px-9 rounded-xl bg-gradient-to-b from-[#171033] to-[#300675] transition"
              >
                <p>{contactContent.form.buttonText}</p>
             
                <IoIosArrowForward className="ml-2 text-[#300675] bg-white rounded-full p-1" style={{ fontSize: '1.4rem' }} />
             
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
