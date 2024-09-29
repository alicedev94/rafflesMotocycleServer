const sequelize = require("../lib/sequelize");
const Data = require("../services/data");
const generateTickets = require("../services/initialCharge");

const instance = new Data(sequelize.models);

const findAll = async () => {
  const response = instance.get("Tickets");
  return response;
};

const initialCharge = async (model, data) => {
  const response = instance.bulkCreate1(model, data);
  return response;
};

const deleteTicket = async (id) => {
  const response = instance.delete("Tickets", id);
  return response;
};

// Test
// initialCharge("Tickets", generateTickets(50));

module.exports = {
  findAll,
  deleteTicket,
};
