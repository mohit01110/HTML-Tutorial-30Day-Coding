// function reverseOdd(str){
//   function reverseString(str){
//     return str.split('').reverse().join('')
//   }

//   let words = str.split(' ')
//   console.log(words);

//   for(let i =0; i<words.length; i++){
//     if(words[i].length %2 != 0){
//       words[i] = reverseString(words[i])
//     }
//   }

//   return words.join(' ')
// }

// console.log(reverseOdd('One Two Three Four Five Six'));

//Second time practice

function reverseOdd2(str) {
  function reverseString(str) {
    return str.split('').reverse().join('')
  }

  const words = str.split(' ')
  console.log(words)

  for (let i = 0; i < words.length; i++) {
    if (words[i].length % 2 !== 0) {
      words[i] = reverseString(words[i])
    }
  }
  return words.join(' ')
}
console.log(reverseOdd2('One Two Three Four Five Six'))
