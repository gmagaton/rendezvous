import { Request, Response } from "express";
import { categoriaService } from "../services/CategoriaService";

class CategoriaController {

  public async criar(req: Request, res: Response) {
    const user = await categoriaService.criar(req.body);
    return res.json(user);
  }

  public async atualizar(req: Request, res: Response) {
    const user = await categoriaService.atualizar(req.body);
    return res.json(user);
  }

  public async consultar(req: Request, res: Response) {
    const user = await categoriaService.consultar(req.params.idUser);
    return res.json(user);
  }

  public async remover(req: Request, res: Response) {
    const user = await categoriaService.remover(req.params.idUser);
    return res.json(user);
  }

  public async listar(req: Request, res: Response) {
    return res.json(await categoriaService.listar());
  }

}

export const categoriaController = new CategoriaController();