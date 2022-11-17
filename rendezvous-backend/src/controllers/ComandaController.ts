import { Request, Response } from "express";

class ComandaController{

  public abrir(req:Request, res:Response) {
    return res.json({
      response: 'Comanda aberta'
    });
  }

  public encerrar(req:Request, res:Response) {
    return res.json({
      response: 'Comanda encerrada'
    });
  }

  public excluir(req:Request, res:Response) {
    return res.json({
      response: 'Comanda removida'
    });
  }

}

export const comandaController = new ComandaController();