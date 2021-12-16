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
import Sobre from "../../../paginas/sobre/Sobre";
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

    var navbarLogo;

    if(token != ""){ 
        navbarLogo = <Box sx={{ flexGrow: 1 }}>
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
                            Logout
                        </Typography>
                    </Box>
                    </Link>
                </Toolbar>
            </AppBar>
    </Box>
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
                        <AccountCircleSharpIcon className="accicon" />
                    </Box>
                    <Link to="/login" className="nav-links" onClick={closeMobileMenu}>
                    <Box onClick={() => goLogout()} className="nav-links">
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
                            Home
                        </Link>
                    </li>
                    <li className="nav-item"
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <Link to="/lojas" className="nav-links" onClick={closeMobileMenu}>
                            Lojas <i className="fas fa-caret-down" />
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/produtos" className="nav-links" onClick={closeMobileMenu}>
                            Produtos
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