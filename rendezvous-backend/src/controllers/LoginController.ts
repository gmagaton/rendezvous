import { Request, Response } from "express";

class LoginController{

  public logar(req:Request, res:Response) {
    return res.json({
      response: 'Login'
    });
  }

}

export const loginController = new LoginController();