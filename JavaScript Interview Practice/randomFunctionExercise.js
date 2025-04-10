//Create a function that determines whether a number is oddish or evenish. A number is oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. if a number is oddish, return "oddish". Otherwise, return "Evenish".

function oddishOrEvenish(num) {
  num = num.toString().split('').map(Number)
  const sum = num.reduce((acc, curr) => acc + curr, 0)

  return sum % 2 === 0 ? 'Evenish' : 'Oddish'
}

console.log(oddishOrEvenish(121))
