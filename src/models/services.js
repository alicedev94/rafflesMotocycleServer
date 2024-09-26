const { Sequelize, Model, DataTypes } = require("sequelize");

const table_name = "Services";

const serviceSchema = {
  idTicket: {
    allowNull: false,
    type: DataTypes.INTEGER,
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

class Service extends Model {
  static associate() {
    // associate
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: table_name,
      modelName: "Services",
      timestamps: false,
    };
  }
}

module.exports = {
  table_name,
  serviceSchema,
  Service,
};
