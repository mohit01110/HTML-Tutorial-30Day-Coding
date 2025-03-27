//Constructor functions technically are regular functions. There are two conventions though.

//They are named with capital letter first.
//They should be executed only with "new" operator.


function User(name){
  this.name = name
}
let person = new User('mohit')
console.log(person.name);


