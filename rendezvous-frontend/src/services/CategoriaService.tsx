import axios from "axios";

export type CategoriaModel = {
    idCategoria: string,
    nomeCategoria: string,
    criacao: string,
    alteracao: string
}

export default class CategoriaService {
    private uri: string = "http://localhost:3333/categoria";

    listar() {
        return axios.get(this.uri)
    }

    remover(id: string) {
        return axios.delete(this.uri + "/" + id);
    }

    buscar(id: string) {
        return axios.get(this.uri + "/" + id)
    }

    salvar(data: CategoriaModel) {
        var payload = {};

        if (data.idCategoria != null) {
            payload = {
                idCategoria: data.idCategoria,
                nomeCategoria: data.nomeCategoria
            };
            return axios.put(this.uri, payload);
        }

        payload = {
            nomeCategoria: data.nomeCategoria
        };

        return axios.post(this.uri, payload);
    }

}