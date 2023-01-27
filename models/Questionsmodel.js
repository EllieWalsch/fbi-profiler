const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Category = require('./Categorymodel')
class Question extends Model {};

Question.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    question: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category:{
        type:DataTypes.INTEGER,
        references:Category.id
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Question',
  }
);

module.exports = Question;