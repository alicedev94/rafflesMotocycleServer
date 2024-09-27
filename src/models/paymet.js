const { Sequelize, Model, DataTypes } = require("sequelize");

const table_name = "Paymet";

const paymetSchema = {
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  path: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  paymentReference: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "created_at",
    defaultValue: Sequelize.NOW,
  },
};

class Paymet extends Model {
  static associate() {
    // associate
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: table_name,
      modelName: "Paymet",
      timestamps: false,
    };
  }
}

module.exports = {
  table_name,
  paymetSchema,
  Paymet,
};
