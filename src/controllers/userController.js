const services = require('../services/userService');

const list = async (req, res) => {
    const allAccountList = await services.all();
    res.json(allAccountList);
}

module.exports = {
    list,
}