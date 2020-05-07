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

module.exports = Car;
