import { Item } from "@prisma/client";
import prismaClient from "../../prisma";

class ItemService {

    public async criar(item: Item) {
        const user = await prismaClient.item.create({
            data: item
        });
        return user;
    }

    public async consultaItensComanda(idComanda: string) {
        const itens = await prismaClient.item.findMany({
            where: { idComanda: idComanda },
            include: { produto: true }
        });
        return itens;
    }

    public async consultaItensParaPreparo() {
        const itens = await prismaClient.item.findMany({
            where: { preparado: false }
        });
        return itens;
    }

    public async consultar(idItem: string) {
        const item = await prismaClient.item.findUnique({
            where: { idItem: idItem }
        });
        return item;
    }

    public async atualizar(item: Item) {
        const i = await prismaClient.item.update({
            where: {
                idItem: item.idItem
            },
            data: {
                idProduto: item.idProduto,
                quantidade: item.quantidade,
                preparado: item.preparado
            }
        });
        return i;
    }

    public async remover(idItem: string) {
        const item = await prismaClient.item.delete({
            where: {
                idItem: idItem
            }
        })
        return item;
    }

    public async listar() {
        return await prismaClient.item.findMany();
    }

}

export const itemService = new ItemService();