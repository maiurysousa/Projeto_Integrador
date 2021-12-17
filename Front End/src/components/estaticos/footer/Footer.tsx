import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Box, Grid } from '@material-ui/core';
import './Footer.css';

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" xs={12}   >
                    <Box className="box-footer">
                        <Box paddingTop={2} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom >
                                Siga-nos nas redes sociais!
                            </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center" >
                            <a href="https://www.instagram.com/dresscodemarketplace/" target="_blank">
                                <InstagramIcon className="redes-footer" />
                            </a>
                            <a href="" target="_blank">
                                <LinkedInIcon className="redes-footer" />
                            </a>
                        </Box>
                    </Box>
                    <Box className="box-footer2" >
                        <Box paddingTop={3}>
                            <Typography variant="subtitle2" align="center" gutterBottom  >
                                © 2021 DressCode LTDA.
                            </Typography>
                        </Box>

                    </Box>
                </Grid>


            </Grid>
        </>
    )
}

export default Footer;