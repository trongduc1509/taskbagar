const sequelize = require("sequelize");
const { op } = require("sequelize");
const { models } = require("../models");

const all = () => {
  return models.Status.findAll({ raw: true });
};

module.exports = {
  all,
};
