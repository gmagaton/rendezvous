import { Request, Response } from "express";
import { usuarioService } from "../services/UsuarioService";

class UsuarioController {

  public criar(req: Request, res: Response) {
    const user = usuarioService.criar(req.body);
    return res.json(user);
  }

  public atualizar(req: Request, res: Response) {
    return res.json({ OK: true });
  }

  public consultar(req: Request, res: Response) {
    return res.json({ OK: true });
  }

  public remover(req: Request, res: Response) {
    return res.json({ OK: true });
  }

  public listar(req: Request, res: Response) {
    return res.json(usuarioService.listar());
  }

}

export const usuarioController = new UsuarioController();