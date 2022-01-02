const express = require('express');
const { url, token } = require('./config.js');
const router = require('express').Router();
const path = require('path');
const axios = require('axios');
const app = express();
const cors = require('cors');

const headers = {
  'Authorization': token
};

// Middleware
app.use(cors());
// Routing

app.use(express.static(path.join(__dirname, '..', 'client/dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//Products API//
app.get('/products', (req, res) => {
  axios.get(`${url}/products`, {
    headers: headers
  })
    .then(results => {
      res.send(results.data);
      console.log('data sent');
    })
    .catch(err => console.error('Improper request', err));
});

app.get('/products/:product_id', (req, res) => {
  axios.get(`${url}/products/${req.params.product_id}`, {
    headers: headers
  })
    .then(results => {
      res.send(results.data);
      console.log('data sent');
    })
    .catch(err => console.error('Improper request', err));
});

app.get('/products/:product_id/styles', (req, res) => {
  axios.get(`${url}/products/${req.params.product_id}/styles`, {
    headers: headers
  })
    .then(results => {
      res.send(results.data);
      console.log('data sent');
    })
    .catch(err => console.error('Improper request', err));
});

app.get('/products/:product_id/related', (req, res) => {
  axios.get(`${url}/products/${req.params.product_id}/related`, {
    headers: headers
  })
    .then(results => {
      res.send(results.data);
      console.log('data sent');
    })
    .catch(err => console.error('Improper request', err));
});

// Reviews API//
// `http://127.0.0.1:3000/reviews?product_id=${product_Id}&count=50&sort=relevant`

app.get('/reviews', (req, res) => {
  axios.get(`${url}/reviews?product_id=${req.query.product_id}&count=50&sort=${req.query.sort}`, {
    headers: headers
  })
    .then(results => {
      res.send(results.data);
      console.log('data sent');
    })
    .catch(err => console.error('Improper request', err));
});

app.get('/reviews/meta', (req, res) => {
  axios.get(`${url}/reviews/meta?product_id=${req.query.product_id}`, {
    headers: headers
  })
    .then(results => {
      res.send(results.data);
      console.log('data sent');
    })
    .catch(err => console.error('Improper request', err));
});

app.get('/qa/questions', (req, res) => {
  axios.get(`${url}/qa/questions?product_id=${req.query.product_id}`, {
    headers: headers
  })
    .then(results => {
      res.send(results.data);
      console.log('data sent');
    })
    .catch(err => console.error('Improper request', err));
});

app.post('/reviews', (req, res) => {
  axios.post(`${url}/reviews?product_id=${req.query.product_id}`, req.body, {
    headers: headers
  })
    .then(results => {
      res.send(results.data);
      console.log('post data sent');
    })
    .catch(err => console.error('Improper request', err));
});







app.listen(3000, () => {
  console.log('Server listening on port 3000...');
});