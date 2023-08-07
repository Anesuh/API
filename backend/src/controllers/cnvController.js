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

const updatePlan = async (req, res) => {
    const changePlan = await cnvModel.updatePlan(req.body);
    return res.status(201).json(changePlan);
};

const deltePlan = async (req, res) => {
    const delPlan = await cnvModel.deletePlan(req.body);
    return res.status(201).json(delPlan);
};

module.exports = {
    getAll,
    createPlan,
    updatePlan,
    deltePlan,
};
