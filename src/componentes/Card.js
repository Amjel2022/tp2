import React from "react";
import "../styles/Card.css";
import { Link } from "react-router-dom";
//import de imágenes
import imagenTP from "../img-paginas/img-cards/tablaper1.png";
import tablaAntigua from "../img-paginas/img-cards/tablaantigua2.png";
import metales from "../img-paginas/img-cards/metales_portada.png";
import noMetales from "../img-paginas/img-cards/nometales_portada.png";
import metaloides from "../img-paginas/img-cards/metaloides_portada.png";



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
                        La Tabla Periódica es una parte fundamental en el estudio de la química. Conocer y saber usar una tabla, es un conocimiento básico que todo estudiante de química debería conocer.
                        </p>
                    </div>

                    <Link to="/introduccion" className="linkcard">Saber más</Link>  
                    
                </div>
                
            </div>

            <div className="card2">
                
                <div className="card-imagen">
                    <img src={ tablaAntigua } alt="Tabla Periódica Antigua" className="img-card"/>
                </div>

                <div className="card-contenido">
                    <div className="card-titulo">
                        <h3>historia</h3>
                    </div>
                
                    <div className="card-parrafo">
                        <p>
                        Todo lo que tenes que saber de la Tabla Periódica: ¿quién la creó?, ¿cómo se hizo?, ¿cuántas tablas han existido a lo largo de la historia? 
                        </p>
                    </div>

                    <Link to="/historia" className="linkcard">Saber más</Link>
                
                </div>

            </div>

            <div className="card3">
                
                <div className="card-imagen">
                    <img src={ metales } alt="Imagen de Metales" className="img-card3"/>
                </div>

                <div className="card-contenido">
                    <div className="card-titulo">
                        <h3>metales</h3>
                    </div>
                
                    <div className="card-parrafo">
                        <p>
                            Todos usamos o tenemos contacto con algún tipo de metal, pero ¿cuáles son sus características químicas? ¿Son todos iguales? ¿Podemos comer metales?
                        </p>
                    </div>

                    <Link to="/metales" className="linkcard">Saber más</Link>
                
                </div>

            </div>

            <div className="card4">
                
                <div className="card-imagen">
                    <img src={ noMetales } alt="Imagen de algunos no metales" className="img-card"/>
                </div>

                <div className="card-contenido">
                    <div className="card-titulo">
                        <h3>no metales</h3>
                    </div>
                
                    <div className="card-parrafo">
                        <p>
                            Pueden ser: sólidos, líquidos y gaseosos. ¿Dónde están los No metales? ¿Cuáles son los más importantes? ¿Tienen alguna utilidad?
                        </p>
                    </div>

                    <Link to="/nometales" className="linkcard">Saber más</Link>
                
                </div>

            </div>

            <div className="card5">
                
                <div className="card-imagen">
                    <img src={ metaloides } alt="Imagen de metaloides" className="img-card"/>
                </div>

                <div className="card-contenido">
                    <div className="card-titulo">
                        <h3>metaloides</h3>
                    </div>
                
                    <div className="card-parrafo">
                        <p>
                            Se dice que estos elementos representan el futuro, ya que son usados ampliamente en la fabricación de aparatos electrónicos, ¿querés saber cuáles son? 
                        </p>
                    </div>

                    <Link to="/metaloides" className="linkcard">Saber más</Link>
                
                </div>

            </div>

            <div className="card6">
                
                <div className="card-imagen">
                    <img src={ imagenTP } alt="Imagen de la Tabla Periódica" className="img-card"/>
                </div>

                <div className="card-contenido">
                    <div className="card-titulo">
                        <h3>curiosidades</h3>
                    </div>
                
                    <div className="card-parrafo">
                        <p>
                            ¿Qué tiene que ver la Scaloneta con la Tabla Periódica? Aquí una relación que muy pocos imaginaron... 
                        </p>
                    </div>

                    <Link to="/curiosidades" className="linkcard">Saber más</Link>
                
                </div>

            </div>

        </div>

    )
}
