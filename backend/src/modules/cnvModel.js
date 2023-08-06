const connection = require("./connection");

const getAll = async () => {
  const plans = await connection.execute("SELECT * FROM plans");
  return plans[0];
};

module.exports = {
  getAll,
};
