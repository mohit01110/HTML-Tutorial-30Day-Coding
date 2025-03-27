//Functions

// function abc(a, b) {
//   console.log('hello world')
//   console.log(a + b)
// }
// abc(2, 3)

function xyz(c, d, e) {
  return c + d + e
}

let c = 10
let d = 20
let e = 30
let result = xyz(c, d, e)
console.log(result)

//Ananonymous Function
let fun = function () {
  console.log('hello ')
}

fun()

//Imdediately Invoked Function Expression

// (function () {
//   console.log('hello')
// })()

//Arrow Function
let mohit = (a, b) => {
  return a + b
}

let result1 = mohit(5, 5)

console.log(result1)
