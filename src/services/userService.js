const sequelize = require('sequelize');
const { op } = require('sequelize');
const { models } = require('../models');

const all = () => {
    return models.User.findAll({raw: true});
}
const listManager = async (role_id) =>{
    const managers = await models.User.findAll({where:{
        role_id}
    ,raw: true});
    return managers;
}
module.exports = {
    all,
    listManager
}