const axios = require('axios');

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8085',
});

module.exports = axiosInstance;
