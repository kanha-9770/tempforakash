import { useEffect } from "react";
import { useRouter } from "next/router";

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    const fetchCountryInfo = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        const countryCode = data.country_code.toLowerCase();
        console.log(response);
        router.push(`/${countryCode}`);
      } catch (error) {
        console.error("Error fetching country info:", error);
        const defaultCountry = "in";
        const defaultLanguage = "en";
        router.push(`/${defaultCountry}/${defaultLanguage}`);
      }
    };

    fetchCountryInfo();
  }, [router]);

  return null;
};

export default HomePage;
