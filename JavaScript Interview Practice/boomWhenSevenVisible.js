//Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array, otherwise return "there is no 7 in the array".

function sevenBoom(arr) {
  // return arr.includes(7) ? 'Boom!' : 'there is no 7 in the array'
  // for(let i =0; i<arr.length; i++){
  //   if(arr[i] ===7) {
  //     return 'Boom!'
  //   }
  //   else {
  //     return 'there is no 7 in the array'
  //   }
  // }

  for (const num of arr) {
    if (num.toString().includes('7')) {
      return 'Boom!'
    }
    return 'there is no 7 in the array'
  }
}

console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]))
