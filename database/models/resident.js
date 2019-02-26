'use strict';
module.exports = (sequelize, DataTypes) => {
  const Resident = sequelize.define('Resident', {
    phoneNumber: DataTypes.INTEGER,
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    password: DataTypes.BLOB,
    address: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Address',
        key: 'id'
      }
      
    }
  }, {});
  Resident.associate = function(models) {
    // associations can be defined here
    Resident.hasMany(models.Permits);
    Resident.belongsTo(models.Address);
  };
  return Resident;
};