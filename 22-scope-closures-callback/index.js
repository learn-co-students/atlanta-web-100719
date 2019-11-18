function multiplyByN(outerNum) {


  return function(n) {
    return outerNum * n
  }



}


let something = multiplyByN(200)(5)
console.log(something) // => n = 5; outerNum = 10





// function outerFn() {
//
//   let coolVariable = 'yeet'
//
//   return function() {
//     console.log(`${coolVariable} the haw`)
//   }
// }
//
// outerFn()()









// let name = 'Shivang'
//
// const someFunction = function(name){
//   console.log(`Hello ${name}`)
// }
//
// const newFunction = function(callback){
//    return callback; //return function definition
// }
//
// let result = newFunction(someFunction)
// result('Dan')



// let pizza = 'outer pizza is global pizza'
//
// function eatPizza() {
//   let pizza = 'inner pizza is pizza hut stuffed crust™️'
//   console.log(pizza)
// }
//
// eatPizza()
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// // // var favColor = 'red'
// // let favColor = 'blue'
// // const favColor = 'black'
// //
//
//
// //
// //
// // bark() //?
// //
// // function bark() { //woof
// //
// //   console.log(age)
// //
// //   let age = 10
// //   console.log('woof')
// // }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// // {
// //   let name = 'clark'
// // }
// // console.log(name)
//
//
// // var name = 'clark' //global var
//
// // function sayName() {
// //   var name = 'garry' // local to sayName
// //   // console.log(name)
// // }
// //
// // sayName()
// // console.log(name)
//
//
// // function sayName() {
// //   var name = 'garry'
// //   console.log(name)
// // }
// //
// // sayName() // ?
// //
// // console.log(name) // ?
//
//
// // var name = 'jon'
// //
// // function sayName() {
// //   var someVar;
// //   console.log(name)
// //   function someFunction(){
// //
// //   }
// // }
// //
// // sayName()
