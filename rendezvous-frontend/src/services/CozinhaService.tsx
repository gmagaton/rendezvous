import axios from "axios";

export default class CozinhaService {
    private uri: string = "http://localhost:3333/cozinha";

    public async preparado(idItem: string) {
        return axios.put(this.uri + "/preparado/" + idItem)
    }

    public async listar() {
        return axios.get(this.uri);
    }

}