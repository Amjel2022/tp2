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

            <nav className="navbar" ref={navRef} >
                <Link to="/" className="links" onClick={showNavbar}>
                    <div className="iconLinks">
                        <i className="ri-home-3-line" ></i>
                    </div>
                    Home
                </Link>
                
                <Link to="/introduccion" className= "links" onClick={showNavbar}>
                    <div className="iconLinks">
                        <i className="ri-bookmark-line" ></i>
                    </div>
                    Introducción
                </Link>
                
                <Link to="/historia" className= "links" onClick={showNavbar}>
                    <div className="iconLinks">
                        <i className="ri-calendar-check-line" ></i>
                    </div>
                    Historia
                </Link>
                
                <Link to="/metales" className= "links" onClick={showNavbar}>
                    <div className="iconLinks">
                        <i className="ri-layout-top-2-line" ></i>
                    </div>
                    Metales
                </Link>
                
                <Link to="/NoMetales" className= "links" onClick={showNavbar}>
                    <div className="iconLinks">
                        <i className="ri-layout-left-2-line" ></i>
                    </div>
                    No Metales
                    </Link>
                
                <Link to="/metaloides" className= "links" onClick={showNavbar}>
                    <div className="iconLinks">
                        <i className="ri-layout-right-2-line" ></i>
                    </div>
                    Metaloides
                    </Link>
                
                <Link to="/curiosidades" className= "links" onClick={showNavbar}>
                    <div className="iconLinks">
                        <i className="ri-medal-2-line" ></i>
                    </div>
                    Curiosidades
                </Link>
                
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

