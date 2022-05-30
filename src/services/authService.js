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

module.exports = {
    findUser,
}