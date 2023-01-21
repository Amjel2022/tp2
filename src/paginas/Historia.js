import React from "react";
import "../styles/Historia.css";
import Dimitri from "../img-paginas/dmitri.png";
import tablaAntigua1 from "../img-paginas/tablaantigua.png";
import tablaAntigua2 from "../img-paginas/tablaantigua2.png";

export default function Historia () {
    return (
        <div className="containerHistoria">
            <h1 className="tituloHistoria">Historia</h1>

            <p className="parrafoH1">
                
                <img src= { Dimitri } alt="Dimitri Mendeléyev" className="imgH1" />
            
            La tabla periódica está presente en las paredes de casi todos los laboratorios de química. El mérito de su creación se le otorga habitualmente a Dmitri Mendeléyev, un químico ruso que en 1869 escribió en tarjetas todos los elementos conocidos (63 hasta ese momento) y después los organizó en columnas y filas de acuerdo a sus propiedades químicas y físicas. Para celebrar el 150 aniversario de este momento clave para la ciencia, la Organización de las Naciones Unidas ha proclamado 2019 como el Año Internacional de la Tabla Periódica.
            </p>
            
            <p className="parrafoH1">
            Pero la tabla periódica no empezó con Mendeléyev. Antes que él, muchos habían ensayado sus propias tablas de elementos. Décadas antes, el químico John Dalton intentó crear una tabla y algunos símbolos interesantes para identificar los elementos, pero no parecieron ser de su agrado. Tan solo unos años antes de que Mendeléyev se sentase con su baraja de cartas caseras, John Newlands creó también una tabla en la que clasificó los elementos según sus propiedades.
            </p>
            
            <p className="parrafoH2">
            
                <img src= { tablaAntigua1 } alt="Tabla Periódica en la antigüedad" className="imgH2" />
            
            La genialidad de Mendeléyev reside en lo que dejó fuera de su tabla. Supo reconocer que ciertos elementos no estaban presentes ya que aún tenían que ser descubiertos, así que donde Dalton, Newlands y otros habían expuesto lo que se sabía, él dejó espacio para lo desconocido. Además, tuvo la capacidad de predecir, de manera aún más asombrosa, las propiedades de los elementos que faltaban.
            </p>
            
            <p className="parrafoH3">
            Fíjese en los signos de interrogación de la tabla situada justo debajo de estas líneas. Por ejemplo, al lado del elemento “Al” (aluminio) hay espacio para un metal desconocido. Mendeléyev predijo que el potencial descubrimiento tendría una masa atómica de 68, una densidad de seis gramos por centímetro cúbico y un punto de fusión muy bajo. Seis años después, Paul Émile Lecoq de Boisbaudran aisló el galio, que encajaba a la perfección en el espacio dispuesto con una masa atómica de 69,7, una densidad de 5.9g/cm³ y un punto de fusión tan bajo que se convierte en líquido en la mano. Mendeléyev hizo lo mismo con el escandio, el germanio y el tecnecio (que no fue descubierto hasta 1937, 30 años después de la muerte del científico ruso).
            
                <img src= { tablaAntigua2 } alt="Tabla Periódica en la antigüedad 2" className="imgH3" />
            
            </p>
            
            <p className="parrafoH3">
            A primera vista, la tabla de Mendeléyev no se parece demasiado a la tabla con la que estamos familiarizados. Uno de los motivos es que la tabla periódica moderna contiene varios elementos que Mendeléyev pasó por alto y para los que no dejó espacio, especialmente los gases nobles (como el helio, el neón y el argón). Por otra parte, la tabla elaborada por el químico ruso tiene una organización diferente a la que conocemos, en la que ahora situamos elementos juntos en columnas dispuestas en filas.
            </p>

        </div>
    )
}