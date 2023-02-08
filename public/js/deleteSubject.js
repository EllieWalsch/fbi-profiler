const deleteBtn = document.querySelector("#deleteSubject");

deleteBtn.addEventListener("click", (event)=> {
    let subjectId = event.target.getAttribute("data-id");
    console.log(subjectId)
    fetch(`/api/subject/${subjectId}`, {
        method: "DELETE",
      })
      .then(() => document.location.replace("/"));
})
