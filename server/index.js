const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
const massive = require('massive');
const dotenv = require('dotenv').config();
const cors = require('cors');


const app = express();
app.use(bodyParser.json());
app.use(cors({origin: ['http://localhost:3000']}));

massive(process.env.DBURI)
  .then(db => {
    app.set('db',db);
  })
  .catch(err => {
    console.log(err);
  })

app.get('/health', controller.getHealth);

app.get('/houses', controller.getHouses);

app.post('/house', controller.postHouse);

app.delete('/house/:id', controller.deleteHouse);

app.listen(8080);