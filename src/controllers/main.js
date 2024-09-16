const sequelize = require("../lib/sequelize");
const generateTickets = require("../services/initialCharge");

const findAll = async () => {
  const rta = await sequelize.models.tickets.findAll();
  return rta;
};

const newUser = async (data) => {
  const rta = await sequelize.models.Customers.create(data);
  return rta;
};

const updateUser = async (id, data) => {
  const rta = await sequelize.models.Customers.update(data,{
    where: {
      id: id,
    },
  });
  return rta;
};

const deleteUser = async (id) => {
  const rta = await sequelize.models.tickets.destroy({
    where: {
      id: id,
    },
  });
  return rta;
};

const bulkCreate = async () => {
  let tickets = generateTickets(100);
  const rta = await sequelize.models.tickets.bulkCreate(tickets);
  return rta;
}

// for(let i = 101; i <= 200; i++) {
//   console.log(i)
//   deleteUser(i)
// }

// bulkCreate();

module.exports = {
  findAll,
  newUser,
  deleteUser,
  updateUser,
};
