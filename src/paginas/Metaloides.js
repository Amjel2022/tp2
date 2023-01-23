import React from "react";
import "../styles/Metaloides.css";
//import de imágenes
import polonioDatos from "../img-paginas/Metaloides/polonio.png";
import polonioFoto from "../img-paginas/Metaloides/polonio2.png";
import silicioDatos from "../img-paginas/Metaloides/silicio.png";
import silicioFoto from "../img-paginas/Metaloides/silicio2.png";

export default function Metaloides () {
    return (
        
        <div className="containerMetaloides">
            
            <h1 className="tituloMetaloides">Metaloides</h1>

            <div className="gridMetaloides">

                <div className="metaloide1">
                    <h3 className="tituloMetaloideGrid">Polonio</h3>
                    
                    <img src={ polonioDatos } alt="Datos del Polonio" className="imgM1" />
                    
                    <p className="parrafoM1">
                    El aluminio es un elemento químico, de símbolo Al y número atómico 13. Se trata de un metal no ferromagnético. Es el tercer elemento más común encontrado en la corteza terrestre. Los compuestos de aluminio forman el 8% de la corteza de la tierra y se encuentran presentes en la mayoría de las rocas, de la vegetación y de los animales.  
                    </p>
                    
                    <img src={ polonioFoto } alt="Polonio foto real" className="imgM2" />
                    
                    <p className="parrafoM2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae facilis reiciendis, nulla quasi nemo voluptas odio non molestiae dicta cumque error labore provident est corporis eligendi atque ratione id. Nam.
                    Quisquam illum tenetur blanditiis tempora, perspiciatis in voluptatem reprehenderit vero quo quos molestiae aspernatur voluptatibus, nostrum, ab provident quam tempore architecto magni esse itaque! Consectetur numquam natus exercitationem? Sequi, sunt.
                    </p>      
                </div>

                <div className="metaloide2">
                    <h3 className="tituloMetaloideGrid">Silicio</h3>
                    
                    <img src={ silicioDatos } alt="Datos del Polonio" className="imgM1" />
                    
                    <p className="parrafoM1">
                    El aluminio es un elemento químico, de símbolo Al y número atómico 13. Se trata de un metal no ferromagnético. Es el tercer elemento más común encontrado en la corteza terrestre. Los compuestos de aluminio forman el 8% de la corteza de la tierra y se encuentran presentes en la mayoría de las rocas, de la vegetación y de los animales.  
                    </p>
                    
                    <img src={ silicioFoto } alt="Polonio foto real" className="imgM2" />
                    
                    <p className="parrafoM2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae facilis reiciendis, nulla quasi nemo voluptas odio non molestiae dicta cumque error labore provident est corporis eligendi atque ratione id. Nam.
                    Quisquam illum tenetur blanditiis tempora, perspiciatis in voluptatem reprehenderit vero quo quos molestiae aspernatur voluptatibus, nostrum, ab provident quam tempore architecto magni esse itaque! Consectetur numquam natus exercitationem? Sequi, sunt.
                    </p>      
                </div>                
            </div>
        </div>       
    )
}