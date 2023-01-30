async function questionHandler(type) {
  console.log(type);
    // const email = document.querySelector('#email-signup').value.trim();
    // const password = document.querySelector('#password-signup').value.trim();
  
    if (type) {
      const response = await fetch(`/api/question/${type}`, {
        method: 'GET',
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







const listener = async (event) => {
    event.preventDefault();
    let targetType = event.target.innerHTML;
    let type;
    if(targetType =="Type1"){
        type=1;
        questionHandler(type)

    } else if (targetType=="Type2") {
        type=2;
        questionHandler(type)

    } else if (targetType=="Type3") {
        type =3;
        questionHandler(type)

    } else if (targetType=="Type4") {
        type=4;
        questionHandler(type)

    }
    
}


const questionype=document.getElementById("questionType");
questionype.addEventListener("click", listener)