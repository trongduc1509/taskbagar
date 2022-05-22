const sequelize = require("sequelize");
const { op } = require("sequelize");
const { models } = require("../models");

const findUser = ({username, password}) => {
    return models.User.findOne({
        raw: true,
        where: {
            [op.and]: [
                { username },
                { password },
            ]
        }
    });
}

const createUser = ({username, hashpassword, name, role_id}) => {
    return models.User.create({
        username,
        password: hashpassword,
        name,
        role_id
    });
}

module.exports = {
    findUser,
    createUser
}