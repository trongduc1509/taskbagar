const services = require('../services/projectService');

const list = async (req, res) => {
    const allProjectsList = await services.all();
    res.json(allProjectsList);
}

module.exports = {
    list,
}