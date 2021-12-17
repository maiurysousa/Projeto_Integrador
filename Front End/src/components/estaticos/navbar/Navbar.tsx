import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import "./Navbar.css";
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { addToken } from "../../../store/tokens/actions";
import { toast } from "react-toastify";

function Navbar() {
    let history = useHistory(); 
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    const dispatch = useDispatch();
    function goLogout() {
        dispatch(addToken(''));
        toast.info("Usúario Deslogado", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar:false,
            closeOnClick:true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        history.push('/home');

    }
    const [click, setClick] = useState(false)
    const closeMobileMenu = () => setClick(false);

    var navbarLogo;

    if (token != "") {
        navbarLogo = <Link to="/login" className="nav-links" onClick={closeMobileMenu}>
            <Box  onClick={() => goLogout()}>
                <Typography className='txticon nav-links'>
                    Logout
                </Typography>
            </Box>
        </Link>


    } else {
        navbarLogo = <Link to="/login" className="nav-links" onClick={closeMobileMenu}>
            <Box>
                <Typography className='txticon nav-links'>
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

            
        </>
    )
}



export default Navbar;