const router = require("express").Router();
const { Subject } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/new", withAuth, async (req, res) => {
  try {
    console.log(req.body);
    console.log(req.session);
    const newSubject = await Subject.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newSubject);
  } catch (err) {
    res.status(400).json(err);
  }
  // Adds a new subject
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    Subject.destroy({
      where: {
        id: req.params.id
      }
    })
    res.status(200).json("subject deleted!");
  }catch (err) {
    res.status(400).json(err);
  }
})

module.exports = router;
