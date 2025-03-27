//lexical scope

function fun() {
  var a = 1
  console.log('This is Function : ' + a)
  function fun2() {
    var a = 2
    console.log('This is Inner Function : ' + a)
  }
  fun2()
}
fun()
