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
      res.status(500).send(error);
    }
    res.status(200).send(body);
  });
});

app.get('/api/user', (req, res) => {
  const username = req.headers.url;
  const url = process.env.URL;
  const userEndpoint = `users/${username}/photos/?client_id=`;
  const apiKey = process.env.API_ACCESS_KEY;
  const userUrl = `${url}${userEndpoint}${apiKey}`;

  request(userUrl, (error, response, body) => {
    if (error) {
      res.status(500).send(error);
    }
    res.status(200).send(body);
  });
});

app.listen(app.get('port'), () => console.log(`Listening at ${app.get('port')}!`));
