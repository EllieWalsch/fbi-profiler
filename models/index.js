// import models
const Question = require("./Questionsmodel");
const Category = require("./Categorymodel");
const Subject = require("./Subjectmodel");
const User = require("./Usermodel");

// User have many Subjects
User.hasMany(Subject);
// Subject belongsTo User
Subject.belongsTo(User);
// Category has Many Questions
Category.hasMany(Question);
// Questions belongs to Category
Question.belongsTo(Category);

module.exports = {
  User,
  Category,
  Question,
  Subject,
};
