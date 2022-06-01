const services = require('../services/labelService');

const list = async (req, res) => {
    const allLabelList = await services.all();
    res.json(allLabelList);
}

module.exports = {
    list,
}