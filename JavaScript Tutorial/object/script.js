//Object

let obj = {
  name: 'Mohit',
  age: 20,
  'last name': 'Kumar',
  fun: function () {
    console.log('I am function')
  },
  arr: [10, 20, 30],
}

for(let i in obj) {
  console.log(obj[i]);
  
}
