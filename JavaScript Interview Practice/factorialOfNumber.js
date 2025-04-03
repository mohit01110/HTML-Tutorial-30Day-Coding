//Factorial of given Number = 1*2*3*4*5*6*7*8*9*10

// let factorial = 13;

// let result = 1;

// for(let i =1; i<=factorial; i++){
//   result = result * i
// }

// console.log(result)

function factorial(num) {
  if (num === 0 || num === 1) {
    return 1
  } else {
    let fact = 1
    for (let i = 1; i <= num; i++) {
      fact = fact * i
    }
    return fact
  }
}

console.log(factorial(5))
 