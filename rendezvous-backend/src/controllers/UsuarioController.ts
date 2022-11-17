import { Request, Response } from "express";
import { usuarioService } from "../services/UsuarioService";

class UsuarioController {

  public criar(req: Request, res: Response) {
    console.log(req.body);
    const user = usuarioService.criar(req.body);
    return res.json(user);
  }

  public atualizar(req: Request, res: Response) {
    const user = usuarioService.atualizar(req.body);
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