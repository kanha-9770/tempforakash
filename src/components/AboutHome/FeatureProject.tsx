import Image from 'next/image';
import React, { FC, useState } from 'react';
import { Machine, machines } from '../Constants/About/featureproject-homepage'; // Adjust the import path as needed

const FeatureProject: FC = () => {
  const [selectedMachine, setSelectedMachine] = useState<Machine>(machines[0]);

  const handleMachineClick = (machine: Machine) => {
    setSelectedMachine(machine);
  };

  return (
    <div className="relative flex flex-col w-full h-[130vh] bg-white ">
      <h1 className="text-5xl font-bold text-[#33246e] font-montserrat mt-5 ml-[2rem]">Featured Projects</h1>
      <div className="flex flex-col lg:flex-row items-center mt-12 ">
  <h2 className="text-5xl sm:text-6xl lg:text-5xl font-bold text-gray-400 lg:ml-14 -mt-10">
    {selectedMachine.title}
  </h2>

  <div className="relative flex justify-center lg:justify-start mt-8 lg:mt-0">
    <Image
      src={selectedMachine.mainImage}
      alt={selectedMachine.title}
      width={400}
      height={400}
      className="object-cover z-20 h-[18rem] sm:h-[20rem] lg:h-[21rem] w-[22rem] sm:w-[24rem] lg:w-[25rem]  ml-32"
    />
  </div>

  <div className="ml-0 sm:ml-[2rem] md:ml-[4rem] lg:ml-[4rem] max-w-sm text-center lg:text-left lg:-mt-12 z-10">
    <p className="text-sm text-gray-600 lg:ml-0">
      {selectedMachine.description}
    </p>
  </div>
</div>


      {/* Horizontal Line */}
      <div className="relative w-full h-1 bg-[#3a2a79] -mt-32">
        {/* Vertical Lines */}
        <div className="relative w-full flex justify-around">
          {machines.map((machine) => (
            <div key={machine.id} className="relative flex justify-center">
              <div className="w-[0.10rem] bg-[#b0aac5] h-[30rem] mask-gradient-featuredproject"></div>
              <div
                className={`border-2 border-x-gray-200 h-[9rem] rounded-2xl transform transition-transform duration-300 hover:scale-110 ${machine.id === 1 ? 'mt-28' : machine.id === 2 ? 'mt-10' : machine.id === 3 ? 'mt-32' : machine.id === 4 ? 'mt-16' : machine.id === 5 ? 'mt-32' : 'mt-5'} -ml-${machine.id === 1 ? 5 : machine.id === 2 ? 8 : machine.id === 3 ? 24 : machine.id === 4 ? 20 : machine.id === 5 ? 24 : 20} z-20 bg-white cursor-pointer ${selectedMachine.id === machine.id ? '-ml-7 ' : '-ml-10'}`}
                onClick={() => handleMachineClick(machine)}
              >
                <Image
                  src={machine.mainImage}
                  alt={machine.title}
                  width={200}
                  height={200}
                  className="object-cover h-[9rem] w-[9rem] -mt-2"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="mt-[18rem] ml-[37rem] px-5 py-2 items-center justify-center text-center bg-gradient-to-b from-[#171033] to-[#300675] text-white rounded-md z-10 w-[8rem]">
        Read More
      </button>
    </div>
  );
};

export default FeatureProject;
