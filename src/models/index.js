const  Sequelize  = require("sequelize");
const initModels = require('./init-models');
require('dotenv').config();
const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    //default port = 5432, manhduc's port =5000

    port: 5000,

  }
);

module.exports = {
    sequelize,
    models: initModels(sequelize),
}