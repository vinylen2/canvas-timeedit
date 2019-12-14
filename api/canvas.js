const axios = require('axios');
const config = require('../config.json');

const URL = 'https://ltu.instructure.com/api/v1/';

module.exports = axios.create({
  baseURL: URL,
  headers: {
    Authorization: config.token
  }
});
