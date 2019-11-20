document.addEventListener("DOMContentLoaded", () => {
  const listForm = document.querySelector("#create-task-form")

  // listen for the form submission 
  listForm.addEventListener("submit", function(event) {
    // prevent default action 
    event.preventDefault() 

    // create reference to userInput 
    const userInput = document.querySelector("#new-task-description").value 

    debugger
    // take the content of input and insert into right spot 
    const listUl = document.querySelector("#tasks") 
    
    const li = document.createElement("li") 
    
    li.innerText = userInput 

    listUl.appendChild(li)

    // Reset dat input
    event.target.reset() 
  })


});




