const Car = require('./src/Car/Car');
const RacingCar = require('./src/Car/RacingCar');
const CarStorage = require('./src/Car/CarStorage');
const CarManager = require('./src/Car/CarManager');
const iterator = require('./lib/CustomIterator');
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
        newCar.setCarDate();
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

// runApp();

// To map the async methods (i.e.) to make the async methods to run as sync you can use 'async' and 'await' methods
// Observe the output before and after
async function runTestApp() {
  // Different ways to fetch data from async calls
  // Method 1: callback functions
  const dbData1 = await iterator.getMethod1DBdata((data) => {
    console.log('Method 1:- Async data after timeout: ' + data);
    return data;
  });

  // Method 2: Using Promise. Multiple then() can be defined
  const dbData2 = await iterator.getMethod2DBdata()
    .then((data) => {
      console.log('Method 2:- Async data after timeout: ' + data);
      return data;
    })
    .catch((errorMessage) => {
      console.log(errorMessage);
      return errorMessage;
    });

  console.log('Method 1:- Async data before timeout: ' + dbData1);
  console.log('Method 2:- Async data before timeout: ' + dbData2);
}

// runTestApp();

function runTestApp2() {
  // 1st callback - success function; 2nd - error fn; 3rd - when the observer is completed
  iterator.getMethod3DBdata().subscribe((data) => {
      console.log(data);
    }, (error) => {
      console.log('ERROR');
    }, () => {
      console.log('Observer is completed');
  });

  console.log('runTestApp2 - Execution of last line');
}

runTestApp2();

