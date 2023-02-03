const questionBtn = document.querySelector("#createQuestion");
const newQuestion = document.querySelector("#newQuestion");
let questionType;
function listener(event){
    console.log(event.target.value)
    questionType = event.target.value
}

const typeInfo = document.getElementById("addQuestionType")
typeInfo.addEventListener("click", listener)


questionBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if(newQuestion.value === "") {
      alert("Please enter a Question before continuing.")
      return
    } else if (questionType === undefined){
      alert("Please mark a radio button")
      return
    } else {
      const questionName = document.querySelector("#newQuestion").value.trim();

      console.log(questionType,"hello")
      fetch("/api/question/new", {
          method: "POST",
          body: JSON.stringify({ question: questionName, category_id: questionType }),
          headers: { "Content-Type": "application/json" },
        }).then(()=> document.location.replace("/"))
    }
});







