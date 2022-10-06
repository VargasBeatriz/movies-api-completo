const Gender = require("./Gender");
const MovieCast = require("./MovieCast");
const Person = require("./Person");

MovieCast.belongsTo(Gender, {
  foreignKey: "gender_id",
});

Gender.hasMany(MovieCast, {
  foreignKey: "gender_id",
});

MovieCast.belongsTo(Person, {
  foreignKey: "person_id",
});

Person.hasMany(MovieCast, {
  foreignKey: "person_id",
});

module.exports = {
  Gender,
  MovieCast,
  Person,
};
