import React from "react";
import "../styles/Introduccion.css";
import tabladescargar from "../img-paginas/tabladescargar.png";

export default function Introduccion () {
    return (
        <div className="containerIntro">
            <h1 className="tituloIntro">Introducción</h1>
            
            <p className="parrafo">
            Actualmente, la tabla periódica se compone de 118 elementos distribuidos en 7 filas horizontales llamadas periodos y 18 columnas verticales, conocidas como grupos. Su descubridor, el químico ruso Dmitri Mendeléiev, no fue premiado con el Nobel por lo que es una de las contribuciones capitales en la historia de la química. A cambio, en 1955 recibió el honor de prestar su nombre al mendelevio (Md), el elemento químico de número atómico 101 en la tabla periódica.
            </p>
            
            <img src={ tabladescargar } alt="Tabla Periodica" className="img1" />
            
            <p className="parrafo">
            La tabla periódica es un cuadro que presenta todos los elementos químicos que existen ordenados según sus propiedades físicas. Fue diseñada por el químico ruso Dmitri Mendeléiev en 1869 y es considerado por muchos como el descubrimiento más importante de la química. Y es que esta compleja ordenación de los elementos permitió predecir el descubrimiento de nuevos elementos y permitió realizar investigaciones teóricas sobre estructuras desconocidas hasta el momento.
            </p>
        </div>
    );
}