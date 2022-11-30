import { Router } from "express";
import { loginController } from "./controllers/LoginController";
import { produtoController } from "./controllers/ProdutoController";
import { usuarioController } from "./controllers/UsuarioController";
import { comandaController } from "./controllers/ComandaController";
import { cozinhaController } from "./controllers/CozinhaController";
import { contaController } from "./controllers/ContaController";
import { cozinheiroController } from "./controllers/CozinheiroController";
import { categoriaController } from "./controllers/CategoriaController";

const router: Router = Router()

//Routes
router.post("/login", loginController.logar);

router.get("/categoria", categoriaController.listar);
router.post("/categoria", categoriaController.criar);
router.put("/categoria", categoriaController.atualizar);
router.get("/categoria/:idCategoria", categoriaController.consultar);
router.delete("/categoria/:idCategoria", categoriaController.remover);

router.get("/usuario", usuarioController.listar);
router.post("/usuario", usuarioController.criar);
router.put("/usuario", usuarioController.atualizar);
router.get("/usuario/:idUser", usuarioController.consultar);
router.delete("/usuario/:idUser", usuarioController.remover);

router.get("/produto", produtoController.listar);
router.post("/produto", produtoController.criar);
router.put("/produto", produtoController.atualizar);
router.get("/produto/:idProduto", produtoController.consultar);
router.delete("/produto/:idProduto", produtoController.remover);

router.post("/comanda/abrir", comandaController.abrir);
router.post("/comanda/encerrar", comandaController.encerrar);
router.post("/comanda/excluir", comandaController.excluir);

router.post("/cozinha/solicitar", cozinhaController.solicitar);
router.post("/cozinheiro/preparar", cozinheiroController.preparar);
router.post("/cozinheiro/pronto", cozinheiroController.pronto);
router.post("/conta/fechar", contaController.fechar);

export { router };