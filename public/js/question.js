async function questionHandler(type) {
  console.log(type);
    
  
    if (type) {
      const response = await fetch(`/api/question/${type}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        let question = await response.json();
        console.log(question.question)

      } else {
        alert('Failed to get question');
      }
    }
  };





let targetType;

const listener = async (event) => {
    event.preventDefault();
    targetType = event.target.value;
    console.log(targetType);    
}
const saver = async (event) =>{
  console.log(targetType);
}


const questionanswer =document.getElementById("questionValue");
questionanswer.addEventListener("click", listener)
const questionsubmit = document.getElementById("questionSubmit")
questionsubmit.addEventListener("click",saver)