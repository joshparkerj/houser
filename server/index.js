const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
const massive = require('massive');
const dotenv = require('dotenv').config();


const app = express();
app.use(bodyParser.json());

massive(process.env.DBURI)
  .then(db => {
    app.set('db',db);
  })
  .catch(err => {
    console.log(err);
  })

app.get('/health', (req,res) => {
  res.send('ok');
})

app.listen(8080);