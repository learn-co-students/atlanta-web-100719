document.addEventListener('DOMContentLoaded',function(){

  // Get the element
  const form = document.querySelector('#comment-form')

  // Add the event listener
  form.addEventListener('submit',function(e){
    //Do something meaningful
    e.preventDefault()

    let input = e.target.querySelector('#new-comment')

    // find the comment container
    let comments = document.querySelector('#comments-container')

    // add the comment
    let comment = document.createElement('li')
    comment.innerText = input.value

    // smash it on the DOM
    comments.appendChild(comment)

    e.target.reset()
  })





  // Get the element that you want to listen on
  const btnParent = document.querySelector('#helicopter-parent')

  // ADd event listener to listen for click
  btnParent.addEventListener('click',function(e){

    // Do something meaningful
    if(e.target.id === 'alert'){
      alert('alert btn was clicked.')
    }else if(e.target.id === 'log'){
      console.log('yeet')
    }else if(e.target.id === 'errr'){
      console.error('the haw')
    }

  })

})
