//Create a function that takes the month and year (as integers) and return the number of days in that month.

function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate()
}

console.log(daysInMonth(9, 1993))
