const deleteBtn = document.querySelector("#deleteSubject");

deleteBtn.addEventListener("click", ()=> {
    const location = window.location.href
    const locationLength = location.length
    const subjectId = Number(location.charAt(locationLength-1))
    fetch(`/api/subject/${subjectId}`, {
        method: "DELETE",
      })
      .then(() => document.location.replace("/"));
})
