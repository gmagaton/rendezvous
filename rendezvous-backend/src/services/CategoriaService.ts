import { Categoria } from "@prisma/client";
import prismaClient from "../../prisma";

class CategoriaService {

    public async criar(categoria: Categoria) {
        const c = await prismaClient.categoria.create({
            data: categoria
        });
        return c;

    }

    public async consultar(idCategoria: string) {
        const c = await prismaClient.categoria.findUnique({
            where: { idCategoria: idCategoria }
        });
        return c;
    }

    public async atualizar(categoria: Categoria) {
        const c = await prismaClient.categoria.update({
            where: {
                idCategoria: categoria.idCategoria,
            },
            data: {
                nomeCategoria: categoria.nomeCategoria
            }
        });
        return c;
    }

    public async remover(idCategoria: string) {
        const c = await prismaClient.categoria.delete({
            where: {
                idCategoria: idCategoria
            }
        })
        return c;
    }

    public async listar() {
        return await prismaClient.categoria.findMany();
    }

}

export const categoriaService = new CategoriaService();