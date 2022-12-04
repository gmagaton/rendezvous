import { Request, Response } from "express";
import { cozinhaService } from "../services/CozinhaService";

class CozinhaController {

  public async listar(req: Request, res: Response) {
    const itens = await cozinhaService.listar();
    return res.json(itens);
  }

  public async preparado(req: Request, res: Response) {
    const comanda = await cozinhaService.preparado(req.params.idItem);
    return res.json(comanda);
  }
}

export const cozinhaController = new CozinhaController();