const sequelize = require("../lib/sequelize");
const Data = require("../services/data");

const instance = new Data(sequelize.models);

const findAll = async () => {
  const response = instance.get("Tickets");
  return response;
};

const deleteTicket = async (id) => {
  const response = instance.delete("Tickets", id);
  return response;
};

module.exports = {
  findAll,
  deleteTicket,
};
