const Car = require('./Car');

class RacingCar extends Car {
    category = '';

    constructor(category, ...args) {
        super(...args);
        this.category = category;
    }

    displayCarInfo() {
        super.displayCarInfo(this.category);
    }
}

// Reference Material: https://www.tutorialsteacher.com/nodejs/nodejs-module-exports
module.exports = RacingCar;
