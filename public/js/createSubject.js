const subjectBtn = document.querySelector("#createSubject");

subjectBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const subjectName = document.querySelector("#newSubject").value.trim();
    fetch("/api/subject/new", {
        method: "POST",
        body: JSON.stringify({ name: subjectName }),
        headers: { "Content-Type": "application/json" },
      }).then(()=> document.location.replace("/"))
});