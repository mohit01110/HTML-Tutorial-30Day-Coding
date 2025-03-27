//Class in Javascript

class Person {
  constructor(name, age){
    this.name = name
    this.age = age
  }

  getName(){
    console.log(`Hello ${this.name}`);
  }
}

let user = new Person('mohit', 20)
console.log(user);
user.getName()