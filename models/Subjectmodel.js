const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Subject extends Model {};

Subject.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    First_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Type_one_answers: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Type_two_answers: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Type_three_answers: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Type_four_answers: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    profile_assignment: {
        type: DataTypes.STRING,
        allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'subject',
  }
);

module.exports = Subject;