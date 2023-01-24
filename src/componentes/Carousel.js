import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import "../styles/Carousel.css";

function Carousel({Carousel}) {
    const [current, setCurrent] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);
    let timeOut = null;
    
    useEffect( () => { 
        // Me aparecía error en el código y como sugerencia de correción la siguiente línea: 
        // eslint-disable-next-line react-hooks/exhaustive-deps
        timeOut = autoPlay && setTimeout( () => {
            deslizarDerecha();
        }, 2500);     
    })
        // Con la línea comentada anterior el error en el código desapareció. 
        
    // {/* Función deslizar Derecha: */} 
    // Otra forma de escribir el condicional: 
    // !!! const deslizarDerecha = () => {
    //  setCurrent(current === Carousel.length - 1 ? 0 : current + 1);}; !!!  
    const deslizarDerecha = () => {
        if (current === Carousel.length - 1) {
            setCurrent(0);
        } else {
            setCurrent(current + 1);
        } 
    };
    // {/* Función deslizar Izquierda: */}
    // Otra forma de escribir el condicional: 
    // !!! const deslizarIzquierda = () => {
    // setCurrent(current === 0 ? Carousel.length - 1 : current -1);}; !!!
    const deslizarIzquierda = () => {
        if (current === 0) {
            setCurrent (Carousel.length - 1) ;
        } else {
            setCurrent(current - 1);
        }
    };

    return (
    <div className="carousel" 
        onMouseEnter={() => {setAutoPlay (false);
        clearTimeout(timeOut);}}
        onMouseLeave={() => {setAutoPlay (true);}}
    >
        <div className="carousel_wrapper">
            {Carousel.map((imagen, index) => { 
            return (
            // Forma del condicional usado= "(condición) ? true : false -- Otra forma de escribir el "if"!!!
                <div key={index} className= {index === current ? "carousel_card carousel_card-active" : "carousel_card" }>
                    
                    <img className="imagen_card" src={imagen.imagen} alt="" /> 
                    
                    <div className="card_titulo">
                        <h2 className="card_subtitulo"> {imagen.titulo} </h2> 
                    </div>
                </div>
            );
        })} 
        
            {/* Flecha Izquierda: */}
            <div className="flechaIzquierdaCarousel" onClick={deslizarIzquierda}> &lsaquo; 
            </div>    
            {/* Flecha Derecha: */}
            <div className="flechaDerechaCarousel" onClick={deslizarDerecha} >&rsaquo;
            </div> 
            
            {/* Puntitos: */}
            <div className="rotacionCarousel">
                {Carousel.map((_, index) => { 
                    return(
                        <div key={index} className={index === current ? "puntitosCarousel puntitosCarousel-active" : "puntitosCarousel"} 
                        onClick={ () => {setCurrent(index)}}
                        ></div>
                    );
                })}
            </div>
        </div>
    </div>
  );
}

export default Carousel;
