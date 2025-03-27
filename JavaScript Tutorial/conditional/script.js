let age = 18
let name = 'Mohit'
if (age >= 18) {
  if (name === 'Mohit') {
    console.log('You are eligible to vote')
  } else {
    console.log('Name is not Matched')
  }
} else {
  console.log('Your are not eligible to vote')
}

let a = 10
let b = 10

if (a > b) {
  console.log('a is greater than b')
} else if (a < b) {
  console.log('b is greater than a')
} else {
  console.log('a and b are equal')
}

//Switch Case
let ch = 1
switch (ch) {
  case 1:
    console.log('case 1')
    break
  case 2:
    console.log('case 2')
    break
  case 3:
    console.log('case 3')
    break
  default:
    console.log('default')
    break
}
