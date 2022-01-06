const express = require('express');
const { url, token } = require('./config.js');
const path = require('path');
const axios = require('axios');
const cors = require('cors');
const app = express();

const headers = {
  'Authorization': token
};

// const postHeaders = {
//   'Authorization': token,
//   'Content-Type': 'application/json'
// };

// Middleware
app.use(express.static(path.join(__dirname, '..', 'client/dist')));
app.use(cors());
app.use(express.json());
// app.use(upload.array());
app.use(express.urlencoded({ extended: true }));


// ----- HELPER FUNCTIONS ----- //
const axiosGet = (path, response) => {
  axios.get(`${url}${path}`, { headers })
    .then(results => { response.send(results.data); })
    .catch(err => console.error('Error executing Axios GET from API: ', err));
};

const axiosPut = (path, body) => {
  axios.put(`${url}${path}`, body, { headers })
    .catch(err => console.error('Error submitting PUT req (server.js): ', err));
};

const axiosPost = (path, body, res) => {
  axios.post(`${url}${path}`, body, { headers })
    .then(() => res.status(201).send('success'))
    .catch(err => console.error('Error completing POST req (server.js): ', err));
};
// ----- END OF HELPER FUNCTIONS ----- //


// ---------- API GET REQUESTS ---------- //
/* ----- Products ----- */
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

/* ----- Reviews ----- */
app.get('/reviews', (req, res) => {
  axiosGet(req.url, res);
});

app.get('/reviews/meta', (req, res) => {
  axiosGet(req.url, res);
});


/* ----- Questions ----- */
app.get('/qa/questions', (req, res) => {
  axiosGet(req.url, res);
});
// ---------- END OF GET REQUESTS ---------- //


// ---------- API PUT REQUESTS ---------- //
/* ----- Questions & Answers ----- */
app.put('/qa/questions/:question_id/helpful', (req, res) => {
  axiosPut(req.url, req.body);
});

app.put('/qa/answers/:answer_id/helpful', (req, res) => {
  axiosPut(req.url, req.body);
});

app.put('/qa/questions/:question_id/report', (req, res) => {
  axiosPut(req.url, req.body);
});

app.put('/qa/answers/:answer_id/report', (req, res) => {
  axiosPut(req.url, req.body);
});
/* ----- Ratings ----- */
app.put('/reviews/:review_id/report', (req, res) => {
  axiosPut(req.url, req.body);
});
app.put('/reviews/:review_id/helpful', (req, res) => {
  axiosPut(req.url, req.body);
});
// ---------- END OF PUT REQUESTS ---------- //


// ---------- API POST REQUESTS ---------- //
/* ----- Reviews ----- */
app.post('/reviews', (req, res) => {
  axiosPost(req.url, req.body, res);
});

/* ----- Change Requests ----- */

app.post('/interactions', (req, res) => {
  axiosPost(req.url, req.body, res);

});

/* ----- Questions & Answers ----- */
app.post('/qa/questions', (req, res) => {
  axiosPost(req.url, req.body, res);
});

app.post('/qa/questions/:question_id/answers', (req, res) => {
  axiosPost(req.url, req.body, res);
});
// ---------- END OF POST REQUESTS ---------- //


app.listen(3000, () => {
  console.log('Server listening on port 3000...');
});