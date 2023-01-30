const router = require("express").Router();
const { Subject, Question, Category } = require("../models");
const withAuth = require("../utils/auth");

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

router.get("/subject/:id", withAuth, async (req, res) => {
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

router.get("/questions", withAuth, async (req, res) => {
  try {
    // const questionData = await Question.findOne({
    //   include: [Category],
    // });

    // const questions = questionData.map((question) =>
    //   question.get({ plain: true })
    // );

    res.render("questions", {
      loggedIn: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
  // Loads questions to ask with form - how do we make this one of each type?
  // math random
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
