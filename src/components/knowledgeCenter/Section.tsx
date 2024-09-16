import React from 'react';
import { IconType } from 'react-icons';

interface SectionProps {
  number: number;
  title: string;
  description: string;
  Icon: IconType;
}

const Section: React.FC<SectionProps> = ({ number, title, description, Icon }) => {
  return (
    <div className="flex justify-between gap-4 items-center bg-black text-white p-8 rounded-md mb-6 shadow-md">
      <div>
        <h2 className="text-4xl font-bold mb-4">{number}. {title}</h2>
        <p className="text-lg">{description}</p>
      </div>
      <div className="flex flex-col items-center space-y-4">
        <Icon className="text-6xl text-purple-500" />
        <a href="#" className="flex items-center text-purple-500 hover:underline">
          Read More
          <span className="ml-2">&rarr;</span>
        </a>
      </div>
    </div>
  );
}

export default Section;
