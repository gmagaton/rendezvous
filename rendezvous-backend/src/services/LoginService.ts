import prismaClient from "../../prisma";

interface LoginRequest {
    nomeUser: string;
    senha: string;
}

class LoginService {

    public async logar(login: LoginRequest) {
        if (!login.nomeUser) {
            throw new Error("Nome do usuário deve ser informado")
        }
        if (!login.senha) {
            throw new Error("Senha do usuário deve ser informado")
        }
        const user = await prismaClient.usuario.findFirst({
            where: {
                nomeUser: login.nomeUser
            }
        });
        if (!user) {
            throw new Error("Usuário não encontrado")
        }

        if (user.senha != login.senha) {
            throw new Error("Senha inválida")
        }

        return user;
    }



}

export const loginService = new LoginService();