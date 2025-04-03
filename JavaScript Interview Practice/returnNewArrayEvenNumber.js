//Write a function that takes an array of numbers and returns a new array with only the even numbers using higher Orden function 
let arr = [1,2,3,4,5,6,7,8,9,10]

function evenNumber(arr){
  return arr.filter(num => num % 2 == 0)
}

console.log(evenNumber(arr))
