const Car = require('./src/Car/Car');
const RacingCar = require('./src/Car/RacingCar');
const readline = require('readline-sync');

const iterator = require('./lib/CustomIterator');

function runApp(){
    // Array
    const carBrands = [
        'Mercedes',
        'Ford'
    ];
    carBrands.push('Mitsubishi');

    // Non-Parameterized constructor
    const car1 = new Car();
    car1.brand = carBrands[1];
    car1.type = 'Freestyle';
    car1.produceYear = 2019;

    // Parameterized constructor
    const car2 = new Car(carBrands[2], 'Lancer', 2010);

    // Prototypes
    console.log('PROTOTYPE PROPERTY:-');
    console.log(Car.prototype === car1.__proto__);
    console.log(Car.prototype === car2.__proto__);

    const racingCar = new RacingCar('k1', carBrands[0], 'Benz', 1990);
    const cars = [car1, car2, racingCar];
    
    // Usage of forEach
    console.log('FOR EACH FUNCTION:-');
    cars.forEach(function(car){
        car.displayCarInfo();
    });

    // Usage of map function
    console.log('MAP FUNCTION:-');
    const carTypes = cars.map(function(car){
        return car.type;
    });
    console.log(carTypes);

    // Usage of filter function
    console.log('FILTER FUNCTION:-');
    const fordCars = cars.filter(function(car){
        return carBrands[1] == car.brand;
    });
    console.log(fordCars);

    // Custom Iteration method
    console.log('CUSTOM ITERATORS:-')
    iterator.forEach(cars);

    // Using readline-sync
    console.log('READLINE-SYNC:-');
    let userName = readline.question('Your name pls?');
    console.log(userName);
}

runApp();
