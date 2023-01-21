import "../styles/Home.css";
import Carousel from "../componentes/Carousel";
import {fotosCarousel} from "../componentes/Data";


function Home () {
    return (
        
        <div className="containerCarousel" >                
            
            {/* Carousel */}
            <Carousel Carousel={fotosCarousel} />

        </div>
        
    )
}

export default Home
