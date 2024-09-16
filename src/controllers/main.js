const sequelize = require("../lib/sequelize");
const { models } = require("../lib/sequelize");

const findAll = async () => {
  const rta = await sequelize.models.Users.findAll();
  return rta;
};

const newUser = async (data) => {
  const rta = await sequelize.models.Users.create(data);
  return rta;
};

const updateUser = async (id, data) => {
  const rta = await sequelize.models.Users.update({ name: data },{
    where: {
      id: id,
    },
  });
  return rta;
};

const deleteUser = async (id) => {
  const rta = await sequelize.models.Users.destroy({
    where: {
      id: id,
    },
  });
  return rta;
};

module.exports = {
  findAll,
  newUser,
  deleteUser,
  updateUser,
};
