const sequelize = require("../lib/sequelize");
const Data = require("../services/data");

const instance = new Data(sequelize.models);

const findCustomer = async (data) => {
  const response = instance.get("Customers");
  return response;
};

const newCustomer = async (data) => {
  const response = instance.new("Customers", data);
  return response;
};

const newCustomerv2 = async (form, paymetReference) => {
  console.log("form", form)
  const response = instance.new("Customers", form);
  const responsev2 = instance.bulkCreate1("Services", paymetReference);
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

module.exports = {
  newCustomer,
  deleteCustomer,
  updateCustomer,
  findCustomer,
  newCustomerv2
};
