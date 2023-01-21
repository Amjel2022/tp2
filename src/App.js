import "./App.css";
import Navbar from "./componentes/Navbar";
import {Routes, Route} from "react-router-dom";
import Footer from "./componentes/Footer";

import Home from "./paginas/Home";
import Introduccion from "./paginas/Introduccion";
import Historia from "./paginas/Historia";
import Metales from "./paginas/Metales";
import NoMetales from "./paginas/NoMetales";
import Metaloides from "./paginas/Metaloides";
import Curiosidades from "./paginas/Curiosidades";


function App() {
  return (
    <div className="App">
      
      {/* Barra de Navegación - Navbar */}
      <Navbar />
      
      
      {/* Rutas de la App */}
      <Routes>       
          <Route path="/" element={<Home />} />
          <Route path="introduccion" element={<Introduccion />} />
          <Route path="historia" element={<Historia />} /> 
          <Route path="metales" element={<Metales />} />
          <Route path="noMetales" element={<NoMetales />} />
          <Route path="metaloides" element={<Metaloides />} />
          <Route path="curiosidades" element={<Curiosidades />} />    
      </Routes>
      
      {/* Footer de la App */}
      <Footer />
    
    </div> 
  );
}

export default App;
