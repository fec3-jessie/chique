const express = require('express');
const { url, token } = require('./config.js');
const router = require('express').Router();
const path = require('path');
const atelierAPI = require('./helpers/atelierAPI.js');
const axios = require('axios');
const cors = require('cors');
const app = express();

const headers = {
  'Authorization': token
};

// Middleware
app.use(express.static(path.join(__dirname, '..', 'client/dist')));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routing

// ---------- API GET REQUESTS ---------- //
// ----- Products ----- //
app.get('/products', (req, res) => {
  axiosGet(req.url, res);
});

app.get('/products/:product_id', (req, res) => {
  axiosGet(req.url, res);
});

app.get('/products/:product_id/styles', (req, res) => {
  axiosGet(req.url, res);
});

app.get('/products/:product_id/related', (req, res) => {
  axiosGet(req.url, res);
});

// ----- Reviews -----//
app.get('/reviews', (req, res) => {
  axiosGet(req.url, res);
});

app.get('/reviews/meta', (req, res) => {
  axiosGet(req.url, res);
});

// ----- Questions ----- //
app.get('/qa/questions', (req, res) => {
  axiosGet(req.url, res);
})
// ---------- END OF GET REQUESTS ---------- //

// Helper Function
const axiosGet = (path, response) => {
  axios.get(`${url}${path}`, { headers })
    .then(results => { response.send(results.data); })
    .catch(err => console.error('Error executing Axios GET from API: ', err))
}

app.listen(3000, () => {
  console.log('Server listening on port 3000...')
});