import { Request, Response } from "express";
import { loginService } from "../services/LoginService";

class LoginController{

  public async logar(req:Request, res:Response) {
    const login = req.body;
    res.json(await loginService.logar(login));
  }

}

export const loginController = new LoginController();