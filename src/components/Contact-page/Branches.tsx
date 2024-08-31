import Image from 'next/image';
import React from 'react';
import { branchesData } from '../Constants/contact/branches';

const Branches: React.FC = () => {
    return (
        <>
            <section className="bg-gray-100 py-12 h-screen">
                <div className="container mx-auto px-10">
                    <h2 className="text-4xl font-bold text-center mb-4">
                        Nessco India <span className='text-[#f70000]'>Branches</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
                        {branchesData.map((branch) => (
                            <div key={branch.id} className={branch.className}>
                                <Image 
                                    src={branch.flag} 
                                    width={80} 
                                    height={80} 
                                    className="mb-4 w-16 h-16 -mt-3" 
                                    alt={`${branch.country} Flag`} 
                                />
                                <Image 
                                    src={branch.location} 
                                    width={70} 
                                    height={70} 
                                    className="ml-44 mb-4 w-10 h-10 -mt-16" 
                                    alt="Location" 
                                />
                                <h3 className="text-2xl text-[#3a3a79] font-bold mb-2 ">
                                    {branch.office}
                                </h3>
                                <p className="text-black w-[10rem] text-lg font-poppins mt-6 ml-8">
                                    {branch.address}
                                </p>
                                <Image 
                                    src={branch.image}
                                    width={80} 
                                    height={80} 
                                    className={branch.imageClass}
                                    alt="image" 
                                    
                                />

                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Branches;
