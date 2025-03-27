//Array

let name = ['abc', 'def', 'ghi', 'jkl']
console.log(name)

name.push('cena') //add element at last
name.unshift('mohit') //add element at first
name.pop() //remove last element
name.shift() //remove first element
name.splice(1, 2) //remove element from index 1 to 2

console.log(name)
console.log(name.length)

let number = [1, 2, 3, 4, 5]

for (let i = 0; i < number.length; i++) {
  console.log(number[i])
}

let num2 = [10, 20, 30, 40, 50, 60, 70, 80, 90]

let result = num2.map((num) => {
  return num
})

console.log(result)

let num3 = [10, 20, 30, 40, 50, 60, 70, 80, 90]

console.log(num3.indexOf(30))
console.log(num3.reverse())
console.log(num3.sort())

let result1 = num3.filter((val) => {
  if (val > 40 && val < 70) {
    return val
  }
})

console.log(result1);

