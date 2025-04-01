let write = document.getElementById('write')
let toDoList = document.getElementById('todo-list')

write.addEventListener('keyup', (e) => {
  if (e.key == 'Enter') {
    addTodo(e.target.value)
    e.target.value = ''
  }
})

function addTodo(value) {
  let list = document.createElement('li')
  list.innerHTML = `${value}`
  toDoList.appendChild(list)
  console.log(value)

  list.addEventListener('click', function () {
    this.classList.toggle('done')
  })
}
