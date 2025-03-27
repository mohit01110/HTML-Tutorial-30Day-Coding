//implicity type conversion
result = '3' + 2
console.log(result);
console.log(typeof result);

result = '3' + "hello"
console.log(result)
console.log(typeof result)

result = '4' + true
console.log(result)
console.log(typeof result)

result = '5' + undefined
console.log(result)
console.log(typeof result)

result = '6' + null
console.log(result)
console.log(typeof result)

result = '2' - 1;
console.log(result)
console.log(typeof result)

result = '2' - true
console.log(result)
console.log(typeof result)

result = '3' - undefined
console.log(result)
console.log(typeof result)

 //explict type conversion
 result = '3'
 result = Number(result)
 console.log(typeof result); 
 