const readline = require('readline-sync');
const Car = require('./Car');

class CarManager {
  
  askQuestion(question) {
    let answer = readline.question(question);

    if(!answer)
      answer = this.askQuestion(question);

    return answer;
  }
  createCar() {
    const brand = this.askQuestion('Brand of the car: ');
    const type = this.askQuestion('Type of the car: ');
    const produceYear = this.askQuestion('Produce year of the year: ');

    return new Car(brand, type, parseInt(produceYear, 10));
  }
}

module.exports = CarManager;
