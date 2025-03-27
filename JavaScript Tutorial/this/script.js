//this keyword 

let obj = {
  fName: 'Mohit',
  age: 20,
  fun: function (){
    console.log(this.fName);
    
  }
}

obj.fun()