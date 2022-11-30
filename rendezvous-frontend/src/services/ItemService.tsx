import axios from "axios";

export type ComandaModel = {
    idComanda: string,
    numeroMesa: number,
    aberta: boolean,
    idUser: string
}

export type ItemModel = {
    idItem: String,
    idComanda: string,
    idProduto: string,
    quantidade: Number,
    preparado: boolean
}

export default class ItemService {
    private uri: string = "http://localhost:3333/item";

    public async salvar(data: ItemModel) {
        var payload = {};

        if (data.idItem !== null) {
            payload = {
                idItem: data.idItem,
                idComanda: data.idComanda,
                idProduto: data.idProduto,
                quantidade: data.quantidade,
                preparado: data.preparado
            };
            return axios.put(this.uri, payload);
        }

        payload = {
            idComanda: data.idComanda,
            idProduto: data.idProduto,
            quantidade: data.quantidade,
            preparado: data.preparado
        };

        return axios.post(this.uri, payload);
    }

    public async consultaItensComanda(idComanda: string) {
        return axios.get(this.uri + "/comanda/" + idComanda);
    }

    public async consultaItensParaPreparo() {
        return axios.get(this.uri + "/preparo");
    }

    public async consultar(idItem: string) {
        return axios.get(this.uri + "/" + idItem);
    }

    public async remover(idItem: string) {
        return axios.delete(this.uri + "/" + idItem)
    }

    public async listar() {
        return axios.get(this.uri);
    }

}