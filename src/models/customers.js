const { Sequelize, Model, DataTypes } = require("sequelize");

const table_name = "Customers";

const customerSchema = {
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  lastname: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    validate: {
      isEmail: true,
    },
  },
  phone: {
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

class Customer extends Model {
  static associate() {
    // associate
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: table_name,
      modelName: "Customers",
      timestamps: false,
    };
  }
}

module.exports = {
  table_name,
  customerSchema,
  Customer,
};
