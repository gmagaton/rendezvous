import { Usuario } from "@prisma/client";
import prismaClient from "../../prisma";


class UsuarioService {

    public async criar(usuario: Usuario) {
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

    public async atualizar(usuario: Usuario) {
        const user = await prismaClient.usuario.update({
            where: {
                idUser: usuario.idUser,
            },
            data: {
                nomeUser: usuario.nomeUser,
                senha: usuario.senha,
                perfilUser: usuario.perfilUser,
                alteracao: new Date()
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