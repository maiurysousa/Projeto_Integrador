import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import "./Navbar.css";
import { Button } from "../../button/Button";
import Dropdown from "../../dropdown/Dropdown";
import ListaProduto from '../../produtos/listaProduto/ListaProduto'
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import Search from "./Search";

function Navbar() {
    let history = useHistory(); // para redireccionar
    const [token, setToken] = useLocalStorage('token'); // para guardar el token en el localstorage
    function logout() {
        setToken(''); // para apagar el token del localstorage
        history.push('/home'); // para redireccionar a la pagina de login
    }
    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };
    return (
        <>
            <AppBar position="static" className="sobreappbar">
                <Toolbar variant="dense">
                    <Box>
                        <img src="https://imgur.com/YRuuBDW.png" className='imgsobreappbar' />
                    </Box>
                    <Box >
                        <Typography variant="h5" color="inherit" className='txtappbar' >
                            .dresscode
                        </Typography>
                    </Box>
                    <Box >
                        <AccountCircleSharpIcon className="accicon" />
                    </Box>
                    <Link to="/login" className="nav-links" onClick={closeMobileMenu}>
                    <Box>
                        <Typography className='txticon'>
                            Login ou cadastre-se
                        </Typography>
                    </Box>
                    </Link>
                </Toolbar>
            </AppBar>

            <nav className="navbar">
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            home
                        </Link>
                    </li>
                    <li className="nav-item"
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <Link to="/lojas" className="nav-links" onClick={closeMobileMenu}>
                            Lojas <i className="fas fa-caret-down" />
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>
                    <li className="nav-item">
                        <Link to="/produtos" className="nav-links" onClick={closeMobileMenu}>
                            Produtos
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contactUs" className="nav-links" onClick={closeMobileMenu}>
                            Contact Us
                        </Link>
                    </li>
                    <Search />
                </ul>
            </nav>
        </>
    )
}



export default Navbar;