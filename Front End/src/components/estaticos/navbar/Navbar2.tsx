import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";




function Navbar2() {
    const [click, setClick] = useState(false)
    const closeMobileMenu = () => setClick(false);

    return (
        <nav className="navbar">
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                    <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/produtos" className="nav-links" onClick={closeMobileMenu}>
                        Produtos
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/categorias" className="nav-links" onClick={closeMobileMenu}>
                        Categorias
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/sobre" className="nav-links" onClick={closeMobileMenu}>
                        Sobre
                    </Link>
                </li>

            </ul>
        </nav>
    )
}
export default Navbar2;