import React from "react";
import { Typography, Box, Grid, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import { useEffect } from "react";
//import CarrosselComponent from "../../carousel/CarrosselComponent";
import "./Home.css";
import CarouselComponent from "../../components/carousel/CarouselComponent";

function Home() {
    let history = useHistory();
    const [token, setToken] = useLocalStorage('token');

    useEffect(() => {
        if (token == '') {
            history.push('/home')
        }

    }, [token]);
    return (
        <>
        <Grid container direction="row" justifyContent="center" alignItems="center" className="caixa">
                <Grid xs={12} className="caixa">
                    <Box>
                        <img src="https://imgur.com/KeutRE2.png" alt="" width="100%" />
                        <CarouselComponent />
                    </Box>

                </Grid>

                    <Grid xs={5} sm={5} className="img">
                        <img src="https://i.imgur.com/0oqcguC.png" alt="" className="img" />
                    
                    </Grid>

                    <Grid xs={2} sm={2} className="aligncenter">
                        <Typography variant="h3" component="h3" align="center" className="titulo">Destaques da Semana</Typography>
                    
                    </Grid>

                    <Grid xs={5} sm={5} className="img">
                        <img src="https://i.imgur.com/0oqcguC.png" alt="" className="img" />

                    </Grid>
                    
                    
                    <Box border={1} className="card">
                        <Box justifyContent="center" display="flex">
                            <img src="https://avatars.githubusercontent.com/u/82973647?v=4" alt="" className="card-img" />
                        </Box>
                        <Typography variant="h6" component="h5" align="center" gutterBottom className="nome-autor">
                            Maiury Sousa
                        </Typography>
                        <Typography variant="body2" component="p" align="center" className="pitch-autor">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, voluptas corporis
                            ipsa libero laudantium quas ad ut laborum adipisci dolorem, qui nihil! Odit necessitatibus
                            blanditiis expedita itaque aliquam temporibus officia?
                        </Typography>
                        <Box display="flex" justifyContent="center">
                            <a href="https://www.instagram.com/generationbrasil/" target="_blank">

                            </a>
                            <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">

                            </a>
                        </Box>
                    </Box>

                    <Box border={1} className="card">
                        <Box justifyContent="center" display="flex">
                            <img src="https://avatars.githubusercontent.com/u/82973647?v=4" alt="" className="card-img" />
                        </Box>
                        <Typography variant="h6" component="h5" align="center" gutterBottom className="nome-autor">
                            Maiury Sousa
                        </Typography>
                        <Typography variant="body2" component="p" align="center" className="pitch-autor">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, voluptas corporis
                            ipsa libero laudantium quas ad ut laborum adipisci dolorem, qui nihil! Odit necessitatibus
                            blanditiis expedita itaque aliquam temporibus officia?
                        </Typography>
                        <Box display="flex" justifyContent="center">
                            <a href="https://www.instagram.com/generationbrasil/" target="_blank">

                            </a>
                            <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">

                            </a>
                        </Box>
                    </Box>

                    <Box border={1} className="card">
                        <Box justifyContent="center" display="flex">
                            <img src="https://avatars.githubusercontent.com/u/82973647?v=4" alt="" className="card-img" />
                        </Box>
                        <Typography variant="h6" component="h5" align="center" gutterBottom className="nome-autor">
                            Maiury Sousa
                        </Typography>
                        <Typography variant="body2" component="p" align="center" className="pitch-autor">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, voluptas corporis
                            ipsa libero laudantium quas ad ut laborum adipisci dolorem, qui nihil! Odit necessitatibus
                            blanditiis expedita itaque aliquam temporibus officia?
                        </Typography>
                        <Box display="flex" justifyContent="center">
                            <a href="https://www.instagram.com/generationbrasil/" target="_blank">

                            </a>
                            <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">

                            </a>
                        </Box>
                    </Box>

                    <Box border={1} className="card">
                        <Box justifyContent="center" display="flex">
                            <img src="https://avatars.githubusercontent.com/u/82973647?v=4" alt="" className="card-img" />
                        </Box>
                        <Typography variant="h6" component="h5" align="center" gutterBottom className="nome-autor">
                            Maiury Sousa
                        </Typography>
                        <Typography variant="body2" component="p" align="center" className="pitch-autor">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, voluptas corporis
                            ipsa libero laudantium quas ad ut laborum adipisci dolorem, qui nihil! Odit necessitatibus
                            blanditiis expedita itaque aliquam temporibus officia?
                        </Typography>
                        <Box display="flex" justifyContent="center">
                            <a href="https://www.instagram.com/generationbrasil/" target="_blank">

                            </a>
                            <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">

                            </a>
                        </Box>
                    </Box>
                
            </Grid>
        </>
    );
}

export default Home;