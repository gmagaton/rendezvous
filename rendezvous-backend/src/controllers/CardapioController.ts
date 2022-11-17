import { Request, Response } from "express";

class CardapioController{

  public criar(req:Request, res:Response) {
    return res.json({
      response: 'Produto adicionado no cardápio'
    });
  }

  public consultar(req:Request, res:Response) {
    return res.json({
      response: 'Produto Teste'
    });
  }

  public atualizar(req:Request, res:Response) {
    return res.json({
      response: 'Produto Atualizado'
    });
  }

  public remover(req:Request, res:Response) {
    return res.json({
      response: 'Produto Removido'
    });
  }

  public listar(req:Request, res:Response) {
    return res.json({
      response: 'Lista de Produtos'
    });
  }

}

export const cardapioController = new CardapioController();