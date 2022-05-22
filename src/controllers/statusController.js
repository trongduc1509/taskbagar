const services = require("../services/statusService");

const list = async (req, res) => {
  const allStatusList = await services.all();
  res.json(allStatusList);
};

module.exports = {
  list,
};
