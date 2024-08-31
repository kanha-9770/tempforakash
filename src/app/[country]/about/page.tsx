"use client";

import Home from "@/components/AboutHome/Home";
import NavLinksDemo from "@/components/AboutHome/NavLink";
import { useRef } from "react";
import Missionvission from "@/components/AboutHome/MissionVission";
import OurCompany from "@/components/AboutHome/OurCompany";
import OurStrenght from "@/components/AboutHome/OurStrenght";
import PinkCity from "@/components/AboutHome/PinkCity";
import SustainableLayout from "@/components/AboutHome/Sustainable";
import FeatureProject from "@/components/AboutHome/FeatureProject";
import Awards from "@/components/AboutHome/Awards";
import Homenew from "@/components/AboutHome/Homenew";


export default function about ()
{

    const missionRef = useRef<HTMLDivElement>(null);
    const ourcompanyRef = useRef<HTMLDivElement>(null);
    const ourstrenghtRef = useRef<HTMLDivElement>(null);
    const pinkcityRef = useRef<HTMLDivElement>(null);
    const sustainableRef = useRef<HTMLDivElement>(null);
    const featureprojectRef = useRef<HTMLDivElement>(null);
    const awardRef = useRef<HTMLDivElement>(null);
   

    const navItems = [
        { text: "Mission & Vision", ref: missionRef },
        { text: "Our Company", ref: ourcompanyRef },
        { text: "Our Strenght", ref: ourstrenghtRef },
        { text: "The Pink City", ref: pinkcityRef },
        { text: "Sustainability", ref: sustainableRef },
        { text: "Featured Projects", ref: featureprojectRef },
        { text: "Awards", ref:awardRef},
      ];


    return(
        <main className="bg-[#f5f5f5]">
        {/* <Home /> */}
        <Homenew/>
        <NavLinksDemo navItems={navItems}  />
        
        <div id='mission and vission' className="mt-28" ref={missionRef}>
        <Missionvission/>
        </div>
 
        <div  id='Our Company' className="mt-28" ref={ourcompanyRef}>
        <OurCompany/>
        </div>

        <div id='Our Strenght' ref={ourstrenghtRef} className="mt-28">
        <OurStrenght/>
        </div>

        <div id='The Pink City' ref={pinkcityRef} className="mb-10 mt-28 z-10">
        <PinkCity/>
        </div>
        <div className="mt-28" id='Sustainability' ref={sustainableRef}>
        <SustainableLayout/>
        </div>

        <div className="mt-28" id='Featured Projects' ref={featureprojectRef}>
        <FeatureProject/>
        </div>
        <div className="mt-32" id='OurAwards' ref={awardRef}>
       <Awards/>
        </div>
    
      </main>
    );
 
}