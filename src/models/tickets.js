const { Sequelize, Model, DataTypes } = require("sequelize");

const table_name = "tickets";

const ticketSchema = {
  userId: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  value: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  statusT: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "created_at",
    defaultValue: Sequelize.NOW,
  },
};

class Ticket extends Model {
  static associate() {
    // associate
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: table_name,
      modelName: "Tickets",
      timestamps: false,
    };
  }
}

module.exports = {
  table_name,
  ticketSchema,
  Ticket,
};


