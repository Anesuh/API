//Criando app e requisitando rotas
const express = require("express");
const app = express();
const router = require("./router");
const cors = require("cors");

app.use(express.json());
app.use(router);
app.use(cors());
module.exports = app;
