import React from "react";
import "../styles/Metales.css";
import aluminioDatos from "../img-paginas/Metales/aluminio.png";
import aluminioFoto from "../img-paginas/Metales/aluminio2.png";
import hierroDatos from "../img-paginas/Metales/hierro.png";
import hierroFoto from "../img-paginas/Metales/hierro2.png";
import neodimioDatos from "../img-paginas/Metales/neodimio.png";
import neodimioFoto from "../img-paginas/Metales/neodimio2.png";
import oroDatos from "../img-paginas/Metales/oro.png"; 
import oroFoto from "../img-paginas/Metales/oro2.png";

import titanioDatos from "../img-paginas/Metales/titanio.png";
import titanioFoto from "../img-paginas/Metales/titanio2.png";


export default function Metales () {
    return (
        
        <div className="containerMetales">
            
            <h1 className="tituloMetales">Metales</h1>

            <div className="gridMetales">

                <div className="metal1">
                    <h3 className="tituloMetalGrid">Aluminio</h3>
                    
                    <img src={ aluminioDatos } alt="Datos del Aluminio" className="imgM1" />
                    
                    <p className="parrafoM1">
                    El aluminio es un elemento químico, de símbolo Al y número atómico 13. Se trata de un metal no ferromagnético. Es el tercer elemento más común encontrado en la corteza terrestre. Los compuestos de aluminio forman el 8% de la corteza de la tierra y se encuentran presentes en la mayoría de las rocas, de la vegetación y de los animales.  
                    </p>
                    
                    <img src={ aluminioFoto } alt="Aluminio foto real" className="imgM2" />
                    
                    <p className="parrafoM2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae facilis reiciendis, nulla quasi nemo voluptas odio non molestiae dicta cumque error labore provident est corporis eligendi atque ratione id. Nam.
                    Quisquam illum tenetur blanditiis tempora, perspiciatis in voluptatem reprehenderit vero quo quos molestiae aspernatur voluptatibus, nostrum, ab provident quam tempore architecto magni esse itaque! Consectetur numquam natus exercitationem? Sequi, sunt.
                    </p> 
                </div>

                <div className="metal2">
                    <h3 className="tituloMetalGrid">Hierro</h3>

                    <img src={ hierroDatos } alt="Datos del Hierro" className="imgM1" />

                    <p className="parrafoM1">
                    Características principales del hierro. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore commodi harum dolorum asperiores aspernatur quod illum eius reprehenderit?
                    </p>

                    <img src={ hierroFoto } alt="Hierro foto real" className="imgM2" />

                    <p className="parrafoM2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis veritatis quos ipsam excepturi vero nihil. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quos corporis totam officiis maiores reprehenderit! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, porro. Optio architecto, qui magni blanditiis error aperiam praesentium. Est tempore accusantium sequi adipisci tempora. Odio cumque dolorem animi distinctio. Doloribus.
                    </p>
                </div>

                <div className="metal3">
                    <h3 className="tituloMetalGrid">Neodimio</h3>

                    <img src={ neodimioDatos } alt="Datos del Neodimio" className="imgM1" />

                    <p className="parrafoM1">
                    Características principales del hierro. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore commodi harum dolorum asperiores aspernatur quod illum eius reprehenderit?
                    </p>

                    <img src={ neodimioFoto } alt="Neodimio foto real" className="imgM2" />

                    <p className="parrafoM2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis veritatis quos ipsam excepturi vero nihil. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quos corporis totam officiis maiores reprehenderit! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, porro. Optio architecto, qui magni blanditiis error aperiam praesentium. Est tempore accusantium sequi adipisci tempora. Odio cumque dolorem animi distinctio. Doloribus.
                    </p>
                </div>
            
                <div className="metal4">
                    <h3 className="tituloMetalGrid">Oro</h3>

                    <img src={ oroDatos } alt="Datos del Oro" className="imgM1" />

                    <p className="parrafoM1">
                    Características principales del hierro. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore commodi harum dolorum asperiores aspernatur quod illum eius reprehenderit?
                    </p>

                    <img src={ oroFoto } alt="Oro foto real" className="imgM2" />

                    <p className="parrafoM2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis veritatis quos ipsam excepturi vero nihil. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quos corporis totam officiis maiores reprehenderit! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, porro. Optio architecto, qui magni blanditiis error aperiam praesentium. Est tempore accusantium sequi adipisci tempora. Odio cumque dolorem animi distinctio. Doloribus.
                    </p>
                </div>

                <div className="metal5">
                    <h3 className="tituloMetalGrid">Titanio</h3>

                    <img src={ titanioDatos } alt="Datos del Hierro" className="imgM1" />

                    <p className="parrafoM1">
                    Características principales del hierro. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore commodi harum dolorum asperiores aspernatur quod illum eius reprehenderit?
                    </p>

                    <img src={ titanioFoto } alt="Titanio foto real" className="imgM2" />

                    <p className="parrafoM2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis veritatis quos ipsam excepturi vero nihil. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quos corporis totam officiis maiores reprehenderit! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, porro. Optio architecto, qui magni blanditiis error aperiam praesentium. Est tempore accusantium sequi adipisci tempora. Odio cumque dolorem animi distinctio. Doloribus.
                    </p>
                </div>
            </div>
        </div>
    )
}