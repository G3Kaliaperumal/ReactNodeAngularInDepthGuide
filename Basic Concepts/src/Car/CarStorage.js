class CarStorage {
  cars = [];

  constructor(cars) {
    this.cars = cars || []; // [] in case of undefined value
  }

  addCar(car) {
    this.cars.push(car);
  }

  removeCar() {

  }

  listCars() {
    if (0 === this.cars.length) {
      console.log('No cars to display. Please add!');
      return;
    }

    this.cars.forEach(function(car) {
      car.displayCarInfo();
    });
  }
}

module.exports = CarStorage;
