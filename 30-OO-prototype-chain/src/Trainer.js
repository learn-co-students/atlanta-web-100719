class Trainer {

  constructor(id,name,pokemons){
    this.id = id
    this.name = name
    this.pokemons = pokemons
    this.element = document.createElement('div')
  }

  renderCard(){
    this.element.className = 'card'
    this.element.dataset.id = this.id

    const h3 = document.createElement('h3')
    h3.innerText = this.name

    const ul = document.createElement('ul')

    this.pokemons.forEach(function(pokemon){
      const pokemonObj = new Pokemon(pokemon.id, pokemon.name)
      const pokemonListItem = pokemonObj.renderListItem()

      ul.appendChild(pokemonListItem)
    })

    this.element.appendChild(h3)
    this.element.appendChild(ul)

    return this.element
  }

}
