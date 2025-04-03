//Remove all occurrences of a specific element from an array

function removeElementFromArray(arr, element) {
  return arr.filter(num => num !== element);
}
let arr = [10,10,20,20,10,40,10]
let element = 10;
let removed = removeElementFromArray(arr, element);
console.log(removed)