// const subjectBtn = document.querySelector("#createQuestion");
// const newQuestion = document.querySelector("#newQuestion");

// subjectBtn.addEventListener('click', (event) => {
//     event.preventDefault();
//     if(newQuestion.value === "") {
//       alert("Please enter a Question before continuing.")
//       return
//     } else {
//       const questionName = document.querySelector("#newQuestion").value.trim();
//       const questionType =document.querySelectorAll("newQuestionType").value
//       console.log(questionType,"hello")
//       fetch("/api/question/new", {
//           method: "POST",
//           body: JSON.stringify({ name: questionName, category_id: questionType }),
//           headers: { "Content-Type": "application/json" },
//         }).then(()=> document.location.replace("/"))
//     }
// });
function listener(event){
    console.log(event.target.value)
}
const info = document.getElementById("addQuestionType")
info.addEventListener("click", listener)
// info.forEach(function (element) { 
//     if (element.checked){
//     console.log(element.value)}})




// const form = document.querySelector("form")

// form.addEventListener(
//     "submit",
//     (event) => {
//       const data = new FormData(form);
//       let output = ""
//       let put = "";
//       for (const entry of data) {
//         put=`${output[0]}`
//         output = `${output}${entry[0]}=${entry[1]}\r`      
//     }    
//     console.log(output);
//     console.log(put)
//       event.preventDefault();
//     },
//     false
//   );