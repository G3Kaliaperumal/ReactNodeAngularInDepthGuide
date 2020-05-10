class CarStorage {
  cars = [];

  constructor(cars) {
    this.cars = cars || []; // [] in case of undefined value
  }

  addCar(car) {
    this.cars.push(car);
  }

  removeCar(carId) {
    const carIndex = this.cars.findIndex(function(car) {
      return car.id === carId;
    });

    if (carIndex === -1) {
      console.log('Invalid id!');
      return;
    }
    
    this.cars.splice(carIndex, 1);
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
