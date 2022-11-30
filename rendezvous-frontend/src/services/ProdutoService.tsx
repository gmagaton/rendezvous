import axios from "axios";

export type ProdutoModel = {
    idProduto: string,
    idCategoria: string,
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

    listar() {
        return axios.get(this.uri)
    }

    remover(id: string) {
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