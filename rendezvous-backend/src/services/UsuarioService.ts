import { Request, Response } from "express";
import prismaClient from "../../prisma";

interface UserRequest {
    nomeUser: string;
    senha: string;
    perfilUser: string;
}

class UsuarioService {

    public async criar(usuario: UserRequest) {
        if (!usuario.nomeUser) {
            throw new Error("Nome do usuário deve ser informado")
        }
        const userAlreadyExists = await prismaClient.usuario.findFirst({
            where: {
                nomeUser: usuario.nomeUser
            }
        })
        if (userAlreadyExists) {
            throw new Error("Usuário já está cadastrado")
        }
        const user = await prismaClient.usuario.create({
            data: usuario
        })
        return user;

    }

    public async consultar() {
        return { OK: true }
    }

    public async atualizar() {
        return { OK: true }
    }

    public async remover() {
        return { OK: true }
    }

    public async listar() {
        const users = prismaClient.usuario.findMany()
        return users;
    }

}

export const usuarioService = new UsuarioService();