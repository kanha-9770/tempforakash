import React from "react";
import Link from "next/link";
import Image from "next/image";
import Subscribe from "../subscriber/subscriber";
import PolicyHeader from "../Policies/OurPolicies";
import styles from "./footer.module.css";
import { footerData } from "../Constants/footer/footer";

const Footer: React.FC = () => {
  return (
    <>
      <Subscribe />

      <PolicyHeader />
      <footer className={`${styles.footer} max-w-sc mx-auto`}>
        <div className={styles.bgimagefooter}></div>
        <div className={styles.footercontainer}>
          <div className={styles.footercontent}>
            <div className={styles.footerlistabout}>
              <h3
                className={`${styles.footerdesctitle} font-bold text-black text-xl`}
              >
                Our Stores
              </h3>
              <div className="flex flex-col -space-y-5 font-poppins hover:text-red-600">
                {footerData.stores.map((store, index) => (
                  <Link key={index} href="/" passHref>
                    <p className={styles.footeratags}>{store}</p>
                  </Link>
                ))}
              </div>
              <h3
                className={`${styles.footerdesctitle} font-bold text-black text-xl mt-4`}
              >
                Business Partners
              </h3>
              <p className="mt-3 text-[1.1rem] font-poppins hover:text-red-600 cursor-pointer">
                {footerData.businessPartners}
              </p>
              <h3
                className={`${styles.footerdesctitle} font-bold text-black text-xl mt-8`}
              >
                Awards & Certifications
              </h3>
              <div className="flex flex-row  w-[35rem] -ml-2">
                {footerData.awards.map((award, index) => (
                  <p aria-label="Footer Icon" key={index}>
                    <Image
                      src={award.src}
                      alt={award.alt}
                      width={100} // Adjust the size as needed
                      height={100} // Adjust the size as needed
                      style={{ height: "7rem", width: "14rem" }}
                      className="scale-125"
                    />
                  </p>
                ))}
              </div>
            </div>
            <div className="flex flex-col -ml-[8rem]">
              <h3 className="font-bold text-xl text-black">Clientele</h3>
              <div className={styles.footerlistslink}>
                <Link href="/" passHref>
                  <p className="font-poppins text-[1.1rem] mt-4 w-[10rem] hover:text-red-600 cursor-pointer">
                    {footerData.clients}
                  </p>
                </Link>
              </div>
            </div>

            <div className="flex flex-col mx-10">
              <h3 className="font-bold text-xl text-black">Careers</h3>
              <div className="text-[1rem] font-poppins -space-y-7 hover:text-red-600 cursor-pointer">
                {footerData.careers.map((career, index) => (
                  <Link key={index} href="/" passHref>
                    <p className={styles.footeratags}>{career}</p>
                  </Link>
                ))}
              </div>
            </div>
            <div className={styles.footerlist}>
              <h3 className="font-bold text-xl text-black">Links</h3>
              <div className="font-poppins text-[1.1rem] space-y-10 hover:text-red-600">
                {footerData.links.map((link, index) => (
                  <Link key={index} href="/" passHref>
                    <p className={styles.footeratags}>{link}</p>
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold text-xl text-black ml-5">Services</h3>
              <div className="font-poppins text-[1rem] w-[15rem] hover:text-red-600 cursor-pointer ml-5">
                {footerData.services.map((service, index) => (
                  <Link key={index} href="/" passHref>
                    <p className={styles.footeratags}>{service}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div className={styles.footerlistabout}>
              <h3
                className={`${styles.footerdesctitle} font-bold text-black text-xl`}
              >
                Address
              </h3>
              <div className="font-poppins hover:text-red-600 cursor-pointer">
                <p className="mt-4 w-[14rem]">{footerData.address}</p>
              </div>

              <h3
                className={`${styles.footerdesctitle} font-bold text-black text-xl mt-[1.6rem]`}
              >
                Contacts
              </h3>
              <div
                className={`${styles.footerlistslink} hover:text-red-600 cursor-pointer`}
              >
                {footerData.contacts.map((contact, index) => (
                  <Link key={index} href={contact.href} passHref>
                    <p className={styles.footeratags}>{contact.name}</p>
                  </Link>
                ))}
              </div>

              <div className="flex flex-row space-x-2 mt-10 ">
                {footerData.socialIcons.map((icon, index) => (
                  <p aria-label="Footer Icon" key={index}>
                    <Image
                      src={icon.src}
                      alt={icon.alt}
                      width={70} // Adjust the size as needed
                      height={70} // Adjust the size as needed
                    />
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className={`${styles.footerrights}`}>
        <div className={styles.footercontainerx}>
          <p className={styles.footerright}>{footerData.copyright}</p>
          <Link href="/privacy-policy/" passHref>
            <p className={styles.footerright}>{footerData.privacyPolicy}</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
