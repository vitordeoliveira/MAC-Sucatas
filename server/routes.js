const { Router } = require("express");

//Controllers
const AuthController = require("./controllers/AuthController");
const EmpresasController = require("./controllers/EmpresasController");
const RolesController = require("./controllers/RolesController");
const FornecedoresController = require("./controllers/FornecedoresController");
const CompradoresController = require("./controllers/CompradoresController");
const ProdutosController = require("./controllers/ProdutosController");
const ComprasController = require("./controllers/ComprasController");
const VendasController = require("./controllers/VendasController");
//Middlewares
const auth = require("../middleware/Auth");
//Routes
const routes = Router();

//Auth
routes.post("/login", AuthController.login);
routes.post("/register", AuthController.register);

//Users

//Fornecedores
routes.get("/fornecedores", auth, FornecedoresController.index);
routes.post("/fornecedores", auth, FornecedoresController.store);
//Compradores
routes.get("/compradores", auth, CompradoresController.index);
routes.post("/compradores", auth, CompradoresController.store);
//Produtos
routes.get("/produtos", auth, ProdutosController.index);
routes.post("/produtos", auth, ProdutosController.store);
routes.put("/produtos/:produto_id", auth, ProdutosController.update);
routes.delete("/produtos/:produto_id", auth, ProdutosController.delete);
//Compras
routes.get("/compras", auth, ComprasController.index);
routes.post("/compras", auth, ComprasController.store);
//Vendas
routes.get("/vendas", auth, VendasController.index);
routes.post("/vendas", auth, VendasController.store);

routes.get("/empresas", EmpresasController.index);
routes.post("/empresas", EmpresasController.store);
routes.get("/roles", RolesController.index);
routes.post("/roles", RolesController.store);

module.exports = routes;
