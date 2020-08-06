const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/dev');

// Routes
const rentalRoutes = require('./routes/rentals');
const userRoutes = require('./routes/users');

// Models
require('./models/rentals');
require('./models/user');

const app = express();
const PORT = process.env.PORT || 3001;

// Replace <password> with the actual password
mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}, () => {
  console.log('Success');
});

// Middleware
app.use(bodyParser.json());
app.use((req, res, next) => {
  console.log('Hello World!');
  next();
});

app.use('/api/v1/rentals', rentalRoutes);
app.use('/api/v1/users', userRoutes);

app.listen(PORT, () => {
  console.log('Server is listening to the port: ', PORT);
});
