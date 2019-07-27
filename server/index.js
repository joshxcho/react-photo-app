require('dotenv').config();
const request = require('request');

const express = require('express');

const config = require('../config');

const app = express();

app.set('port', config.port);

app.use(express.static('public/'));
app.use(express.static('client/dist'));

app.get('/api', (req, res) => {
  const url = process.env.URL;
  const photoEndpoint = 'photos/?client_id=';
  const apiKey = process.env.API_ACCESS_KEY;
  const fullUrl = `${url}${photoEndpoint}${apiKey}`;

  request(fullUrl, (error, response, body) => {
    if (error) {
      res.status(400).send(error);
    }
    res.status(200).send(body);
  });
});

app.listen(app.get('port'), () => console.log(`Listening at ${app.get('port')}!`));
