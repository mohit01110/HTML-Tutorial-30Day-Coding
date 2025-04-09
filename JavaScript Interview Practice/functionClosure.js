//Create a counter function using closures that increments and return the count on each call.


function createCounter(){
  let count = 0;
  function increment(){
    count++;
    return count;
  }
  return increment
}
let counterNumber = createCounter()
console.log(counterNumber())
console.log(counterNumber())
console.log(counterNumber())

