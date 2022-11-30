import { Request, Response } from "express";
import { produtoService } from "../services/ProdutoService";

class ProdutoController {

  public async criar(req: Request, res: Response) {
    const user = await produtoService.criar(req.body);
    return res.json(user);
  }

  public async atualizar(req: Request, res: Response) {
    const user = await produtoService.atualizar(req.body);
    return res.json(user);
  }

  public async consultar(req: Request, res: Response) {
    const user = await produtoService.consultar(req.params.idProduto);
    return res.json(user);
  }

  public async remover(req: Request, res: Response) {
    const user = await produtoService.remover(req.params.idProduto);
    return res.json(user);
  }

  public async listar(req: Request, res: Response) {
    return res.json(await produtoService.listar());

  }
  
}

export const produtoController = new ProdutoController();