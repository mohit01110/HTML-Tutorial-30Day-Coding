//Proto , it is a prototype of object

let obj = {
  fname: 'Mohit',
}

// let obj2 = {
//   lName: 'Kumar',
// }

// obj2.__proto__ = obj;

// console.log(obj2.fname);

//Second Way
obj2 = Object.create(obj)
obj2.lName = 'Kumar'

console.log(obj2.fname)