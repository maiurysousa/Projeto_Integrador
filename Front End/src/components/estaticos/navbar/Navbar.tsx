import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import "./Navbar.css"

function Navbar() {
    let history = useHistory(); // para redireccionar
    const [token, setToken] = useLocalStorage('token'); // para guardar el token en el localstorage
    function logout() {
        setToken(''); // para apagar el token del localstorage
        history.push('/home'); // para redireccionar a la pagina de login
    }
    return (
        <>
            <AppBar position="fixed">
                <Toolbar variant="dense" className="nav-color">
                    <Box className="cursor" >
                    <img src="https://images-ext-2.discordapp.net/external/hnb_d1ReaJvvWPqpxbpg-VnccZWS0XoocPyYebXy8vc/https/i.imgur.com/E20cppD.png?width=189&height=300" alt="Logo Dresscode" className="logo" />
                    </Box>

                    <Box display="flex" justifyContent="start">
                    <Link to="/home" className="text-decorator-none">
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit">
                                home
                            </Typography>
                        </Box>
                        </Link>
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit">
                                categorias
                            </Typography>
                        </Box>
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit">
                                sobre
                            </Typography>
                        </Box>
                        <Link to="/login" className="text-decorator-none">
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit">
                                login
                            </Typography>
                        </Box>
                        </Link>
                        <Box mx={1} className='cursor text-decorator-none'>
                            <Typography variant="h6" color="inherit" onClick={()=> logout()}>
                                logout
                            </Typography>
                        </Box>
                        
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;