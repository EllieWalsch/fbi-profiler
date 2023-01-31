const router = require("express").Router();
const { Question } = require("../../models");
const withAuth = require("../../utils/auth");
let date = Date.now() % 1000;

router.post("/new", withAuth, async (req, res) => {
  try {
    const newQuestion = await Question.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newQuestion);
  } catch (err) {
    res.status(400).json(err);
  }
  // Adds a new question
});

router.get("/:id", withAuth, async (req,res)=> {
  const questionsData = await Question.findAll({
    where:{
      category_id: req.params.id
    }
  })
  const questions = questionsData.map((question) => question.get({ plain: true }));
  const question = questions[Math.floor(date * Math.random() * (date * 1000000)) %
    questions.length]
  
  console.log(question);

  res.status(200).json(question)
})

module.exports = router;
