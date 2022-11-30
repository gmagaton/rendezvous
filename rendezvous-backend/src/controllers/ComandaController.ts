import { Request, Response } from "express";
import { comandaService } from "../services/ComandaService";

class ComandaController{

  public async abrir(req: Request, res: Response) {
    const comanda = await comandaService.abrir(req.body);
    return res.json(comanda);
  }

  public async atualizar(req: Request, res: Response) {
    const comanda = await comandaService.atualizar(req.body);
    return res.json(comanda);
  }

  public async consultar(req: Request, res: Response) {
    const comanda = await comandaService.consultar(req.params.idComanda);
    return res.json(comanda);
  }

  public async remover(req: Request, res: Response) {
    const comanda = await comandaService.remover(req.params.idComanda);
    return res.json(comanda);
  }

  public async listar(req: Request, res: Response) {
    const comanda = await comandaService.listar();
    return res.json(comanda);
  }


}

export const comandaController = new ComandaController();