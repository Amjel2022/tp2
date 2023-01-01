import "./App.css";
import Carousel from "./componentes/Carousel";
import { fotosCarousel } from "./componentes/Data"; 

function App() {
  return (
    <div className="App">
      <div className="tituloPrincipal">
        <h1>Tabla Periódica de los Elementos</h1>
       
      </div>
      
    {/* Carousel */}

      <Carousel Carousel={fotosCarousel} />


    </div> 
  );
}

export default App;
