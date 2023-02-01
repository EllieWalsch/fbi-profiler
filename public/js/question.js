async function questionanswersaver(subject,value,type) {
    
    if (type) {
      const response = await fetch(`/api/question/${subject}`, {
        method: 'PUT',
        body: JSON.stringify({ subject,value,type }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace(`/questions/${type}`);
      } else {
        alert('Failed to update subject answer');
      }
    }
  }





let answerValue;

const listener = async (event) => {
    event.preventDefault();
    answerValue = event.target.value;
    console.log(answerValue);    
}
const saver = async () =>{
  console.log(answerValue);
  console.log(subjectTag);
  console.log(questiontype);
  questionanswersaver(subjectTag,answerValue,questiontype)
}


const questionanswer =document.getElementById("questionValue");
questionanswer.addEventListener("click", listener)
const questionsubmit = document.getElementById("questionSubmit")
questionsubmit.addEventListener("click",saver)
const subjectTag = document.getElementById("subjectName").innerHTML
const questiontype = document.getElementById("questionTypeNumber").innerHTML


