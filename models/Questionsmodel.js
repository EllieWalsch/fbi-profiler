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
<<<<<<< HEAD
        type:DataTypes.INTEGER,
        references:Category.id
=======
      type:DataTypes.INTEGER,
      references: {
        model: "category",
        key: "id"
      }
>>>>>>> 1dcada3e8a58d314e323bb1d949d1419d56c87d0
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