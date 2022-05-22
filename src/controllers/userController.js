const services = require('../services/userService');

const list = async (req, res) => {
    const allAccountList = await services.all();
    res.json(allAccountList);
}
const listManager = async(req, res) =>{
    const listManager = await services.listManager(2);
    res.json(listManager);
}

const listEmployee = async (req, res) => {
  const listManager = await services.listManager(3);
  res.json(listManager);
};
module.exports = {
    list,
    listManager,
    listEmployee
}