import "./App.css";
import Carousel from "./componentes/Carousel";
import { fotosCarousel } from "./componentes/Data"; 
import Navbar from "./componentes/Navbar";


function App() {
  return (
    <div className="App">
      
      <Navbar />
       {/* Carousel */}
      <Carousel Carousel={fotosCarousel} />

    </div> 
  );
}

export default App;
