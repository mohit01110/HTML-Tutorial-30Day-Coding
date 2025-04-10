//Create an object 'person' with properties like name and age. Then, create a new object 'students' that inherits from 'person' and has an additional property 'studentId'. Add a method to the 'person' object and demonstrate that 'student' also has access to it.

let person = {
  name: 'Mohit',
  age: 23,

  introduce: function () {
    return `My name is ${this.name} and I am ${this.age} years old.`
  },
}

let student = Object.create(person)
student.studentId = 123

console.log(student.name)
console.log(student.age)
console.log(student.studentId)

console.log(student.introduce())
