import axios from "axios";

export type UsuarioModel = {
    idUser: string,
    nomeUser: string,
    senha: string,
    confirmacaoSenha: string,
    perfilUser: string,
    criacao: string,
    alteracao: string
}

export default class UsuarioService {
    private uri: string = "http://localhost:3333/usuario";

    listar() {
        return axios.get(this.uri)
    }

    remover(id: string) {
        return axios.delete(this.uri + "/" + id);
    }

    buscar(id: string) {
        return axios.get(this.uri + "/" + id)
    }

    salvar(data: UsuarioModel) {

        var payload = {};

        if (data.idUser != null) {
            payload = {
                idUser: data.idUser,
                nomeUser: data.nomeUser,
                perfilUser: data.perfilUser,
                senha: data.senha
            };
            return axios.put(this.uri, payload);
        }

        payload = {
            nomeUser: data.nomeUser,
            perfilUser: data.perfilUser,
            senha: data.senha
        };

        return axios.post(this.uri, payload);
    }

}