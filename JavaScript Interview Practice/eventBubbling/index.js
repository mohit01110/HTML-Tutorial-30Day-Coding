let parent = document.querySelector('div')
let child = document.querySelector('strong')

parent.addEventListener(
  'click',
  () => {
    console.log('parent clicked')
  },
  true
)

child.addEventListener(
  'click',
  () => {
    console.log('child clicked')
  },
  true
)
