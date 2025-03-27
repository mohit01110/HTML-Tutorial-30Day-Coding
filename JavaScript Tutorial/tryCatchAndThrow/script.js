//Try Catch and Throw
function d(a, b) {
  try {
    if (b == 0) {
      throw new Error('Cannot divide by zero')
    } else {
      console.log(a / b)
    }
  } catch (error) {
    console.log(error.message)
  }
}

d(10, 0)
