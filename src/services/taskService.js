const sequelize = require('sequelize');
const { op } = require('sequelize');
const { models } = require('../models');

const all = () => {
    return models.Task.findAll({raw: true});
}

module.exports = {
    all,
}