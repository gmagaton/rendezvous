import { Request, Response } from "express";

class ContaController{

  public fechar(req:Request, res:Response) {
    return res.json({
      response: 'Conta'
    });
  }

}

export const contaController = new ContaController();