import React from 'react'
import "../styles/Footer.css";
import 'remixicon/fonts/remixicon.css';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footerPrincipal">
            <div className="news">
                    <div className='newsTexto'>
                        <h4 className="tituloNews">Recibí nuestro newsletter</h4>
                        <p>Todas las novedades de la página en tu correo.</p>
                    </div>
                    
                    <div className='iconNews'>
                        <i className="ri-mail-star-line"></i>
                    </div>

                    <input type="email" placeholder="Correo Electrónico" className="formulario"></input>

                    <button className="botonSuscripcion" >
                    Suscribite
                    </button>
                    
            </div>
            
            <div className="container">
                

                <div className="columnaFooter">
                    
                    <div className='columna1'>
                        <h4 className='tituloCol1'>Acerca de este proyecto</h4>
                        <p>Este proyecto informativo e interactivo (en el futuro) sobre la Tabla Periódica nació de una necesidad recurrente en la mayoría de las aulas de ciencias naturales de las escuelas de la Provincia de Buenos Aires: información confiable, clara y actualizada sobre la Tabla Periódica. Tema que es de vital importancia en el estudio de la química. Por tal motivo, esperamos que el desarrollo de esta página web sea utilizado como un recurso pedagógico gratuito para todos los profesores y estudiantes que lo requieran. 
                        </p>
                    </div>
                    
                    <div className="columna2">
                        <h4 className="tituloCol2">Categorías</h4>
                        <ul className="listaNavbar">
                            <li>
                                <Link to="/" className="linkfooter">Home</Link>
                            </li>
                            <li>
                                <Link to="/introduccion" className="linkfooter">Introducción</Link>
                            </li>
                            <li>
                                <Link to="/historia" className="linkfooter">Historia</Link>
                            </li>
                            <li>
                                <Link to="/metales" className="linkfooter">Metales</Link>
                            </li>
                            <li>
                                <Link to="/nometales" className="linkfooter">No Metales</Link>
                            </li>
                            <li>
                                <Link to="/metaloides" className="linkfooter">Metaloides</Link>
                            </li>  
                            <li>
                                <Link to="/curiosidades" className="linkfooter">Curiosidades</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="columna3">
                        <h4 className="tituloCol3">Sigamos conectados</h4>
                        <ul className="redes">
                                {/* Facebook */}
                                <div className="iconlinks">
                                    <i className="ri-facebook-circle-fill"></i>
                                </div>
                                {/* Instagram */}
                                <div className="iconlinks">
                                    <i className="ri-instagram-line"></i>
                                </div>
                                {/* Twitter */}
                                <div className="iconlinks">
                                    <i className="ri-twitter-line"></i>
                                </div>
                                {/* GitHub */}
                                <div className="iconlinks">
                                    <i className="ri-github-line"></i>
                                </div>
                        </ul>
                    </div>
                </div>
                
                <div className="fila">
                        <p>©2023 Tabla Periódica | Todos los derechos reservados | Por <a href="./">Angeloz Diseño</a></p>
                </div>
                
            </div>
        </div>
    )
}

export default Footer