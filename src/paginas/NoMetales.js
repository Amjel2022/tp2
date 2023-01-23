import React from "react";
import "../styles/Nometales.css";
//import de imágenes
import carbonoDatos from "../img-paginas/NoMetales/carbono.png";
import carbonoFoto from "../img-paginas/NoMetales/carbono2.png";
import cloroDatos from "../img-paginas/NoMetales/cloro.png";
import cloroFoto from "../img-paginas/NoMetales/cloro2.png";
import hidrogenoDatos from "../img-paginas/NoMetales/hidrogeno.png";
import hidrogenoFoto from "../img-paginas/NoMetales/hidrogeno2.png";
import oxigenoDatos from "../img-paginas/NoMetales/oxigeno.png";
import oxigenoFoto from "../img-paginas/NoMetales/oxigeno2.png";

export default function NoMetales () {
    return (
        <div className="containerNometales">

            <h1 className="tituloNometales">No Metales</h1>

            <div className="gridNometales">

                <div className="nometal1">
                    <h3 className="tituloNometalGrid">Carbono</h3>

                    <img src={ carbonoDatos } alt="Datos del Carbono" className="imgM1" />

                    <p className="parrafoNM1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae facilis reiciendis, nulla quasi nemo voluptas odio non molestiae dicta cumque error labore provident est corporis eligendi atque ratione id. Nam.
                    Quisquam illum tenetur blanditiis tempora, perspiciatis in voluptatem reprehenderit vero quo quos molestiae aspernatur voluptatibus, nostrum, ab provident quam tempore architecto magni esse itaque! Consectetur numquam natus exercitationem? Sequi, sunt.
                    </p>

                    <img src={ carbonoFoto } alt="Fotos del carbono" className="imgM2" />

                    <p className="parrafoNM2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae facilis reiciendis, nulla quasi nemo voluptas odio non molestiae dicta cumque error labore provident est corporis eligendi atque ratione id. Nam.
                    Quisquam illum tenetur blanditiis tempora, perspiciatis in voluptatem reprehenderit vero quo quos molestiae aspernatur voluptatibus, nostrum, ab provident quam tempore architecto magni esse itaque! Consectetur numquam natus exercitationem? Sequi, sunt.
                    </p>

                </div>

                <div className="nometal2">
                    <h3 className="tituloNometalGrid">Cloro</h3>

                    <img src={ cloroDatos } alt="Datos del Cloro" className="imgM1" />

                    <p className="parrafoNM1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae facilis reiciendis, nulla quasi nemo voluptas odio non molestiae dicta cumque error labore provident est corporis eligendi atque ratione id. Nam.
                    Quisquam illum tenetur blanditiis tempora, perspiciatis in voluptatem reprehenderit vero quo quos molestiae aspernatur voluptatibus, nostrum, ab provident quam tempore architecto magni esse itaque! Consectetur numquam natus exercitationem? Sequi, sunt.
                    </p>

                    <img src={ cloroFoto } alt="Fotos del cloro" className="imgM2" />

                    <p className="parrafoNM2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae facilis reiciendis, nulla quasi nemo voluptas odio non molestiae dicta cumque error labore provident est corporis eligendi atque ratione id. Nam.
                    Quisquam illum tenetur blanditiis tempora, perspiciatis in voluptatem reprehenderit vero quo quos molestiae aspernatur voluptatibus, nostrum, ab provident quam tempore architecto magni esse itaque! Consectetur numquam natus exercitationem? Sequi, sunt.
                    </p>                    
                </div>

                <div className="nometal3">
                    <h3 className="tituloNometalGrid">Hidrógeno</h3>

                    <img src={ hidrogenoDatos } alt="Datos del Hidrogeno" className="imgM1" />

                    <p className="parrafoNM1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae facilis reiciendis, nulla quasi nemo voluptas odio non molestiae dicta cumque error labore provident est corporis eligendi atque ratione id. Nam.
                    Quisquam illum tenetur blanditiis tempora, perspiciatis in voluptatem reprehenderit vero quo quos molestiae aspernatur voluptatibus, nostrum, ab provident quam tempore architecto magni esse itaque! Consectetur numquam natus exercitationem? Sequi, sunt.
                    </p>

                    <img src={ hidrogenoFoto } alt="Fotos del Hidrógeno" className="imgM2" />

                    <p className="parrafoNM2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae facilis reiciendis, nulla quasi nemo voluptas odio non molestiae dicta cumque error labore provident est corporis eligendi atque ratione id. Nam.
                    Quisquam illum tenetur blanditiis tempora, perspiciatis in voluptatem reprehenderit vero quo quos molestiae aspernatur voluptatibus, nostrum, ab provident quam tempore architecto magni esse itaque! Consectetur numquam natus exercitationem? Sequi, sunt.
                    </p>                    
                </div>

                <div className="nometal4">
                    <h3 className="tituloNometalGrid">Oxígeno</h3>

                    <img src={ oxigenoDatos } alt="Datos del Oxígeno" className="imgM1" />

                    <p className="parrafoNM1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae facilis reiciendis, nulla quasi nemo voluptas odio non molestiae dicta cumque error labore provident est corporis eligendi atque ratione id. Nam.
                    Quisquam illum tenetur blanditiis tempora, perspiciatis in voluptatem reprehenderit vero quo quos molestiae aspernatur voluptatibus, nostrum, ab provident quam tempore architecto magni esse itaque! Consectetur numquam natus exercitationem? Sequi, sunt.
                    </p>

                    <img src={ oxigenoFoto } alt="Fotos del Oxígeno" className="imgM2" />

                    <p className="parrafoNM2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae facilis reiciendis, nulla quasi nemo voluptas odio non molestiae dicta cumque error labore provident est corporis eligendi atque ratione id. Nam.
                    Quisquam illum tenetur blanditiis tempora, perspiciatis in voluptatem reprehenderit vero quo quos molestiae aspernatur voluptatibus, nostrum, ab provident quam tempore architecto magni esse itaque! Consectetur numquam natus exercitationem? Sequi, sunt.
                    </p>                    
                </div>

            </div>
            
        </div>
    )
}