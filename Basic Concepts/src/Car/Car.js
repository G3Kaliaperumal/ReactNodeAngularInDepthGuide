class Car {
    brand = '';
    type = '';
    produceYear = null;
    id = null;

    constructor(brand, type, produceYear) {
        this.brand = brand;
        this.type = type;
        this.produceYear = produceYear;
        this.id = '_' + Math.random().toString(36).substr(2, 9); // Base 36
    }

    displayCarInfo(category) {
        console.log(`${this.id}:- Brand name: ${this.brand}, Type: ${this.type}, Year: ${this.produceYear}`
        + (undefined !== category ? `, Category: ${category}` : ``));
    }
}

// Reference Material: https://www.tutorialsteacher.com/nodejs/nodejs-module-exports
module.exports = Car;
