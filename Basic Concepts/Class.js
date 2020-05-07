class Car {
    brand = '';
    type = '';
    produceYear = null;

    constructor(brand, type, produceYear) {
        this.brand = brand;
        this.type = type;
        this.produceYear = produceYear;
    }

    displayCarInfo() {
        console.log(`Brand name: ${this.brand}, Type: ${this.type}, Year: ${this.produceYear}`);
    }
}

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
}

runApp();