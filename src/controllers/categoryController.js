const services = require('../services/categoryService');

const list = async (req, res) => {
    const allCategoryList = await services.all();
    res.json(allCategoryList);
}

module.exports = {
    list,
}