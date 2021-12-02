import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
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
                        
                        <Link to="/login" className="text-decorator-none">
                            <Box mx={1} style={{ cursor: "pointer", color: "white" }}>
                                <Typography variant="h6" color="inherit">
                                    logout
                                </Typography>
                            </Box>
                        </Link>

                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;