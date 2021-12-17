import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import Categoria from '../../../models/Categoria';
import './ListaCategoria.css';
import { useHistory } from 'react-router-dom';
import { busca } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function ListaCategoria() {
    const [categorias, setCategorias] = useState<Categoria[]>([])
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    )
    let history = useHistory();

    async function getCategoria() {
        await busca("/categorias", setCategorias, {
            headers: {
                'Authorization': token
            }
        })
    }


    useEffect(() => {
        getCategoria()
    }, [categorias.length])

    return (
        <Box display="flex" justifyContent="center" flexWrap="wrap">
            <Box mx={1}>
            <Link to="/form-categorias">
                <Button variant="contained" size='small' className="botao-2 " >
                    cadastro
                </Button>
                </Link>
            </Box>

            {
                categorias.map(categoria => (
                    <Box m={2}  >
                        <Card variant="outlined">
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    Categoria
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {categoria.descricao}
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {categoria.categoria}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5} >

                                    <Link to={`/form-categorias/${categoria.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" className="marginLeft botao-1" size='small'  >
                                                atualizar
                                            </Button>
                                        </Box>
                                    </Link>
                                    <Link to={`/deletarCategoria/${categoria.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" size='small' className="botao-2 " >
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
    );
}


export default ListaCategoria;