const { User, userSchema } = require("../models/users");
const { Customer, customerSchema } = require("../models/customers");
const { Ticket, ticketSchema } = require("../models/tickets");
const { Service, serviceSchema } = require("../models/services");

function setupModels(sequelize) {
  // User.init(userSchema, User.config(sequelize));
  Customer.init(customerSchema, Customer.config(sequelize));
  Ticket.init(ticketSchema, Ticket.config(sequelize));
  Service.init(serviceSchema, Service.config(sequelize));
}

module.exports = setupModels;
