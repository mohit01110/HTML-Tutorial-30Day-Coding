//Recursion in javascript is a function that calls itself
//Recursion is a technique to solve a complex problem by breaking it down into smaller parts and solving them one by one until the problem is solved

function printNumbersRecursive(n) {
  if (n <= 10) {
    console.log(n)
    printNumbersRecursive(n + 1)
  }
}

printNumbersRecursive(5)
