//Requisição do app
const app = require("./app");

//Configurando dotenv e capturando variavel de ambiente PORT
const dotenv = require("dotenv").config();
const porta = process.env.PORT || 5511;

//Iniciando servidor
app.listen(porta, () => console.log(`Servidor rodando na porta ${porta}`));
