const Car = require('./Car');

function runApp(){
    // Non-Parameterized constructor
    const car = new Car();
    car.brand = 'Ford';
    car.type = 'Freestyle';
    car.produceYear = 2019;
    car.displayCarInfo();

    // Parameterized constructor
    const car2 = new Car('Ford', 'Figo', 2010);
    car2.displayCarInfo();

    // Prototypes
    console.log(Car.prototype === car.__proto__);
    console.log(Car.prototype === car2.__proto__);
}

runApp();
