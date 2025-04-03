//Find the largest element in an array using the reduce() method.

function findLargestElement(arr) {
  return arr.reduce((max, current) => {
    return current > max ? current : max
  })
}
let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
console.log(findLargestElement(arr))
