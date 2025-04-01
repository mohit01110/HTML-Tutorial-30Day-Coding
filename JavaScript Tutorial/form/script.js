let input = document.getElementById('input')

function onfun() {
  input.style.backgroundColor = 'red'
}

function offfun() {
  input.style.backgroundColor = 'white'
}

function funsubmit(e) {
  alert(`Your email is ${input.value}`)
}
