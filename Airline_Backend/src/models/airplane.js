'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Airplane extends Model {
    static associate(models) {
      // define association here
    }
  }

  Airplane.init({
    modelNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 150
    },
    type: {
      type: DataTypes.STRING,   // For example: "Commercial", "Cargo"
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Airplane',
  });

  return Airplane;
};
