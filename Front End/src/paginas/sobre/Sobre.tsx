import React from 'react';
import { Grid, Box, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Sobre.css';


function Sobre() {

    return (

        <Grid container direction="row" justifyContent="center" className="caixa-sobre">

            <Grid alignItems="center" item xs={12} sm={12} className="imagem-manifesto py-box">

                    <Box m={3}>
                        <Typography variant="h5" component="h4" align="center" className="titulo-manifesto">Manifesto Dresscode</Typography>
                    </Box>

                    <Typography variant="body2" component="p" align="center" className="texto-manifesto">
                        Apoiamos iniciativas que oferecem roupas de qualidade
                        produzidas de forma empática e responsável transformando a vida de todos envolvidos na cadeia produtiva -  da obtenção de matéria prima ao
                        corte e costura - e entregando ao consumidor final a certeza de que ele contribuiu com um processo cujas medidas visam a proteção, a
                        sustentação e a melhora dos recursos humanos e naturais que são necessários no futuro.
                    </Typography>
                    <Typography variant="body2" component="p" align="center" className="texto-manifesto">
                        Proporcionamos um lugar de troca para aqueles que desejam ter o consumo consciente como uma premissa do vestir-se (e sentir-se) bem. Fazemos
                        declarações ao mundo através das roupas que usamos. Através de cores, estilos e acessórios, oferecemos um vislumbre do nosso jeito de viver e
                        assim louvamos nossa diversidade: abolindo qualquer ideia de padrão.
                    </Typography>
                    <Typography variant="body2" component="p" align="center" className="texto-manifesto">
                        Promovemos atitudes que evitam o descarte rápido, construindo um diálogo constante entre as várias épocas da moda na medida em que fomentamos
                        também a comercialização de roupas usadas através do incentivo a brechós online e de bairro.
                    </Typography>
                    <Typography variant="body2" component="p" align="center" className="texto-manifesto">
                        Cada linha que compõe o tecido das roupas que vestimos tem sua importância e incentivando o uso roupas sem gênero que vestem todos os tipos
                        de corpos, realçamos cada traço que nos compõem, valorizando cada curva do nosso corpo, cada desvio de nossa história.
                    </Typography>
                    <Typography variant="body2" component="p" align="center" className="texto-manifesto dresscode">
                        Somos Dresscode
                    </Typography>    
                        
                
            </Grid>                            

            <Grid item xs={5} sm={5} > 
                <img src="https://i.imgur.com/0oqcguC.png" alt="linha" className="linha"/>            
            </Grid>

            <Grid item xs={2} sm={2} justifyContent="center">
                
                    <Typography variant="h4" component="h3" align="center" gutterBottom className="titulo-autores">
                        Equipe
                    </Typography>
                
            </Grid>

            <Grid item xs={5} sm={5}>       
                <img src="https://i.imgur.com/0oqcguC.png" alt="linha" className="linha"/>   
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
                        <GitHubIcon className="github" />
                    </a>
                    <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">
                        <LinkedInIcon className="in" />
                    </a>
                </Box>
            </Box>

            <Box border={1} className="card">
                <Box justifyContent="center" display="flex">
                    <img src="https://avatars.githubusercontent.com/u/90806568?s=400&u=d46a0e82d323c484bd0832087dff74fdda482e5c&v=4" alt="" className="card-img" />
                </Box>
                <Typography variant="h6" component="h5" align="center" gutterBottom className="nome-autor">
                    Wesley Gomes
                </Typography>
                <Typography variant="body2" component="p" align="center" className="pitch-autor">
                    Buscando sempre manter a boa comunicação em relações e em seus codigos, o compromisso
                    com a resolução de problemas é constante. Mantendo a atenção aos detalhes e o bom ambiente
                    esse profissional busca o desenvolvimento continuo!
                </Typography>
                <Box display="flex" justifyContent="center">
                    <a href="https://www.instagram.com/generationbrasil/" target="_blank">
                        <GitHubIcon className="github" />
                    </a>
                    <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">
                        <LinkedInIcon className="in" />
                    </a>
                </Box>
            </Box>

            <Box border={1} className="card">
                <Box justifyContent="center" display="flex">
                    <img src="https://avatars.githubusercontent.com/u/83739100?v=4" alt="" className="card-img" />
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
                        <GitHubIcon className="github" />
                    </a>
                    <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">
                        <LinkedInIcon className="in" />
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
                        <GitHubIcon className="github" />
                    </a>
                    <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">
                        <LinkedInIcon className="in" />
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
                        <GitHubIcon className="github" />
                    </a>
                    <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">
                        <LinkedInIcon className="in" />
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
                        <GitHubIcon className="github" />
                    </a>
                    <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">
                        <LinkedInIcon className="in" />
                    </a>
                </Box>
            </Box>
        </Grid>
    );
}

export default Sobre;
