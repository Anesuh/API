const app = require("./app");
const dotenv = require("dotenv").config();
const porta = process.env.PORT || 5511;

app.listen(porta, () => console.log(`Servidor rodando na porta ${porta}`));
