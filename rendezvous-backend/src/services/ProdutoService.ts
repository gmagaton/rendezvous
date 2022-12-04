import { Categoria, Produto } from "@prisma/client";
import prismaClient from "../../prisma";

class ProdutoService {

    public async criar(produto: Produto) {
        const user = await prismaClient.produto.create({
            data: produto
        });
        return user;

    }

    public async consultar(idProduto: string) {
        const produto = await prismaClient.produto.findUnique({
            where: { idProduto: idProduto },
            include: { categoria: true }
        });
        return produto;
    }

    public async atualizar(produto: Produto) {
        const p = await prismaClient.produto.update({
            where: {
                idProduto: produto.idProduto,
            },
            data: {
                idCategoria: produto.idCategoria,
                nomeProduto: produto.nomeProduto,
                preco: produto.preco,
                descricaoProduto: produto.descricaoProduto,
                imagemProduto: produto.imagemProduto,
                cozinha: produto.cozinha,
                alteracao: new Date()
            }
        });
        return p;
    }

    public async remover(idProduto: string) {
        const produto = await prismaClient.produto.delete({
            where: {
                idProduto: idProduto
            }
        })
        return produto;
    }

    public async listar() {
        return await prismaClient.produto.findMany({
            include: { categoria: true }
        });
    }

}

export const produtoService = new ProdutoService();