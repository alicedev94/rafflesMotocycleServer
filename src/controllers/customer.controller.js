const sequelize = require("../lib/sequelize");
const Data = require("../services/data");

const instance = new Data(sequelize.models);

const newCustomer = async (data) => {
  const response = instance.new("Customers", data);
  return response;
};

const updateCustomer = async (id, data) => {
  const response = instance.update("Customers", id, data);
  return response;
};

const deleteCustomer = async (id) => {
  const response = instance.delete("Customers", id);
  return response;
};

console.log('ss')

module.exports = {
  newCustomer,
  deleteCustomer,
  updateCustomer,
};
