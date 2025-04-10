//Given a string, reverse th words which have odd lengths and leave the words with even lengths unchanged.

function reverseOdd(str) {
  function reverseString(str) {
    return str.split('').reverse().join('')
  } 

  let words = str.split(' ')

  for (let i = 0; i < words.length; i++) {
    if (words[i].length % 2 != 0) {
      words[i] = reverseString(words[i])
    }
  }

  return words.join(' ')
}

console.log(reverseOdd('One Two Three Four Five Six'))
