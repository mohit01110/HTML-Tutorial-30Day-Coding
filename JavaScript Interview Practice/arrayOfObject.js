//Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number.

function calculateTotalPrice(groceries) {
  let totalPrice = 0

  for (let i = 0; i < groceries.length; i++) {
    totalPrice += groceries[i].price
  }

  return totalPrice
  
}


console.log(
  calculateTotalPrice([
    {
      name: 'Eggs',
      price: 200,
    },
    {
      name: 'Milk',
      price: 200,
    },
    {
      name: 'Fish',
      price: 400,
    },
    {
      name: 'Apples',
      price: 150,
    },
    {
      name: 'Bread',
      price: 50,
    },
    {
      name: 'Chicken',
      price: 550,
    },
  ])
)
