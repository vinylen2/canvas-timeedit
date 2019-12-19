const axios = require('axios');

const URL = 'https://cloud.timeedit.net/ltu/web/schedule1/ri1YQ25Yy06Z47Q3g55Y50595605Q3g6764Z640QX170.json';

module.exports = axios.create({
  baseURL: URL,
  withCredentials: true,
});
