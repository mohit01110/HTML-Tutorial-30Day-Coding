function Product(name, price, quantity) {
  this.name = name
  this.price = price
  this.quantity = quantity
}

Product.prototype.calculateTotalValue = function () {
  return this.price * this.quantity
}

//product 1
const product1 = new Product('Laptop', 50000, 5)
let totalValue = product1.calculateTotalValue()

//product 2
let product2 = new Product('Mobile', 10000, 10)
let totalValue2 = product2.calculateTotalValue()

console.log(`Total value of ${product1.name} is ${totalValue}`)
console.log(`Total value of ${product2.name} is ${totalValue2}`)
