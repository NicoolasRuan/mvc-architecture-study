const express = require("express");
const path = require("path");

// Controladores
const ProductController = require("./controllers/ProductController");
const HomeController = require("./controllers/HomeController");

// Config dos serviços
const app = express();
app.set("view engine", "pug");
app.set("views", path.resolve(__dirname, "views"));
app.use(express.urlencoded());

// Rotas
app.get("/", HomeController.home);
app.get("/products", ProductController.list);
app.get("/products/form", ProductController.form);
app.post("/products/create", ProductController.create);

// Executar serviços
app.listen(8080, () => {
  console.log("Servidor executando em: http://localhost:8080");
  console.log("Para encerrar o serviço aperte CTRL+C");
});
