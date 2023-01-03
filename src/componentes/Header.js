import "../styles/Header.css";

function Header() {
    return <header className="header">Tabla Periódica de los Elementos
        <div className="headerConteiner">
            {/* Logo en la navBar */}
            <a href="#home" className="headerLogo">
                Menú
            </a>

            {/* Menú en la navBar */}
            <nav className="navMenu">
                <ul className="navLista">
                    <li className="navItem">
                        <a href="#home" className="navLink">Home</a>
                    </li>
                    <li className="navItem">
                        <a href="#introduccion" className="navLink">Introducción</a>
                    </li>
                    <li className="navItem">
                        <a href="#historia" className="navLink">Historia</a>
                    </li>
                    <li className="navItem">
                        <a href="#metales" className="navLink">Metales</a>
                    </li>
                    <li className="navItem">
                        <a href="#noMetales" className="navLink">No Metales</a>
                    </li>
                    <li className="navItem">
                        <a href="#metaloides" className="navLink">Metaloides</a>
                    </li>
                    <li className="navItem">
                        <a href="#contacto" className="navLink">Contacto</a>
                    </li>
                </ul>
            </nav>

            {/* Iconos en navBar */}
            <div className="navIconos">
                <i className="ri-menu-fill"></i>
                <i className="ri-close-circle-line"></i>
            </div>

        </div>
    </header>;
}

export default Header;
