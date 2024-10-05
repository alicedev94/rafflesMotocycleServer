
const { Sequelize } = require("sequelize");
const setupModels = require("../models/index");
require("dotenv").config();

// const sequelize = new Sequelize('rifaslav_test', 'rifaslav_rifa', 'a%AET[0v55u-', {
//   host: '205.209.113.202', // IP de tu servidor MySQL
//   dialect: 'mysql',
//   port: 3306, // Puerto por defecto de MySQL
//   // logging: false,
//   dialectOptions: {
//     // Tus opciones de mysql2 aquí
//   },
// });

const sequelize = new Sequelize('test', 'root', '', {
  // host: '205.209.113.202', // IP de tu servidor MySQL
  dialect: 'mysql',
  port: 3306, // Puerto por defecto de MySQL
  // logging: false,
  dialectOptions: {
    // Tus opciones de mysql2 aquí
  },
});
setupModels(sequelize);
sequelize.sync();

module.exports = sequelize;
