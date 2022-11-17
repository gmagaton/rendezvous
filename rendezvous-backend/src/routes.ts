import { Router } from "express";
import { loginController } from "./controllers/LoginController";
import { cardapioController } from "./controllers/CardapioController";
import { usuarioController } from "./controllers/UsuarioController";
import { comandaController } from "./controllers/ComandaController";
import { cozinhaController } from "./controllers/CozinhaController";
import { contaController } from "./controllers/ContaController";
import { cozinheiroController } from "./controllers/CozinheiroController";

const router: Router = Router()

//Routes
router.post("/login", loginController.logar);

router.get("/usuario", usuarioController.listar);
router.post("/usuario", usuarioController.criar);
router.put("/usuario", usuarioController.atualizar);
router.get("/usuario/:idUser", usuarioController.consultar);
router.delete("/usuario/:idUser", usuarioController.remover);

router.get("/cardapio", cardapioController.listar);
router.post("/cardapio", cardapioController.criar);
router.put("/cardapio", cardapioController.atualizar);
router.get("/cardapio/:id", cardapioController.consultar);
router.delete("/cardapio/:id", cardapioController.remover);

router.post("/comanda/abrir", comandaController.abrir);
router.post("/comanda/encerrar", comandaController.encerrar);
router.post("/comanda/excluir", comandaController.excluir);

router.post("/cozinha/solicitar", cozinhaController.solicitar);
router.post("/cozinheiro/preparar", cozinheiroController.preparar);
router.post("/cozinheiro/pronto", cozinheiroController.pronto);
router.post("/conta/fechar", contaController.fechar);

export { router };