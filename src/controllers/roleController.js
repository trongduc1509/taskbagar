const services = require('../services/roleService');

const list = async (req, res) => {
    const allRoleList = await services.all();
    res.json(allRoleList);
}

module.exports = {
    list,
}