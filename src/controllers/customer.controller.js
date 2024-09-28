const sequelize = require("../lib/sequelize");
const Data = require("../services/data");

const instance = new Data(sequelize.models);

const findCustomer = async () => {
  const response = instance.get("Customers");
  return response;
};

const findCustomer1 = async () => {
  const response = instance.getSqlV2(sequelize);
  return response;
};

const newCustomer = async (data) => {
  const response = instance.new("Customers", data);
  return response;
};

const newCustomerv2 = async (form, paymetReference, file) => {
  const response = instance.new("Customers", form);
  const responsev2 = instance.bulkCreate1("Services", paymetReference);
  const newFile = {
    name: file.originalname,
    path: file.path,
    paymentReference: form.paymentReference,
  };
  const responsev3 = instance.new("Paymet", newFile);
  return response;
};

const examine = async (reference) => {
  const response = instance.getSql(sequelize, reference);
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
  findCustomer1,
  newCustomerv2,
  examine
};
