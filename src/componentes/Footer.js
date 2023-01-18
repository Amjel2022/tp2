import React from 'react'
import "../styles/Footer.css";
import 'remixicon/fonts/remixicon.css';

const Footer = () => {
    return (
        <div className="footerPrincipal">
            <div className="container">
                
                <div className="news">
                {/* Aca se debe colocar un dibujo de un sobre y un inputt para llenar un mail */}
                    
                    <div className="suscripcion"></div>
                 
                </div>

                <div className="columnaFooter">
                    
                    <div className='columna1'>
                        <h4 className='tituloCol1'>Acerca de este proyecto</h4>
                        <p>Este proyecto informativo sobre la Tabla Periódica nació de una necesidad recurrente en la mayoría de las aulas de ciencias naturales de las escuelas de la Provincia de Buenos Aires: información confiable, clara y actualizada sobre la Tabla Periódica. Tema que es de vital importancia en el estudio de la química.</p>
                    </div>
                    
                    <div className="columna2">
                        <h4 className="tituloCol2">Categorías</h4>
                        <ul className="listaNavbar">
                            <li>Home</li>
                            <li>Introducción</li>
                            <li>Historia</li>
                            <li>Clasificación</li>
                            <li>Curiosidades</li>
                        </ul>
                    </div>

                    <div className="columna3">
                        <h4 className="tituloCol3">Sigamos conectados</h4>
                        <ul className="redes">
                            <li>Facebook</li>
                                <div className="iconlinks">
                                    <i class="ri-facebook-circle-fill"></i>
                                </div>
                            <li>Instagram</li>
                                <div className="iconlinks">
                                    <i class="ri-instagram-line"></i>
                                </div>
                            <li>Twitter</li>
                                <div className="iconlinks">
                                    <i class="ri-twitter-line"></i>
                                </div>
                            <li>GitHub</li>
                                <div className="iconlinks">
                                    <i class="ri-github-line"></i>
                                </div>
                        </ul>
                    </div>

                    <div className="fila">
                        <p>©2023 Tabla Periódica | Todos los derechos reservados | Por <a href="./">Angeloz Diseño</a></p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer