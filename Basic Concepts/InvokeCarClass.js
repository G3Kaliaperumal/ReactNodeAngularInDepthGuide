const Car = require('./Car');

function runApp(){
    // Array
    const carBrands = [
        'Mercedes',
        'Ford'
    ];
    carBrands.push('Mitsubishi');

    // Non-Parameterized constructor
    const car = new Car();
    car.brand = carBrands[1];
    car.type = 'Freestyle';
    car.produceYear = 2019;
    car.displayCarInfo();

    // Parameterized constructor
    const car2 = new Car(carBrands[2], 'Lancer', 2010);
    car2.displayCarInfo();

    // Prototypes
    console.log(Car.prototype === car.__proto__);
    console.log(Car.prototype === car2.__proto__);
}

runApp();
