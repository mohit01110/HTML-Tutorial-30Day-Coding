//Crete a car object with the following properties and add method to the car object to start the engine

let car = {
  make: 'Mahindra',
  model: 'TUV300',
  year: 2010,
  startEngine: function () {
    console.log('Engine started')
  }
}

car.startEngine()