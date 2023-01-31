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
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type_one_answers: {
      type: DataTypes.STRING,
      defaultValue: "[0]",
    },
    type_two_answers: {
        type: DataTypes.STRING,
        defaultValue: "[0]",
    },
    type_three_answers: {
        type: DataTypes.STRING,
        defaultValue: "[0]",
    },
    type_four_answers: {
        type: DataTypes.STRING,
        defaultValue: "[0]",
    },
    profile_assignment: {
        type: DataTypes.STRING,
        allowNull: true,
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