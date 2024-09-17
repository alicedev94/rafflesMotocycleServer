const sequelize = require("../lib/sequelize");
const Data = require("../services/data");

const instance = new Data(sequelize.models);

const findAll = async () => {
  const response = instance.get("Tickets");
  return response;
};

module.exports = {
    findAll
};