//function inside function

function fun(){
  console.log('i am function 1');
  function fun2(){
    console.log('i am function 2');
    
  }
  fun2();
}

fun();
