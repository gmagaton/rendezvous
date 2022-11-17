import { Request, Response } from "express";

class CozinheiroController{

  public preparar(req:Request, res:Response) {
    return res.json({
      response: 'Conzinheiro Preparar'
    });
  }

  public pronto(req:Request, res:Response) {
    return res.json({
      response: 'Conzinheiro preparo pronto'
    });
  }

}

export const cozinheiroController = new CozinheiroController();