//Requerindo a conexão com o banco de dados
const connection = require("./connection");

//Retorna uma array com todos os planos da tabela plans
const getAll = async () => {
  const plans = await connection.execute("SELECT * FROM planos");
  return plans[0];
};

const createPlan = async (plano) => {
  const data = new Date(Date.now()).toLocaleString();
  const { nome } = plano;
  const { valor } = plano;
  console.log(valor)
  const [addPlan] = await connection.execute(
    "INSERT INTO planos(nome, valor, ultimaAtualizacao, criacao) VALUES(?, ?, ?, ?)",
    [nome, valor, data, data]
  );
  return { insertId: addPlan.insertId };
};

module.exports = {
  getAll,
  createPlan,
};
