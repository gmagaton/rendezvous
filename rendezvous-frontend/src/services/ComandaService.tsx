import axios from "axios";

export type ComandaModel = {
    current: any;
    idComanda: string,
    numeroMesa: number,
    aberta: boolean,
    idUser: string
}

export default class ComandaService {
    private uri: string = "http://localhost:3333/comanda";

    buscar(idComanda: string) {
        return axios.get(this.uri + "/" + idComanda);
    }

    listar() {
        return axios.get(this.uri);
    }

    remover(id: string) {
        return axios.delete(this.uri + "/" + id);
    }

    fechar(data: ComandaModel) {
        var payload = {
            idComanda: data.idComanda,
            numeroMesa: data.numeroMesa,
            idUser: data.idUser,
            aberta: false
        };
        return axios.put(this.uri, payload);
    }

    abrir(data: ComandaModel) {

        var payload = {};

        if (data.idComanda != null) {
            payload = {
                idComanda: data.idComanda,
                numeroMesa: data.numeroMesa,
                idUser: data.idUser,
                aberta: true
            };
            return axios.post(this.uri, payload);
        }

        payload = {
            numeroMesa: data.numeroMesa,
            idUser: data.idUser,
            aberta: true
        };

        return axios.post(this.uri, payload);
    }

}