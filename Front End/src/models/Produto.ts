import Categoria from "./Categoria";
import User from "./User";

interface Produto{
    id: number;
    nome: string;
    tamanho: string;
    cor: string;
    descricao: string;
    preco: number;
    foto: string;
    usuario?: User|null;
    categoria?: Categoria|null
}

export default Produto;