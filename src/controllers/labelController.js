const services = require('../services/labelService');

const list = async (req, res) => {
    const allLabelList = await services.all();
    res.json(allLabelList);
}

const createNewLabel = async (req, res) => {
    const {
        name,
        color
    } = req.body;

    try {
        const newLabel = await services.createLabel({name, color});
        if (newLabel) {
            res.status(200);
            res.send(newLabel);
        }
    } catch(err) {
        res.status(500);
        res.send(err);
    }
}

module.exports = {
    list,
    createNewLabel
}