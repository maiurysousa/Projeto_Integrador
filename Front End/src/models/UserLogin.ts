interface UserLogin {
    id: number;
    nomeCompleto: string;
    usuario: string;
    senha: string;
    token?: string| null
}

export default UserLogin;