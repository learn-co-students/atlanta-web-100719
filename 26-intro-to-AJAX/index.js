/*************************************************************************************************************************/
/* Let's make this work */
/* https://dog.ceo/api/breeds/image/random */
/*************************************************************************************************************************/
document.addEventListener('DOMContentLoaded',function(){

  // Identifying events
  const buttonParent = document.querySelector('.btnclass .btn')

  // Adding Event listeners
  buttonParent.addEventListener('click',function(e){
    // Making a fetch request

    let result = fetch('https://dog.ceo/api/breeds/image/random')

    result.then(function(res){
      return res.json()
    }).then(function(data){

      // Get the parent for the image
      const imgParent = document.getElementById('addnewstuff')

      // Create an image
      const img = document.createElement('img')
      img.src = data.message
      img.classList = 'img'
      // Slap it on the DOM
      imgParent.appendChild(img)

    })

  })

})
/*************************************************************************************************************************/





/*************************************************************************************************************************/
  /* DIY Sleep Function */
/*************************************************************************************************************************/
  // function sleep(n) {
  //   let i = 0
  //   while(i < (12 ** 8) * n) {
  //     i++
  //   }
  // }
  //
  // console.log('Starting the sleep function')
  // sleep(10)
  // console.log('Wow that sleep function took forever to run. 1 Star 🌟')


  // function fun1(){
  //   fun2()
  // }
  // function fun2(){
  //   fun3()
  // }
  // function fun3(){
  //   fun4()
  // }
  // function fun4(){
  //   return "this is yeet.."
  // }


/*************************************************************************************************************************/
