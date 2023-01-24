import React from "react";
import "../styles/Card.css";
//import de imágenes
import imagenTP from "../img-paginas/tablaper1.png";


export default function Card () {
    return (
        <div className="card-container">

            <div className="card1">
                
                <div className="card-imagen">
                    <img src={ imagenTP } alt="Imagen de la Tabla Periódica" className="img-card"/>
                </div>

                <div className="card-contenido">
                    <div className="card-titulo">
                        <h3>introducción</h3>
                    </div>
                
                    <div className="card-parrafo">
                        <p>
                        lorem ipsum dolor sit am lorem, consectetur adipiscing ellorem ipsum dolor lorem, sed diam nonumy eirmod tempor.
                        </p>
                    </div>

                    <button className="card-boton">
                            Querés saber más
                    </button>
                </div>
                
            </div>

            <div className="card2">
                
                <div className="card-imagen">
                    <img src={ imagenTP } alt="Imagen de la Tabla Periódica" className="img-card"/>
                </div>

                <div className="card-contenido">
                    <div className="card-titulo">
                        <h3>introducción</h3>
                    </div>
                
                    <div className="card-parrafo">
                        <p>
                            lorem ipsum dolor sit amet
                        </p>
                    </div>

                    <button className="card-boton">
                            Querés saber más
                    </button>
                </div>

            </div>

            <div className="card3">
                
                <div className="card-imagen">
                    <img src={ imagenTP } alt="Imagen de la Tabla Periódica" className="img-card"/>
                </div>

                <div className="card-contenido">
                    <div className="card-titulo">
                        <h3>introducción</h3>
                    </div>
                
                    <div className="card-parrafo">
                        <p>
                            lorem ipsum dolor sit amet
                        </p>
                    </div>

                    <button className="card-boton">
                            Querés saber más
                    </button>
                </div>

            </div>

            <div className="card4">
                
                <div className="card-imagen">
                    <img src={ imagenTP } alt="Imagen de la Tabla Periódica" className="img-card"/>
                </div>

                <div className="card-contenido">
                    <div className="card-titulo">
                        <h3>introducción</h3>
                    </div>
                
                    <div className="card-parrafo">
                        <p>
                            lorem ipsum dolor sit amet
                        </p>
                    </div>

                    <button className="card-boton">
                            Querés saber más
                    </button>
                </div>

            </div>

            <div className="card5">
                
                <div className="card-imagen">
                    <img src={ imagenTP } alt="Imagen de la Tabla Periódica" className="img-card"/>
                </div>

                <div className="card-contenido">
                    <div className="card-titulo">
                        <h3>introducción</h3>
                    </div>
                
                    <div className="card-parrafo">
                        <p>
                            lorem ipsum dolor sit amet
                        </p>
                    </div>

                    <button className="card-boton">
                            Querés saber más
                    </button>
                </div>

            </div>

            <div className="card6">
                
                <div className="card-imagen">
                    <img src={ imagenTP } alt="Imagen de la Tabla Periódica" className="img-card"/>
                </div>

                <div className="card-contenido">
                    <div className="card-titulo">
                        <h3>introducción</h3>
                    </div>
                
                    <div className="card-parrafo">
                        <p>
                            lorem ipsum dolor sit amet
                        </p>
                    </div>

                    <button className="card-boton">
                            Querés saber más
                    </button> 
                </div>

            </div>

        </div>

    )
}
