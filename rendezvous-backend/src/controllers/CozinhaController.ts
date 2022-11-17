import { Request, Response } from "express";

class CozinhaController{

  public solicitar(req:Request, res:Response) {
    return res.json({
      response: 'Cozinha'
    });
  }

}

export const cozinhaController = new CozinhaController();