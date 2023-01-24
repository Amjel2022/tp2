import React from "react";
import Carousel from "../componentes/Carousel";
import {fotosCarousel} from "../componentes/Data";
import Card from "../componentes/Card";

function Home () {
    return (
        
        <div className="containerHome" >                
            
            {/* Carousel */}
            <Carousel Carousel={fotosCarousel} />

            <Card />

        </div>
        
    )
}

export default Home
