//Write a function that takes a string and return the reversed version of it

function reverseString(str) {
  let result = str.split('').reverse().join('')
  return result
}
console.log(reverseString('Mohit'))

function reverseString2(str) {
  let result = ''
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i]
  }
  return result
}
console.log(reverseString2('Mohit'))
