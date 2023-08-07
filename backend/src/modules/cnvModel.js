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
    console.log(valor);
    const [addPlan] = await connection.execute(
        "INSERT INTO planos(nome, valor, ultimaAtualizacao, criacao) VALUES(?, ?, ?, ?)",
        [nome, valor, data, data]
    );
    return { insertId: addPlan.insertId };
};

const updatePlan = async (plano) => {
    const data = new Date(Date.now()).toLocaleString();
    const { valor } = plano;
    const { id } = plano;
    const changePlan = await connection.execute(
        "UPDATE planos SET valor = ?, ultimaAtualizacao = ? WHERE id = ?;",
        [valor, data, id]
    );
    return changePlan;
};

const deletePlan = async (plano) => {
    const { id } = plano
    const delPlan = await connection.execute(
        "DELETE FROM planos WHERE id = ?",
        [id]
    );
    return delPlan;
};

module.exports = {
    getAll,
    createPlan,
    updatePlan,
    deletePlan,
};
