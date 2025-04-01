let body = document.querySelector('body')
let div = document.querySelector('div')
let span = document.querySelector('span')
let btn = document.querySelector('.btn')

div.addEventListener('click', (event) => {
  if (event.target.tagName == 'BUTTON') {
    console.log('Button Clicked')
  } else if (event.target.tagName == 'DIV') {
    console.log('Div Clicked')
  } else if (event.target.tagName == 'SPAN') {
    console.log('Span Clicked')
  } else {
    console.log('Body Clicked')
  }
})
