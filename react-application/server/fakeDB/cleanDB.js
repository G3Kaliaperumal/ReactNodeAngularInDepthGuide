const mongoose = require('mongoose');
const config = require('../config/dev');
const FakeDB = require('./FakeDB');

mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}, async () => {
  const fakeDB = new FakeDB();
  console.log('Starting FakeDB population!');
  await fakeDB.popuate();
  await mongoose.connection.close();
  console.log('DB populated successfully!');
});
