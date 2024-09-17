const sequelize = require("../lib/sequelize");
const Data = require("../services/data");

// const generateTickets = require("../services/initialCharge");

const instance = new Data(sequelize.models);
console.log(instance)

const findAll = async () => {
  const response = instance.get("Tickets");
  return response;
};

// const bulkCreate = async () => {
//   let tickets = generateTickets(100);
//   const rta = await sequelize.models.tickets.bulkCreate(tickets);
//   return rta;
// }

module.exports = {
  findAll,
};
