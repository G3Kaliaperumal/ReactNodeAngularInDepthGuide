const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/rentals')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json())
app.use('/api/v1/rentals', router);

app.listen(PORT, () => {
  console.log('Server is listening to the port: ', PORT);
});
