document.addEventListener("DOMContentLoaded", function() {
  fetchZoos()
})

function fetchZoos() {
  fetch("http://localhost:3000/api/v1/zoo")
    .then(res => res.json())
    .then(data => renderZoos(data))
}

function renderZoos(zoos) {
  const zoosContainer = document.querySelector(".content")
  const zoosList = document.querySelector("ul") 

  zoos.map(function(zoo) {
    const li = document.createElement("li") 
    li.innerText = zoo.name 
    zoosList.appendChild(li)
  })

}