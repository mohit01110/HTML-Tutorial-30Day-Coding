let body = document.querySelector('body')
let div = document.querySelector('div')
let span = document.querySelector('span')
let btn = document.querySelector('.btn')

body.addEventListener('click', () => {
  console.log('Body clicked')
})
div.addEventListener('click', () => {
  console.log('Div clicked')
})

span.addEventListener('click', () => {
  console.log('Span clicked')
})

btn.addEventListener('click', (event) => {
  console.log('Button clicked')
  event.stopPropagation()
})
