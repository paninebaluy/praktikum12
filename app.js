const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const { PORT = 3000, BASE_PATH } = process.env;
const app = express();

app.use(bodyParser.json()); // parsing data as JSON
app.use(bodyParser.urlencoded({ extended: true })); // accepting various file types in POST requests
app.use(express.static(path.join(__dirname, 'public'))); // serve static files from public dir

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log(BASE_PATH);
});
