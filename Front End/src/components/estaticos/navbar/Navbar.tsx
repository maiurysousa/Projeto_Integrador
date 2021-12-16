import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import "./Navbar.css";
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import Search from "./Search";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { addToken } from "../../../store/tokens/actions";

function Navbar() {
    let history = useHistory(); // para redireccionar
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    const dispatch = useDispatch();
    function goLogout() {
        dispatch(addToken(''));
        history.push('/home'); 
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

    var navbarLogo;

    if (token != "") {
        navbarLogo = <Link to="/login" className="nav-links" onClick={closeMobileMenu}>
            <Box onClick={() => goLogout()}>
                <Typography className='txticon'>
                    Logout
                </Typography>
            </Box>
        </Link>


    } else {
        navbarLogo = <Link to="/login" className="nav-links" onClick={closeMobileMenu}>
            <Box  className="nav-links">
                <Typography className='txticon'>
                    Login ou cadastre-se
                </Typography>
            </Box>
        </Link>

    }

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
                        <AccountCircleSharpIcon className="accicon" onClick={() => goLogout()} />
                    </Box>
                    {navbarLogo}
                </Toolbar>
            </AppBar>

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
                    <Search />
                </ul>
            </nav>
        </>
    )
}



export default Navbar;