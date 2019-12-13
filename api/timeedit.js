const axios = require('axios');

const URL = 'https://cloud.timeedit.net/ltu/web/schedule1/ri1YQ25Yy06Z47Q3g05Y65595607Q3g5765Z660QX170.json';

module.exports = axios.create({
  baseURL: URL,
  withCredentials: true,
});
