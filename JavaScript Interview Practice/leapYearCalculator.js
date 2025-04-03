//Write a program to check whear a given year is a leap year or not?

function leapYearFunction(year) {
  if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
    console.log(`${year} is a leap year`)
  } else {
    console.log(`${year} is not a leap year`)
  }
}

leapYearFunction(2015)
