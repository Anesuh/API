//Criando rotas e requisitando controlador
const express = require("express");
const router = express.Router();
const cnvController = require("./controllers/cnvController");

//Criando rota do tipo get em /plans
router.get("/plans", cnvController.getAll);
router.post("/plans", cnvController.createPlan);
module.exports = router;
