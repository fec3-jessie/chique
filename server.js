// import express from 'express';
// import { token } from './config.js';
// const router = require('express').Router();

// const app = express();

// const headers = {
//   'Authorization': token
// };

// // Middleware

// // Routing


// app.listen(3000, () => {
//   console.log('Server listening on port 3000...')
// });
// const express = require('express');
// const path = require('path');
// const PORT = process.env.PORT || 3000;
// const atelierAPI = require('./helpers/atelierAPI.js');

// const app = express();

// app.use(express.static(path.join(__dirname, '..', 'client/dist')));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.listen(PORT, () => {
//   console.log(`Listening on port ${PORT}...`)
// });

// app.get('/qa/questions/:product_id', (req, res) => {
//   atelierAPI.getDataByPath('/qa/questions/:product_id')
//     .then(returnedData => {
//       console.log('Returned Data: ', returnedData.data);
//       res.send(returnedData.data);
//     })
//     .catch(err => console.error('Improper request'))
// })


