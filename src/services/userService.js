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
const checkUserExist = ({username}) => {
    return models.User.findOne({
        raw: true,
        where: {
            username: username
        }
    });
}
const createUser = ({username, password, name, role_id}) => {
    return models.User.create({
        username,
        password,
        name,
        role_id
    });
}
const getUserById = ({id}) => {
    return models.User.findByPk(id);
}
module.exports = {
    all,
    listManager,
    checkUserExist,
    createUser,
    getUserById
}