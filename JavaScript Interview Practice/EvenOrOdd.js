//Write a function to check if a number is even or odd and return result accordingly

let userInput = 2
function checkEvenOdd(num) {
  if (num % 2 == 0) {
    console.log('Even Number')
  } else if (num % 2 != 0) {
    console.log('Odd Number')
  } else {
    console.log('Invalid Number')
  }
}
checkEvenOdd(userInput)
