const cnvModel = require("../modules/cnvModel");

const getAll = async (req, res) => {
  const plans = await cnvModel.getAll();
  return res.status(200).json(plans);
};

module.exports = {
     getAll
};
