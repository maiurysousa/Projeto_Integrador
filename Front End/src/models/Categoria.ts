import Produto from "./Produto";

interface Categoria{
    id: number;
    categoria: string;
    descricao: string;
    palavra_chave: string;
    produto?: Produto[]|null
}

export default Categoria;