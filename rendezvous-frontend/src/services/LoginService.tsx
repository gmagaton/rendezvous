import axios from "axios";

export default class LoginService {
    private uri: string = "http://localhost:3333/login";

    async login(nomeUser: string, senha: string) {
        var payload = { nomeUser, senha };
        return axios.post(this.uri, payload)
    }

}