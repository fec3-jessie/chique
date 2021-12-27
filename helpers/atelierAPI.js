const axios = require('axios');
const config = require('../config.js');

const host = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';
const headers = {
  'User-Agent': 'request',
  'Authorization': `token ${config.TOKEN}`
};

var getDataByPath = (path) => {
  let options = {
    url: host + path,
    headers: headers
  }

  return axios.get(options.url, options);
};

var postDataByPath = (path, data) => {
  let options = {
    url: host + path,
    headers: headers
  }

  return axios.post(options.url, data, options);
};

var putDataByPath = (path, data) => {
  let options = {
    url: host + path,
    headers: headers
  }

  return axios.put(options.url, data, options);
};

module.exports = {
  getDataByPath,
  postDataByPath,
  putDataByPath
};
