//Implemet a private variable using closures.

function createCounter() {
  //Private Variable
  let count = 0
  function increment() {
    count++
    console.log('Count:', count)
  }
  return {
    incrementCounter: function () {
      increment()
    },
  }
}

let counterNumber = createCounter()
