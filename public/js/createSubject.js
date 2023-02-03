const subjectBtn = document.querySelector("#createSubject");
const newSubject = document.querySelector("#newSubject");

subjectBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (newSubject.value === "") {
    alert("Pleas enter a subject name beofre continuing.");
    return;
  } else {
    const subjectName = document.querySelector("#newSubject").value.trim();
    fetch("/api/subject/new", {
      method: "POST",
      body: JSON.stringify({ name: subjectName }),
      headers: { "Content-Type": "application/json" },
    }).then(() => document.location.replace("/"));
  }
});
