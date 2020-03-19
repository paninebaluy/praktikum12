const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./router');

const { PORT = 3000 } = process.env;
const app = express();

app.use(bodyParser.json()); // parsing data as JSON
app.use(bodyParser.urlencoded({ extended: true })); // accepting various file types in POST requests
app.use(express.static(path.join(__dirname, 'public'))); // serve static files from public dir

// app uses routing described in a a separate module
app.use('/', router);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
