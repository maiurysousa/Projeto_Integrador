import React from "react";
import { Typography, Box, Grid, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import "./Home.css";
import CarouselComponent from "../../components/carousel/CarouselComponent";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReducer";




function Home() {
    let history = useHistory();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == '') {
            history.push('/home')
        }

    }, [token]);
    return (
        <>
        
            <Grid xs={12} sm={12} container direction="row" justifyContent="center" alignItems="center" className="caixa">
                
                    <Box className="carrossel">
                        <CarouselComponent />
                    </Box>

                

                <Grid xs={5} sm={5} className="img">
                    <img src="https://i.imgur.com/0oqcguC.png" alt="" className="img" />

                </Grid>

                <Grid xs={2} sm={2} className="aligncenter">
                    <Typography variant="h3" component="h3" align="center" className="titulo">Destaques da Semana</Typography>

                </Grid>


                <Grid xs={5} sm={5} className="img">
                    <img src="https://i.imgur.com/0oqcguC.png" alt="" className="img" />

                </Grid>


                <Box border={1} className="dest">
                    <Box justifyContent="center" display="flex">
                        <img src="https://i.imgur.com/UVL90YY.png" alt="" className="card-home" />
                    </Box>
                    
                    
                </Box>

                <Box border={1} className="dest">
                    <Box justifyContent="center" display="flex">
                        <img src="https://i.imgur.com/vjnHjZJ.png" alt="" className="card-home" />
                    </Box>
                    
                    
                </Box>

                <Box border={1} className="dest">
                    <Box justifyContent="center" display="flex">
                        <img src="https://i.imgur.com/YSNmu2r.png" alt="" className="card-home" />
                    </Box>
                    
                </Box>

                <Box border={1} className="dest">
                    <Box justifyContent="center" display="flex">
                        <img src="https://i.imgur.com/iOu178R.png" alt="" className="card-home" />
                    </Box>
                    
                    
                </Box>

            </Grid>
        </>
    );
}

export default Home;