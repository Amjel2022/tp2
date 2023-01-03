import "./App.css";
import Carousel from "./componentes/Carousel";
import { fotosCarousel } from "./componentes/Data"; 
import Header from "./componentes/Header";

function App() {
  return (
    <div className="App">
      
      <Header />
       {/* Carousel */}
      <Carousel Carousel={fotosCarousel} />

    </div> 
  );
}

export default App;
