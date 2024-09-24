import React from "react";
import Clientele from "@/components/clientele/Clientele";
import Grid from "@/components/clientele/Grid";

export default function clientele()
{
    return(
        <main className="bg-black overflow-hidden">
            <Clientele/>
            <div className="mt-12">
            <Grid/>
            </div>
        </main>
    )
}