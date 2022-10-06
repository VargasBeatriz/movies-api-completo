const sequelize = require("sequelize");
const db = require("../database");

const Person = db.define(
  "Person",
  {
    person_id: {
      type: sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    person_name: {
      type: sequelize.DataTypes.STRING,
    },
  },
  {
    tableName: "person",
    timestamps: false,
  }
);

module.exports = Person;
