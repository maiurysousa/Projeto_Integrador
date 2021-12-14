import Categoria from "./Categoria"
import Usuario from "./Usuario"

interface Produto{
    id: number;
    tamanho: string;
    cor: string;
    descricao: string;
    preco: number;
    foto: string;
    usuario?: Usuario|null
    categoria?: Categoria|null
}

export default Produto;