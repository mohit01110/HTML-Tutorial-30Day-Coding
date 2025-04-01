//Parent element selector
let parent = document.querySelector('ul')
let p = parent.parentElement
console.log(p)

//PreviousElementSibling
let prev = parent.previousElementSibling
console.log(prev)

//children
let children = parent.children
console.log(children)

//childNode
let childNode = parent.childNodes
console.log(childNode)

//siblings
let item3 = document.querySelector('.item3')
let siblings = item3.nextElementSibling
console.log(siblings)

//previousSibiling
let prevSibiling = item3.previousElementSibling
console.log(prevSibiling)

//previousElementSibiling
let prevElementSib = document.querySelectorAll('.item3')
prevElementSib.forEach((item) => {
  console.log(item.previousElementSibling)
})

//AppendChild
let ul = document.querySelector('ul')
let newEle = document.createElement('li')
newEle.textContent = 'Item 6'
ul.appendChild(newEle)
