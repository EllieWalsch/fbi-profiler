const sequelize = require("../config/connection");
const seedCategory = require("./Categories.json");
const seedQuestions = require("./Questions.json");
const seedSubjects = require("./Subjects.json");
const seedUsers = require("./Users.json");

const { User, Category, Subject, Question } = require('../models');

const seedAll = async () => {
    await sequelize.sync({force: true});
    await User.bulkCreate(seedUsers, {
        individualHooks: true,
        returning: true,
      });
    await Subject.bulkCreate(seedSubjects);
    await Category.bulkCreate(seedCategory);
    await Question.bulkCreate(seedQuestions);
    
    
}

seedAll()