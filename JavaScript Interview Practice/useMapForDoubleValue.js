//Use map() to double all the elements in an array.

let arr = [1, 2, 3, 4, 5]

function doubleArrayValue(arr) {
  return arr.map((number) =>{
    return number * 2
  })
}

console.log(arr)

console.log(doubleArrayValue(arr))
