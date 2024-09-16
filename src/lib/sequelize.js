
const { Sequelize } = require("sequelize");
const setupModels = require("../models/index");
require("dotenv").config();

const sequelize = new Sequelize('test', 'root', '', {
  dialect: 'mysql',
  dialectOptions: {
    // Tus opciones de mysql2 aquí
  },
});

setupModels(sequelize);
sequelize.sync();

module.exports = sequelize;
