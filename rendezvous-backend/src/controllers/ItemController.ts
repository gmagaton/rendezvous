import { Request, Response } from "express";
import { itemService } from "../services/ItemService";

class ItemController {

  public async criar(req: Request, res: Response) {
    const item = await itemService.criar(req.body);
    return res.json(item);
  }

  public async atualizar(req: Request, res: Response) {
    const item = await itemService.atualizar(req.body);
    return res.json(item);
  }

  public async consultar(req: Request, res: Response) {
    const item = await itemService.consultar(req.params.idItem);
    return res.json(item);
  }

  public async consultaItensComanda(req: Request, res: Response) {
    const itens = await itemService.consultaItensComanda(req.params.idComanda);
    return res.json(itens);
  }

  public async consultaItensParaPreparo(req: Request, res: Response) {
    const itens = await itemService.consultaItensParaPreparo();
    return res.json(itens);
  }

  public async remover(req: Request, res: Response) {
    const user = await itemService.remover(req.params.idItem);
    return res.json(user);
  }

  public async listar(req: Request, res: Response) {
    return res.json(await itemService.listar());
  }

}

export const itemController = new ItemController();