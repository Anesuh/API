//Criando rotas e requisitando controlador
const express = require("express");
const router = express.Router();
const cnvController = require("./controllers/cnvController");

//Criando rota /plans

//GET
router.get("/plans", cnvController.getAll);

//POST
router.post("/plans", cnvController.createPlan);

//UPDATE
router.post("/plansup", cnvController.updatePlan);

//DELETE
router.post("/plansdel", cnvController.deltePlan);
module.exports = router;
