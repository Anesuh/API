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
router.put("/plans/:id", cnvController.updatePlan);

//DELETE
router.delete("/plans/:id", cnvController.deletePlan);
module.exports = router;
