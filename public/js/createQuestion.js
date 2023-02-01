const subjectBtn = document.querySelector("#createQuestion");
const newQuestion = document.querySelector("#newQuestion");

subjectBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if(newQuestion.value === "") {
      alert("Pleas enter a Question before continuing.")
      return
    } else {
      const questionName = document.querySelector("#newQuestion").value.trim();
      const questionType =document.querySelector("#newQuestionType").value
      fetch("/api/question/new", {
          method: "POST",
          body: JSON.stringify({ name: questionName, category_id: questionType }),
          headers: { "Content-Type": "application/json" },
        }).then(()=> document.location.replace("/"))
    }
});