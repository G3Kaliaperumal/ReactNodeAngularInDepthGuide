const { users, rentals } = require('./data/index');
const Rental = require('../models/rentals');
const User = require('../models/user');
const user = require('../models/user');

class FakeDB {
  async clean() {
    await Rental.deleteMany({});
    await User.deleteMany({});
  }

  async addData() {
    await Rental.create(rentals);
    await User.create(users);
  }

  async popuate() {
    await this.clean();
    await this.addData();
  }
}

module.exports = FakeDB;
