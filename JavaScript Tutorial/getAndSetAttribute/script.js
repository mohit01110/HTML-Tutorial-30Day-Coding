let hero1 = document.getElementById('#hero')
let text = hero1.getAttribute('data-text')
console.log(text)


hero1.setAttribute('eample', 123)
console.log(hero1.outerHTML);


for(let att of hero1.attributes){
  console.log(att);
}