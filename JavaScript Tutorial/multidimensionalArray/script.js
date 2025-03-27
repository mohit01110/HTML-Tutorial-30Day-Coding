//Multidimensional Array
let arr = [
  ['Mohit', 30],
  ['Rahul', 40],
  ['Rohit', 50],
  ['Raj', 60],
  ['Ravi', 70],
  ['Rohit', 80],
]

console.log(arr)
//One Way
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     console.log(arr[i][j])
//   }
// }

//Second Way
// arr.forEach(data => {
//   data.forEach(item1 => {
//     console.log(item1)
//   })
// });

//Third Way
for (let ar of arr) {
  for (let ar1 of ar) {
    console.log(ar1)
  }
}
