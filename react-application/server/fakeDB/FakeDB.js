const rentals = require('./data/rentals');
const Rental = require('../models/rentals');

class FakeDB {
  clean() {
    return Rental.deleteMany({});
  }

  addData() {
    return Rental.create(rentals);
  }

  async popuate() {
    await this.clean();
    await this.addData();
  }
}

module.exports = FakeDB;
