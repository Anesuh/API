const express = require("express");
const router = express.Router();
const cnvController = require("./controllers/cnvController");

router.get("/plans", cnvController.getAll);

module.exports = router;
