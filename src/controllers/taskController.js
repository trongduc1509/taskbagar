const services = require('../services/taskService');

const list = async (req, res) => {
    const allTasksList = await services.all();
    res.json(allTasksList);
}

module.exports = {
    list,
}