let myList = document.querySelector('.myList')

myList.addEventListener('click', (e) => {
  let clickedElement = e.target.textContent
  console.log(`You clicked on ${clickedElement}`)
})
