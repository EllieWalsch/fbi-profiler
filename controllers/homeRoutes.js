const router = require("express").Router();
const { Subject, Question, Category } = require("../models");
const withAuth = require("../utils/auth");
let date = Date.now() % 1000;

router.get("/", async (req, res) => {
  try {
    const subjectData = await Subject.findAll();

    const subjects = subjectData.map((subject) => subject.get({ plain: true }));

    res.render('homepage', {subjects,
      loggedIn: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
  // Loads homepage (list of all subjects & their personality type)
});

router.get("/subject/:id", async (req, res) => {
  try {
    const subjectData = await Subject.findByPk(req.params.id);

    const subject = subjectData.get({ plain: true });

    res.render("subject", {
      subject, loggedIn: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
  // Loads subject page
});

router.get("/add-subject", async (req,res) => {
  try {
    res.render("add-subject",{
      loggedIn: req.session.logged_in
    })
  } catch (err) {
    res.status(500).json(err);
  }
})

router.get("/questions/:id", withAuth, async (req, res) => {
  try {
    const questionsData = await Question.findAll({
      where:{
        category_id: req.params.id
      }
    })
    
    const questions = questionsData.map((question) => question.get({ plain: true }));
    const question = questions[Math.floor(date * Math.random() * (date * 1000000)) %
      questions.length]
    res.render("questions", { question,
      loggedIn: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
  // loads questions page with buttons
});

router.get("/questions", withAuth, async (req, res) => {
  try {

    res.render("questions", {
      loggedIn: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
  // loads questions page with buttons
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to home
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
  // Loads login page
});


module.exports = router;
