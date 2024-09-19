import Image from "next/image";
import { FaCirclePlus } from "react-icons/fa6";
import newsData from "./newsData.json"; // Assuming the JSON file is in the data folder

export default function FeatureNews() {
  return (
    <div className="h-full lg:h-screen lg:px-10 py-10 mx-auto p-4">
      <div className="h-full grid grid-cols-1 md:grid-cols-2 gap-2">
        {/* Left side big article */}
        <div className="md:col-span-1">
          <article className="bg-white h-[30vh] lg:h-[83.8vh] p-2 shadow-lg rounded-xl overflow-hidden flex flex-col">
            <div className="p-2 relative h-[20%]">
              <h2 className="text-base lg:text-xl lg:font-bold">{newsData[0].title}</h2>
              <p className="text-sm hidden lg:flex font-regular text-gray-600">{newsData[0].description}</p>
            </div>
            {/* Icon positioned absolutely over the image */}
            <div className="relative h-[75%] lg:h-[67%] mt-auto">
              <Image
                src={newsData[0].image}
                alt={newsData[0].alt}
                width={600}
                height={200}
                className="w-full h-full rounded-xl object-cover"
              />
              <div className="absolute right-0 -top-10">
                <FaCirclePlus className="rounded-full text-3xl bg-white text-black" />
              </div>
            </div>
          </article>
        </div>

        {/* Right side smaller articles */}
        <div className="md:col-span-1 space-y-2">
          {newsData.slice(1).map((news, index) => (
            <article
              key={index}
              className="bg-white p-2 shadow-lg h-[27vh] rounded-xl overflow-hidden flex relative"
            >
              <div className="p-4 w-2/3">
                <h3 className="text-lg font-semibold mb-1">{news.title}</h3>
                <p className="text-xs text-gray-600">{news.description}</p>
              </div>
              <Image
                src={news.image}
                alt={news.alt}
                width={150}
                height={150}
                className="w-1/3 object-cover rounded-xl"
              />
              <div className="absolute right-[35%] bottom-2">
                <FaCirclePlus className="rounded-full text-3xl bg-white text-black" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
