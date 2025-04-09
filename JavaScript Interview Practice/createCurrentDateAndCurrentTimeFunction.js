//Create a function that display the current date and time in specific format.

function getCurrentDateAndTime() {
  let date = new Date()
  let day = date.getDate()
  let month = date.getMonth()
  let year = date.getFullYear()
  let hour = date.getHours()
  let minute = date.getMinutes()
  let second = date.getSeconds()
  console.log(`${day}/${month}/${year}//${hour}:${minute}:${second}`)
}

getCurrentDateAndTime()
