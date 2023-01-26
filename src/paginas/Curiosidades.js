import React from 'react';
import "../styles/Curiosidades.css";
//import de imágenes
import curiosidad1 from "../img-paginas/Curiosidades/curiosidad1.png";
import curiosidad2 from "../img-paginas/Curiosidades/curiosidad2.png";
import curiosidad3 from "../img-paginas/Curiosidades/curiosidad3.png";
import curiosidad4 from "../img-paginas/Curiosidades/curiosidad4.png";
import curiosidad5 from "../img-paginas/Curiosidades/curiosidad5.png";
import curiosidad6 from "../img-paginas/Curiosidades/curiosidad6.png";
import curiosidad7 from "../img-paginas/Curiosidades/curiosidad7.png";
import curiosidad8 from "../img-paginas/Curiosidades/curiosidad8.png";
import curiosidad9 from "../img-paginas/Curiosidades/curiosidad9.png";
import curiosidad10 from "../img-paginas/Curiosidades/curiosidad10.png";

export default function Curiosidades () {
    return (
        
        <div className="containerCuriosidades">

            <h1 className='tituloCuriosidades'>La Scaloneta y la Tabla Periódica</h1>

            <p className="parrafoC">
                Desde su perfil de Twitter, la investigadora del CONICET Valeria Edelsztein, química, docente y comunicadora, pretende ampliar el foco de comunicación de la ciencia, con el objetivo de llegar a nuevos lugares y realidades. Si bien comenzó investigando en química, hoy se especializa en temas de educación de las ciencias naturales en las aulas. "Después de muchos años de trabajar en el laboratorio me di cuenta de que me faltaba algo, y era justamente la parte de no sólo hacer ciencia sino contar ciencia", reflexiona la especialista del Centro de Formación e Investigación en Enseñanza de las Ciencias (CIFIEC, UBA). 
                La comunicadora cuenta con 150 hilos más para indagar y entretenerse, mientras se puede aprender algo sobre determinados temas de las ciencias naturales. A continuación tomamos su más reciente trabajo en la red social del pajarito, ¡vayan a seguirla!
            </p>

            <div className="gridCuriosidades">

                <div className="curiosidad">

                    <img src={ curiosidad1 } alt="La selección argentina como elementos de la Tabla Periódica" className='imgC' />

                </div>

                <div className="curiosidad">

                    <img src={ curiosidad2 } alt="Cuti Romero: Zinc" className='imgC' />
                    
                </div>

                <div className="curiosidad">

                    <img src={ curiosidad3 } alt="Otamendi: Wolframio" className='imgC' />
                    
                </div>

                <div className="curiosidad">

                    <img src={ curiosidad4 } alt="Mac Allister: Neón" className='imgC' />
                    
                </div>

                <div className="curiosidad">

                    <img src={ curiosidad5 } alt="Messi: Iridio" className='imgC' />
                    
                </div>

                <div className="curiosidad">

                    <img src={ curiosidad6 } alt="Dibu Martinez: Osmio" className='imgC' />
                    
                </div>

                <div className="curiosidad">

                    <img src={ curiosidad7 } alt="De Paul: Niquel" className='imgC' />
                    
                </div>

                <div className="curiosidad">

                    <img src={ curiosidad8 } alt="Scaloni: Oro" className='imgC' />

                </div>

                <div className="curiosidad">

                    <img src={ curiosidad9 } alt="Di Maria: Potasio" className='imgC' />

                </div>

                <div className="curiosidad">

                    <img src={ curiosidad10 } alt="Julian Alvarez: Tantalo" className='imgC' />

                </div>


            </div>
        
        </div>
    )
}