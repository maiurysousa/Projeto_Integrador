import React, { ChangeEvent, useEffect, useState } from "react";
import { Grid, Box, Typography, Button, TextField, FormControl, InputLabel, Select, FormHelperText, MenuItem } from "@material-ui/core";
import { Link } from "react-router-dom";
import './CadastroUsuario.css';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import User from '../../../models/User';
import { cadastroUsuario } from "../../../services/Service";


function CadastroUsuario(){

    let history = useHistory();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    // crie um atributo tipo para o user
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nomeCompleto: '',
            usuario: '',
            senha: '',
        })
    // crie um atributo tipo para o userResult
    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nomeCompleto: '',
            usuario: '',
            senha: '',
        })

    useEffect(() => {
        if (userResult.id != 0) {
            history.push("/login")
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log(JSON.stringify(user))
        if (confirmarSenha == user.senha) {
            cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
            toast.success('Usuario cadastrado com sucesso', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        } else {
            toast.error('Dados inconsistentes. Favor verificar as informações de cadastro.', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        }
    }
    return(
        <Grid container direction='row' justifyContent='center' alignItems='center' className='background-color'>
            <Grid item xs={12} sm={6} className='imagem2' ></Grid>
            <Grid item xs={12} sm={6} alignItems='center'>
                <Box paddingX = {10}>
                    <form>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>Cadastre-se</Typography>

                        <TextField id='nome' label='Nome' variant='outlined' name= 'nome' margin='normal' className='inputs' fullWidth/>
                        <TextField id='usuario' label='Usuário' variant='outlined' name= 'usuario' margin='normal' className='inputs' fullWidth/>
                        <TextField id='senha' label='Senha' variant='outlined' name= 'Senha' margin='normal' type='password' className='inputs' fullWidth/>
                        <TextField id='confirmarSenha' label='Confirmar Senha' variant='outlined' name= 'confirmarSenha' margin='normal' type='password' className='inputs' fullWidth/>
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login' className='text-decorator-none'>
                                <Button  variant='contained' color='secondary' className='btnCancelar'>
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type='submit' variant='contained' color='primary' className='btnCadastrar'>
                                Cadastrar
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Grid>
                    
            
        </Grid>
    );
}

export default CadastroUsuario;