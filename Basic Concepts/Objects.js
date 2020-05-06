var car = {
    brand: "",
    type: "",
    produceYear: "",
    displayCarInfo: function() {
        console.log(`Brand name: ${this.brand}, Type: ${this.type}, Year: ${this.produceYear}`);
    },
    nestedFunction: function() {
        console.log('NESTED FUNCTION');
        return function() {
            console.log('RETURNS FUNCTION');
        };
    }
};

car.brand = 'Mercedes';
car.type = 'Benz';
car.produceYear = '1990';
car.displayCarInfo();
// Observe the difference between nestedFunction() and nestedFunction()()
car.nestedFunction();
car.nestedFunction()();

car['brand'] = 'Mitchibishi';
car['type'] = 'Lancer';
car['produceYear'] = '2000';
car['displayCarInfo']();