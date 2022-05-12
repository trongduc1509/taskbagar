const services = require('./userService');

const list = async (req, res) => {
    const allAccountJson = await services.all();
    res.json(allAccountJson);
}

module.exports = {
    list,
}