import React, { useEffect, useState } from 'react'
import { Typography, Button, Box, Card, CardActions, CardContent } from "@material-ui/core"
import './DeletarProduto.css';
import Produto from '../../models/Produto';
import { buscaId, deleteId } from '../../../services/Service';
import { useHistory, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';

function DeletarProduto() {
    let history = useHistory();
    const { id } = useParams<{ id: string }>();
    const [token, setToken] = useLocalStorage('token');
    const [produtos, setProdutos] = useState<Produto>()

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            history.push("/login")
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/produtos/${id}`, setProdutos, {
            headers: {
                'Authorization': token
            }
        })
    }

    function sim() {
        history.push('/produtos')
        deleteId(`/produtos/${id}`, {
            headers: {
                'Authorization': token
            }
        });
        alert('Produto deletado com sucesso');
    }

    function nao() {
        history.push('/produtos')
    }

    return (
        <>
            <Box m={2}>
                <Card variant="outlined" >
                    <CardContent>
                        <Box justifyContent="center">
                            <Typography color="textSecondary" gutterBottom>
                                Deseja deletar a Produto:
                            </Typography>
                            <Typography color="textSecondary" >
                                {produtos?.nome}
                            </Typography>
                        </Box>

                    </CardContent>
                    <CardActions>
                        <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
                            <Box mx={2}>
                                <Button onClick={sim} variant="contained" className="marginLeft" size='large' color="primary">
                                    Sim
                                </Button>
                            </Box>
                            <Box>
                                <Button onClick={nao} variant="contained" size='large' color="secondary">
                                    Não
                                </Button>
                            </Box>
                        </Box>
                    </CardActions>
                </Card>
            </Box>
        </>
    );
}
export default DeletarProduto;