const router = require("express").Router();
const { Subject, Question } = require("../../models");
const withAuth = require("../../utils/auth");

// functions for determining types
 function averager(array) {
  let arrayParse = JSON.parse(array);
  let reduceArray = arrayParse.reduce((acc, c) => acc + c, 0);
  return (Math.round(100*(reduceArray/(arrayParse.length-1))))/100 || 0;
}

function decider1 (num1,num2) {
  let Acategory;
if (num1 >= 0 && num2 >= 0) {
   Acategory = "Sergeant"
} else if (num1 >= 0 && num2 <= 0) {
   Acategory = "Accountant"
} else if (num1 <= 0 && num2 >= 0) {
  Acategory= "Salesman"
} else if (num1 <=0 && num2 <=0) {
  Acategory="Artist"
} 
return Acategory
}
function decider2(num3,num4) {
  let Bcategory;
if (num3 >= 0 && num4 >= 0) {
  Bcategory = "Manager"
} else if (num3 >= 0 && num4 <=0) {
  Bcategory = "Conformist"
} else if (num3 <= 0 && num4 >= 0) {
 Bcategory = "Innovator"
} else if (num3 <=0 && num4 <=0) {
 Bcategory ="Random Actor"
}
return Bcategory
}



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
  await Subject.update({
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
  await Subject.update({
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
  await Subject.update({
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
  await Subject.update({
    type_four_answers: finalString,
  },
  {
    where:{name: req.body.subject}
  }
  );
}


// after running if, takes values, recalculates, runs if statement with new values for determing profile_assignment, saves to subject db
const newsubjectData = await Subject.findOne({ where:{ name: req.body.subject }})
const newsubjectFind = newsubjectData.get({ plain: true });

console.log(newsubjectFind);

let getavgtype1 = newsubjectFind.type_one_answers;
let getavgtype2 = newsubjectFind.type_two_answers;
let getavgtype3 = newsubjectFind.type_three_answers;
let getavgtype4 = newsubjectFind.type_four_answers;

let avg1 = averager(getavgtype1);
let avg2 = averager(getavgtype2);
let avg3 = averager(getavgtype3);
let avg4 = averager(getavgtype4);

let Category1 = decider1(avg1,avg2)
let Category2 = decider2(avg3,avg4);
console.log(Category1,Category2);
let pro_assignment = `${Category1} / ${Category2}`
console.log(pro_assignment);
await Subject.update({
  profile_assignment: pro_assignment,
},
{
  where:{name:req.body.subject}
})


      res.status(200).json(req.body);
   
  } catch (err) {
    res.status(400).json(err);
  }
  // Update an answer type to subject and profile assignment calcs
});

module.exports = router;
