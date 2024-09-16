const { User, userSchema } = require("../models/users");
const { Customer, customerSchema } = require("../models/customers");
const { Ticket, ticketSchema } = require("../models/tickets");

function setupModels(sequelize) {
  // User.init(userSchema, User.config(sequelize));
  Customer.init(customerSchema, Customer.config(sequelize));
  Ticket.init(ticketSchema, Ticket.config(sequelize));
}

module.exports = setupModels;
