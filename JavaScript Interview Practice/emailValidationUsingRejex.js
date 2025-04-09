//Validate a email using rejex

let emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
function validate(email) {
  return emailRegex.test(email)
}

const email = 'N9oVZ@example.com'

console.log(validate(email))
