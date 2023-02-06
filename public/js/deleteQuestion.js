const deleteBtn = document.getElementById("btnlistquestionpage");

deleteBtn.addEventListener("click", (event)=> {
    event.preventDefault();
    console.log(event.target.getAttribute("data-id"))
    let questionId = event.target.getAttribute("data-id");
    let questionIdValue =typeof parseInt(questionId);
    console.log( typeof parseInt(questionId))
    if (questionIdValue === 'number' &&  questionId !== null ){
    fetch(`/api/question/${questionId}`, {
        method: "DELETE",
      })
      .then(() => document.location.replace("/"));
} else {
    return
}
})
