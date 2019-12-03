class Pokemon {
  constructor(id,name){
    this.id = id
    this.name = name
    this.element = document.createElement('li')
  }

  renderListItem(){
    this.element.dataset.id = this.id
    const span = document.createElement('span')
    span.innerText = this.name
    this.element.appendChild(span)
    return this.element
  }
}
