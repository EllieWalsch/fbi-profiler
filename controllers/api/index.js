const router = require("express").Router();
const userRoutes = require("./userRoutes");
const subjectRoutes = require("./subjectRoutes");
const questionRoutes = require("./questionRoutes");

router.use("/user", userRoutes);
router.use("/subject", subjectRoutes);
router.use("/question", questionRoutes);

module.exports = router;
