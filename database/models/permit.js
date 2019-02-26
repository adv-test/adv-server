'use strict';
module.exports = (sequelize, DataTypes) => {
  const Permit = sequelize.define('Permit', {
    residentId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Resident',
        key: 'id'
      }
    },
    visitorId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Visitor',
        key: 'id'
      }
    }
  }, {});
  Permit.associate = function(models) {
    // associations can be defined here
  };
  return Permit;
};