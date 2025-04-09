function validateForm() {
  let form = document.getElementById('myForm')
  if (form.checkValidity()) {
    alert('Form is submitted')
  } else {
    alert('Form is not submitted')
  }
}

let form = document.getElementById('myForm')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  validateForm()
})
