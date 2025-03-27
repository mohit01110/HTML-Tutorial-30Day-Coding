//Objects inside array
let arr = [
  {
    user: 1,
    name: 'Mohit',
  },
  {
    user: 2,
    name: 'Rahul',
  },
  {
    user: 3,
    name: 'Rohit',
  },
]

// console.log(arr[0])

// for (let i in arr){
//   console.log(arr[i].name)
// }

let [item1, item2] = arr
console.log(item1.name)