import LandingPage from "@/components/PinkCity/LandingPage"
import SecondPage from "@/components/PinkCity/SecondPage"
import Bluepage from "@/components/PinkCity/Bluepage"
import PinkPage from "@/components/PinkCity/PinkPage"
import Photocolag from "@/components/PinkCity/Photocolag"


export default function pinkcity () {

    return (
        <main className="bg-gray-100 ">
       <LandingPage/>
        <SecondPage/>
         
       <Bluepage/>
   
      <PinkPage/>
          
      <Photocolag/>
        </main>
    )

}
