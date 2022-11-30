import { Categoria, Comanda } from "@prisma/client";
import prismaClient from "../../prisma";

class ComandaService {

    public async abrir(comanda: Comanda) {
        const c = await prismaClient.comanda.create({
            data: comanda
        });
        return c;
    }

    public async consultar(idComanda: string) {
        const c = await prismaClient.comanda.findUnique({
            where: { idComanda: idComanda }
        });
        return c;
    }

    public async atualizar(comanda: Comanda) {
        const c = await prismaClient.comanda.update({
            where: {
                idComanda: comanda.idComanda,
            },
            data: {
                aberta: comanda.aberta
            }
        });
        return c;
    }

    public async remover(idComanda: string) {
        const c = await prismaClient.comanda.delete({
            where: {
                idComanda: idComanda
            }
        })
        return c;
    }

    public async listar() {
        return await prismaClient.comanda.findMany();
    }

}

export const comandaService = new ComandaService();