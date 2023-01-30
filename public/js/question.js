const listener = async (event) => {
    event.preventDefault();
    console.log(event.target);
}


const questionype=document.getElementById("questionType");
questionype.addEventListener("click", listener)