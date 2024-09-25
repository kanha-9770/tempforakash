
import Sustainable from "@/components/About/Sustainable";
import OurStory from "@/components/About/OurStory";
import Founders from "@/components/About/OurFounder";
import TeamPage from "@/components/About/TeamPage";
import Grid from "@/components/About/Grid";
import OurHistory from "@/components/About/OurHistory";
import { events } from "@/components/Constants";

import AboutD from "@/components/Aboutdemo/AboutD";
import SustainableD from "@/components/Aboutdemo/SustainableD";
import OurStoryD from "@/components/Aboutdemo/OurstoryD";
import AboutOurcompany from "@/components/Aboutdemo/AboutOurcompany";
import { TimelineDemo } from "@/components/Aboutdemo/Timeline";

export default function about() {


  return (
    <main className="bg-black  ">
      

      

<AboutOurcompany/>
<SustainableD/>
<OurStoryD/>
<Founders/>
<TimelineDemo/>
<section id="our-story" className="relative z-20">
        <Grid/>
      </section> 
<TeamPage/> 


 {/* <section id="team" className="relative p-20">
      <OurHistory />
      </section>   */}



      
     {/* <section id="about" className=" relative h-screen">
        <About />
      </section>
       <section id="sustainable" className="relative ">
        <Sustainable />
      </section>
      
      <section id="our-story" className="relative ">
        <OurStory />
      </section>
     
      <section id="our-story" className=" z-50">
        <Founders/>
      </section>
      */}
       
        {/* <section id="our-story" className="relative z-20">
        <Grid/>
      </section> 
      
      

       <section id="team" className="relative p-20">
      <OurHistory />
      </section> 
     
      <section id="team" className="relative z-10">
      <TeamPage/>
      </section>  */}
      
      {/* <section id="team" className="relative p-20">
      <OurHistory />
      </section> 
     */}

    
    </main>
  );
}