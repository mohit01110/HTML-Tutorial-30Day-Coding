//Maps

let map1 = new Map([
  [1, 'one'],
  [2, 'two'],
  ["3", 'three'],
  [0, 1, 2, 3, 4],
])
console.log(map1.get(1));
console.log(map1.get('3'));
let k = map1.keys();

for(let i of k){
  console.log(i);
}

console.log(map1);


let map2 = new Map();
map2.set('fname', 'Mohit')
console.log(map2);

