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
try {
  const response = instance.new("Customers", data);
  return response;
} catch (error) {
  return error;
}
};

const newCustomerv2 = async (form, paymetReference, file) => {
  try {
    const response = instance.new("Customers", form);
    const responsev2 = instance.bulkCreate1("Services", paymetReference);
    const newFile = {
      name: file.originalname,
      path: file.path,
      paymentReference: form.paymentReference,
    };
    const responsev3 = instance.new("Paymet", newFile);
    return response;
  } catch (error) {
    return error;
  }
};

const examine = async (reference) => {
  const response = instance.getSql(sequelize, reference);
  return response;
};

const examineImg = async (reference) => {
  const response = instance.getSqlv3(sequelize, reference);
  return response;
};

const examineDelete = async (reference) => {
  const response = instance.deleteReference("Paymet", reference);
  const response1 = instance.deleteReference("Customers", reference);
  const response2 = instance.deleteReference("Services", reference);
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

const getTickets = async () => {
  const response = instance.get("Tickets");
  return response;
};



module.exports = {
  newCustomer,
  deleteCustomer,
  updateCustomer,
  findCustomer,
  findCustomer1,
  newCustomerv2,
  examine,
  examineImg,
  examineDelete,
  getTickets
};
