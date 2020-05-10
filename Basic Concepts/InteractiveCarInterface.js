const Car = require('./src/Car/Car');
const RacingCar = require('./src/Car/RacingCar');
const CarStorage = require('./src/Car/CarStorage');
const CarManager = require('./src/Car/CarManager');
const readline = require('readline-sync');
const emoji = require('node-emoji');

function runApp() {
  function displayOptions() {
    console.log('Press "1" to add a car');
    console.log('Press "2" to remove a car');
    console.log('Press "3" to list all the cars');
    console.log('Type "exit" to quit the program');
  }

  const carStorage = new CarStorage();
  const carManager = new CarManager();

  let appRunning = true;
  displayOptions();
  while(appRunning) {
    let userOption = readline.question('Please enter your option:-').toLowerCase();
        
    switch(userOption) {
      case '1':
        const newCar = carManager.createCar();
        carStorage.addCar(newCar);
        break;
      case '2':
        const carId = carManager.askQuestion('Provide car Id: ');
        carStorage.removeCar(carId);
        break;
      case '3':
        carStorage.listCars();
        break;
      case 'exit':
        console.log(emoji.emojify('GOOD BYE! :wave:'));
        appRunning = false;
        break;
      default:
        console.log('Invalid Options');
    }
  }
}

runApp();
