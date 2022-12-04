import { Router } from "express";
import { loginController } from "./controllers/LoginController";
import { produtoController } from "./controllers/ProdutoController";
import { usuarioController } from "./controllers/UsuarioController";
import { comandaController } from "./controllers/ComandaController";
import { cozinhaController } from "./controllers/CozinhaController";
import { categoriaController } from "./controllers/CategoriaController";
import { itemController } from "./controllers/ItemController";

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

router.get("/comanda", comandaController.listar);
router.get("/comanda/:idComanda", comandaController.consultar);
router.post("/comanda", comandaController.abrir);
router.put("/comanda", comandaController.atualizar);
router.delete("/comanda/:idComanda", comandaController.remover);

router.post("/item", itemController.criar);
router.get("/item", itemController.listar);
router.get("/item/:idItem", itemController.consultar);
router.get("/item/comanda/:idComanda", itemController.consultaItensComanda);
router.get("/item/preparo", itemController.consultaItensParaPreparo);
router.put("/item", itemController.atualizar);
router.delete("/item/:idItem", itemController.remover);

router.get("/cozinha", cozinhaController.listar);
router.put("/cozinha/preparado/:idItem", cozinhaController.preparado);

export { router };