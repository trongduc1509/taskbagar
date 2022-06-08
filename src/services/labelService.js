const sequelize = require('sequelize');
const { op } = require('sequelize');
const { models } = require('../models');

const all = () => {
    return models.Label.findAll({raw: true});
}

const createLabel = ({name, color}) => {
    return models.Label.create({
        name,
        color
    });
}

module.exports = {
    all,
    createLabel,
}