import { Request, Response } from "express";
import { usuarioService } from "../services/UsuarioService";

class UsuarioController {

  public async criar(req: Request, res: Response) {
    const user = await usuarioService.criar(req.body);
    return res.json(user);
  }

  public async atualizar(req: Request, res: Response) {
    const user = await usuarioService.atualizar(req.body);
    return res.json(user);
  }

  public async consultar(req: Request, res: Response) {
    const user = await usuarioService.consultar(req.params.idUser);
    return res.json(user);
  }

  public async remover(req: Request, res: Response) {
    const user = await usuarioService.remover(req.params.idUser);
    return res.json(user);
  }

  public async listar(req: Request, res: Response) {
    return res.json(await usuarioService.listar());
  }

}

export const usuarioController = new UsuarioController();