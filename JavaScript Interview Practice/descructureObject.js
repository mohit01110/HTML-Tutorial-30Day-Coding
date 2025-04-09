//Destructure an object to get its properties.

let person = {
  fName: 'Mohit',
  lName: 'Kumar',
  age: 23,
  city: 'Delhi'
}

console.log(person);

let { fName , lName, ...left} = person;
console.log(fName);
console.log(lName);
console.log(left);
