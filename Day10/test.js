class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }
}

class Car extends Vehicle {
  constructor(brand, speed) {
    // your code here
    super(brand)
    this.speed=speed
  }

  show() {
    // print brand & speed
    console.log(`car brand ${this.brand} card speed ${this.speed}`)
  }
 
}

const car=new Car("Bmw",200)

car.show()
car.fn()
