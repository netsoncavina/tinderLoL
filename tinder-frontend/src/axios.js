const axios = require("axios");

const instance = axios.create({
  baseURL: "https://localhost:3000",
});

module.exports = instance;
