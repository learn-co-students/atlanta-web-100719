console.log('%c Hello, World!', 'color: goldenrod')
// What do we want to do? => Add an image on the page

// Element? div with an id container
const container = document.querySelector('#container')
const img = container.querySelector('img')
img.src = 'https://i.imgur.com/dzbQCj4.png'


const text = document.querySelector('#sometext')
text.remove()

// create an img tag
// const img = document.createElement('img')
// img.src = 'https://i.imgur.com/dzbQCj4.png'
//
// // smash it on the DOM
// container.appendChild(img)
