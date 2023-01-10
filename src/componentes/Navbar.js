import "../styles/Navbar.css";
import 'remixicon/fonts/remixicon.css';

import { useRef } from "react";

function Navbar() {
    
    const navRef = useRef();
    
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav"); 
    }    
    return(
        <header>
            <h1>tabla periódica</h1>

            <nav ref={navRef}>
                <a href="/#">Home</a>
                <a href="./paginas/Introduccion.js">Introducción</a>
                <a href="/#">Historia</a>
                <a href="/#">Metales</a>
                <a href="/#">No Metales</a>
                <a href="/#">Metaloides</a>
                <a href="/#">Curiosidades</a>
                
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <i className="ri-close-circle-line"></i>
                </button>
            </nav>
            
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                <i className="ri-menu-5-line"></i>
            </button>
        
        </header>
    );
}

export default Navbar