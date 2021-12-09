import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Box, Grid } from '@material-ui/core';
import './Footer.css'

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" xs={12}   >
                    <Box className='box1'>
                        <Box paddingTop={2} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom className='txtfooter' >Siga-nos nas redes sociais! </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="" target="_blank">
                                <InstagramIcon className='icones' />
                            </a>
                            <a href="" target="_blank">
                                <LinkedInIcon className='icones' />
                            </a>
                        </Box>
                    </Box>
                    <Box className='box2' >
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" className='txtfooter' > © 2021 DressCode LTDA. </Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="">
                            <Typography variant="subtitle2" gutterBottom className='txtfooter' align="center">DressCode</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>


            </Grid>
        </>
    )
}

export default Footer;