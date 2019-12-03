document.addEventListener('DOMContentLoaded',function(){
  const main = document.querySelector('#main')

  trainers.forEach(function(trainer){
    const trainerObj = new Trainer(trainer.id, trainer.name, trainer.pokemons)
    const trainerCard = trainerObj.renderCard()
    main.appendChild(trainerCard)
  })

})
