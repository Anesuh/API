const cnvModel = require("../modules/cnvModel");

//Recebe a array exportada por cnvModel e retorna ela como json e um status http:200
const getAll = async (_req, res) => {
  const plans = await cnvModel.getAll();
  return res.status(200).json(plans);
};

const createPlan = async (req, res) => {
  const addPlan = await cnvModel.createPlan(req.body);
  return res.status(201).json(addPlan);
};

const deletePlan = async (req, res) => {
  const delPlan = await cnvModel.deletePlan(req.params.id);
  return res.status(201).send("Plano deletado com sucesso!");
};

const updatePlan = async (req, res) => {
  const { id } = req.params;
  const { valor } = req.body;
  const update = await cnvModel.updatePlan(id, valor);
  return res.status(200).send("Atualização executada com sucesso!");
};

module.exports = {
  getAll,
  createPlan,
  updatePlan,
  deletePlan,
};
