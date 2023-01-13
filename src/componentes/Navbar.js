import "../styles/Navbar.css";
import 'remixicon/fonts/remixicon.css';

import { Link } from "react-router-dom";
import { useRef } from "react";

function Navbar() {
    
    const navRef = useRef();
    
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav"); 
    }    
    return(
        <header>
            <h1>tabla<b> periódica</b></h1>

            <nav ref={navRef}>
                <Link to="/" className="links">Home</Link>
                <Link to="/introduccion" className= "links" >Introducción</Link>
                <Link to="/historia" className= "links" >Historia</Link>
                <Link to="/metales" className= "links" >Metales</Link>
                <Link to="/NoMetales" className= "links" >No Metales</Link>
                <Link to="/metaloides" className= "links" >Metaloides</Link>
                <Link to="/curiosidades" className= "links" >Curiosidades</Link>
                
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