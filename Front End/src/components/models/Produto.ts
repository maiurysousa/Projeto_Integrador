import Categoria from "./Categoria"
import User from "../../models/User"

interface Produto{
    id: number;
    tamanho: string;
    cor: string;
    descricao: string;
    preco: number;
    foto: string;
    usuario?: User|null
    categoria?: Categoria|null
}

export default Produto;