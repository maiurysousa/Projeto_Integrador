import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Produto from '../../../models/Produto';
import { busca } from '../../../services/Service'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaProduto.css';
import { useHistory } from 'react-router-dom'
import useLocalStorage from 'react-use-localstorage';
import Produtos from '../../../paginas/produtos/PaginaProdutos';


function ListaProduto() {
    const [produtos, setProdutos] = useState<Produto[]>([])
    let history = useHistory();
    const [token, setToken] = useLocalStorage('token');




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
        <>
            {
                produtos.map(post => (
                    <Box m={2} >
                        <Card variant="outlined">
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
                                    {post.foto}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {post.categoria?.descricao}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5}>

                                    <Link to={`/formularioProdutos/${post.id}`} className="text-decorator-none" >
                                        <Box mx={1}>
                                            <Button variant="contained" className="marginLeft" size='small' color="primary" >
                                                atualizar
                                            </Button>
                                        </Box>
                                    </Link>
                                    <Link to={`/deletarProduto/${post.id}`} className="text-decorator-none">
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
        </>
    )
}

export default ListaProduto;