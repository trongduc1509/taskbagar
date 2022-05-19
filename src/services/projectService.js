const sequelize = require('sequelize');
const Op = sequelize.Op;
const { models } = require('../models');

const all = () => {
    return models.Project.findAll({raw: true});
}

const findProject = async (name) => {
    let projects  = await models.Project.findAll({
    where:{
        name: {
            [Op.like]: `%${name}%`
        }
    },
    raw: true});
    return projects;
}
module.exports = {
    all,
    findProject
}