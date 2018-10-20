const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
const app = express();

app.get('/health', (req,res) => {
  res.send('ok');
})

app.listen(8080);