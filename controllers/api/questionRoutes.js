const router = require("express").Router();
const { Subject, Question } = require("../../models");
const withAuth = require("../../utils/auth");
// let date = Date.now() % 1000;

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

router.put('/:subject', async (req, res) => {
  try {
const subjectData = await Subject.findOne({ where:{ name: req.body.subject }})

const subjectFind = subjectData.get({ plain: true });

console.log(subjectFind);
let subjectAnswerUpdate;
let keepoldAnswer;
let parseoldAnswer;
let parseBodyValue;
let finalString
if (req.body.type == "Type 1") {
  keepoldAnswer = subjectFind.type_one_answers;
  parseoldAnswer = JSON.parse(keepoldAnswer);
  parseBodyValue = JSON.parse(req.body.value);
  parseoldAnswer.push(parseBodyValue);
  finalString =JSON.stringify(parseoldAnswer);
  subjectAnswerUpdate = await Subject.update({
    type_one_answers: finalString,
  },
  {
    where:{name: req.body.subject}
  }
  );
} else if (req.body.type == "Type 2") {
  
  keepoldAnswer = subjectFind.type_two_answers;
  parseoldAnswer = JSON.parse(keepoldAnswer);
  parseBodyValue = JSON.parse(req.body.value);
  parseoldAnswer.push(parseBodyValue);
  finalString =JSON.stringify(parseoldAnswer);
  subjectAnswerUpdate = await Subject.update({
    type_two_answers: finalString,
  },
  {
    where:{name: req.body.subject}
  }
  );
} else if (req.body.type == "Type 3") {
  keepoldAnswer = subjectFind.type_three_answers;
  parseoldAnswer = JSON.parse(keepoldAnswer);
  parseBodyValue = JSON.parse(req.body.value);
  parseoldAnswer.push(parseBodyValue);
  finalString =JSON.stringify(parseoldAnswer);
  console.log(parseoldAnswer);
  console.log(typeof finalString);
  subjectAnswerUpdate = await Subject.update({
    type_three_answers: finalString,
  },
  {
    where:{name: req.body.subject}
  }
  );
} else if (req.body.type == "Type 4") {
  keepoldAnswer = subjectFind.type_four_answers;
  parseoldAnswer = JSON.parse(keepoldAnswer);
  parseBodyValue = JSON.parse(req.body.value);
  parseoldAnswer.push(parseBodyValue);
  finalString =JSON.stringify(parseoldAnswer);
  subjectAnswerUpdate = await Subject.update({
    type_four_answers: finalString,
  },
  {
    where:{name: req.body.subject}
  }
  );
}

    console.log(subjectAnswerUpdate)

      res.status(200).json(req.body);
   
  } catch (err) {
    res.status(400).json(err);
  }
  // Update an answer type to subject
});


// router.get("/:id", withAuth, async (req,res)=> {
//   const questionsData = await Question.findAll({
//     where:{
//       category_id: req.params.id
//     }
//   })
//   const questions = questionsData.map((question) => question.get({ plain: true }));
//   const question = questions[Math.floor(date * Math.random() * (date * 1000000)) %
//     questions.length]
  
//   console.log(question);

//   res.status(200).json(question)
// })

module.exports = router;
