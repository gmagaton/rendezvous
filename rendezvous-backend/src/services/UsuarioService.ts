import { Request, Response } from "express";
import prismaClient from "../../prisma";

interface UserRequest {
    idUser?: string
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
        });
        if (userAlreadyExists) {
            throw new Error("Usuário já está cadastrado")
        }
        const user = await prismaClient.usuario.create({
            data: usuario
        });
        return user;

    }

    public async consultar(idUser: string) {
        const user = await prismaClient.usuario.findUnique({
            where: { idUser: idUser }
        });
        return user;
    }

    public async atualizar(usuario: UserRequest) {
        const user = await prismaClient.usuario.update({
            where: {
                idUser: usuario.idUser,
            },
            data: {
                nomeUser: usuario.nomeUser,
                senha: usuario.senha,
                perfilUser: usuario.perfilUser
            }
        });
        return user;
    }

    public async remover(idUser: string) {
        const user = await prismaClient.usuario.delete({
            where: {
                idUser: idUser
            }
        })
        return user;
    }

    public async listar() {
        return await prismaClient.usuario.findMany();
    }

}

export const usuarioService = new UsuarioService();