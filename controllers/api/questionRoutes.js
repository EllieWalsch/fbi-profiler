const router = require("express").Router();
const { Question } = require("../../models");
const withAuth = require("../../utils/auth");

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

module.exports = router;
