'use strict';
module.exports = (sequelize, DataTypes) => {
  const Visitor = sequelize.define('Visitor', {
    entryDate: DataTypes.DATE,
    exitDate: DataTypes.DATE,
    curp: DataTypes.STRING
  }, {});
  Visitor.associate = function(models) {
    // associations can be defined here
    Visitor.hasMany(models.Permit);
  };
  return Visitor;
};