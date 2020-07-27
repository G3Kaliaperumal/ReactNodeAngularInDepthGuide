const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const router = require('./routes/rentals')
const config = require('./config/dev')
const Rental = require('./models/rentals')

const app = express();
const PORT = process.env.PORT || 3001;

// Replace <password> with the actual password
mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => {
  console.log('Success');
});

app.use(bodyParser.json())
app.use('/api/v1/rentals', router);

app.listen(PORT, () => {
  console.log('Server is listening to the port: ', PORT);
});
