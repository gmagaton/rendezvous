import prismaClient from "../../prisma";

class CozinhaService {

    public async listar() {
        const itens = await prismaClient.item.findMany({
            where: { preparado: false },
            include: { produto: true, comanda: true }
        });
        return itens;
    }

    public async preparado(idItem: string) {
        const i = await prismaClient.item.update({
            where: {
                idItem: idItem
            },
            data: {
                preparado: true
            }
        });
        return i;
    }

}

export const cozinhaService = new CozinhaService();