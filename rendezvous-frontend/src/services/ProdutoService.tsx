import axios from "axios";
import { CategoriaModel } from "./CategoriaService";

export type ProdutoModel = {
    idProduto: String,
    idCategoria: string,
    categoria: CategoriaModel,
    nomeProduto: string,
    preco: number,
    descricaoProduto: string,
    imagemProduto: string,
    cozinha: Boolean,
    criacao: string,
    alteracao: string
}

export default class ProdutoService {
    private uri: string = "http://localhost:3333/produto";

    async listar() {
        return axios.get(this.uri)
    }

    remover(id: String) {
        return axios.delete(this.uri + "/" + id);
    }

    buscar(id: string) {
        return axios.get(this.uri + "/" + id)
    }

    salvar(data: ProdutoModel) {
        var payload = {};

        if (data.idProduto != null) {
            payload = {
                idProduto: data.idProduto,
                idCategoria: data.idCategoria,
                nomeProduto: data.nomeProduto,
                preco: data.preco,
                descricaoProduto: data.descricaoProduto,
                imagemProduto: data.imagemProduto,
                cozinha: data.cozinha
            };
            return axios.put(this.uri, payload);
        }

        payload = {
            idCategoria: data.idCategoria,
            nomeProduto: data.nomeProduto,
            preco: data.preco,
            descricaoProduto: data.descricaoProduto,
            imagemProduto: data.imagemProduto,
            cozinha: data.cozinha
        };

        return axios.post(this.uri, payload);
    }

}