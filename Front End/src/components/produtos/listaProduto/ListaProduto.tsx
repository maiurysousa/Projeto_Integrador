import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Produto from '../../../models/Produto';
import { busca } from '../../../services/Service'
import { Box, Card, CardActions, CardContent, Button, Typography, Grid } from '@material-ui/core';
import './ListaProduto.css';
import { useHistory } from 'react-router-dom'
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useSelector } from 'react-redux';


function ListaProduto() {
    const [produtos, setProdutos] = useState<Produto[]>([])
    let history = useHistory();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );





    async function getProduto() {
        await busca("/produtos", setProdutos, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {

        getProduto()

    }, [produtos.length])

    return (

        <Box display="flex" justifyContent="center" flexWrap="wrap">
            <Grid xs={12} className="caixaProdutos">
                <Box>
                    <img src="https://imgur.com/HzTBdw2.png" alt="" width="100%" />
                </Box>
            </Grid>

            <Grid xs={5} sm={5} className="img">
                <img src="https://i.imgur.com/0oqcguC.png" alt="" className="img" />

            </Grid>

            <Grid xs={2} sm={2} className="padding" >
                <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="aligncenterProdutos">Produtos</Typography>

            </Grid>

            <Grid xs={5} sm={5} className="img">
                <img src="https://i.imgur.com/0oqcguC.png" alt="" className="img" />

            </Grid>
            {
                produtos.map(post => (
                    <Box m={2} width="30%" display="flex">
                        <Card variant="outlined">
                            <img src={post.foto} alt="" />
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    Produtos
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {post.nome}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {post.tamanho}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {post.cor}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {post.descricao}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {post.preco}
                                </Typography>

                                <Typography variant="body2" component="p">
                                    {post.categoria?.descricao}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5}>

                                    <Link to={`/form-produtos/${post.id}`} className="text-decorator-none" >
                                        <Box mx={1} >
                                            <Button variant="contained" className="marginLeft" size='small' color="primary" >
                                                atualizar
                                            </Button>
                                        </Box>
                                    </Link>
                                    <Link to={`/deletarprodutos/${post.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" size='small' color="secondary">
                                                deletar
                                            </Button>
                                        </Box>
                                    </Link>
                                </Box>
                            </CardActions>
                        </Card>
                    </Box>
                ))
            }

        </Box>
    )
}

export default ListaProduto;