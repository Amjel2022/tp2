import React from "react";
import "../styles/Introduccion.css";
import tabladescargar from "../img-paginas/tabladescargar.png";
import formulagua from "../img-paginas/formulagua.png";

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

            <h2 className="subtituloIntro">
            Preguntas frecuentes sobre la Tabla Periódica 
            </h2>
            
            <h3 className="subtituloIntro2">
            ¿Cuántos elementos tiene la Tabla Periódica?    
            </h3>
            <p className="parrafo">
            Actualmente la tabla periódica actual cuenta con 118 elementos (94 de los cuales se dan de manera natural en la Tierra) sin embargo, los científicos están intentando sintetizar nuevos elementos artificiales, por lo que no se descarta que esta lista aumente en el futuro. De hecho los grandes laboratorios de Japón, Rusia, Estados Unidos y Alemania compiten por ser los primeros en obtener los siguientes: el 119 y el 120.
            </p>

            <h3 className="subtituloIntro2">
            ¿Cómo se organiza la Tabla Periódica?
            </h3>
            <p className="parrafo">
            La tabla periódica de los elementos está organizada de menor a mayor según su número atómico, es decir, el número total de protones que tiene cada átomo de ese elemento. Además están distribuidos en 7 filas horizontales llamadas periodos y 18 columnas verticales conocidas como grupos, de modo que los elementos que pertenecen al mismo grupo tienen propiedades similares.
            </p>

            <h3 className="subtituloIntro2">
            ¿Qué significa cada elemento de la Tabla Periódica?   
            </h3>
            <p className="parrafo">
            Cada casilla de la tabla periódica corresponde a un elemento químico con unas propiedades determinadas. En dicha casilla se especifica su nombre, el símbolo químico del elemento, su número atómico (cantidad de protones), su masa atómica, la energía de ionización, la electronegatividad, sus estados de oxidación y la configuración electrónica. Gracias a los símbolos químicos se pueden abreviar los elementos de ciertas materias, como el agua, que está compuesta por dos moléculas de hidrógeno y una de oxígeno, es decir: H<sub>2</sub>O.
            </p>
            <img src={ formulagua } alt="Formula del agua" className="img2" />
        </div>
    );
}