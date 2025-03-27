//new keyword

function fun() {
  let fname = 'John'
  this.fname = fname
}

let obj = new fun()
console.log(obj.fname)
