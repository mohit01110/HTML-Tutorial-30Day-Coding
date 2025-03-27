//Callback function

function fun(val){
  console.log(val);
  
}
function add( a,b,callback){
  let sum = a + b
  callback(sum)
}

add(10,20,fun)