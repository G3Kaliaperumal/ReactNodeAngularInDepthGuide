const Car = require('./src/Car/Car');
const RacingCar = require('./src/Car/RacingCar');
const readline = require('readline-sync');
const emoji = require('node-emoji');

function runApp() {
    function displayOptions() {
        console.log('Press "1" to add a car');
        console.log('Press "2" to remove a car');
        console.log('Press "3" to list all the cars');
        console.log('Type "exit" to quit the program');
    }

    const cars = [];

    let appRunning = true;
    displayOptions();
    while(appRunning) {
        let userOption = readline.question('Please enter your option:-').toLowerCase();
        if ('1' === userOption) {
            console.log('Adding cars');
        } else if ('2' === userOption) {
            console.log('Removing cars');
        } else if ('3' === userOption) {
            if (0 != cars.length) {
                cars.forEach(function(car) {
                    car.displayCarInfo();
                });
            } else {
                console.log('No cars to display. Please add!');
            }
        } else if ('exit' === userOption) {
            console.log(emoji.emojify('GOOD BYE! :wave:'));
            appRunning = false;
        } else {
            console.log('Invalid Options');
        }
    }
}

runApp();
